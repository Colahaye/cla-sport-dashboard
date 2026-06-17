#!/usr/bin/env python3
"""
sync_intervals.py — CLA Sport Dashboard
Synchronise activites ET seances planifiees depuis Intervals.icu -> sport_data.js

Activites passees  : fetch /activities (source=intervals_icu)
Seances planifiees : fetch /events tag [CLA] -> remplace TOUJOURS les plan_generated
                     Source de verite = Intervals.icu (via push_workouts.py)

Usage :
  python sync_intervals.py           # 90 derniers jours + 60 jours a venir
  python sync_intervals.py --days 30
  python sync_intervals.py --all
"""

import json, os, re, sys, requests
from datetime import datetime, timedelta, timezone, date as _date
from pathlib import Path

HERE       = Path(__file__).parent
config_path = HERE / "config.json"
config     = json.loads(config_path.read_text()) if config_path.exists() else {"intervals_icu": {"athlete_id": "", "api_key": ""}, "sync": {}}

ATHLETE_ID = os.environ.get("INTERVALS_ATHLETE_ID") or config["intervals_icu"]["athlete_id"]
API_KEY    = os.environ.get("INTERVALS_API_KEY")    or config["intervals_icu"]["api_key"]
DAYS_BACK  = config["sync"].get("days_back", 90)
DAYS_AHEAD = 60
JS_PATH    = HERE / config["sync"].get("sport_data_path", "sport_data.js")
TAG        = "[CLA]"
BASE_URL   = f"https://intervals.icu/api/v1/athlete/{ATHLETE_ID}"
AUTH       = ("API_KEY", API_KEY)
HEADERS    = {"User-Agent": "cla-dashboard-sync/1.0"}  # evite les 403 Cloudflare

if "REMPLACE" in ATHLETE_ID or "REMPLACE" in API_KEY:
    sys.exit("Remplis athlete_id et api_key dans config.json")

SPORT_MAP = {
    "Ride": ("bike", "endurance"), "VirtualRide": ("bike", "indoor"),
    "Run": ("run", "easy"), "VirtualRun": ("run", "indoor"),
    "TrailRun": ("run", "trail"), "Hike": ("run", "marche"), "Walk": ("run", "marche"),
    "WeightTraining": ("strength", "renfo"), "Workout": ("strength", "renfo"),
    "Swim": ("run", "natation"), "Padel": ("strength", "padel"), "Tennis": ("strength", "padel"),
}
EVENT_SPORT_MAP = {
    "Ride": "bike", "VirtualRide": "bike", "Run": "run",
    "TrailRun": "run", "WeightTraining": "strength", "Workout": "strength",
}
TYPE_LOG_MAP = {"bike": "Velo", "run": "Course a pied", "strength": "Renforcement"}


# Bornes Coggan 7 zones en % de la FTP (haut de chaque zone, sauf Z7).
COGGAN_PCT = {"Z1": 0.55, "Z2": 0.75, "Z3": 0.90, "Z4": 1.05, "Z5": 1.20, "Z6": 1.50}


def derive_bike_power_zones(ftp):
    """FTP -> zones puissance velo. Rend la FTP source unique des zones."""
    zones, low = {}, 0
    for z in ("Z1", "Z2", "Z3", "Z4", "Z5", "Z6"):
        high = round(COGGAN_PCT[z] * ftp)
        zones[z] = [low, high]
        low = high + 1
    zones["Z7"] = [low, 999]
    return zones, [round(0.88 * ftp), round(0.93 * ftp)]  # zones, sweet_spot



def week_id(date_str):
    d = _date.fromisoformat(date_str)
    iso = d.isocalendar()
    return f"{iso[0]}-W{iso[1]:02d}"


def infer_type(name, desc=""):
    t = (name + " " + (desc or "")).lower()
    if any(k in t for k in ["vo2", "z5", "5x4", "5x4min", "interval"]):
        return "interval"
    if any(k in t for k in ["sweet spot", "sweetspot", "3x15", "3x12", "tempo", "z3", "z4", "seuil"]):
        return "tempo"
    if any(k in t for k in ["recup", "recovery", "relance", "activation", "pre-even", "z1"]):
        return "recovery"
    if any(k in t for k in ["renfo", "strength", "muscul"]):
        return "renfo"
    if any(k in t for k in ["trail", "rando"]):
        return "trail"
    return "endurance"


