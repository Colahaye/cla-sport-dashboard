// ═══════════════════════════════════════════════════════════════
// Sport Data — CLA (Corto Lahaye) — Source de vérité unique
// Régénéré : 2026-06-17 (course+renfo ajoutés) — Schéma v1.0
// ═══════════════════════════════════════════════════════════════

window.SPORT_DATA = {
  "schema_version": "1.0",
  "last_updated": "2026-07-20T18:49:12.000Z",
  "athlete": {
    "name": "CLA",
    "full_name": "Corto Lahaye",
    "age": 29,
    "height_cm": 180,
    "weight_kg": 72,
    "weight_target_kg": 72,
    "ftp_ref_w": 262,
    "ftp_note": "FTP testé Zwift — 16 juin 2026 (3,64 W/kg)",
    "ftp_last_test": "2026-06-16",
    "hr_max_observed": 194,
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
      "power_basis_ftp_w": 262,
      "power_note": "Zones Coggan 7Z — FTP 262W testé Zwift 16/06/2026",
      "power": {
        "Z1": [
          0,
          144
        ],
        "Z2": [
          145,
          196
        ],
        "Z3": [
          197,
          236
        ],
        "Z4": [
          237,
          275
        ],
        "Z5": [
          276,
          314
        ],
        "Z6": [
          315,
          393
        ],
        "Z7": [
          394,
          999
        ]
      },
      "hr": {
        "Z1": [
          0,
          135
        ],
        "Z2": [
          135,
          155
        ],
        "Z3": [
          155,
          175
        ],
        "Z4": [
          175,
          185
        ],
        "Z5": [
          185,
          194
        ]
      },
      "sweet_spot": [
        231,
        244
      ]
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
      "id": "2025-12-07-run-easy-i157774119",
      "date": "2025-12-07",
      "week_id": "2025-W49",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157774119",
      "intervals_url": "https://intervals.icu/activities/i157774119",
      "planned": null,
      "executed": {
        "duration_min": 77,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 146,
        "hr_max": 164,
        "tss": 64,
        "distance_m": 14127,
        "cadence": 85,
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
      "notes": "Importe depuis Intervals.icu -- Morning Course à pied"
    },
    {
      "id": "2025-12-09-bike-endurance-i157774040",
      "date": "2025-12-09",
      "week_id": "2025-W50",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Evening Cyclisme",
      "intervals_id": "i157774040",
      "intervals_url": "https://intervals.icu/activities/i157774040",
      "planned": null,
      "executed": {
        "duration_min": 14,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 120,
        "hr_max": 149,
        "tss": 6,
        "distance_m": 3825,
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
      "notes": "Importe depuis Intervals.icu -- Evening Cyclisme"
    },
    {
      "id": "2025-12-09-bike-endurance-i157774047",
      "date": "2025-12-09",
      "week_id": "2025-W50",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157774047",
      "intervals_url": "https://intervals.icu/activities/i157774047",
      "planned": null,
      "executed": {
        "duration_min": 24,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 128,
        "hr_max": 166,
        "tss": 14,
        "distance_m": 9544,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2025-12-09-run-easy-i157774067",
      "date": "2025-12-09",
      "week_id": "2025-W50",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S3.01",
      "intervals_id": "i157774067",
      "intervals_url": "https://intervals.icu/activities/i157774067",
      "planned": null,
      "executed": {
        "duration_min": 53,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 162,
        "hr_max": 190,
        "tss": 67,
        "distance_m": 11233,
        "cadence": 85,
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
      "notes": "Importe depuis Intervals.icu -- 10k - S3.01"
    },
    {
      "id": "2025-12-10-bike-endurance-i157774019",
      "date": "2025-12-10",
      "week_id": "2025-W50",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Evening Cyclisme",
      "intervals_id": "i157774019",
      "intervals_url": "https://intervals.icu/activities/i157774019",
      "planned": null,
      "executed": {
        "duration_min": 30,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 120,
        "hr_max": 154,
        "tss": 13,
        "distance_m": 10483,
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
      "notes": "Importe depuis Intervals.icu -- Evening Cyclisme"
    },
    {
      "id": "2025-12-10-bike-endurance-i157774033",
      "date": "2025-12-10",
      "week_id": "2025-W50",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157774033",
      "intervals_url": "https://intervals.icu/activities/i157774033",
      "planned": null,
      "executed": {
        "duration_min": 10,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 116,
        "hr_max": 135,
        "tss": 4,
        "distance_m": 4166,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2025-12-11-bike-endurance-i157773976",
      "date": "2025-12-11",
      "week_id": "2025-W50",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Evening Cyclisme",
      "intervals_id": "i157773976",
      "intervals_url": "https://intervals.icu/activities/i157773976",
      "planned": null,
      "executed": {
        "duration_min": 18,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 121,
        "hr_max": 140,
        "tss": 8,
        "distance_m": 5471,
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
      "notes": "Importe depuis Intervals.icu -- Evening Cyclisme"
    },
    {
      "id": "2025-12-11-bike-endurance-i157773984",
      "date": "2025-12-11",
      "week_id": "2025-W50",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157773984",
      "intervals_url": "https://intervals.icu/activities/i157773984",
      "planned": null,
      "executed": {
        "duration_min": 11,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 120,
        "hr_max": 151,
        "tss": 5,
        "distance_m": 4020,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2025-12-11-run-easy-i157774013",
      "date": "2025-12-11",
      "week_id": "2025-W50",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S3.02",
      "intervals_id": "i157774013",
      "intervals_url": "https://intervals.icu/activities/i157774013",
      "planned": null,
      "executed": {
        "duration_min": 70,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 163,
        "hr_max": 194,
        "tss": 96,
        "distance_m": 15109,
        "cadence": 87,
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
      "notes": "Importe depuis Intervals.icu -- 10k - S3.02"
    },
    {
      "id": "2025-12-12-bike-endurance-i157773952",
      "date": "2025-12-12",
      "week_id": "2025-W50",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Afternoon Cyclisme",
      "intervals_id": "i157773952",
      "intervals_url": "https://intervals.icu/activities/i157773952",
      "planned": null,
      "executed": {
        "duration_min": 13,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 120,
        "hr_max": 175,
        "tss": 6,
        "distance_m": 3762,
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
      "notes": "Importe depuis Intervals.icu -- Afternoon Cyclisme"
    },
    {
      "id": "2025-12-12-bike-endurance-i157773957",
      "date": "2025-12-12",
      "week_id": "2025-W50",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157773957",
      "intervals_url": "https://intervals.icu/activities/i157773957",
      "planned": null,
      "executed": {
        "duration_min": 10,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 105,
        "hr_max": 129,
        "tss": 3,
        "distance_m": 3972,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2025-12-14-run-easy-i157773935",
      "date": "2025-12-14",
      "week_id": "2025-W50",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S3.03",
      "intervals_id": "i157773935",
      "intervals_url": "https://intervals.icu/activities/i157773935",
      "planned": null,
      "executed": {
        "duration_min": 75,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 144,
        "hr_max": 163,
        "tss": 59,
        "distance_m": 14002,
        "cadence": 85,
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
      "notes": "Importe depuis Intervals.icu -- 10k - S3.03"
    },
    {
      "id": "2025-12-14-bike-endurance-i157773945",
      "date": "2025-12-14",
      "week_id": "2025-W50",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157773945",
      "intervals_url": "https://intervals.icu/activities/i157773945",
      "planned": null,
      "executed": {
        "duration_min": 59,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 132,
        "hr_max": 157,
        "tss": 34,
        "distance_m": 24840,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2025-12-15-bike-endurance-i157773867",
      "date": "2025-12-15",
      "week_id": "2025-W51",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Afternoon Cyclisme",
      "intervals_id": "i157773867",
      "intervals_url": "https://intervals.icu/activities/i157773867",
      "planned": null,
      "executed": {
        "duration_min": 12,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 128,
        "hr_max": 157,
        "tss": 7,
        "distance_m": 3905,
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
      "notes": "Importe depuis Intervals.icu -- Afternoon Cyclisme"
    },
    {
      "id": "2025-12-15-bike-endurance-i157773917",
      "date": "2025-12-15",
      "week_id": "2025-W51",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157773917",
      "intervals_url": "https://intervals.icu/activities/i157773917",
      "planned": null,
      "executed": {
        "duration_min": 10,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 114,
        "hr_max": 132,
        "tss": 3,
        "distance_m": 4076,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2025-12-16-run-easy-i157773858",
      "date": "2025-12-16",
      "week_id": "2025-W51",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S4.01",
      "intervals_id": "i157773858",
      "intervals_url": "https://intervals.icu/activities/i157773858",
      "planned": null,
      "executed": {
        "duration_min": 46,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 147,
        "hr_max": 161,
        "tss": 39,
        "distance_m": 8611,
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
      "notes": "Importe depuis Intervals.icu -- 10k - S4.01"
    },
    {
      "id": "2025-12-18-run-easy-i157773848",
      "date": "2025-12-18",
      "week_id": "2025-W51",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S4.02",
      "intervals_id": "i157773848",
      "intervals_url": "https://intervals.icu/activities/i157773848",
      "planned": null,
      "executed": {
        "duration_min": 68,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 161,
        "hr_max": 193,
        "tss": 83,
        "distance_m": 14797,
        "cadence": 87,
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
      "notes": "Importe depuis Intervals.icu -- 10k - S4.02"
    },
    {
      "id": "2025-12-22-run-easy-i157773796",
      "date": "2025-12-22",
      "week_id": "2025-W52",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S4.03",
      "intervals_id": "i157773796",
      "intervals_url": "https://intervals.icu/activities/i157773796",
      "planned": null,
      "executed": {
        "duration_min": 63,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 153,
        "hr_max": 175,
        "tss": 63,
        "distance_m": 11405,
        "cadence": 85,
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
      "notes": "Importe depuis Intervals.icu -- 10k - S4.03"
    },
    {
      "id": "2025-12-24-run-easy-i157773781",
      "date": "2025-12-24",
      "week_id": "2025-W52",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S5.01",
      "intervals_id": "i157773781",
      "intervals_url": "https://intervals.icu/activities/i157773781",
      "planned": null,
      "executed": {
        "duration_min": 62,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 163,
        "hr_max": 194,
        "tss": 81,
        "distance_m": 13225,
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
      "notes": "Importe depuis Intervals.icu -- 10k - S5.01"
    },
    {
      "id": "2025-12-26-run-easy-i157773775",
      "date": "2025-12-26",
      "week_id": "2025-W52",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S5.02",
      "intervals_id": "i157773775",
      "intervals_url": "https://intervals.icu/activities/i157773775",
      "planned": null,
      "executed": {
        "duration_min": 72,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 158,
        "hr_max": 194,
        "tss": 104,
        "distance_m": 15641,
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
      "notes": "Importe depuis Intervals.icu -- 10k - S5.02"
    },
    {
      "id": "2025-12-28-run-easy-i157773764",
      "date": "2025-12-28",
      "week_id": "2025-W52",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S5.03",
      "intervals_id": "i157773764",
      "intervals_url": "https://intervals.icu/activities/i157773764",
      "planned": null,
      "executed": {
        "duration_min": 90,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 149,
        "hr_max": 168,
        "tss": 81,
        "distance_m": 16038,
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
      "notes": "Importe depuis Intervals.icu -- 10k - S5.03"
    },
    {
      "id": "2025-12-30-run-easy-i157773739",
      "date": "2025-12-30",
      "week_id": "2026-W01",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S6.01",
      "intervals_id": "i157773739",
      "intervals_url": "https://intervals.icu/activities/i157773739",
      "planned": null,
      "executed": {
        "duration_min": 58,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 162,
        "hr_max": 192,
        "tss": 73,
        "distance_m": 12513,
        "cadence": 87,
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
      "notes": "Importe depuis Intervals.icu -- 10k - S6.01"
    },
    {
      "id": "2026-01-02-run-easy-i157773718",
      "date": "2026-01-02",
      "week_id": "2026-W01",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S6.02",
      "intervals_id": "i157773718",
      "intervals_url": "https://intervals.icu/activities/i157773718",
      "planned": null,
      "executed": {
        "duration_min": 77,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 163,
        "hr_max": 194,
        "tss": 104,
        "distance_m": 16008,
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
      "notes": "Importe depuis Intervals.icu -- 10k - S6.02"
    },
    {
      "id": "2026-01-05-run-easy-i157773702",
      "date": "2026-01-05",
      "week_id": "2026-W02",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157773702",
      "intervals_url": "https://intervals.icu/activities/i157773702",
      "planned": null,
      "executed": {
        "duration_min": 69,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 149,
        "hr_max": 164,
        "tss": 61,
        "distance_m": 13239,
        "cadence": 87,
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
      "notes": "Importe depuis Intervals.icu -- Morning Course à pied"
    },
    {
      "id": "2026-01-07-run-easy-i157773683",
      "date": "2026-01-07",
      "week_id": "2026-W02",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S7.01",
      "intervals_id": "i157773683",
      "intervals_url": "https://intervals.icu/activities/i157773683",
      "planned": null,
      "executed": {
        "duration_min": 58,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 163,
        "hr_max": 193,
        "tss": 73,
        "distance_m": 12321,
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
      "notes": "Importe depuis Intervals.icu -- 10k - S7.01"
    },
    {
      "id": "2026-01-11-run-easy-i157773563",
      "date": "2026-01-11",
      "week_id": "2026-W02",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S7.02",
      "intervals_id": "i157773563",
      "intervals_url": "https://intervals.icu/activities/i157773563",
      "planned": null,
      "executed": {
        "duration_min": 63,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 166,
        "hr_max": 194,
        "tss": 88,
        "distance_m": 13526,
        "cadence": 88,
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
      "notes": "Importe depuis Intervals.icu -- 10k - S7.02"
    },
    {
      "id": "2026-01-13-run-easy-i157773519",
      "date": "2026-01-13",
      "week_id": "2026-W03",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157773519",
      "intervals_url": "https://intervals.icu/activities/i157773519",
      "planned": null,
      "executed": {
        "duration_min": 61,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 148,
        "hr_max": 164,
        "tss": 53,
        "distance_m": 11508,
        "cadence": 87,
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
      "notes": "Importe depuis Intervals.icu -- Morning Course à pied"
    },
    {
      "id": "2026-01-15-run-easy-i157773476",
      "date": "2026-01-15",
      "week_id": "2026-W03",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S8.01",
      "intervals_id": "i157773476",
      "intervals_url": "https://intervals.icu/activities/i157773476",
      "planned": null,
      "executed": {
        "duration_min": 44,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 156,
        "hr_max": 186,
        "tss": 48,
        "distance_m": 8918,
        "cadence": 87,
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
      "notes": "Importe depuis Intervals.icu -- 10k - S8.01"
    },
    {
      "id": "2026-01-16-bike-endurance-i157773453",
      "date": "2026-01-16",
      "week_id": "2026-W03",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Afternoon Cyclisme",
      "intervals_id": "i157773453",
      "intervals_url": "https://intervals.icu/activities/i157773453",
      "planned": null,
      "executed": {
        "duration_min": 23,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 122,
        "hr_max": 141,
        "tss": 11,
        "distance_m": 7821,
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
      "notes": "Importe depuis Intervals.icu -- Afternoon Cyclisme"
    },
    {
      "id": "2026-01-18-run-easy-i157773217",
      "date": "2026-01-18",
      "week_id": "2026-W03",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Lunch Course à pied",
      "intervals_id": "i157773217",
      "intervals_url": "https://intervals.icu/activities/i157773217",
      "planned": null,
      "executed": {
        "duration_min": 53,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 169,
        "hr_max": 193,
        "tss": 82,
        "distance_m": 12144,
        "cadence": 88,
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
      "notes": "Importe depuis Intervals.icu -- Lunch Course à pied"
    },
    {
      "id": "2026-01-18-run-easy-i157773225",
      "date": "2026-01-18",
      "week_id": "2026-W03",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Lunch Course à pied",
      "intervals_id": "i157773225",
      "intervals_url": "https://intervals.icu/activities/i157773225",
      "planned": null,
      "executed": {
        "duration_min": 26,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 153,
        "hr_max": 176,
        "tss": 27,
        "distance_m": 5035,
        "cadence": 85,
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
      "notes": "Importe depuis Intervals.icu -- Lunch Course à pied"
    },
    {
      "id": "2026-01-19-bike-endurance-i157773206",
      "date": "2026-01-19",
      "week_id": "2026-W04",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Evening Cyclisme",
      "intervals_id": "i157773206",
      "intervals_url": "https://intervals.icu/activities/i157773206",
      "planned": null,
      "executed": {
        "duration_min": 27,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 118,
        "hr_max": 135,
        "tss": 10,
        "distance_m": 10529,
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
      "notes": "Importe depuis Intervals.icu -- Evening Cyclisme"
    },
    {
      "id": "2026-01-21-bike-endurance-i157773153",
      "date": "2026-01-21",
      "week_id": "2026-W04",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Evening Cyclisme",
      "intervals_id": "i157773153",
      "intervals_url": "https://intervals.icu/activities/i157773153",
      "planned": null,
      "executed": {
        "duration_min": 23,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 110,
        "hr_max": 144,
        "tss": 7,
        "distance_m": 6748,
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
      "notes": "Importe depuis Intervals.icu -- Evening Cyclisme"
    },
    {
      "id": "2026-01-22-run-easy-i157773146",
      "date": "2026-01-22",
      "week_id": "2026-W04",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157773146",
      "intervals_url": "https://intervals.icu/activities/i157773146",
      "planned": null,
      "executed": {
        "duration_min": 57,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 144,
        "hr_max": 162,
        "tss": 45,
        "distance_m": 11051,
        "cadence": 87,
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
      "notes": "Importe depuis Intervals.icu -- Morning Course à pied"
    },
    {
      "id": "2026-01-23-run-easy-i157773131",
      "date": "2026-01-23",
      "week_id": "2026-W04",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157773131",
      "intervals_url": "https://intervals.icu/activities/i157773131",
      "planned": null,
      "executed": {
        "duration_min": 50,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 144,
        "hr_max": 156,
        "tss": 39,
        "distance_m": 9356,
        "cadence": 88,
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
      "notes": "Importe depuis Intervals.icu -- Morning Course à pied"
    },
    {
      "id": "2026-01-25-strength-autre-i157773107",
      "date": "2026-01-25",
      "week_id": "2026-W04",
      "sport": "strength",
      "type": "autre",
      "type_log": "Renforcement",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Snowboard",
      "intervals_id": "i157773107",
      "intervals_url": "https://intervals.icu/activities/i157773107",
      "planned": null,
      "executed": {
        "duration_min": 94,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 95,
        "hr_max": 127,
        "tss": 17,
        "distance_m": 44394,
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
      "notes": "Importe depuis Intervals.icu -- Morning Snowboard"
    },
    {
      "id": "2026-01-26-strength-autre-i157772995",
      "date": "2026-01-26",
      "week_id": "2026-W05",
      "sport": "strength",
      "type": "autre",
      "type_log": "Renforcement",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Snowboard",
      "intervals_id": "i157772995",
      "intervals_url": "https://intervals.icu/activities/i157772995",
      "planned": null,
      "executed": {
        "duration_min": 98,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 99,
        "hr_max": 136,
        "tss": 21,
        "distance_m": 50798,
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
      "notes": "Importe depuis Intervals.icu -- Morning Snowboard"
    },
    {
      "id": "2026-01-27-strength-autre-i157772982",
      "date": "2026-01-27",
      "week_id": "2026-W05",
      "sport": "strength",
      "type": "autre",
      "type_log": "Renforcement",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Snowboard",
      "intervals_id": "i157772982",
      "intervals_url": "https://intervals.icu/activities/i157772982",
      "planned": null,
      "executed": {
        "duration_min": 31,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 101,
        "hr_max": 119,
        "tss": 7,
        "distance_m": 19438,
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
      "notes": "Importe depuis Intervals.icu -- Morning Snowboard"
    },
    {
      "id": "2026-01-28-strength-autre-i157772967",
      "date": "2026-01-28",
      "week_id": "2026-W05",
      "sport": "strength",
      "type": "autre",
      "type_log": "Renforcement",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Afternoon Snowboard",
      "intervals_id": "i157772967",
      "intervals_url": "https://intervals.icu/activities/i157772967",
      "planned": null,
      "executed": {
        "duration_min": 12,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 102,
        "hr_max": 116,
        "tss": 3,
        "distance_m": 6956,
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
      "notes": "Importe depuis Intervals.icu -- Afternoon Snowboard"
    },
    {
      "id": "2026-01-28-strength-autre-i157772975",
      "date": "2026-01-28",
      "week_id": "2026-W05",
      "sport": "strength",
      "type": "autre",
      "type_log": "Renforcement",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Snowboard",
      "intervals_id": "i157772975",
      "intervals_url": "https://intervals.icu/activities/i157772975",
      "planned": null,
      "executed": {
        "duration_min": 92,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 100,
        "hr_max": 126,
        "tss": 20,
        "distance_m": 25812,
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
      "notes": "Importe depuis Intervals.icu -- Morning Snowboard"
    },
    {
      "id": "2026-01-29-strength-autre-i157772966",
      "date": "2026-01-29",
      "week_id": "2026-W05",
      "sport": "strength",
      "type": "autre",
      "type_log": "Renforcement",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Snowboard",
      "intervals_id": "i157772966",
      "intervals_url": "https://intervals.icu/activities/i157772966",
      "planned": null,
      "executed": {
        "duration_min": 78,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 95,
        "hr_max": 122,
        "tss": 14,
        "distance_m": 42493,
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
      "notes": "Importe depuis Intervals.icu -- Morning Snowboard"
    },
    {
      "id": "2026-01-30-strength-autre-i157772941",
      "date": "2026-01-30",
      "week_id": "2026-W05",
      "sport": "strength",
      "type": "autre",
      "type_log": "Renforcement",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Snowboard",
      "intervals_id": "i157772941",
      "intervals_url": "https://intervals.icu/activities/i157772941",
      "planned": null,
      "executed": {
        "duration_min": 110,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 107,
        "hr_max": 155,
        "tss": 31,
        "distance_m": 51289,
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
      "notes": "Importe depuis Intervals.icu -- Morning Snowboard"
    },
    {
      "id": "2026-02-01-run-easy-i157772925",
      "date": "2026-02-01",
      "week_id": "2026-W05",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157772925",
      "intervals_url": "https://intervals.icu/activities/i157772925",
      "planned": null,
      "executed": {
        "duration_min": 89,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 168,
        "hr_max": 188,
        "tss": 125,
        "distance_m": 17015,
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
      "notes": "Importe depuis Intervals.icu -- Morning Course à pied"
    },
    {
      "id": "2026-02-03-run-easy-i157772914",
      "date": "2026-02-03",
      "week_id": "2026-W06",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157772914",
      "intervals_url": "https://intervals.icu/activities/i157772914",
      "planned": null,
      "executed": {
        "duration_min": 61,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 152,
        "hr_max": 168,
        "tss": 58,
        "distance_m": 12170,
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
      "notes": "Importe depuis Intervals.icu -- Morning Course à pied"
    },
    {
      "id": "2026-02-06-run-trail-i157772888",
      "date": "2026-02-06",
      "week_id": "2026-W06",
      "sport": "run",
      "type": "trail",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Lunch Trail",
      "intervals_id": "i157772888",
      "intervals_url": "https://intervals.icu/activities/i157772888",
      "planned": null,
      "executed": {
        "duration_min": 101,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 100,
        "hr_max": 135,
        "tss": 22,
        "distance_m": 8308,
        "cadence": 53,
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
      "notes": "Importe depuis Intervals.icu -- Lunch Trail"
    },
    {
      "id": "2026-02-07-run-trail-i157772800",
      "date": "2026-02-07",
      "week_id": "2026-W06",
      "sport": "run",
      "type": "trail",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Trail",
      "intervals_id": "i157772800",
      "intervals_url": "https://intervals.icu/activities/i157772800",
      "planned": null,
      "executed": {
        "duration_min": 95,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 153,
        "hr_max": 193,
        "tss": 105,
        "distance_m": 14991,
        "cadence": 75,
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
      "notes": "Importe depuis Intervals.icu -- Morning Trail"
    },
    {
      "id": "2026-02-08-run-trail-i157772782",
      "date": "2026-02-08",
      "week_id": "2026-W06",
      "sport": "run",
      "type": "trail",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Trail",
      "intervals_id": "i157772782",
      "intervals_url": "https://intervals.icu/activities/i157772782",
      "planned": null,
      "executed": {
        "duration_min": 88,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 165,
        "hr_max": 194,
        "tss": 125,
        "distance_m": 14700,
        "cadence": 79,
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
      "notes": "Importe depuis Intervals.icu -- Morning Trail"
    },
    {
      "id": "2026-02-09-run-trail-i157772773",
      "date": "2026-02-09",
      "week_id": "2026-W07",
      "sport": "run",
      "type": "trail",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Lunch Trail",
      "intervals_id": "i157772773",
      "intervals_url": "https://intervals.icu/activities/i157772773",
      "planned": null,
      "executed": {
        "duration_min": 203,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 113,
        "hr_max": 154,
        "tss": 70,
        "distance_m": 14718,
        "cadence": 53,
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
      "notes": "Importe depuis Intervals.icu -- Lunch Trail"
    },
    {
      "id": "2026-02-10-run-trail-i157772757",
      "date": "2026-02-10",
      "week_id": "2026-W07",
      "sport": "run",
      "type": "trail",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Trail",
      "intervals_id": "i157772757",
      "intervals_url": "https://intervals.icu/activities/i157772757",
      "planned": null,
      "executed": {
        "duration_min": 98,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 162,
        "hr_max": 185,
        "tss": 126,
        "distance_m": 18053,
        "cadence": 79,
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
      "notes": "Importe depuis Intervals.icu -- Morning Trail"
    },
    {
      "id": "2026-02-13-strength-autre-i157772732",
      "date": "2026-02-13",
      "week_id": "2026-W07",
      "sport": "strength",
      "type": "autre",
      "type_log": "Renforcement",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Lunch Snowboard",
      "intervals_id": "i157772732",
      "intervals_url": "https://intervals.icu/activities/i157772732",
      "planned": null,
      "executed": {
        "duration_min": 97,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 94,
        "hr_max": 130,
        "tss": 16,
        "distance_m": 36249,
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
      "notes": "Importe depuis Intervals.icu -- Lunch Snowboard"
    },
    {
      "id": "2026-02-14-strength-autre-i157772700",
      "date": "2026-02-14",
      "week_id": "2026-W07",
      "sport": "strength",
      "type": "autre",
      "type_log": "Renforcement",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Snowboard",
      "intervals_id": "i157772700",
      "intervals_url": "https://intervals.icu/activities/i157772700",
      "planned": null,
      "executed": {
        "duration_min": 121,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 103,
        "hr_max": 138,
        "tss": 29,
        "distance_m": 36884,
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
      "notes": "Importe depuis Intervals.icu -- Morning Snowboard"
    },
    {
      "id": "2026-02-15-strength-autre-i157772689",
      "date": "2026-02-15",
      "week_id": "2026-W07",
      "sport": "strength",
      "type": "autre",
      "type_log": "Renforcement",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Snowboard",
      "intervals_id": "i157772689",
      "intervals_url": "https://intervals.icu/activities/i157772689",
      "planned": null,
      "executed": {
        "duration_min": 111,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 106,
        "hr_max": 166,
        "tss": 31,
        "distance_m": 37320,
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
      "notes": "Importe depuis Intervals.icu -- Morning Snowboard"
    },
    {
      "id": "2026-02-20-run-easy-i157772684",
      "date": "2026-02-20",
      "week_id": "2026-W08",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157772684",
      "intervals_url": "https://intervals.icu/activities/i157772684",
      "planned": null,
      "executed": {
        "duration_min": 60,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 158,
        "hr_max": 181,
        "tss": 66,
        "distance_m": 12016,
        "cadence": 87,
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
      "notes": "Importe depuis Intervals.icu -- Morning Course à pied"
    },
    {
      "id": "2026-02-21-run-trail-i157772629",
      "date": "2026-02-21",
      "week_id": "2026-W08",
      "sport": "run",
      "type": "trail",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Trail",
      "intervals_id": "i157772629",
      "intervals_url": "https://intervals.icu/activities/i157772629",
      "planned": null,
      "executed": {
        "duration_min": 410,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 170,
        "hr_max": 194,
        "tss": 611,
        "distance_m": 51317,
        "cadence": 68,
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
      "notes": "Importe depuis Intervals.icu -- Morning Trail"
    },
    {
      "id": "2026-02-28-bike-endurance-i157772539",
      "date": "2026-02-28",
      "week_id": "2026-W09",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157772539",
      "intervals_url": "https://intervals.icu/activities/i157772539",
      "planned": null,
      "executed": {
        "duration_min": 231,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 152,
        "hr_max": 186,
        "tss": 248,
        "distance_m": 100988,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2026-03-01-bike-endurance-i157772526",
      "date": "2026-03-01",
      "week_id": "2026-W09",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Lunch Cyclisme",
      "intervals_id": "i157772526",
      "intervals_url": "https://intervals.icu/activities/i157772526",
      "planned": null,
      "executed": {
        "duration_min": 74,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 113,
        "hr_max": 148,
        "tss": 26,
        "distance_m": 22987,
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
      "notes": "Importe depuis Intervals.icu -- Lunch Cyclisme"
    },
    {
      "id": "2026-03-02-bike-endurance-i157772520",
      "date": "2026-03-02",
      "week_id": "2026-W10",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157772520",
      "intervals_url": "https://intervals.icu/activities/i157772520",
      "planned": null,
      "executed": {
        "duration_min": 25,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 117,
        "hr_max": 155,
        "tss": 10,
        "distance_m": 8326,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2026-03-03-run-easy-i157772502",
      "date": "2026-03-03",
      "week_id": "2026-W10",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157772502",
      "intervals_url": "https://intervals.icu/activities/i157772502",
      "planned": null,
      "executed": {
        "duration_min": 56,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 150,
        "hr_max": 169,
        "tss": 52,
        "distance_m": 11426,
        "cadence": 87,
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
      "notes": "Importe depuis Intervals.icu -- Morning Course à pied"
    },
    {
      "id": "2026-03-05-run-easy-i157772145",
      "date": "2026-03-05",
      "week_id": "2026-W10",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157772145",
      "intervals_url": "https://intervals.icu/activities/i157772145",
      "planned": null,
      "executed": {
        "duration_min": 58,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 153,
        "hr_max": 167,
        "tss": 58,
        "distance_m": 12011,
        "cadence": 87,
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
      "notes": "Importe depuis Intervals.icu -- Morning Course à pied"
    },
    {
      "id": "2026-03-07-run-easy-i157772086",
      "date": "2026-03-07",
      "week_id": "2026-W10",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Afternoon Course à pied",
      "intervals_id": "i157772086",
      "intervals_url": "https://intervals.icu/activities/i157772086",
      "planned": null,
      "executed": {
        "duration_min": 79,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 151,
        "hr_max": 171,
        "tss": 76,
        "distance_m": 15730,
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
      "notes": "Importe depuis Intervals.icu -- Afternoon Course à pied"
    },
    {
      "id": "2026-03-08-bike-endurance-i157772078",
      "date": "2026-03-08",
      "week_id": "2026-W10",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157772078",
      "intervals_url": "https://intervals.icu/activities/i157772078",
      "planned": null,
      "executed": {
        "duration_min": 148,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 154,
        "hr_max": 182,
        "tss": 163,
        "distance_m": 73541,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2026-03-09-bike-endurance-i157772039",
      "date": "2026-03-09",
      "week_id": "2026-W11",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157772039",
      "intervals_url": "https://intervals.icu/activities/i157772039",
      "planned": null,
      "executed": {
        "duration_min": 22,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 121,
        "hr_max": 154,
        "tss": 10,
        "distance_m": 8354,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2026-03-10-bike-endurance-i157772009",
      "date": "2026-03-10",
      "week_id": "2026-W11",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Lunch Cyclisme",
      "intervals_id": "i157772009",
      "intervals_url": "https://intervals.icu/activities/i157772009",
      "planned": null,
      "executed": {
        "duration_min": 33,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 121,
        "hr_max": 155,
        "tss": 15,
        "distance_m": 11975,
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
      "notes": "Importe depuis Intervals.icu -- Lunch Cyclisme"
    },
    {
      "id": "2026-03-10-run-easy-i157772015",
      "date": "2026-03-10",
      "week_id": "2026-W11",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157772015",
      "intervals_url": "https://intervals.icu/activities/i157772015",
      "planned": null,
      "executed": {
        "duration_min": 54,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 149,
        "hr_max": 168,
        "tss": 49,
        "distance_m": 11016,
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
      "notes": "Importe depuis Intervals.icu -- Morning Course à pied"
    },
    {
      "id": "2026-03-11-bike-endurance-i157771981",
      "date": "2026-03-11",
      "week_id": "2026-W11",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Evening Cyclisme",
      "intervals_id": "i157771981",
      "intervals_url": "https://intervals.icu/activities/i157771981",
      "planned": null,
      "executed": {
        "duration_min": 70,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 126,
        "hr_max": 163,
        "tss": 37,
        "distance_m": 30420,
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
      "notes": "Importe depuis Intervals.icu -- Evening Cyclisme"
    },
    {
      "id": "2026-03-12-run-easy-i157771955",
      "date": "2026-03-12",
      "week_id": "2026-W11",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S1.02",
      "intervals_id": "i157771955",
      "intervals_url": "https://intervals.icu/activities/i157771955",
      "planned": null,
      "executed": {
        "duration_min": 65,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 156,
        "hr_max": 193,
        "tss": 69,
        "distance_m": 14013,
        "cadence": 87,
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
      "notes": "Importe depuis Intervals.icu -- 10k - S1.02"
    },
    {
      "id": "2026-03-16-bike-endurance-i157771907",
      "date": "2026-03-16",
      "week_id": "2026-W12",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771907",
      "intervals_url": "https://intervals.icu/activities/i157771907",
      "planned": null,
      "executed": {
        "duration_min": 65,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 137,
        "hr_max": 182,
        "tss": 49,
        "distance_m": 30361,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2026-03-17-run-easy-i157771847",
      "date": "2026-03-17",
      "week_id": "2026-W12",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "21 - S1 - Vma",
      "intervals_id": "i157771847",
      "intervals_url": "https://intervals.icu/activities/i157771847",
      "planned": null,
      "executed": {
        "duration_min": 65,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": 151,
        "hr_max": 172,
        "tss": 61,
        "distance_m": 13508,
        "cadence": 87,
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
      "notes": "Importe depuis Intervals.icu -- 21 - S1 - Vma"
    },
    {
      "id": "2026-03-20-bike-endurance-i157771799",
      "date": "2026-03-20",
      "week_id": "2026-W12",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Lunch Cyclisme",
      "intervals_id": "i157771799",
      "intervals_url": "https://intervals.icu/activities/i157771799",
      "planned": null,
      "executed": {
        "duration_min": 37,
        "np_w": null,
        "avg_w": null,
        "kj": 65,
        "hr_avg": 123,
        "hr_max": 153,
        "tss": 18,
        "distance_m": 12952,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Lunch Cyclisme"
    },
    {
      "id": "2026-03-22-bike-endurance-i157771707",
      "date": "2026-03-22",
      "week_id": "2026-W12",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Afternoon Cyclisme",
      "intervals_id": "i157771707",
      "intervals_url": "https://intervals.icu/activities/i157771707",
      "planned": null,
      "executed": {
        "duration_min": 99,
        "np_w": null,
        "avg_w": null,
        "kj": 150,
        "hr_avg": 123,
        "hr_max": 187,
        "tss": 47,
        "distance_m": 40049,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Afternoon Cyclisme"
    },
    {
      "id": "2026-03-22-bike-endurance-i157771716",
      "date": "2026-03-22",
      "week_id": "2026-W12",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Lunch Cyclisme",
      "intervals_id": "i157771716",
      "intervals_url": "https://intervals.icu/activities/i157771716",
      "planned": null,
      "executed": {
        "duration_min": 65,
        "np_w": null,
        "avg_w": null,
        "kj": 95,
        "hr_avg": 117,
        "hr_max": 187,
        "tss": 27,
        "distance_m": 41892,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Lunch Cyclisme"
    },
    {
      "id": "2026-03-24-run-easy-i157771654",
      "date": "2026-03-24",
      "week_id": "2026-W13",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "21 - S2 - Vma1",
      "intervals_id": "i157771654",
      "intervals_url": "https://intervals.icu/activities/i157771654",
      "planned": null,
      "executed": {
        "duration_min": 53,
        "np_w": null,
        "avg_w": null,
        "kj": 116,
        "hr_avg": 143,
        "hr_max": 161,
        "tss": 41,
        "distance_m": 10009,
        "cadence": 86,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- 21 - S2 - Vma1"
    },
    {
      "id": "2026-03-25-bike-endurance-i157771621",
      "date": "2026-03-25",
      "week_id": "2026-W13",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Evening Cyclisme",
      "intervals_id": "i157771621",
      "intervals_url": "https://intervals.icu/activities/i157771621",
      "planned": null,
      "executed": {
        "duration_min": 28,
        "np_w": null,
        "avg_w": null,
        "kj": 52,
        "hr_avg": 122,
        "hr_max": 148,
        "tss": 13,
        "distance_m": 9533,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Evening Cyclisme"
    },
    {
      "id": "2026-03-26-bike-endurance-i157771616",
      "date": "2026-03-26",
      "week_id": "2026-W13",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771616",
      "intervals_url": "https://intervals.icu/activities/i157771616",
      "planned": null,
      "executed": {
        "duration_min": 26,
        "np_w": null,
        "avg_w": null,
        "kj": 45,
        "hr_avg": 117,
        "hr_max": 144,
        "tss": 11,
        "distance_m": 8872,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2026-03-27-bike-endurance-i157771585",
      "date": "2026-03-27",
      "week_id": "2026-W13",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771585",
      "intervals_url": "https://intervals.icu/activities/i157771585",
      "planned": null,
      "executed": {
        "duration_min": 23,
        "np_w": null,
        "avg_w": null,
        "kj": 37,
        "hr_avg": 117,
        "hr_max": 149,
        "tss": 9,
        "distance_m": 7965,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2026-03-27-bike-endurance-i157771613",
      "date": "2026-03-27",
      "week_id": "2026-W13",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771613",
      "intervals_url": "https://intervals.icu/activities/i157771613",
      "planned": null,
      "executed": {
        "duration_min": 52,
        "np_w": null,
        "avg_w": null,
        "kj": 100,
        "hr_avg": 131,
        "hr_max": 179,
        "tss": 30,
        "distance_m": 20219,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2026-03-29-bike-endurance-i157771580",
      "date": "2026-03-29",
      "week_id": "2026-W13",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771580",
      "intervals_url": "https://intervals.icu/activities/i157771580",
      "planned": null,
      "executed": {
        "duration_min": 161,
        "np_w": null,
        "avg_w": null,
        "kj": 212,
        "hr_avg": 117,
        "hr_max": 175,
        "tss": 63,
        "distance_m": 72029,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2026-03-30-bike-endurance-i157771222",
      "date": "2026-03-30",
      "week_id": "2026-W14",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771222",
      "intervals_url": "https://intervals.icu/activities/i157771222",
      "planned": null,
      "executed": {
        "duration_min": 23,
        "np_w": null,
        "avg_w": null,
        "kj": 39,
        "hr_avg": 117,
        "hr_max": 163,
        "tss": 9,
        "distance_m": 7758,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2026-04-01-bike-endurance-i157771218",
      "date": "2026-04-01",
      "week_id": "2026-W14",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771218",
      "intervals_url": "https://intervals.icu/activities/i157771218",
      "planned": null,
      "executed": {
        "duration_min": 23,
        "np_w": null,
        "avg_w": null,
        "kj": 33,
        "hr_avg": 108,
        "hr_max": 143,
        "tss": 7,
        "distance_m": 7994,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2026-04-02-bike-endurance-i157771213",
      "date": "2026-04-02",
      "week_id": "2026-W14",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771213",
      "intervals_url": "https://intervals.icu/activities/i157771213",
      "planned": null,
      "executed": {
        "duration_min": 22,
        "np_w": null,
        "avg_w": null,
        "kj": 21,
        "hr_avg": 93,
        "hr_max": 117,
        "tss": 4,
        "distance_m": 7802,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2026-04-04-bike-endurance-i157771186",
      "date": "2026-04-04",
      "week_id": "2026-W14",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Evening Cyclisme",
      "intervals_id": "i157771186",
      "intervals_url": "https://intervals.icu/activities/i157771186",
      "planned": null,
      "executed": {
        "duration_min": 68,
        "np_w": null,
        "avg_w": null,
        "kj": 138,
        "hr_avg": 137,
        "hr_max": 171,
        "tss": 45,
        "distance_m": 25314,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Evening Cyclisme"
    },
    {
      "id": "2026-04-06-run-easy-i157771173",
      "date": "2026-04-06",
      "week_id": "2026-W15",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157771173",
      "intervals_url": "https://intervals.icu/activities/i157771173",
      "planned": null,
      "executed": {
        "duration_min": 26,
        "np_w": null,
        "avg_w": null,
        "kj": 69,
        "hr_avg": 144,
        "hr_max": 171,
        "tss": 22,
        "distance_m": 5395,
        "cadence": 86,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Morning Course à pied"
    },
    {
      "id": "2026-04-08-bike-endurance-i157771115",
      "date": "2026-04-08",
      "week_id": "2026-W15",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771115",
      "intervals_url": "https://intervals.icu/activities/i157771115",
      "planned": null,
      "executed": {
        "duration_min": 22,
        "np_w": null,
        "avg_w": null,
        "kj": 34,
        "hr_avg": 112,
        "hr_max": 137,
        "tss": 7,
        "distance_m": 7802,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2026-04-09-run-easy-i157771112",
      "date": "2026-04-09",
      "week_id": "2026-W15",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157771112",
      "intervals_url": "https://intervals.icu/activities/i157771112",
      "planned": null,
      "executed": {
        "duration_min": 42,
        "np_w": null,
        "avg_w": null,
        "kj": 124,
        "hr_avg": 157,
        "hr_max": 178,
        "tss": 46,
        "distance_m": 9050,
        "cadence": 87,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Morning Course à pied"
    },
    {
      "id": "2026-04-10-bike-endurance-i157771066",
      "date": "2026-04-10",
      "week_id": "2026-W15",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Evening Cyclisme",
      "intervals_id": "i157771066",
      "intervals_url": "https://intervals.icu/activities/i157771066",
      "planned": null,
      "executed": {
        "duration_min": 28,
        "np_w": null,
        "avg_w": null,
        "kj": 49,
        "hr_avg": 115,
        "hr_max": 153,
        "tss": 12,
        "distance_m": 10008,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Evening Cyclisme"
    },
    {
      "id": "2026-04-11-bike-endurance-i157771055",
      "date": "2026-04-11",
      "week_id": "2026-W15",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771055",
      "intervals_url": "https://intervals.icu/activities/i157771055",
      "planned": null,
      "executed": {
        "duration_min": 145,
        "np_w": null,
        "avg_w": null,
        "kj": 329,
        "hr_avg": 152,
        "hr_max": 194,
        "tss": 153,
        "distance_m": 64418,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2026-04-12-bike-endurance-i157771047",
      "date": "2026-04-12",
      "week_id": "2026-W15",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Afternoon Cyclisme",
      "intervals_id": "i157771047",
      "intervals_url": "https://intervals.icu/activities/i157771047",
      "planned": null,
      "executed": {
        "duration_min": 49,
        "np_w": null,
        "avg_w": null,
        "kj": 92,
        "hr_avg": 125,
        "hr_max": 169,
        "tss": 25,
        "distance_m": 19166,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Afternoon Cyclisme"
    },
    {
      "id": "2026-04-14-bike-endurance-i157771042",
      "date": "2026-04-14",
      "week_id": "2026-W16",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771042",
      "intervals_url": "https://intervals.icu/activities/i157771042",
      "planned": null,
      "executed": {
        "duration_min": 22,
        "np_w": null,
        "avg_w": null,
        "kj": 26,
        "hr_avg": 102,
        "hr_max": 142,
        "tss": 5,
        "distance_m": 7704,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2026-04-16-bike-endurance-i157771037",
      "date": "2026-04-16",
      "week_id": "2026-W16",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771037",
      "intervals_url": "https://intervals.icu/activities/i157771037",
      "planned": null,
      "executed": {
        "duration_min": 28,
        "np_w": null,
        "avg_w": null,
        "kj": 40,
        "hr_avg": 108,
        "hr_max": 156,
        "tss": 9,
        "distance_m": 10467,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2026-04-18-bike-endurance-i157771019",
      "date": "2026-04-18",
      "week_id": "2026-W16",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Lunch Cyclisme",
      "intervals_id": "i157771019",
      "intervals_url": "https://intervals.icu/activities/i157771019",
      "planned": null,
      "executed": {
        "duration_min": 160,
        "np_w": null,
        "avg_w": null,
        "kj": 459,
        "hr_avg": 171,
        "hr_max": 193,
        "tss": 256,
        "distance_m": 78274,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Lunch Cyclisme"
    },
    {
      "id": "2026-04-21-bike-endurance-i157770814",
      "date": "2026-04-21",
      "week_id": "2026-W17",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157770814",
      "intervals_url": "https://intervals.icu/activities/i157770814",
      "planned": null,
      "executed": {
        "duration_min": 64,
        "np_w": null,
        "avg_w": null,
        "kj": 182,
        "hr_avg": 157,
        "hr_max": 180,
        "tss": 74,
        "distance_m": 29271,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2026-04-22-bike-endurance-i157770782",
      "date": "2026-04-22",
      "week_id": "2026-W17",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157770782",
      "intervals_url": "https://intervals.icu/activities/i157770782",
      "planned": null,
      "executed": {
        "duration_min": 65,
        "np_w": null,
        "avg_w": null,
        "kj": 115,
        "hr_avg": 121,
        "hr_max": 162,
        "tss": 29,
        "distance_m": 24832,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2026-04-24-bike-endurance-i157770768",
      "date": "2026-04-24",
      "week_id": "2026-W17",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157770768",
      "intervals_url": "https://intervals.icu/activities/i157770768",
      "planned": null,
      "executed": {
        "duration_min": 70,
        "np_w": null,
        "avg_w": null,
        "kj": 119,
        "hr_avg": 120,
        "hr_max": 174,
        "tss": 32,
        "distance_m": 26733,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2026-04-26-bike-endurance-i157770741",
      "date": "2026-04-26",
      "week_id": "2026-W17",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157770741",
      "intervals_url": "https://intervals.icu/activities/i157770741",
      "planned": null,
      "executed": {
        "duration_min": 185,
        "np_w": null,
        "avg_w": null,
        "kj": 238,
        "hr_avg": 115,
        "hr_max": 173,
        "tss": 67,
        "distance_m": 94222,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2026-04-27-bike-endurance-i157770708",
      "date": "2026-04-27",
      "week_id": "2026-W18",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157770708",
      "intervals_url": "https://intervals.icu/activities/i157770708",
      "planned": null,
      "executed": {
        "duration_min": 34,
        "np_w": null,
        "avg_w": null,
        "kj": 56,
        "hr_avg": 120,
        "hr_max": 150,
        "tss": 14,
        "distance_m": 11517,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2026-04-28-bike-endurance-i157770693",
      "date": "2026-04-28",
      "week_id": "2026-W18",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157770693",
      "intervals_url": "https://intervals.icu/activities/i157770693",
      "planned": null,
      "executed": {
        "duration_min": 22,
        "np_w": null,
        "avg_w": null,
        "kj": 34,
        "hr_avg": 112,
        "hr_max": 143,
        "tss": 7,
        "distance_m": 7885,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Morning Cyclisme"
    },
    {
      "id": "2026-04-28-run-easy-i157770700",
      "date": "2026-04-28",
      "week_id": "2026-W18",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157770700",
      "intervals_url": "https://intervals.icu/activities/i157770700",
      "planned": null,
      "executed": {
        "duration_min": 30,
        "np_w": null,
        "avg_w": null,
        "kj": 87,
        "hr_avg": 153,
        "hr_max": 173,
        "tss": 30,
        "distance_m": 5654,
        "cadence": 84,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Morning Course à pied"
    },
    {
      "id": "2026-05-06-run-easy-i157770636",
      "date": "2026-05-06",
      "week_id": "2026-W19",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157770636",
      "intervals_url": "https://intervals.icu/activities/i157770636",
      "planned": null,
      "executed": {
        "duration_min": 32,
        "np_w": null,
        "avg_w": null,
        "kj": 95,
        "hr_avg": 154,
        "hr_max": 168,
        "tss": 33,
        "distance_m": 6414,
        "cadence": 86,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Morning Course à pied"
    },
    {
      "id": "2026-06-02-bike-endurance-i155251140",
      "date": "2026-06-02",
      "week_id": "2026-W23",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Vorst Cyclisme",
      "intervals_id": "i155251140",
      "intervals_url": "https://intervals.icu/activities/i155251140",
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
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Vorst Cyclisme"
    },
    {
      "id": "2026-06-04-bike-endurance-i155251253",
      "date": "2026-06-04",
      "week_id": "2026-W23",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Vorst Cyclisme",
      "intervals_id": "i155251253",
      "intervals_url": "https://intervals.icu/activities/i155251253",
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
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Vorst Cyclisme"
    },
    {
      "id": "2026-06-04-run-easy-i155251194",
      "date": "2026-06-04",
      "week_id": "2026-W23",
      "sport": "run",
      "type": "easy",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Vorst Course à pied",
      "intervals_id": "i155251194",
      "intervals_url": "https://intervals.icu/activities/i155251194",
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
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Vorst Course à pied"
    },
    {
      "id": "2026-06-06-bike-endurance-i155251442",
      "date": "2026-06-06",
      "week_id": "2026-W23",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Sainte-Ode Cyclisme",
      "intervals_id": "i155251442",
      "intervals_url": "https://intervals.icu/activities/i155251442",
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
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Sainte-Ode Cyclisme"
    },
    {
      "id": "2026-06-07-run-trail-i155251554",
      "date": "2026-06-07",
      "week_id": "2026-W23",
      "sport": "run",
      "type": "trail",
      "type_log": "Course a pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Sainte-Ode Trail",
      "intervals_id": "i155251554",
      "intervals_url": "https://intervals.icu/activities/i155251554",
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
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Sainte-Ode Trail"
    },
    {
      "id": "2026-06-09-bike-endurance-i155881283",
      "date": "2026-06-09",
      "week_id": "2026-W24",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Silly Cyclisme",
      "intervals_id": "i155881283",
      "intervals_url": "https://intervals.icu/activities/i155881283",
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
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Silly Cyclisme"
    },
    {
      "id": "2026-06-10-bike-endurance-i157966524",
      "date": "2026-06-10",
      "week_id": "2026-W24",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Vorst Cyclisme",
      "intervals_id": "i157966524",
      "intervals_url": "https://intervals.icu/activities/i157966524",
      "planned": null,
      "executed": {
        "duration_min": 23,
        "np_w": null,
        "avg_w": null,
        "kj": 39,
        "hr_avg": 119,
        "hr_max": 157,
        "tss": 10,
        "distance_m": 8080,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Vorst Cyclisme"
    },
    {
      "id": "2026-06-11-bike-endurance-i157966589",
      "date": "2026-06-11",
      "week_id": "2026-W24",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Vorst Cyclisme",
      "intervals_id": "i157966589",
      "intervals_url": "https://intervals.icu/activities/i157966589",
      "planned": null,
      "executed": {
        "duration_min": 23,
        "np_w": null,
        "avg_w": null,
        "kj": 43,
        "hr_avg": 122,
        "hr_max": 156,
        "tss": 11,
        "distance_m": 8103,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Vorst Cyclisme"
    },
    {
      "id": "2026-06-12-bike-endurance-i157966652",
      "date": "2026-06-12",
      "week_id": "2026-W24",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Vorst Cyclisme",
      "intervals_id": "i157966652",
      "intervals_url": "https://intervals.icu/activities/i157966652",
      "planned": null,
      "executed": {
        "duration_min": 38,
        "np_w": null,
        "avg_w": null,
        "kj": 106,
        "hr_avg": 153,
        "hr_max": 179,
        "tss": 42,
        "distance_m": 17421,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Vorst Cyclisme"
    },
    {
      "id": "2026-06-12-bike-endurance-i157265404",
      "date": "2026-06-12",
      "week_id": "2026-W24",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Cyclisme",
      "intervals_id": "i157265404",
      "intervals_url": "https://intervals.icu/activities/i157265404",
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
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Cyclisme"
    },
    {
      "id": "2026-06-13-bike-endurance-i157265400",
      "date": "2026-06-13",
      "week_id": "2026-W24",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Cyclisme",
      "intervals_id": "i157265400",
      "intervals_url": "https://intervals.icu/activities/i157265400",
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
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Cyclisme"
    },
    {
      "id": "2026-06-13-bike-endurance-i157966760",
      "date": "2026-06-13",
      "week_id": "2026-W24",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Silly Cyclisme",
      "intervals_id": "i157966760",
      "intervals_url": "https://intervals.icu/activities/i157966760",
      "planned": null,
      "executed": {
        "duration_min": 83,
        "np_w": null,
        "avg_w": null,
        "kj": 257,
        "hr_avg": 169,
        "hr_max": 194,
        "tss": 135,
        "distance_m": 44719,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Silly Cyclisme"
    },
    {
      "id": "2026-06-14-bike-endurance-i157265396",
      "date": "2026-06-14",
      "week_id": "2026-W24",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Cyclisme",
      "intervals_id": "i157265396",
      "intervals_url": "https://intervals.icu/activities/i157265396",
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
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Cyclisme"
    },
    {
      "id": "2026-06-15-bike-endurance-i157966822",
      "date": "2026-06-15",
      "week_id": "2026-W25",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Vorst Cyclisme",
      "intervals_id": "i157966822",
      "intervals_url": "https://intervals.icu/activities/i157966822",
      "planned": null,
      "executed": {
        "duration_min": 24,
        "np_w": null,
        "avg_w": null,
        "kj": 48,
        "hr_avg": 125,
        "hr_max": 164,
        "tss": 13,
        "distance_m": 7952,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Vorst Cyclisme"
    },
    {
      "id": "2026-06-17-bike-endurance-i157947748",
      "date": "2026-06-17",
      "week_id": "2026-W25",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Cyclisme",
      "intervals_id": "i157947748",
      "intervals_url": "https://intervals.icu/activities/i157947748",
      "planned": null,
      "executed": {
        "duration_min": 93,
        "np_w": null,
        "avg_w": null,
        "kj": 203,
        "hr_avg": 148,
        "hr_max": 178,
        "tss": 82,
        "distance_m": 40044,
        "cadence": 88,
        "subjective": {
          "rpe": 4,
          "feel": 2,
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
      "notes": "Importe depuis Intervals.icu -- Cyclisme"
    },
    {
      "id": "2026-06-18-bike-endurance-i158248998",
      "date": "2026-06-18",
      "week_id": "2026-W25",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Cyclisme",
      "intervals_id": "i158248998",
      "intervals_url": "https://intervals.icu/activities/i158248998",
      "planned": null,
      "executed": {
        "duration_min": 79,
        "np_w": null,
        "avg_w": null,
        "kj": 190,
        "hr_avg": 155,
        "hr_max": 183,
        "tss": 77,
        "distance_m": 38017,
        "cadence": 89,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Cyclisme"
    },
    {
      "id": "2026-06-19-bike-endurance-i158514300",
      "date": "2026-06-19",
      "week_id": "2026-W25",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Cyclisme",
      "intervals_id": "i158514300",
      "intervals_url": "https://intervals.icu/activities/i158514300",
      "planned": null,
      "executed": {
        "duration_min": 77,
        "np_w": null,
        "avg_w": null,
        "kj": 153,
        "hr_avg": 140,
        "hr_max": 167,
        "tss": 64,
        "distance_m": 30619,
        "cadence": 84,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Cyclisme"
    },
    {
      "id": "2026-06-21-bike-endurance-i159109299",
      "date": "2026-06-21",
      "week_id": "2026-W25",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Cyclisme",
      "intervals_id": "i159109299",
      "intervals_url": "https://intervals.icu/activities/i159109299",
      "planned": null,
      "executed": {
        "duration_min": 217,
        "np_w": null,
        "avg_w": null,
        "kj": 433,
        "hr_avg": 151,
        "hr_max": 188,
        "tss": 183,
        "distance_m": 97012,
        "cadence": 85,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Cyclisme"
    },
    {
      "id": "2026-06-22-bike-endurance-i159459271",
      "date": "2026-06-22",
      "week_id": "2026-W26",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Cyclisme",
      "intervals_id": "i159459271",
      "intervals_url": "https://intervals.icu/activities/i159459271",
      "planned": null,
      "executed": {
        "duration_min": 88,
        "np_w": null,
        "avg_w": null,
        "kj": 133,
        "hr_avg": 132,
        "hr_max": 166,
        "tss": 47,
        "distance_m": 34891,
        "cadence": 83,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Cyclisme"
    },
    {
      "id": "2026-06-22-bike-indoor-i159432088",
      "date": "2026-06-22",
      "week_id": "2026-W26",
      "sport": "bike",
      "type": "indoor",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Cyclisme",
      "intervals_id": "i159432088",
      "intervals_url": "https://intervals.icu/activities/i159432088",
      "planned": null,
      "executed": {
        "duration_min": 0,
        "np_w": null,
        "avg_w": null,
        "kj": null,
        "hr_avg": null,
        "hr_max": null,
        "tss": null,
        "distance_m": null,
        "cadence": null,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Cyclisme"
    },
    {
      "id": "2026-06-26-bike-endurance-i160414788",
      "date": "2026-06-26",
      "week_id": "2026-W26",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Velo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Cyclisme",
      "intervals_id": "i160414788",
      "intervals_url": "https://intervals.icu/activities/i160414788",
      "planned": null,
      "executed": {
        "duration_min": 68,
        "np_w": null,
        "avg_w": null,
        "kj": 148,
        "hr_avg": 139,
        "hr_max": 178,
        "tss": 66,
        "distance_m": 32265,
        "cadence": 89,
        "subjective": {
          "rpe": null,
          "feel": null,
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
      "notes": "Importe depuis Intervals.icu -- Cyclisme"
    },
    {
      "id": "2026-07-21-run-recovery",
      "date": "2026-07-21",
      "week_id": "2026-W30",
      "sport": "run",
      "type": "recovery",
      "type_log": "Course a pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Footing Z2 40 min",
        "duration_min": 40,
        "description": "40 min vallonné + travail descente en contrôle. Z1/Z2.",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-07-22-strength-renfo",
      "date": "2026-07-22",
      "week_id": "2026-W30",
      "sport": "strength",
      "type": "renfo",
      "type_log": "Renforcement",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Renfo A — Tronc 30 min",
        "duration_min": 30,
        "description": "Tronc + gainage + stabilité.",
        "primary_zone": null
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-07-23-run-recovery",
      "date": "2026-07-23",
      "week_id": "2026-W30",
      "sport": "run",
      "type": "recovery",
      "type_log": "Course a pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Footing 40 min",
        "duration_min": 40,
        "description": "40 min facile. Z1/Z2.",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-07-26-run-trail",
      "date": "2026-07-26",
      "week_id": "2026-W30",
      "sport": "run",
      "type": "trail",
      "type_log": "Course a pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Trail 80 min — 400-500m D+",
        "duration_min": 80,
        "description": "Trail final 1h15–1h30, 400–500 m D+, descente technique contrôlée. Belle sortie pour clôturer le mois.",
        "primary_zone": null
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-07-31-bike-tempo",
      "date": "2026-07-31",
      "week_id": "2026-W31",
      "sport": "bike",
      "type": "tempo",
      "type_log": "Velo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Test FTP 20min",
        "duration_min": 55,
        "description": "TEST FTP OUTDOOR (Wahoo) - jambes fraiches, route plate/montee reguliere, peu de trafic.\n1) 15min echauffement progressif Z1->Z2\n2) 3x1min a ~Z4 (dur mais maitrise), 1min facile entre\n3) 5min facile\n4) 20min A FOND allure tenable (regulier, finir vide) <- bloc qui compte\n5) 10min retour au calme\nFTP outdoor = 0.95 x puissance moyenne des 20min. Garder 262 pour Zwift, cette valeur sert aux zones route.",
        "primary_zone": "Z4"
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
      "sleep_score": null,
      "steps": 2471,
      "hrv_ms": null,
      "ctl": 17.5,
      "atl": 0.7,
      "tsb": 16.8,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-29": {
      "resting_hr": 57,
      "sleep_secs": 28140,
      "sleep_h": 7.8,
      "sleep_score": null,
      "steps": 11413,
      "hrv_ms": null,
      "ctl": 17.0,
      "atl": 0.6,
      "tsb": 16.5,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-30": {
      "resting_hr": 62,
      "sleep_secs": 16260,
      "sleep_h": 4.5,
      "sleep_score": null,
      "steps": 12124,
      "hrv_ms": null,
      "ctl": 16.6,
      "atl": 0.5,
      "tsb": 16.1,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-31": {
      "resting_hr": 63,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": 8390,
      "hrv_ms": null,
      "ctl": 16.3,
      "atl": 0.4,
      "tsb": 15.8,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-01": {
      "resting_hr": 56,
      "sleep_secs": 33420,
      "sleep_h": 9.3,
      "sleep_score": null,
      "steps": 5731,
      "hrv_ms": null,
      "ctl": 15.9,
      "atl": 0.4,
      "tsb": 15.5,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-02": {
      "resting_hr": 55,
      "sleep_secs": 26940,
      "sleep_h": 7.5,
      "sleep_score": null,
      "steps": 4856,
      "hrv_ms": null,
      "ctl": 16.0,
      "atl": 3.0,
      "tsb": 13.0,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-03": {
      "resting_hr": 60,
      "sleep_secs": 26220,
      "sleep_h": 7.3,
      "sleep_score": null,
      "steps": 2280,
      "hrv_ms": null,
      "ctl": 15.6,
      "atl": 2.6,
      "tsb": 13.0,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-04": {
      "resting_hr": 59,
      "sleep_secs": 24480,
      "sleep_h": 6.8,
      "sleep_score": null,
      "steps": 18826,
      "hrv_ms": null,
      "ctl": 16.5,
      "atl": 9.7,
      "tsb": 6.8,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-05": {
      "resting_hr": 65,
      "sleep_secs": 27240,
      "sleep_h": 7.6,
      "sleep_score": null,
      "steps": 4061,
      "hrv_ms": null,
      "ctl": 16.2,
      "atl": 8.8,
      "tsb": 7.4,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-06": {
      "resting_hr": 64,
      "sleep_secs": 22860,
      "sleep_h": 6.3,
      "sleep_score": null,
      "steps": 2476,
      "hrv_ms": null,
      "ctl": 17.3,
      "atl": 16.0,
      "tsb": 1.3,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-07": {
      "resting_hr": 65,
      "sleep_secs": 22320,
      "sleep_h": 6.2,
      "sleep_score": null,
      "steps": 11471,
      "hrv_ms": null,
      "ctl": 17.2,
      "atl": 15.6,
      "tsb": 1.6,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-08": {
      "resting_hr": 63,
      "sleep_secs": 24420,
      "sleep_h": 6.8,
      "sleep_score": null,
      "steps": 6809,
      "hrv_ms": null,
      "ctl": 16.8,
      "atl": 13.5,
      "tsb": 3.3,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-09": {
      "resting_hr": 58,
      "sleep_secs": 29280,
      "sleep_h": 8.1,
      "sleep_score": null,
      "steps": 2569,
      "hrv_ms": null,
      "ctl": 19.0,
      "atl": 26.1,
      "tsb": -7.2,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-10": {
      "resting_hr": 65,
      "sleep_secs": 28740,
      "sleep_h": 8.0,
      "sleep_score": null,
      "steps": 3076,
      "hrv_ms": null,
      "ctl": 18.8,
      "atl": 24.0,
      "tsb": -5.2,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-11": {
      "resting_hr": 61,
      "sleep_secs": 27000,
      "sleep_h": 7.5,
      "sleep_score": null,
      "steps": 5575,
      "hrv_ms": null,
      "ctl": 18.6,
      "atl": 22.2,
      "tsb": -3.7,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-12": {
      "resting_hr": 58,
      "sleep_secs": 19080,
      "sleep_h": 5.3,
      "sleep_score": null,
      "steps": 5769,
      "hrv_ms": null,
      "ctl": 20.2,
      "atl": 31.0,
      "tsb": -10.8,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-13": {
      "resting_hr": 61,
      "sleep_secs": 26880,
      "sleep_h": 7.5,
      "sleep_score": null,
      "steps": 6454,
      "hrv_ms": null,
      "ctl": 21.6,
      "atl": 37.5,
      "tsb": -15.9,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-14": {
      "resting_hr": 61,
      "sleep_secs": 25020,
      "sleep_h": 7.0,
      "sleep_score": null,
      "steps": 10524,
      "hrv_ms": null,
      "ctl": 23.2,
      "atl": 44.4,
      "tsb": -21.2,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-15": {
      "resting_hr": 63,
      "sleep_secs": 26580,
      "sleep_h": 7.4,
      "sleep_score": null,
      "steps": 2564,
      "hrv_ms": null,
      "ctl": 23.0,
      "atl": 40.2,
      "tsb": -17.2,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-16": {
      "resting_hr": 59,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": 4594,
      "hrv_ms": null,
      "ctl": 22.4,
      "atl": 34.8,
      "tsb": -12.4,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-17": {
      "resting_hr": 58,
      "sleep_secs": 26640,
      "sleep_h": 7.4,
      "sleep_score": null,
      "steps": 4240,
      "hrv_ms": null,
      "ctl": 23.8,
      "atl": 41.1,
      "tsb": -17.3,
      "soreness": 1,
      "fatigue": 1,
      "mood": 2
    },
    "2026-03-19": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 40.2,
      "atl": 34.5,
      "tsb": 5.7,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-03-20": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 39.7,
      "atl": 32.3,
      "tsb": 7.4,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-03-21": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 38.8,
      "atl": 28.0,
      "tsb": 10.7,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-03-22": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 39.6,
      "atl": 34.2,
      "tsb": 5.4,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-03-23": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 38.9,
      "atl": 30.9,
      "tsb": 8.0,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-03-24": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 39.2,
      "atl": 33.7,
      "tsb": 5.5,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-03-25": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 38.6,
      "atl": 31.4,
      "tsb": 7.3,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-03-26": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 38.0,
      "atl": 28.7,
      "tsb": 9.3,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-03-27": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 38.0,
      "atl": 30.0,
      "tsb": 8.0,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-03-28": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 37.1,
      "atl": 26.0,
      "tsb": 11.1,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-03-29": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 37.7,
      "atl": 31.0,
      "tsb": 6.8,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-03-30": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 37.1,
      "atl": 28.0,
      "tsb": 9.0,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-03-31": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 36.2,
      "atl": 24.3,
      "tsb": 11.9,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-01": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 35.5,
      "atl": 22.0,
      "tsb": 13.5,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-02": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 34.8,
      "atl": 19.6,
      "tsb": 15.2,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-03": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 34.2,
      "atl": 18.5,
      "tsb": 15.7,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-04": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 34.5,
      "atl": 22.0,
      "tsb": 12.5,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-05": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 33.6,
      "atl": 19.1,
      "tsb": 14.6,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-06": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 33.4,
      "atl": 19.5,
      "tsb": 13.9,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-07": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 32.7,
      "atl": 17.4,
      "tsb": 15.3,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-08": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 32.1,
      "atl": 16.0,
      "tsb": 16.1,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-09": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 32.7,
      "atl": 21.7,
      "tsb": 11.0,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-10": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 32.2,
      "atl": 20.4,
      "tsb": 11.8,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-11": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 35.1,
      "atl": 38.1,
      "tsb": -3.0,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-12": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 34.8,
      "atl": 36.3,
      "tsb": -1.5,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-13": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 34.0,
      "atl": 31.5,
      "tsb": 2.5,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-14": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 33.3,
      "atl": 28.0,
      "tsb": 5.3,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-15": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 32.5,
      "atl": 24.3,
      "tsb": 8.3,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-16": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 32.0,
      "atl": 22.2,
      "tsb": 9.8,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-17": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 31.4,
      "atl": 20.5,
      "tsb": 11.0,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-18": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 36.9,
      "atl": 52.7,
      "tsb": -15.9,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-19": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 36.0,
      "atl": 45.7,
      "tsb": -9.7,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-20": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 35.2,
      "atl": 39.6,
      "tsb": -4.5,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-21": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 36.1,
      "atl": 44.2,
      "tsb": -8.1,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-22": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 35.9,
      "atl": 42.2,
      "tsb": -6.3,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-23": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 35.1,
      "atl": 36.6,
      "tsb": -1.5,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-24": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 35.0,
      "atl": 36.0,
      "tsb": -1.0,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-25": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 34.2,
      "atl": 31.2,
      "tsb": 3.0,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-26": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 35.2,
      "atl": 37.1,
      "tsb": -2.0,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-27": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 34.7,
      "atl": 34.1,
      "tsb": 0.6,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-28": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 34.7,
      "atl": 34.5,
      "tsb": 0.3,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-29": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 33.9,
      "atl": 29.9,
      "tsb": 4.0,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-04-30": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 33.1,
      "atl": 25.9,
      "tsb": 7.2,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-01": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 32.3,
      "atl": 22.4,
      "tsb": 9.9,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-02": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 31.6,
      "atl": 19.5,
      "tsb": 12.1,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-03": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 30.8,
      "atl": 16.9,
      "tsb": 14.0,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-04": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 30.1,
      "atl": 14.6,
      "tsb": 15.5,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-05": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 29.4,
      "atl": 12.7,
      "tsb": 16.7,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-06": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 29.5,
      "atl": 15.4,
      "tsb": 14.1,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-07": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 28.8,
      "atl": 13.3,
      "tsb": 15.5,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-08": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 28.1,
      "atl": 11.6,
      "tsb": 16.5,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-09": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 27.4,
      "atl": 10.0,
      "tsb": 17.4,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-10": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 26.8,
      "atl": 8.7,
      "tsb": 18.1,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-11": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 26.2,
      "atl": 7.5,
      "tsb": 18.6,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-12": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 25.6,
      "atl": 6.5,
      "tsb": 19.0,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-13": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 25.0,
      "atl": 5.7,
      "tsb": 19.3,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-14": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 24.4,
      "atl": 4.9,
      "tsb": 19.5,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-15": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 23.8,
      "atl": 4.3,
      "tsb": 19.5,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-16": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 23.2,
      "atl": 3.7,
      "tsb": 19.5,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-17": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 22.7,
      "atl": 3.2,
      "tsb": 19.5,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-18": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 22.2,
      "atl": 2.8,
      "tsb": 19.4,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-19": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 21.6,
      "atl": 2.4,
      "tsb": 19.2,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-20": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 21.1,
      "atl": 2.1,
      "tsb": 19.0,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-21": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 20.6,
      "atl": 1.8,
      "tsb": 18.8,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-22": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 20.1,
      "atl": 1.6,
      "tsb": 18.6,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-23": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 19.7,
      "atl": 1.4,
      "tsb": 18.3,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-24": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 19.2,
      "atl": 1.2,
      "tsb": 18.0,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-25": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 18.8,
      "atl": 1.0,
      "tsb": 17.7,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-26": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 18.3,
      "atl": 0.9,
      "tsb": 17.4,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-05-27": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 17.9,
      "atl": 0.8,
      "tsb": 17.1,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-18": {
      "resting_hr": 57,
      "sleep_secs": 25320,
      "sleep_h": 7.0,
      "sleep_score": null,
      "steps": 2556,
      "hrv_ms": null,
      "ctl": 25.1,
      "atl": 45.9,
      "tsb": -20.8,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-19": {
      "resting_hr": 62,
      "sleep_secs": 28740,
      "sleep_h": 8.0,
      "sleep_score": null,
      "steps": 6688,
      "hrv_ms": null,
      "ctl": 26.0,
      "atl": 48.3,
      "tsb": -22.3,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-20": {
      "resting_hr": 59,
      "sleep_secs": 25260,
      "sleep_h": 7.0,
      "sleep_score": null,
      "steps": 8224,
      "hrv_ms": null,
      "ctl": 25.4,
      "atl": 41.9,
      "tsb": -16.5,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-21": {
      "resting_hr": 64,
      "sleep_secs": 24960,
      "sleep_h": 6.9,
      "sleep_score": null,
      "steps": 9753,
      "hrv_ms": null,
      "ctl": 29.1,
      "atl": 60.7,
      "tsb": -31.6,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-22": {
      "resting_hr": 60,
      "sleep_secs": 27120,
      "sleep_h": 7.5,
      "sleep_score": null,
      "steps": 688,
      "hrv_ms": null,
      "ctl": 29.5,
      "atl": 58.8,
      "tsb": -29.3,
      "soreness": 1,
      "fatigue": 1,
      "mood": 2
    },
    "2026-06-23": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 28.8,
      "atl": 51.0,
      "tsb": -22.2,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-24": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 28.1,
      "atl": 44.2,
      "tsb": -16.1,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-25": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 27.5,
      "atl": 38.3,
      "tsb": -10.9,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-26": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 28.4,
      "atl": 42.0,
      "tsb": -13.6,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-27": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 27.7,
      "atl": 36.4,
      "tsb": -8.7,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-28": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 27.1,
      "atl": 31.6,
      "tsb": -4.5,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-29": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 26.4,
      "atl": 27.4,
      "tsb": -1.0,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-06-30": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 25.8,
      "atl": 23.7,
      "tsb": 2.1,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-07-01": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 25.2,
      "atl": 20.6,
      "tsb": 4.6,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-07-02": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 24.6,
      "atl": 17.8,
      "tsb": 6.8,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-07-03": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 24.0,
      "atl": 15.5,
      "tsb": 8.6,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-07-04": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 23.5,
      "atl": 13.4,
      "tsb": 10.1,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-07-05": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 22.9,
      "atl": 11.6,
      "tsb": 11.3,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-07-06": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 22.4,
      "atl": 10.1,
      "tsb": 12.3,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-07-07": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 21.8,
      "atl": 8.7,
      "tsb": 13.1,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-07-08": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 21.3,
      "atl": 7.6,
      "tsb": 13.8,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-07-09": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 20.8,
      "atl": 6.6,
      "tsb": 14.3,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-07-10": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 20.1,
      "atl": 5.4,
      "tsb": 14.7,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-07-11": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 19.6,
      "atl": 4.7,
      "tsb": 14.9,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-07-12": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 19.4,
      "atl": 4.3,
      "tsb": 15.1,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-07-13": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 18.7,
      "atl": 3.5,
      "tsb": 15.2,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-07-14": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 18.3,
      "atl": 3.1,
      "tsb": 15.2,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-07-15": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 18.1,
      "atl": 2.8,
      "tsb": 15.3,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-07-16": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 17.6,
      "atl": 2.4,
      "tsb": 15.2,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-07-17": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 17.2,
      "atl": 2.1,
      "tsb": 15.1,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-07-18": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 16.6,
      "atl": 1.7,
      "tsb": 14.9,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-07-19": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 16.4,
      "atl": 1.6,
      "tsb": 14.8,
      "soreness": null,
      "fatigue": null,
      "mood": null
    },
    "2026-07-20": {
      "resting_hr": null,
      "sleep_secs": null,
      "sleep_h": null,
      "sleep_score": null,
      "steps": null,
      "hrv_ms": null,
      "ctl": 15.8,
      "atl": 1.3,
      "tsb": 14.5,
      "soreness": null,
      "fatigue": null,
      "mood": null
    }
  }
};
