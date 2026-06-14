// ═══════════════════════════════════════════════════════════════
// Sport Data — CLA (Corto Lahaye) — Source de vérité unique
// Généré : 2026-06-08 — Mis à jour : 2026-06-14
// Schéma : v1.0
// ═══════════════════════════════════════════════════════════════

window.SPORT_DATA = {
  "schema_version": "1.0",
  "last_updated": "2026-06-14T23:58:28.000Z",
  "athlete": {
    "name": "CLA",
    "full_name": "Corto Lahaye",
    "age": 29,
    "height_cm": 180,
    "weight_kg": 73.5,
    "weight_target_kg": 71,
    "ftp_ref_w": 250,
    "ftp_note": "FTP Intervals.icu — eFTP calculé automatiquement",
    "ftp_last_test": null,
    "hr_max_observed": 211,
    "hr_rest_bpm": 52,
    "hrv_baseline_ms": null,
    "vo2max_garmin": null,
    "diet": "omnivore",
    "sports": [
      "bike",
      "run",
      "strength"
    ],
    "constraints": [
      "fasciite_plantaire_gauche",
      "cadence_min_88_rpm_velo"
    ],
    "devices": {
      "bike": "Cube Agree Pro + Wahoo ELEMNT (capteur puissance)",
      "run_watch": "Garmin Forerunner",
      "strava_sync": "Wahoo → Strava + Garmin → Strava"
    },
    "hr_threshold_bpm": 190
  },
  "zones": {
    "bike": {
      "power_basis_ftp_w": 250,
      "power_note": "Zones calculées sur FTP 250W (eFTP Intervals.icu)",
      "power": {
        "Z1": [
          0,
          138
        ],
        "Z2": [
          140,
          188
        ],
        "Z3": [
          190,
          225
        ],
        "Z4": [
          228,
          262
        ],
        "Z5": [
          265,
          300
        ]
      },
      "hr": {
        "Z1": [
          0,
          139
        ],
        "Z2": [
          140,
          157
        ],
        "Z3": [
          158,
          175
        ],
        "Z4": [
          176,
          190
        ],
        "Z5": [
          191,
          211
        ]
      }
    },
    "run": {
      "hr": {
        "Z1": [
          0,
          151
        ],
        "Z2": [
          152,
          169
        ],
        "Z3": [
          170,
          181
        ],
        "Z4": [
          182,
          190
        ],
        "Z5": [
          191,
          211
        ]
      },
      "pace_per_km": {
        "note": "Zones basées sur perf réelles : 5km 17:41, 10km 37:40, semi 1h23",
        "Z1": [
          330,
          999
        ],
        "Z2": [
          285,
          330
        ],
        "Z3": [
          255,
          285
        ],
        "Z4": [
          225,
          255
        ],
        "Z5": [
          0,
          225
        ]
      }
    }
  },
  "races": [
    {
      "id": "bcf-clm-2026",
      "date": "2026-06-13",
      "name": "BCF CLM en équipe ~50 km",
      "priority": "A",
      "status": "done",
      "notes": "Effort continu Z3-Z4 ~1h10. Sortie vélo principale 2026."
    }
  ],
  "phases": [
    {
      "name": "Max Vélo post-CLM",
      "start_date": "2026-06-14",
      "end_date": "2026-06-26",
      "focus": "Capitaliser sur la forme post-CLM. Volume + qualité vélo. 1 renfo/semaine.",
      "key_constraints": [
        "Pas de running jusqu'au 26 juin",
        "1 renfo/semaine"
      ]
    },
    {
      "name": "Ardèche — Running uniquement",
      "start_date": "2026-06-27",
      "end_date": "2026-07-27",
      "focus": "Chantier + trail. Running 3×/sem max. Pas de vélo.",
      "key_constraints": [
        "Hydratation++",
        "Pas de renfo en semaine",
        "Courir tôt le matin si chaud"
      ]
    },
    {
      "name": "Reprise structurée",
      "start_date": "2026-07-28",
      "end_date": "2026-09-05",
      "focus": "Remontée progressive. Introduction séances qualité. +7-8% volume max/semaine running.",
      "key_constraints": []
    },
    {
      "name": "Pause Indonésie",
      "start_date": "2026-09-06",
      "end_date": "2026-09-30",
      "focus": "Running 3×/sem 30-35 min Z1/Z2 tôt le matin. Renfo corps entier 2×/sem.",
      "key_constraints": [
        "Courir avant 7h",
        "FC naturellement +5-8 bpm chaleur"
      ]
    }
  ],
  "sessions": [
    {
      "id": "2026-06-02-bike-endurance-i155251140",
      "date": "2026-06-02",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Vorst Cyclisme",
      "intervals_id": "i155251140",
      "planned": null,
      "executed": {
        "duration_min": 49,
        "np_w": null,
        "avg_w": null,
        "kj": 82,
        "hr_avg": 118,
        "hr_max": 161,
        "tss": 20,
        "distance_m": 16933,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "legs": null,
          "mental": null,
          "knee_0_3": null,
          "ankle_0_3": null
        },
        "recovery": {
          "sleep_raw": null,
          "hrv_ms": null,
          "body_battery": null
        },
        "nutrition": {
          "carbs_g": null
        }
      },
      "notes": "Importé depuis Intervals.icu — Vorst Cyclisme"
    },
    {
      "id": "2026-06-04-bike-endurance-i155251253",
      "date": "2026-06-04",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Vorst Cyclisme",
      "intervals_id": "i155251253",
      "planned": null,
      "executed": {
        "duration_min": 21,
        "np_w": null,
        "avg_w": null,
        "kj": 39,
        "hr_avg": 123,
        "hr_max": 151,
        "tss": 10,
        "distance_m": 7779,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "legs": null,
          "mental": null,
          "knee_0_3": null,
          "ankle_0_3": null
        },
        "recovery": {
          "sleep_raw": null,
          "hrv_ms": null,
          "body_battery": null
        },
        "nutrition": {
          "carbs_g": null
        }
      },
      "notes": "Importé depuis Intervals.icu — Vorst Cyclisme"
    },
    {
      "id": "2026-06-04-run-easy-i155251194",
      "date": "2026-06-04",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Vorst Course à pied",
      "intervals_id": "i155251194",
      "planned": null,
      "executed": {
        "duration_min": 45,
        "np_w": null,
        "avg_w": null,
        "kj": 124,
        "hr_avg": 154,
        "hr_max": 174,
        "tss": 46,
        "distance_m": 9015,
        "cadence": 86,
        "subjective": {
          "rpe": null,
          "legs": null,
          "mental": null,
          "knee_0_3": null,
          "ankle_0_3": null
        },
        "recovery": {
          "sleep_raw": null,
          "hrv_ms": null,
          "body_battery": null
        },
        "nutrition": {
          "carbs_g": null
        }
      },
      "notes": "Importé depuis Intervals.icu — Vorst Course à pied"
    },
    {
      "id": "2026-06-05-bike-endurance-i155251266",
      "date": "2026-06-05",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Vorst Cyclisme",
      "intervals_id": "i155251266",
      "planned": null,
      "executed": {
        "duration_min": 10,
        "np_w": null,
        "avg_w": null,
        "kj": 15,
        "hr_avg": 111,
        "hr_max": 133,
        "tss": 3,
        "distance_m": 4000,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "legs": null,
          "mental": null,
          "knee_0_3": null,
          "ankle_0_3": null
        },
        "recovery": {
          "sleep_raw": null,
          "hrv_ms": null,
          "body_battery": null
        },
        "nutrition": {
          "carbs_g": null
        }
      },
      "notes": "Importé depuis Intervals.icu — Vorst Cyclisme"
    },
    {
      "id": "2026-06-06-bike-endurance-i155251442",
      "date": "2026-06-06",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Sainte-Ode Cyclisme",
      "intervals_id": "i155251442",
      "planned": null,
      "executed": {
        "duration_min": 116,
        "np_w": null,
        "avg_w": null,
        "kj": 209,
        "hr_avg": 127,
        "hr_max": 174,
        "tss": 63,
        "distance_m": 45506,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "legs": null,
          "mental": null,
          "knee_0_3": null,
          "ankle_0_3": null
        },
        "recovery": {
          "sleep_raw": null,
          "hrv_ms": null,
          "body_battery": null
        },
        "nutrition": {
          "carbs_g": null
        }
      },
      "notes": "Importé depuis Intervals.icu — Sainte-Ode Cyclisme"
    },
    {
      "id": "2026-06-07-run-trail-i155251554",
      "date": "2026-06-07",
      "sport": "run",
      "type": "trail",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Sainte-Ode Trail",
      "intervals_id": "i155251554",
      "planned": null,
      "executed": {
        "duration_min": 59,
        "np_w": null,
        "avg_w": null,
        "kj": 70,
        "hr_avg": 101,
        "hr_max": 130,
        "tss": 13,
        "distance_m": 5015,
        "cadence": 54,
        "subjective": {
          "rpe": null,
          "legs": null,
          "mental": null,
          "knee_0_3": null,
          "ankle_0_3": null
        },
        "recovery": {
          "sleep_raw": null,
          "hrv_ms": null,
          "body_battery": null
        },
        "nutrition": {
          "carbs_g": null
        }
      },
      "notes": "Importé depuis Intervals.icu — Sainte-Ode Trail"
    },
    {
      "id": "2026-06-09-bike-endurance-i155881317",
      "date": "2026-06-09",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Drogenbos Cyclisme",
      "intervals_id": "i155881317",
      "planned": null,
      "executed": {
        "duration_min": 14,
        "np_w": null,
        "avg_w": null,
        "kj": 32,
        "hr_avg": 137,
        "hr_max": 174,
        "tss": 10,
        "distance_m": 4540,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "legs": null,
          "mental": null,
          "knee_0_3": null,
          "ankle_0_3": null
        },
        "recovery": {
          "sleep_raw": null,
          "hrv_ms": null,
          "body_battery": null
        },
        "nutrition": {
          "carbs_g": null
        }
      },
      "notes": "Importé depuis Intervals.icu — Drogenbos Cyclisme"
    },
    {
      "id": "2026-06-09-bike-endurance-i155881283",
      "date": "2026-06-09",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Silly Cyclisme",
      "intervals_id": "i155881283",
      "planned": null,
      "executed": {
        "duration_min": 81,
        "np_w": null,
        "avg_w": null,
        "kj": 205,
        "hr_avg": 156,
        "hr_max": 194,
        "tss": 93,
        "distance_m": 40962,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "legs": null,
          "mental": null,
          "knee_0_3": null,
          "ankle_0_3": null
        },
        "recovery": {
          "sleep_raw": null,
          "hrv_ms": null,
          "body_battery": null
        },
        "nutrition": {
          "carbs_g": null
        }
      },
      "notes": "Importé depuis Intervals.icu — Silly Cyclisme"
    },
    {
      "id": "2026-06-09-bike-endurance-i155620941",
      "date": "2026-06-09",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Vorst Cyclisme",
      "intervals_id": "i155620941",
      "planned": null,
      "executed": {
        "duration_min": 10,
        "np_w": null,
        "avg_w": null,
        "kj": 20,
        "hr_avg": 124,
        "hr_max": 160,
        "tss": 5,
        "distance_m": 4068,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "legs": null,
          "mental": null,
          "knee_0_3": null,
          "ankle_0_3": null
        },
        "recovery": {
          "sleep_raw": null,
          "hrv_ms": null,
          "body_battery": null
        },
        "nutrition": {
          "carbs_g": null
        }
      },
      "notes": "Importé depuis Intervals.icu — Vorst Cyclisme"
    },
    {
      "id": "2026-06-12-bike-endurance-i157265404",
      "date": "2026-06-12",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Cyclisme",
      "intervals_id": "i157265404",
      "planned": null,
      "executed": {
        "duration_min": 40,
        "np_w": null,
        "avg_w": null,
        "kj": 94,
        "hr_avg": 154,
        "hr_max": 179,
        "tss": 46,
        "distance_m": 17421,
        "cadence": 80,
        "subjective": {
          "rpe": null,
          "legs": null,
          "mental": null,
          "knee_0_3": null,
          "ankle_0_3": null
        },
        "recovery": {
          "sleep_raw": null,
          "hrv_ms": null,
          "body_battery": null
        },
        "nutrition": {
          "carbs_g": null
        }
      },
      "notes": "Importé depuis Intervals.icu — Cyclisme"
    },
    {
      "id": "2026-06-13-bike-endurance-i157265400",
      "date": "2026-06-13",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Cyclisme",
      "intervals_id": "i157265400",
      "planned": null,
      "executed": {
        "duration_min": 58,
        "np_w": null,
        "avg_w": null,
        "kj": 167,
        "hr_avg": 183,
        "hr_max": 194,
        "tss": 80,
        "distance_m": 34011,
        "cadence": 96,
        "subjective": {
          "rpe": null,
          "legs": null,
          "mental": null,
          "knee_0_3": null,
          "ankle_0_3": null
        },
        "recovery": {
          "sleep_raw": null,
          "hrv_ms": null,
          "body_battery": null
        },
        "nutrition": {
          "carbs_g": null
        }
      },
      "notes": "Importé depuis Intervals.icu — Cyclisme"
    },
    {
      "id": "2026-06-14-bike-endurance-i157265396",
      "date": "2026-06-14",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Cyclisme",
      "intervals_id": "i157265396",
      "planned": null,
      "executed": {
        "duration_min": 91,
        "np_w": null,
        "avg_w": null,
        "kj": 215,
        "hr_avg": 152,
        "hr_max": 174,
        "tss": 89,
        "distance_m": 41755,
        "cadence": 91,
        "subjective": {
          "rpe": null,
          "legs": null,
          "mental": null,
          "knee_0_3": null,
          "ankle_0_3": null
        },
        "recovery": {
          "sleep_raw": null,
          "hrv_ms": null,
          "body_battery": null
        },
        "nutrition": {
          "carbs_g": null
        }
      },
      "notes": "Importé depuis Intervals.icu — Cyclisme"
    },
    {
      "id": "2026-06-15-repos",
      "date": "2026-06-15",
      "week_id": "2026-W25",
      "sport": "bike",
      "type": "recovery",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Repos — J+2 CLM",
        "duration_min": 0,
        "description": "Repos total. Tu sors d'un CLM hier.",
        "primary_zone": null
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-16-bike-z2",
      "date": "2026-06-16",
      "week_id": "2026-W25",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Vélo Z2 relance",
        "duration_min": 120,
        "description": "2h, FC < 152 bpm, cadence 88+ rpm. Première vraie sortie post-CLM.",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-17-bike-sweetspot",
      "date": "2026-06-17",
      "week_id": "2026-W25",
      "sport": "bike",
      "type": "tempo",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Sweet Spot 3×12' Z3",
        "duration_min": 105,
        "description": "Échauff 20' + 3×12 min Z3 (FC 158-170) + récup 5' + retour 15'. Total ~1h45.",
        "primary_zone": "Z3"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-18-strength-renfo",
      "date": "2026-06-18",
      "week_id": "2026-W25",
      "sport": "strength",
      "type": "renfo",
      "type_log": "Renforcement",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Renfo complet",
        "duration_min": 45,
        "description": "Squat goblet 4×10, Hip thrust 4×12, Fentes bulgares 3×8, SdT roumain 3×10, Planche 3×60s, Copenhagen 3×25s, Montées talons 3×15.",
        "primary_zone": null
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-19-bike-z2",
      "date": "2026-06-19",
      "week_id": "2026-W25",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Vélo Z2 endurance",
        "duration_min": 150,
        "description": "2h30, FC < 155 bpm. 60g carbs/h après 45'.",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-20-repos",
      "date": "2026-06-20",
      "week_id": "2026-W25",
      "sport": "bike",
      "type": "recovery",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Repos",
        "duration_min": 0,
        "description": "Repos complet avant la longue du week-end.",
        "primary_zone": null
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-21-bike-longue",
      "date": "2026-06-21",
      "week_id": "2026-W25",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Longue Z2 — 3h30",
        "duration_min": 210,
        "description": "3h30, FC < 155 bpm. 60g carbs/h après 45'. Sortie longue de la semaine.",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-22-bike-recup",
      "date": "2026-06-22",
      "week_id": "2026-W26",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Vélo Z2 récup active",
        "duration_min": 90,
        "description": "1h30 Z1/Z2, FC < 148 bpm. Récup après la longue.",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-23-bike-intervalles",
      "date": "2026-06-23",
      "week_id": "2026-W26",
      "sport": "bike",
      "type": "interval",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Intervalles Z4 — 5×6'",
        "duration_min": 120,
        "description": "Échauff 20' + 5×6 min Z4 (FC 176-185, 105-115% FTP) + récup 4' + retour 20'.",
        "primary_zone": "Z4"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-24-bike-z2",
      "date": "2026-06-24",
      "week_id": "2026-W26",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Vélo Z2",
        "duration_min": 150,
        "description": "2h30, FC < 155 bpm. Volume.",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-25-strength-renfo",
      "date": "2026-06-25",
      "week_id": "2026-W26",
      "sport": "strength",
      "type": "renfo",
      "type_log": "Renforcement",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Renfo léger",
        "duration_min": 40,
        "description": "Squat unijambiste 3×8, hip thrust 3×12, Copenhagen 2×20s, montées talons 3×12.",
        "primary_zone": null
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-26-bike-finale",
      "date": "2026-06-26",
      "week_id": "2026-W26",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "GRANDE SORTIE FINALE — 3h Z2/Z3",
        "duration_min": 180,
        "description": "3h, FC 148-162 bpm. Dernière sortie vélo avant Ardèche. Option : 2×15' Sweet Spot si les jambes répondent.",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-28-run-easy",
      "date": "2026-06-28",
      "week_id": "2026-W26",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z1 transition",
        "duration_min": 30,
        "description": "30 min très léger, FC < 152 bpm. Réactiver les jambes avant Ardèche.",
        "primary_zone": "Z1"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-30-run-easy",
      "date": "2026-06-30",
      "week_id": "2026-W27",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z1 Ardèche",
        "duration_min": 30,
        "description": "25-30 min, FC < 152 bpm, terrain plat",
        "primary_zone": "Z1"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-07-02-run-easy",
      "date": "2026-07-02",
      "week_id": "2026-W27",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z1 Ardèche",
        "duration_min": 30,
        "description": "25-30 min",
        "primary_zone": "Z1"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-07-04-run-trail",
      "date": "2026-07-04",
      "week_id": "2026-W27",
      "sport": "run",
      "type": "trail",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Trail D+ Ardèche",
        "duration_min": 75,
        "description": "1h-1h15, repérage terrain, montée marchée si FC > 178",
        "primary_zone": "trail"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-07-07-run-easy",
      "date": "2026-07-07",
      "week_id": "2026-W28",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z1 Ardèche",
        "duration_min": 30,
        "description": "30 min",
        "primary_zone": "Z1"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-07-09-run-easy",
      "date": "2026-07-09",
      "week_id": "2026-W28",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z1 Ardèche",
        "duration_min": 30,
        "description": "30 min",
        "primary_zone": "Z1"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-07-11-run-trail",
      "date": "2026-07-11",
      "week_id": "2026-W28",
      "sport": "run",
      "type": "trail",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Trail D+ Ardèche",
        "duration_min": 90,
        "description": "1h15-1h30, chercher du dénivelé, montée marchée",
        "primary_zone": "trail"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-07-14-run-easy",
      "date": "2026-07-14",
      "week_id": "2026-W29",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z1 Ardèche",
        "duration_min": 30,
        "description": "30 min",
        "primary_zone": "Z1"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-07-16-run-easy",
      "date": "2026-07-16",
      "week_id": "2026-W29",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z1 Ardèche",
        "duration_min": 30,
        "description": "30 min",
        "primary_zone": "Z1"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-07-18-run-trail",
      "date": "2026-07-18",
      "week_id": "2026-W29",
      "sport": "run",
      "type": "trail",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Trail D+ Ardèche",
        "duration_min": 90,
        "description": "1h30, viser 300-400m D+, descente technique",
        "primary_zone": "trail"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-07-21-run-easy",
      "date": "2026-07-21",
      "week_id": "2026-W30",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z1 Ardèche",
        "duration_min": 30,
        "description": "30 min",
        "primary_zone": "Z1"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-07-23-run-easy",
      "date": "2026-07-23",
      "week_id": "2026-W30",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z1 Ardèche",
        "duration_min": 30,
        "description": "30 min",
        "primary_zone": "Z1"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-07-25-run-trail",
      "date": "2026-07-25",
      "week_id": "2026-W30",
      "sport": "run",
      "type": "trail",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Trail Ardèche — dernière sortie",
        "duration_min": 105,
        "description": "1h30-2h, viser 400-500m D+",
        "primary_zone": "trail"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-07-28-run-easy",
      "date": "2026-07-28",
      "week_id": "2026-W31",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z2",
        "duration_min": 40,
        "description": "40 min, FC 152-162 bpm",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    }
  ],
  "wellness": {
    "2026-05-28": {
      "resting_hr": 58,
      "sleep_secs": null,
      "sleep_h": null,
      "steps": 2471
    },
    "2026-05-29": {
      "resting_hr": 57,
      "sleep_secs": 28140,
      "sleep_h": 7.8,
      "steps": 11413
    },
    "2026-05-30": {
      "resting_hr": 62,
      "sleep_secs": 16260,
      "sleep_h": 4.5,
      "steps": 12124
    },
    "2026-05-31": {
      "resting_hr": 63,
      "sleep_secs": null,
      "sleep_h": null,
      "steps": 8390
    },
    "2026-06-01": {
      "resting_hr": 56,
      "sleep_secs": 33420,
      "sleep_h": 9.3,
      "steps": 5731
    },
    "2026-06-02": {
      "resting_hr": 55,
      "sleep_secs": 26940,
      "sleep_h": 7.5,
      "steps": 4856
    },
    "2026-06-03": {
      "resting_hr": 60,
      "sleep_secs": 26220,
      "sleep_h": 7.3,
      "steps": 2280
    },
    "2026-06-04": {
      "resting_hr": 59,
      "sleep_secs": 24480,
      "sleep_h": 6.8,
      "steps": 18826
    },
    "2026-06-05": {
      "resting_hr": 65,
      "sleep_secs": 27240,
      "sleep_h": 7.6,
      "steps": 4061
    },
    "2026-06-06": {
      "resting_hr": 64,
      "sleep_secs": 22860,
      "sleep_h": 6.3,
      "steps": 2476
    },
    "2026-06-07": {
      "resting_hr": 65,
      "sleep_secs": 22320,
      "sleep_h": 6.2,
      "steps": 11471
    },
    "2026-06-08": {
      "resting_hr": 63,
      "sleep_secs": 24420,
      "sleep_h": 6.8,
      "steps": 6809
    },
    "2026-06-09": {
      "resting_hr": 58,
      "sleep_secs": 29280,
      "sleep_h": 8.1,
      "steps": 2457
    }
  }
};