def infer_zone(name, desc=""):
    for z in ["Z7", "Z6", "Z5", "Z4", "Z3", "Z2", "Z1"]:
        if z in name or z in (desc or ""):
            return z
    return None


def fetch_wellness(days_back=DAYS_BACK):
    # Fenetre alignee sur celle des activites (DAYS_BACK) pour eviter les trous PMC.
    oldest = (datetime.now() - timedelta(days=days_back)).strftime("%Y-%m-%d")
    newest = datetime.now().strftime("%Y-%m-%d")
    print(f"Fetch wellness ({oldest} -> aujourd'hui)...")
    r = requests.get(f"{BASE_URL}/wellness", params={"oldest": oldest, "newest": newest}, auth=AUTH, headers=HEADERS, timeout=30)
    r.raise_for_status()
    out = {}
    for item in r.json():
        d = item.get("id")
        if not d:
            continue
        ss   = item.get("sleepSecs")
        rhr  = item.get("restingHR")
        hrv  = item.get("hrv")          # rMSSD (ms) - signal readiness n.1
        ctl  = item.get("ctl")          # Fitness calcule par Intervals.icu
        atl  = item.get("atl")          # Fatigue calcule par Intervals.icu
        if any(v is not None for v in (ss, rhr, hrv, ctl, atl, item.get("steps"))):
            out[d] = {
                "resting_hr":  rhr,
                "sleep_secs":  ss,
                "sleep_h":     round(ss / 3600, 1) if ss else None,
                "sleep_score": item.get("sleepScore"),
                "steps":       item.get("steps"),
                "hrv_ms":      round(hrv, 1) if hrv is not None else None,
                # PMC natif Intervals.icu - source de verite, evite le recalcul maison
                "ctl":         round(ctl, 1) if ctl is not None else None,
                "atl":         round(atl, 1) if atl is not None else None,
                "tsb":         round(ctl - atl, 1) if (ctl is not None and atl is not None) else None,
                # Ressentis du matin saisis dans l'app Intervals.icu
                "soreness":    item.get("soreness"),
                "fatigue":     item.get("fatigue"),
                "mood":        item.get("mood"),
            }
    print(f"   -> {len(out)} jours wellness")
    return out


def fetch_activities(days_back=DAYS_BACK, fetch_all=False):
    oldest = "2020-01-01T00:00:00" if fetch_all else \
             (datetime.now(timezone.utc) - timedelta(days=days_back)).strftime("%Y-%m-%dT%H:%M:%S")
    newest = (datetime.now(timezone.utc) + timedelta(days=1)).strftime("%Y-%m-%dT%H:%M:%S")
    print(f"Fetch activites ({oldest[:10]} -> aujourd'hui)...")
    r = requests.get(f"{BASE_URL}/activities", params={"oldest": oldest, "newest": newest}, auth=AUTH, headers=HEADERS, timeout=30)
    r.raise_for_status()
    acts = r.json()
    print(f"   -> {len(acts)} activites")
    return acts


def fetch_planned_events(days_ahead=DAYS_AHEAD):
    today  = _date.today().isoformat()
    future = (_date.today() + timedelta(days=days_ahead)).isoformat()
    print(f"Fetch events planifies [CLA] ({today} -> {future})...")
    r = requests.get(f"{BASE_URL}/events", params={"oldest": today, "newest": future}, auth=AUTH, headers=HEADERS, timeout=30)
    r.raise_for_status()
    events = [e for e in r.json() if TAG in (e.get("name") or "")]
    print(f"   -> {len(events)} events [CLA]")
    return events


