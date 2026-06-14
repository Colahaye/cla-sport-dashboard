#!/usr/bin/env python3
"""
sync_intervals.py — CLA Sport Dashboard
Synchronise les activités depuis Intervals.icu → sport_data.js

Usage :
  python sync_intervals.py           # sync des 90 derniers jours
  python sync_intervals.py --days 30 # sync des 30 derniers jours
  python sync_intervals.py --all     # sync tout l'historique

Config : modifier config.json avec ton athlete_id et api_key
"""

import json, os, re, sys, requests
from datetime import datetime, timedelta, timezone
from pathlib import Path

# ── Config ────────────────────────────────────────────────────────
HERE = Path(__file__).parent
config_path = HERE / "config.json"

if config_path.exists():
    with open(config_path) as f:
        config = json.load(f)
else:
    config = {"intervals_icu": {"athlete_id": "", "api_key": ""}, "sync": {}}

ATHLETE_ID = os.environ.get("INTERVALS_ATHLETE_ID") or config["intervals_icu"]["athlete_id"]
API_KEY    = os.environ.get("INTERVALS_API_KEY")    or config["intervals_icu"]["api_key"]
DAYS_BACK  = config["sync"].get("days_back", 90)
JS_PATH    = HERE / config["sync"].get("sport_data_path", "sport_data.js")

if "REMPLACE" in ATHLETE_ID or "REMPLACE" in API_KEY:
    print("❌ Remplis d'abord ton athlete_id et api_key dans config.json (ou via env vars)")
    sys.exit(1)

BASE_URL = f"https://intervals.icu/api/v1/athlete/{ATHLETE_ID}"
AUTH     = ("API_KEY", API_KEY)

# ── Mapping types Intervals → sport_data ─────────────────────────
SPORT_MAP = {
    "Ride":           ("bike",     "endurance"),
    "VirtualRide":    ("bike",     "indoor"),
    "Run":            ("run",      "easy"),
    "VirtualRun":     ("run",      "indoor"),
    "TrailRun":       ("run",      "trail"),
    "Hike":           ("run",      "marche"),
    "Walk":           ("run",      "marche"),
    "WeightTraining": ("strength", "renfo"),
    "Workout":        ("strength", "renfo"),
    "Swim":           ("run",      "natation"),
    "Padel":          ("strength", "padel"),
    "Tennis":         ("strength", "padel"),
}

TYPE_LOG_MAP = {
    "bike":     "Vélo",
    "run":      "Course à pied",
    "strength": "Renforcement",
}

# ── Fetch wellness (FC repos + sommeil) ──────────────────────────
def fetch_wellness(days_back=30):
    oldest = (datetime.now() - timedelta(days=days_back)).strftime("%Y-%m-%d")
    newest = datetime.now().strftime("%Y-%m-%d")

    print(f"💤 Fetch wellness Intervals.icu ({oldest} → aujourd'hui)…")
    resp = requests.get(
        f"{BASE_URL}/wellness",
        params={"oldest": oldest, "newest": newest},
        auth=AUTH,
        timeout=30
    )
    resp.raise_for_status()
    items = resp.json()

    wellness = {}
    for item in items:
        date = item.get("id")
        if not date:
            continue
        sleep_secs = item.get("sleepSecs")
        rhr        = item.get("restingHR")
        if sleep_secs or rhr:
            wellness[date] = {
                "resting_hr":  rhr,
                "sleep_secs":  sleep_secs,
                "sleep_h":     round(sleep_secs / 3600, 1) if sleep_secs else None,
                "steps":       item.get("steps"),
            }

    print(f"   → {len(wellness)} jours wellness trouvés")
    return wellness

