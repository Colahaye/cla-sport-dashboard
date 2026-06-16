// ═══════════════════════════════════════════════════════════════
// Sport Data — CLA (Corto Lahaye) — Source de vérité unique
// Généré : 2026-06-08 — Mis à jour : 2026-06-14
// Schéma : v1.0
// ═══════════════════════════════════════════════════════════════

window.SPORT_DATA = {
  "schema_version": "1.0",
  "last_updated": "2026-06-16T19:39:42.000Z",
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
      "id": "2025-12-07-run-easy-i157774119",
      "date": "2025-12-07",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157774119",
      "planned": null,
      "executed": {
        "duration_min": 77,
        "np_w": null,
        "avg_w": null,
        "kj": 186,
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
      "notes": "Importé depuis Intervals.icu — Morning Course à pied"
    },
    {
      "id": "2025-12-09-bike-endurance-i157774047",
      "date": "2025-12-09",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157774047",
      "planned": null,
      "executed": {
        "duration_min": 24,
        "np_w": null,
        "avg_w": null,
        "kj": 57,
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2025-12-09-run-easy-i157774067",
      "date": "2025-12-09",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S3.01",
      "intervals_id": "i157774067",
      "planned": null,
      "executed": {
        "duration_min": 53,
        "np_w": null,
        "avg_w": null,
        "kj": 158,
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
      "notes": "Importé depuis Intervals.icu — 10k - S3.01"
    },
    {
      "id": "2025-12-10-bike-endurance-i157774019",
      "date": "2025-12-10",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Evening Cyclisme",
      "intervals_id": "i157774019",
      "planned": null,
      "executed": {
        "duration_min": 30,
        "np_w": null,
        "avg_w": null,
        "kj": 53,
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
      "notes": "Importé depuis Intervals.icu — Evening Cyclisme"
    },
    {
      "id": "2025-12-11-run-easy-i157774013",
      "date": "2025-12-11",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S3.02",
      "intervals_id": "i157774013",
      "planned": null,
      "executed": {
        "duration_min": 70,
        "np_w": null,
        "avg_w": null,
        "kj": 195,
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
      "notes": "Importé depuis Intervals.icu — 10k - S3.02"
    },
    {
      "id": "2025-12-14-run-easy-i157773935",
      "date": "2025-12-14",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S3.03",
      "intervals_id": "i157773935",
      "planned": null,
      "executed": {
        "duration_min": 75,
        "np_w": null,
        "avg_w": null,
        "kj": 168,
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
      "notes": "Importé depuis Intervals.icu — 10k - S3.03"
    },
    {
      "id": "2025-12-14-bike-endurance-i157773945",
      "date": "2025-12-14",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157773945",
      "planned": null,
      "executed": {
        "duration_min": 59,
        "np_w": null,
        "avg_w": null,
        "kj": 117,
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2025-12-16-run-easy-i157773858",
      "date": "2025-12-16",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S4.01",
      "intervals_id": "i157773858",
      "planned": null,
      "executed": {
        "duration_min": 46,
        "np_w": null,
        "avg_w": null,
        "kj": 115,
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
      "notes": "Importé depuis Intervals.icu — 10k - S4.01"
    },
    {
      "id": "2025-12-18-run-easy-i157773848",
      "date": "2025-12-18",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S4.02",
      "intervals_id": "i157773848",
      "planned": null,
      "executed": {
        "duration_min": 68,
        "np_w": null,
        "avg_w": null,
        "kj": 179,
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
      "notes": "Importé depuis Intervals.icu — 10k - S4.02"
    },
    {
      "id": "2025-12-22-run-easy-i157773796",
      "date": "2025-12-22",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S4.03",
      "intervals_id": "i157773796",
      "planned": null,
      "executed": {
        "duration_min": 63,
        "np_w": null,
        "avg_w": null,
        "kj": 171,
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
      "notes": "Importé depuis Intervals.icu — 10k - S4.03"
    },
    {
      "id": "2025-12-24-run-easy-i157773781",
      "date": "2025-12-24",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S5.01",
      "intervals_id": "i157773781",
      "planned": null,
      "executed": {
        "duration_min": 62,
        "np_w": null,
        "avg_w": null,
        "kj": 179,
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
      "notes": "Importé depuis Intervals.icu — 10k - S5.01"
    },
    {
      "id": "2025-12-26-run-easy-i157773775",
      "date": "2025-12-26",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S5.02",
      "intervals_id": "i157773775",
      "planned": null,
      "executed": {
        "duration_min": 72,
        "np_w": null,
        "avg_w": null,
        "kj": 198,
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
      "notes": "Importé depuis Intervals.icu — 10k - S5.02"
    },
    {
      "id": "2025-12-28-run-easy-i157773764",
      "date": "2025-12-28",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S5.03",
      "intervals_id": "i157773764",
      "planned": null,
      "executed": {
        "duration_min": 90,
        "np_w": null,
        "avg_w": null,
        "kj": 208,
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
      "notes": "Importé depuis Intervals.icu — 10k - S5.03"
    },
    {
      "id": "2025-12-30-run-easy-i157773739",
      "date": "2025-12-30",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S6.01",
      "intervals_id": "i157773739",
      "planned": null,
      "executed": {
        "duration_min": 58,
        "np_w": null,
        "avg_w": null,
        "kj": 160,
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
      "notes": "Importé depuis Intervals.icu — 10k - S6.01"
    },
    {
      "id": "2026-01-02-run-easy-i157773718",
      "date": "2026-01-02",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S6.02",
      "intervals_id": "i157773718",
      "planned": null,
      "executed": {
        "duration_min": 77,
        "np_w": null,
        "avg_w": null,
        "kj": 212,
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
      "notes": "Importé depuis Intervals.icu — 10k - S6.02"
    },
    {
      "id": "2026-01-05-run-easy-i157773702",
      "date": "2026-01-05",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157773702",
      "planned": null,
      "executed": {
        "duration_min": 69,
        "np_w": null,
        "avg_w": null,
        "kj": 171,
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
      "notes": "Importé depuis Intervals.icu — Morning Course à pied"
    },
    {
      "id": "2026-01-07-run-easy-i157773683",
      "date": "2026-01-07",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S7.01",
      "intervals_id": "i157773683",
      "planned": null,
      "executed": {
        "duration_min": 58,
        "np_w": null,
        "avg_w": null,
        "kj": 167,
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
      "notes": "Importé depuis Intervals.icu — 10k - S7.01"
    },
    {
      "id": "2026-01-11-run-easy-i157773563",
      "date": "2026-01-11",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S7.02",
      "intervals_id": "i157773563",
      "planned": null,
      "executed": {
        "duration_min": 63,
        "np_w": null,
        "avg_w": null,
        "kj": 179,
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
      "notes": "Importé depuis Intervals.icu — 10k - S7.02"
    },
    {
      "id": "2026-01-13-run-easy-i157773519",
      "date": "2026-01-13",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157773519",
      "planned": null,
      "executed": {
        "duration_min": 61,
        "np_w": null,
        "avg_w": null,
        "kj": 149,
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
      "notes": "Importé depuis Intervals.icu — Morning Course à pied"
    },
    {
      "id": "2026-01-15-run-easy-i157773476",
      "date": "2026-01-15",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S8.01",
      "intervals_id": "i157773476",
      "planned": null,
      "executed": {
        "duration_min": 44,
        "np_w": null,
        "avg_w": null,
        "kj": 121,
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
      "notes": "Importé depuis Intervals.icu — 10k - S8.01"
    },
    {
      "id": "2026-01-16-bike-endurance-i157773453",
      "date": "2026-01-16",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Afternoon Cyclisme",
      "intervals_id": "i157773453",
      "planned": null,
      "executed": {
        "duration_min": 23,
        "np_w": null,
        "avg_w": null,
        "kj": 45,
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
      "notes": "Importé depuis Intervals.icu — Afternoon Cyclisme"
    },
    {
      "id": "2026-01-18-run-easy-i157773217",
      "date": "2026-01-18",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Lunch Course à pied",
      "intervals_id": "i157773217",
      "planned": null,
      "executed": {
        "duration_min": 53,
        "np_w": null,
        "avg_w": null,
        "kj": 150,
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
      "notes": "Importé depuis Intervals.icu — Lunch Course à pied"
    },
    {
      "id": "2026-01-18-run-easy-i157773225",
      "date": "2026-01-18",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Lunch Course à pied",
      "intervals_id": "i157773225",
      "planned": null,
      "executed": {
        "duration_min": 26,
        "np_w": null,
        "avg_w": null,
        "kj": 76,
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
      "notes": "Importé depuis Intervals.icu — Lunch Course à pied"
    },
    {
      "id": "2026-01-19-bike-endurance-i157773206",
      "date": "2026-01-19",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Evening Cyclisme",
      "intervals_id": "i157773206",
      "planned": null,
      "executed": {
        "duration_min": 27,
        "np_w": null,
        "avg_w": null,
        "kj": 48,
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
      "notes": "Importé depuis Intervals.icu — Evening Cyclisme"
    },
    {
      "id": "2026-01-21-bike-endurance-i157773153",
      "date": "2026-01-21",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Evening Cyclisme",
      "intervals_id": "i157773153",
      "planned": null,
      "executed": {
        "duration_min": 23,
        "np_w": null,
        "avg_w": null,
        "kj": 37,
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
      "notes": "Importé depuis Intervals.icu — Evening Cyclisme"
    },
    {
      "id": "2026-01-22-run-easy-i157773146",
      "date": "2026-01-22",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157773146",
      "planned": null,
      "executed": {
        "duration_min": 57,
        "np_w": null,
        "avg_w": null,
        "kj": 137,
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
      "notes": "Importé depuis Intervals.icu — Morning Course à pied"
    },
    {
      "id": "2026-01-23-run-easy-i157773131",
      "date": "2026-01-23",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157773131",
      "planned": null,
      "executed": {
        "duration_min": 50,
        "np_w": null,
        "avg_w": null,
        "kj": 122,
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
      "notes": "Importé depuis Intervals.icu — Morning Course à pied"
    },
    {
      "id": "2026-01-25-strength-autre-i157773107",
      "date": "2026-01-25",
      "sport": "strength",
      "type": "autre",
      "type_log": "Renforcement",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Snowboard",
      "intervals_id": "i157773107",
      "planned": null,
      "executed": {
        "duration_min": 94,
        "np_w": null,
        "avg_w": null,
        "kj": 89,
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
      "notes": "Importé depuis Intervals.icu — Morning Snowboard"
    },
    {
      "id": "2026-01-26-strength-autre-i157772995",
      "date": "2026-01-26",
      "sport": "strength",
      "type": "autre",
      "type_log": "Renforcement",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Snowboard",
      "intervals_id": "i157772995",
      "planned": null,
      "executed": {
        "duration_min": 98,
        "np_w": null,
        "avg_w": null,
        "kj": 103,
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
      "notes": "Importé depuis Intervals.icu — Morning Snowboard"
    },
    {
      "id": "2026-01-27-strength-autre-i157772982",
      "date": "2026-01-27",
      "sport": "strength",
      "type": "autre",
      "type_log": "Renforcement",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Snowboard",
      "intervals_id": "i157772982",
      "planned": null,
      "executed": {
        "duration_min": 31,
        "np_w": null,
        "avg_w": null,
        "kj": 34,
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
      "notes": "Importé depuis Intervals.icu — Morning Snowboard"
    },
    {
      "id": "2026-01-28-strength-autre-i157772967",
      "date": "2026-01-28",
      "sport": "strength",
      "type": "autre",
      "type_log": "Renforcement",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Afternoon Snowboard",
      "intervals_id": "i157772967",
      "planned": null,
      "executed": {
        "duration_min": 12,
        "np_w": null,
        "avg_w": null,
        "kj": 14,
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
      "notes": "Importé depuis Intervals.icu — Afternoon Snowboard"
    },
    {
      "id": "2026-01-28-strength-autre-i157772975",
      "date": "2026-01-28",
      "sport": "strength",
      "type": "autre",
      "type_log": "Renforcement",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Snowboard",
      "intervals_id": "i157772975",
      "planned": null,
      "executed": {
        "duration_min": 92,
        "np_w": null,
        "avg_w": null,
        "kj": 90,
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
      "notes": "Importé depuis Intervals.icu — Morning Snowboard"
    },
    {
      "id": "2026-01-29-strength-autre-i157772966",
      "date": "2026-01-29",
      "sport": "strength",
      "type": "autre",
      "type_log": "Renforcement",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Snowboard",
      "intervals_id": "i157772966",
      "planned": null,
      "executed": {
        "duration_min": 78,
        "np_w": null,
        "avg_w": null,
        "kj": 72,
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
      "notes": "Importé depuis Intervals.icu — Morning Snowboard"
    },
    {
      "id": "2026-01-30-strength-autre-i157772941",
      "date": "2026-01-30",
      "sport": "strength",
      "type": "autre",
      "type_log": "Renforcement",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Snowboard",
      "intervals_id": "i157772941",
      "planned": null,
      "executed": {
        "duration_min": 110,
        "np_w": null,
        "avg_w": null,
        "kj": 137,
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
      "notes": "Importé depuis Intervals.icu — Morning Snowboard"
    },
    {
      "id": "2026-02-01-run-easy-i157772925",
      "date": "2026-02-01",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157772925",
      "planned": null,
      "executed": {
        "duration_min": 89,
        "np_w": null,
        "avg_w": null,
        "kj": 282,
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
      "notes": "Importé depuis Intervals.icu — Morning Course à pied"
    },
    {
      "id": "2026-02-03-run-easy-i157772914",
      "date": "2026-02-03",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157772914",
      "planned": null,
      "executed": {
        "duration_min": 61,
        "np_w": null,
        "avg_w": null,
        "kj": 150,
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
      "notes": "Importé depuis Intervals.icu — Morning Course à pied"
    },
    {
      "id": "2026-02-06-run-trail-i157772888",
      "date": "2026-02-06",
      "sport": "run",
      "type": "trail",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Lunch Trail",
      "intervals_id": "i157772888",
      "planned": null,
      "executed": {
        "duration_min": 101,
        "np_w": null,
        "avg_w": null,
        "kj": 118,
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
      "notes": "Importé depuis Intervals.icu — Lunch Trail"
    },
    {
      "id": "2026-02-07-run-trail-i157772800",
      "date": "2026-02-07",
      "sport": "run",
      "type": "trail",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Trail",
      "intervals_id": "i157772800",
      "planned": null,
      "executed": {
        "duration_min": 95,
        "np_w": null,
        "avg_w": null,
        "kj": 250,
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
      "notes": "Importé depuis Intervals.icu — Morning Trail"
    },
    {
      "id": "2026-02-08-run-trail-i157772782",
      "date": "2026-02-08",
      "sport": "run",
      "type": "trail",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Trail",
      "intervals_id": "i157772782",
      "planned": null,
      "executed": {
        "duration_min": 88,
        "np_w": null,
        "avg_w": null,
        "kj": 270,
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
      "notes": "Importé depuis Intervals.icu — Morning Trail"
    },
    {
      "id": "2026-02-09-run-trail-i157772773",
      "date": "2026-02-09",
      "sport": "run",
      "type": "trail",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Lunch Trail",
      "intervals_id": "i157772773",
      "planned": null,
      "executed": {
        "duration_min": 203,
        "np_w": null,
        "avg_w": null,
        "kj": 272,
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
      "notes": "Importé depuis Intervals.icu — Lunch Trail"
    },
    {
      "id": "2026-02-10-run-trail-i157772757",
      "date": "2026-02-10",
      "sport": "run",
      "type": "trail",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Trail",
      "intervals_id": "i157772757",
      "planned": null,
      "executed": {
        "duration_min": 98,
        "np_w": null,
        "avg_w": null,
        "kj": 273,
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
      "notes": "Importé depuis Intervals.icu — Morning Trail"
    },
    {
      "id": "2026-02-13-strength-autre-i157772732",
      "date": "2026-02-13",
      "sport": "strength",
      "type": "autre",
      "type_log": "Renforcement",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Lunch Snowboard",
      "intervals_id": "i157772732",
      "planned": null,
      "executed": {
        "duration_min": 97,
        "np_w": null,
        "avg_w": null,
        "kj": 89,
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
      "notes": "Importé depuis Intervals.icu — Lunch Snowboard"
    },
    {
      "id": "2026-02-14-strength-autre-i157772700",
      "date": "2026-02-14",
      "sport": "strength",
      "type": "autre",
      "type_log": "Renforcement",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Snowboard",
      "intervals_id": "i157772700",
      "planned": null,
      "executed": {
        "duration_min": 121,
        "np_w": null,
        "avg_w": null,
        "kj": 136,
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
      "notes": "Importé depuis Intervals.icu — Morning Snowboard"
    },
    {
      "id": "2026-02-15-strength-autre-i157772689",
      "date": "2026-02-15",
      "sport": "strength",
      "type": "autre",
      "type_log": "Renforcement",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Snowboard",
      "intervals_id": "i157772689",
      "planned": null,
      "executed": {
        "duration_min": 111,
        "np_w": null,
        "avg_w": null,
        "kj": 133,
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
      "notes": "Importé depuis Intervals.icu — Morning Snowboard"
    },
    {
      "id": "2026-02-20-run-easy-i157772684",
      "date": "2026-02-20",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157772684",
      "planned": null,
      "executed": {
        "duration_min": 60,
        "np_w": null,
        "avg_w": null,
        "kj": 167,
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
      "notes": "Importé depuis Intervals.icu — Morning Course à pied"
    },
    {
      "id": "2026-02-21-run-trail-i157772629",
      "date": "2026-02-21",
      "sport": "run",
      "type": "trail",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Trail",
      "intervals_id": "i157772629",
      "planned": null,
      "executed": {
        "duration_min": 410,
        "np_w": null,
        "avg_w": null,
        "kj": 891,
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
      "notes": "Importé depuis Intervals.icu — Morning Trail"
    },
    {
      "id": "2026-02-28-bike-endurance-i157772539",
      "date": "2026-02-28",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157772539",
      "planned": null,
      "executed": {
        "duration_min": 231,
        "np_w": null,
        "avg_w": null,
        "kj": 567,
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-03-01-bike-endurance-i157772526",
      "date": "2026-03-01",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Lunch Cyclisme",
      "intervals_id": "i157772526",
      "planned": null,
      "executed": {
        "duration_min": 74,
        "np_w": null,
        "avg_w": null,
        "kj": 112,
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
      "notes": "Importé depuis Intervals.icu — Lunch Cyclisme"
    },
    {
      "id": "2026-03-02-bike-endurance-i157772520",
      "date": "2026-03-02",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157772520",
      "planned": null,
      "executed": {
        "duration_min": 25,
        "np_w": null,
        "avg_w": null,
        "kj": 46,
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-03-03-run-easy-i157772502",
      "date": "2026-03-03",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157772502",
      "planned": null,
      "executed": {
        "duration_min": 56,
        "np_w": null,
        "avg_w": null,
        "kj": 141,
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
      "notes": "Importé depuis Intervals.icu — Morning Course à pied"
    },
    {
      "id": "2026-03-05-run-easy-i157772145",
      "date": "2026-03-05",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157772145",
      "planned": null,
      "executed": {
        "duration_min": 58,
        "np_w": null,
        "avg_w": null,
        "kj": 151,
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
      "notes": "Importé depuis Intervals.icu — Morning Course à pied"
    },
    {
      "id": "2026-03-07-run-easy-i157772086",
      "date": "2026-03-07",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Afternoon Course à pied",
      "intervals_id": "i157772086",
      "planned": null,
      "executed": {
        "duration_min": 79,
        "np_w": null,
        "avg_w": null,
        "kj": 192,
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
      "notes": "Importé depuis Intervals.icu — Afternoon Course à pied"
    },
    {
      "id": "2026-03-08-bike-endurance-i157772078",
      "date": "2026-03-08",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157772078",
      "planned": null,
      "executed": {
        "duration_min": 148,
        "np_w": null,
        "avg_w": null,
        "kj": 354,
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-03-09-bike-endurance-i157772039",
      "date": "2026-03-09",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157772039",
      "planned": null,
      "executed": {
        "duration_min": 22,
        "np_w": null,
        "avg_w": null,
        "kj": 37,
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-03-10-bike-endurance-i157772009",
      "date": "2026-03-10",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Lunch Cyclisme",
      "intervals_id": "i157772009",
      "planned": null,
      "executed": {
        "duration_min": 33,
        "np_w": null,
        "avg_w": null,
        "kj": 56,
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
      "notes": "Importé depuis Intervals.icu — Lunch Cyclisme"
    },
    {
      "id": "2026-03-10-run-easy-i157772015",
      "date": "2026-03-10",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157772015",
      "planned": null,
      "executed": {
        "duration_min": 54,
        "np_w": null,
        "avg_w": null,
        "kj": 134,
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
      "notes": "Importé depuis Intervals.icu — Morning Course à pied"
    },
    {
      "id": "2026-03-11-bike-endurance-i157771981",
      "date": "2026-03-11",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Evening Cyclisme",
      "intervals_id": "i157771981",
      "planned": null,
      "executed": {
        "duration_min": 70,
        "np_w": null,
        "avg_w": null,
        "kj": 119,
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
      "notes": "Importé depuis Intervals.icu — Evening Cyclisme"
    },
    {
      "id": "2026-03-12-run-easy-i157771955",
      "date": "2026-03-12",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "10k - S1.02",
      "intervals_id": "i157771955",
      "planned": null,
      "executed": {
        "duration_min": 65,
        "np_w": null,
        "avg_w": null,
        "kj": 154,
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
      "notes": "Importé depuis Intervals.icu — 10k - S1.02"
    },
    {
      "id": "2026-03-16-bike-endurance-i157771907",
      "date": "2026-03-16",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771907",
      "planned": null,
      "executed": {
        "duration_min": 65,
        "np_w": null,
        "avg_w": null,
        "kj": 131,
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-03-17-run-easy-i157771847",
      "date": "2026-03-17",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "21 - S1 - Vma",
      "intervals_id": "i157771847",
      "planned": null,
      "executed": {
        "duration_min": 65,
        "np_w": null,
        "avg_w": null,
        "kj": 159,
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
      "notes": "Importé depuis Intervals.icu — 21 - S1 - Vma"
    },
    {
      "id": "2026-03-20-bike-endurance-i157771799",
      "date": "2026-03-20",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Lunch Cyclisme",
      "intervals_id": "i157771799",
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
      "notes": "Importé depuis Intervals.icu — Lunch Cyclisme"
    },
    {
      "id": "2026-03-22-bike-endurance-i157771707",
      "date": "2026-03-22",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Afternoon Cyclisme",
      "intervals_id": "i157771707",
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
      "notes": "Importé depuis Intervals.icu — Afternoon Cyclisme"
    },
    {
      "id": "2026-03-22-bike-endurance-i157771716",
      "date": "2026-03-22",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Lunch Cyclisme",
      "intervals_id": "i157771716",
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
      "notes": "Importé depuis Intervals.icu — Lunch Cyclisme"
    },
    {
      "id": "2026-03-24-run-easy-i157771654",
      "date": "2026-03-24",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "21 - S2 - Vma1",
      "intervals_id": "i157771654",
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
      "notes": "Importé depuis Intervals.icu — 21 - S2 - Vma1"
    },
    {
      "id": "2026-03-25-bike-endurance-i157771621",
      "date": "2026-03-25",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Evening Cyclisme",
      "intervals_id": "i157771621",
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
      "notes": "Importé depuis Intervals.icu — Evening Cyclisme"
    },
    {
      "id": "2026-03-26-bike-endurance-i157771616",
      "date": "2026-03-26",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771616",
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-03-27-bike-endurance-i157771585",
      "date": "2026-03-27",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771585",
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-03-27-bike-endurance-i157771613",
      "date": "2026-03-27",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771613",
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-03-29-bike-endurance-i157771580",
      "date": "2026-03-29",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771580",
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-03-30-bike-endurance-i157771222",
      "date": "2026-03-30",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771222",
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-04-01-bike-endurance-i157771218",
      "date": "2026-04-01",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771218",
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-04-02-bike-endurance-i157771213",
      "date": "2026-04-02",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771213",
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-04-04-bike-endurance-i157771186",
      "date": "2026-04-04",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Evening Cyclisme",
      "intervals_id": "i157771186",
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
      "notes": "Importé depuis Intervals.icu — Evening Cyclisme"
    },
    {
      "id": "2026-04-06-run-easy-i157771173",
      "date": "2026-04-06",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157771173",
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
      "notes": "Importé depuis Intervals.icu — Morning Course à pied"
    },
    {
      "id": "2026-04-08-bike-endurance-i157771115",
      "date": "2026-04-08",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771115",
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-04-09-run-easy-i157771112",
      "date": "2026-04-09",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157771112",
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
      "notes": "Importé depuis Intervals.icu — Morning Course à pied"
    },
    {
      "id": "2026-04-10-bike-endurance-i157771066",
      "date": "2026-04-10",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Evening Cyclisme",
      "intervals_id": "i157771066",
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
      "notes": "Importé depuis Intervals.icu — Evening Cyclisme"
    },
    {
      "id": "2026-04-11-bike-endurance-i157771055",
      "date": "2026-04-11",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771055",
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-04-12-bike-endurance-i157771047",
      "date": "2026-04-12",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Afternoon Cyclisme",
      "intervals_id": "i157771047",
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
      "notes": "Importé depuis Intervals.icu — Afternoon Cyclisme"
    },
    {
      "id": "2026-04-14-bike-endurance-i157771042",
      "date": "2026-04-14",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771042",
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-04-16-bike-endurance-i157771037",
      "date": "2026-04-16",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771037",
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-04-17-bike-endurance-i157771024",
      "date": "2026-04-17",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157771024",
      "planned": null,
      "executed": {
        "duration_min": 20,
        "np_w": null,
        "avg_w": null,
        "kj": 36,
        "hr_avg": 120,
        "hr_max": 151,
        "tss": 9,
        "distance_m": 7115,
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-04-18-bike-endurance-i157771019",
      "date": "2026-04-18",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Lunch Cyclisme",
      "intervals_id": "i157771019",
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
      "notes": "Importé depuis Intervals.icu — Lunch Cyclisme"
    },
    {
      "id": "2026-04-21-bike-endurance-i157770814",
      "date": "2026-04-21",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157770814",
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-04-22-bike-endurance-i157770782",
      "date": "2026-04-22",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157770782",
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-04-24-bike-endurance-i157770768",
      "date": "2026-04-24",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157770768",
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-04-26-bike-endurance-i157770741",
      "date": "2026-04-26",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157770741",
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-04-27-bike-endurance-i157770708",
      "date": "2026-04-27",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157770708",
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-04-28-bike-endurance-i157770693",
      "date": "2026-04-28",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Cyclisme",
      "intervals_id": "i157770693",
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
      "notes": "Importé depuis Intervals.icu — Morning Cyclisme"
    },
    {
      "id": "2026-04-28-run-easy-i157770700",
      "date": "2026-04-28",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157770700",
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
      "notes": "Importé depuis Intervals.icu — Morning Course à pied"
    },
    {
      "id": "2026-05-06-run-easy-i157770636",
      "date": "2026-05-06",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "done",
      "source": "intervals_icu",
      "strava_activity_name": "Morning Course à pied",
      "intervals_id": "i157770636",
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
      "notes": "Importé depuis Intervals.icu — Morning Course à pied"
    },
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