def event_to_session(ev):
    name     = (ev.get("name") or "").replace(TAG + " ", "").strip()
    date_str = (ev.get("start_date_local") or "")[:10]
    if not date_str:
        return None
    sport    = EVENT_SPORT_MAP.get(ev.get("type", "Ride"), "bike")
    desc     = ev.get("description", "") or ""
    wtype    = infer_type(name, desc)
    zone     = infer_zone(name, desc)

    # Duree : priorite a moving_time calcule par Intervals.icu (fiable, persiste)
    mt = ev.get("moving_time")
    if mt:
        dur = round(mt / 60)
    else:
        m = re.search(r"Dur[eé]e pr[eé]vue\s*:\s*(\d+)\s*min", desc, re.IGNORECASE)
        if m:
            dur = int(m.group(1))
        else:
            m2 = re.search(r"(\d+)\s*min", name + " " + desc)
            dur = int(m2.group(1)) if m2 else 60

    # Detail complet conserve (etapes structurees) pour la vue analyse au clic
    full_desc = "\n".join(
        l.rstrip() for l in desc.splitlines() if TAG not in l
    ).strip()

    return {
        "id": f"{date_str}-{sport}-{wtype}",
        "date": date_str, "week_id": week_id(date_str),
        "sport": sport, "type": wtype,
        "type_log": TYPE_LOG_MAP.get(sport, sport),
        "status": "planned", "source": "plan_generated",
        "planned": {"name": name, "duration_min": dur, "description": full_desc, "primary_zone": zone},
        "executed": None, "notes": None,
    }


def activity_to_session(act):
    if act.get("commute"):
        return None
    sport, wtype = SPORT_MAP.get(act.get("type", "Workout"), ("strength", "autre"))
    date_str = act.get("start_date_local", "")[:10]
    if not date_str:
        return None
    name    = act.get("name", "Activite")
    dur_sec = act.get("moving_time") or act.get("elapsed_time") or 0
    np_w    = act.get("weighted_average_watts") or act.get("icu_weighted_average_watts")
    avg_w   = act.get("average_watts")
    kj      = act.get("kilojoules") or (act.get("calories", 0) * 0.239 if act.get("calories") else None)
    # Ressentis saisis dans Intervals.icu (app mobile) -> recuperes ici, plus de saisie locale perdue.
    rpe     = act.get("icu_rpe") or act.get("rpe")          # 1-10
    feel    = act.get("feel")                                # 1-5 (5 = excellent)
    return {
        "id": f"{date_str}-{sport}-{wtype}-{act.get('id','')}",
        "date": date_str, "week_id": week_id(date_str),
        "sport": sport, "type": wtype,
        "type_log": TYPE_LOG_MAP.get(sport, sport),
        "status": "done", "source": "intervals_icu",
        "strava_activity_name": name,
        "intervals_id": act.get("id"),
        "intervals_url": f"https://intervals.icu/activities/{act.get('id')}" if act.get("id") else None,
        "planned": None,
        "executed": {
            "duration_min": round(dur_sec / 60) if dur_sec else None,
            "np_w":  round(np_w)  if np_w  else None,
            "avg_w": round(avg_w) if avg_w else None,
            "kj":    round(kj)    if kj    else None,
            "hr_avg": round(act["average_heartrate"]) if act.get("average_heartrate") else None,
            "hr_max": round(act["max_heartrate"])     if act.get("max_heartrate")     else None,
            "tss":    round(t, 1) if (t := act.get("icu_training_load") or act.get("training_load")) else None,
            "distance_m": round(act["distance"]) if act.get("distance") else None,
            "cadence":    round(act["average_cadence"]) if act.get("average_cadence") else None,
            "subjective": {"rpe": rpe, "feel": feel, "legs": None, "mental": None, "knee_0_3": None, "ankle_0_3": None},
            "recovery":   {"sleep_raw": None, "hrv_ms": None, "body_battery": None},
            "nutrition":  {"carbs_g": None},
        },
        "notes": f"Importe depuis Intervals.icu -- {name}",
    }


def read_sport_data():
    content = JS_PATH.read_text(encoding="utf-8")
    m = re.search(r"window\.SPORT_DATA\s*=\s*(\{.*\})\s*;", content, re.DOTALL)
    if not m:
        raise ValueError("window.SPORT_DATA non trouve dans sport_data.js")
    # strict=False : tolere d'eventuels caracteres de controle bruts dans les chaines
    # (issus d'un ancien etat du fichier). La reecriture via json.dumps renettoie tout.
    return json.loads(m.group(1), strict=False), content