# ── Fetch activités ───────────────────────────────────────────────
def fetch_activities(days_back=DAYS_BACK, fetch_all=False):
    if fetch_all:
        oldest = "2020-01-01T00:00:00"
    else:
        oldest = (datetime.now(timezone.utc) - timedelta(days=days_back)).strftime("%Y-%m-%dT%H:%M:%S")

    newest = (datetime.now(timezone.utc) + timedelta(days=1)).strftime("%Y-%m-%dT%H:%M:%S")

    print(f"📡 Fetch Intervals.icu ({oldest[:10]} → aujourd'hui)…")
    resp = requests.get(
        f"{BASE_URL}/activities",
        params={"oldest": oldest, "newest": newest},
        auth=AUTH,
        timeout=30
    )
    resp.raise_for_status()
    activities = resp.json()
    print(f"   → {len(activities)} activités trouvées")
    return activities

# ── Conversion activité → session sport_data ─────────────────────
def activity_to_session(act):
    act_type  = act.get("type", "Workout")
    sport, workout_type = SPORT_MAP.get(act_type, ("strength", "autre"))

    start_local = act.get("start_date_local", "")[:10]  # YYYY-MM-DD
    if not start_local:
        return None

    act_name = act.get("name", "Activité")

    # Durée
    duration_sec = act.get("moving_time") or act.get("elapsed_time") or 0
    duration_min = round(duration_sec / 60) if duration_sec else None

    # Puissance
    np_w    = act.get("weighted_average_watts") or act.get("icu_weighted_average_watts")
    avg_w   = act.get("average_watts")
    kj      = act.get("kilojoules") or (act.get("calories", 0) * 0.239 if act.get("calories") else None)

    # Cardio
    hr_avg  = act.get("average_heartrate")
    hr_max  = act.get("max_heartrate")

    # Charge
    tss = act.get("icu_training_load") or act.get("training_load")

    # Distance
    distance_m = act.get("distance")

    # Cadence
    cadence = act.get("average_cadence")

    intervals_act_id = act.get("id", "")
    session_id = f"{start_local}-{sport}-{workout_type}-{intervals_act_id}"

    session = {
        "id":       session_id,
        "date":     start_local,
        "sport":    sport,
        "type":     workout_type,
        "type_log": TYPE_LOG_MAP.get(sport, sport),
        "status":   "done",
        "source":   "intervals_icu",
        "strava_activity_name": act_name,
        "intervals_id": act.get("id"),
        "planned":  None,
        "executed": {
            "duration_min": duration_min,
            "np_w":    round(np_w) if np_w else None,
            "avg_w":   round(avg_w) if avg_w else None,
            "kj":      round(kj) if kj else None,
            "hr_avg":  round(hr_avg) if hr_avg else None,
            "hr_max":  round(hr_max) if hr_max else None,
            "tss":     round(tss, 1) if tss else None,
            "distance_m": round(distance_m) if distance_m else None,
            "cadence": round(cadence) if cadence else None,
            "subjective": {
                "rpe": None, "legs": None, "mental": None,
                "knee_0_3": None, "ankle_0_3": None
            },
            "recovery": {
                "sleep_raw": None, "hrv_ms": None, "body_battery": None
            },
            "nutrition": { "carbs_g": None }
        },
        "notes": f"Importé depuis Intervals.icu — {act_name}"
    }
    return session

# ── Lecture sport_data.js ─────────────────────────────────────────
def read_sport_data():
    content = JS_PATH.read_text(encoding="utf-8")
    # Extraire le JSON de window.SPORT_DATA = {...};
    match = re.search(r'window\.SPORT_DATA\s*=\s*(\{.*\})\s*;', content, re.DOTALL)
    if not match:
        raise ValueError("window.SPORT_DATA non trouvé dans sport_data.js")
    return json.loads(match.group(1)), content

# ── Écriture sport_data.js ────────────────────────────────────────
def write_sport_data(data, original_content):
    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S.000Z")
    data["last_updated"] = now

    json_str = json.dumps(data, ensure_ascii=False, indent=2)
    new_content = re.sub(
        r'window\.SPORT_DATA\s*=\s*\{.*\}\s*;',
        f'window.SPORT_DATA = {json_str};',
        original_content,
        flags=re.DOTALL
    )
    JS_PATH.write_text(new_content, encoding="utf-8")