def write_sport_data(data, original_content):
    data["last_updated"] = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S.000Z")
    json_str = json.dumps(data, ensure_ascii=False, indent=2)
    # IMPORTANT : remplacement via lambda, sinon re.sub interprete les sequences
    # d'echappement (\n, \t...) de json_str et casse le JSON (LF bruts dans les chaines).
    new = re.sub(r"window\.SPORT_DATA\s*=\s*\{.*\}\s*;",
                 lambda _m: "window.SPORT_DATA = " + json_str + ";",
                 original_content, flags=re.DOTALL)
    JS_PATH.write_text(new, encoding="utf-8")


def sync(days_back=DAYS_BACK, fetch_all=False):
    data, original_content = read_sport_data()

    # FTP = source unique : on recalcule les zones puissance velo a chaque sync.
    ftp = (data.get("athlete") or {}).get("ftp_ref_w")
    if ftp:
        zb = data.setdefault("zones", {}).setdefault("bike", {})
        zp, ss = derive_bike_power_zones(ftp)
        zb["power"] = zp
        zb["sweet_spot"] = ss
        zb["power_basis_ftp_w"] = ftp
        print(f"Zones velo recalculees depuis FTP {ftp} W (SS {ss[0]}-{ss[1]} W)")

    executed = [s for s in data.get("sessions", []) if s.get("source") != "plan_generated"]
    by_id    = {s.get("intervals_id"): s for s in executed if s.get("intervals_id")}
    existing_keys = {(s["date"], s["sport"]) for s in executed}

    # Champs saisis a la main qu'on ne doit JAMAIS ecraser lors d'un refresh.
    MANUAL_KEYS = ("legs", "mental", "knee_0_3", "ankle_0_3")

    activities = fetch_activities(days_back, fetch_all)
    new_sessions, updated, skipped = [], 0, 0
    for act in activities:
        if act.get("type") in ("Rest", "Sleep"):
            continue
        s = activity_to_session(act)
        if not s:
            continue
        prev = by_id.get(act.get("id"))
        if prev:
            # Refresh des donnees Intervals (tss, rpe, feel, watts...) sans toucher au manuel.
            prev_subj = (prev.get("executed") or {}).get("subjective", {})
            for k in MANUAL_KEYS:
                if prev_subj.get(k) is not None:
                    s["executed"]["subjective"][k] = prev_subj[k]
            prev.update({k: v for k, v in s.items() if k != "id"})
            updated += 1
            continue
        if (s["date"], s["sport"]) in existing_keys:
            skipped += 1
            continue
        new_sessions.append(s)

    planned = []
    try:
        for ev in fetch_planned_events():
            s = event_to_session(ev)
            if s:
                planned.append(s)
        print(f"   -> {len(planned)} seances planifiees converties")
    except Exception as e:
        print(f"Warning: events non recuperes ({e}) -- plan non mis a jour")

    try:
        wdata = fetch_wellness(days_back)
        data.setdefault("wellness", {}).update(wdata)
        today_str = _date.today().isoformat()
        if today_str in wdata:
            w = wdata[today_str]
            print(f"   Aujourd'hui : FC repos {w.get('resting_hr') or '--'} bpm / Sommeil {w.get('sleep_h') or '--'}h")
    except Exception as e:
        print(f"Warning: wellness non disponible ({e})")

    all_sessions = executed + new_sessions + planned
    all_sessions.sort(key=lambda s: s["date"])
    data["sessions"] = all_sessions
    write_sport_data(data, original_content)

    print(f"\nSync termine :")
    print(f"  Nouvelles activites : {len(new_sessions)} (+{updated} actualisees, {skipped} ignorees)")
    print(f"  Seances planifiees  : {len(planned)} (depuis Intervals.icu)")
    print(f"  Total sessions      : {len(all_sessions)}")


if __name__ == "__main__":
    fetch_all = "--all" in sys.argv
    days = DAYS_BACK
    if "--days" in sys.argv:
        days = int(sys.argv[sys.argv.index("--days") + 1])
    sync(days_back=days, fetch_all=fetch_all)