# ── Sync principale ───────────────────────────────────────────────
def sync(days_back=DAYS_BACK, fetch_all=False):
    # Charger données actuelles
    try:
        data, original_content = read_sport_data()
    except Exception as e:
        print(f"❌ Erreur lecture sport_data.js : {e}")
        sys.exit(1)

    existing_sessions = data.get("sessions", [])
    existing_ids = {s.get("intervals_id") for s in existing_sessions if s.get("intervals_id")}
    # Exclure les sessions planifiées (plan_generated) du check date+sport
    # pour éviter qu'elles bloquent l'import des vraies activités Intervals.icu
    existing_keys = {
        (s["date"], s["sport"]) for s in existing_sessions
        if s.get("source") != "plan_generated"
    }

    # Fetch depuis Intervals.icu
    try:
        activities = fetch_activities(days_back, fetch_all)
    except requests.HTTPError as e:
        print(f"❌ Erreur API Intervals.icu : {e}")
        if e.response.status_code == 401:
            print("   → Vérifie ton API key dans config.json")
        sys.exit(1)

    # Convertir et filtrer les nouvelles
    new_sessions = []
    skipped = 0

    for act in activities:
        # Ignorer les repos et types inconnus
        if act.get("type") in ("Rest", "Sleep"):
            continue

        session = activity_to_session(act)
        if not session:
            continue

        # Éviter les doublons (par intervals_id ou par date+sport)
        if act.get("id") in existing_ids:
            skipped += 1
            continue
        if (session["date"], session["sport"]) in existing_keys:
            skipped += 1
            continue

        new_sessions.append(session)

    # ── Wellness (FC repos + sommeil) ────────────────────────────
    try:
        wellness = fetch_wellness(days_back=30)
        existing_wellness = data.get("wellness", {})
        existing_wellness.update(wellness)
        data["wellness"] = existing_wellness
        from datetime import date as _d
        today_str = _d.today().isoformat()
        if today_str in wellness:
            w = wellness[today_str]
            rhr = f"{w['resting_hr']} bpm" if w.get('resting_hr') else "—"
            slp = f"{w['sleep_h']}h" if w.get('sleep_h') else "—"
            print(f"   Aujourd'hui : FC repos {rhr} · Sommeil {slp}")
    except Exception as e:
        print(f"⚠️  Wellness non disponible : {e}")

    if not new_sessions:
        print(f"✅ Aucune nouvelle activité (déjà synchro, {skipped} ignorées)")
        write_sport_data(data, original_content)
        return

    # Merger et trier
    all_sessions = existing_sessions + new_sessions
    all_sessions.sort(key=lambda s: s["date"])
    data["sessions"] = all_sessions

    # Sauvegarder
    write_sport_data(data, original_content)

    print(f"✅ {len(new_sessions)} nouvelle(s) séance(s) ajoutée(s) :")
    for s in new_sessions:
        ex = s["executed"]
        details = []
        if ex.get("duration_min"): details.append(f"{ex['duration_min']}min")
        if ex.get("np_w"):         details.append(f"NP {ex['np_w']}W")
        if ex.get("hr_avg"):       details.append(f"FC {ex['hr_avg']}bpm")
        if ex.get("tss"):          details.append(f"TSS {ex['tss']}")
        print(f"   {s['date']} · {s['sport']:8} · {s['strava_activity_name']} ({', '.join(details) or '—'})")

    print(f"\n💾 sport_data.js mis à jour — {len(all_sessions)} séances au total")
    print("   → Recharge index.html dans ton navigateur (Ctrl+Shift+R)")

# ── Entrée ────────────────────────────────────────────────────────
if __name__ == "__main__":
    fetch_all = "--all" in sys.argv
    days = DAYS_BACK
    if "--days" in sys.argv:
        idx = sys.argv.index("--days")
        days = int(sys.argv[idx + 1])
    sync(days_back=days, fetch_all=fetch_all)
