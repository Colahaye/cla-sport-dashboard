// ═══════════════════════════════════════════════════════════════
// Sport Data — CLA (Corto Lahaye) — Source de vérité unique
// Généré : 2026-06-08
// Schéma : v1.0 — fork de l'architecture LSO
// ═══════════════════════════════════════════════════════════════
// Édition : Claude met à jour ce fichier après chaque séance.
// Format  : window.SPORT_DATA = <objet JSON pur>
// Le viewer (training_log.html) charge ce fichier via balise script externe.
// Fonctionne en file:// (pas de CORS).
// ═══════════════════════════════════════════════════════════════
// Intégration Strava prévue (future) :
//   - Wahoo ELEMNT sync → Strava (capteur puissance vélo)
//   - Garmin Forerunner sync → Strava (courses à pied)
//   - API Strava = source live unique (OAuth2 à câbler côté serveur)
// ═══════════════════════════════════════════════════════════════

window.SPORT_DATA = {
  "schema_version": "1.0",
  "last_updated": "2026-06-14T16:41:03.000Z",
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
      "status": "upcoming",
      "notes": "Effort continu Z3-Z4 ~1h10. Sortie vélo principale 2026."
    }
  ],
  "phases": [
    {
      "name": "Peak CLM",
      "start_date": "2026-06-08",
      "end_date": "2026-06-13",
      "focus": "Affûtage pré-compétition. Volume faible, qualité maintenue.",
      "key_constraints": [
        "Pas de séance vélo intensive J-3 et J-2",
        "Activation légère J-1"
      ]
    },
    {
      "name": "Récupération & Transition",
      "start_date": "2026-06-14",
      "end_date": "2026-06-28",
      "focus": "Récupération post-CLM. Reprise progressive run + renfo.",
      "key_constraints": []
    },
    {
      "name": "Post-CLM Récupération",
      "start_date": "2026-06-14",
      "end_date": "2026-06-28",
      "focus": "Récupération active post-CLM. Reprise progressive run + renfo.",
      "key_constraints": []
    },
    {
      "name": "Ardèche — Charge minimale",
      "start_date": "2026-06-29",
      "end_date": "2026-07-26",
      "focus": "Chantier grosses journées. 2 matins running max/sem. Trail weekends.",
      "key_constraints": [
        "Hydratation++",
        "Pas de renfo en semaine"
      ]
    },
    {
      "name": "Reprise structurée",
      "start_date": "2026-07-27",
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
  "renforcement": {
    "note": "Programme de renforcement musculaire par type de journée. Anti-fasciite plantaire intégré.",
    "programmes": {
      "REPOS": {
        "label": "Jour repos — gainage léger",
        "duree_min": 20,
        "exercices": [
          {
            "nom": "Planche frontale",
            "sets": 3,
            "reps": "45 sec",
            "note": "Core stabilité"
          },
          {
            "nom": "Planche latérale",
            "sets": 2,
            "reps": "30 sec / côté"
          },
          {
            "nom": "Bird-dog",
            "sets": 3,
            "reps": "10 / côté"
          },
          {
            "nom": "Étirements mollets (anti-fasciite)",
            "sets": 1,
            "reps": "3 min",
            "note": "Debout + assis, pied flex"
          }
        ]
      },
      "RUN_COURT": {
        "label": "Après running court — fessiers + mollets",
        "duree_min": 15,
        "exercices": [
          {
            "nom": "Montées de talons excentriques",
            "sets": 3,
            "reps": "15 (descente lente 3 sec)",
            "note": "Clé anti-fasciite"
          },
          {
            "nom": "Abducteur debout avec bande",
            "sets": 3,
            "reps": "15 / côté",
            "note": "Fessier médian"
          },
          {
            "nom": "Fentes marche",
            "sets": 2,
            "reps": "10 / côté"
          },
          {
            "nom": "Roulement voûte plantaire",
            "sets": 1,
            "reps": "90 sec / pied",
            "note": "Balle de tennis"
          }
        ]
      },
      "RUN_LONG": {
        "label": "Après running long — récupération guidée",
        "duree_min": 10,
        "exercices": [
          {
            "nom": "Montées de talons excentriques (léger)",
            "sets": 2,
            "reps": "10",
            "note": "Doux — charge minimale"
          },
          {
            "nom": "Étirements quadriceps",
            "sets": 1,
            "reps": "2 min / côté"
          },
          {
            "nom": "Étirements mollets profonds",
            "sets": 1,
            "reps": "2 min / côté"
          },
          {
            "nom": "Roulement voûte plantaire",
            "sets": 1,
            "reps": "2 min / pied"
          }
        ]
      },
      "VELO": {
        "label": "Après vélo — squat + hanche",
        "duree_min": 20,
        "exercices": [
          {
            "nom": "Squat unijambiste (pistol assisté)",
            "sets": 3,
            "reps": "8 / côté",
            "note": "Genou aligné, dos droit"
          },
          {
            "nom": "Hip thrust",
            "sets": 3,
            "reps": "12",
            "note": "Fessiers — transfert puissance vélo"
          },
          {
            "nom": "Copenhagen plank",
            "sets": 2,
            "reps": "20 sec / côté",
            "note": "Adducteurs"
          },
          {
            "nom": "Montées de talons excentriques",
            "sets": 3,
            "reps": "12"
          }
        ]
      },
      "RENFO_COMPLET": {
        "label": "Séance renforcement dédiée",
        "duree_min": 45,
        "exercices": [
          {
            "nom": "Squat goblet",
            "sets": 4,
            "reps": "10",
            "note": "Progression vers squat barre"
          },
          {
            "nom": "Hip thrust",
            "sets": 4,
            "reps": "12"
          },
          {
            "nom": "Fentes bulgares",
            "sets": 3,
            "reps": "8 / côté"
          },
          {
            "nom": "Soulevé de terre roumain",
            "sets": 3,
            "reps": "10"
          },
          {
            "nom": "Planche frontale",
            "sets": 3,
            "reps": "60 sec"
          },
          {
            "nom": "Copenhagen plank",
            "sets": 3,
            "reps": "25 sec / côté"
          },
          {
            "nom": "Montées de talons excentriques",
            "sets": 3,
            "reps": "15"
          },
          {
            "nom": "Roulement voûte plantaire",
            "sets": 1,
            "reps": "2 min / pied"
          }
        ]
      },
      "CLM_ACTIVATION": {
        "label": "J-1 course — activation légère uniquement",
        "duree_min": 10,
        "exercices": [
          {
            "nom": "Fentes légères",
            "sets": 2,
            "reps": "8 / côté",
            "note": "Amplitude réduite"
          },
          {
            "nom": "Activation fessiers debout",
            "sets": 2,
            "reps": "15",
            "note": "Bande élastique"
          },
          {
            "nom": "Rotation hanches",
            "sets": 1,
            "reps": "10 tours / sens"
          }
        ]
      }
    }
  },
  "sessions": [
    {
      "id": "2026-06-02-bike-endurance",
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
      "id": "2026-06-04-bike-endurance",
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
      "id": "2026-06-04-run-easy",
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
      "id": "2026-06-05-bike-endurance",
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
      "id": "2026-06-06-bike-endurance",
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
      "id": "2026-06-07-strength-autre",
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
      "id": "2026-06-09-run-easy",
      "date": "2026-06-09",
      "week_id": "2026-06",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z1/Z2 léger",
        "duration_min": 30,
        "description": "30 min, FC < 155 bpm, terrain plat",
        "primary_zone": "Z1-Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-09-bike-endurance",
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
      "id": "2026-06-09-bike-endurance",
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
      "id": "2026-06-09-bike-endurance",
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
      "id": "2026-06-10-bike-activation",
      "date": "2026-06-10",
      "week_id": "2026-06",
      "sport": "bike",
      "type": "activation",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Vélo activation 2×8' Z3",
        "duration_min": 60,
        "description": "1h dont 2×8 min Z3 — garder les jambes vives",
        "primary_zone": "Z3"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-12-bike-activation",
      "date": "2026-06-12",
      "week_id": "2026-06",
      "sport": "bike",
      "type": "activation",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Vélo sprint veille CLM",
        "duration_min": 30,
        "description": "30 min dont 3×2 min allure CLM + récup 3 min",
        "primary_zone": "Z4"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-13-bike-race",
      "date": "2026-06-13",
      "week_id": "2026-06-08",
      "sport": "bike",
      "type": "race",
      "type_log": "Course",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "BCF CLM en équipe ~50 km",
        "description": "Contre-la-montre en équipe. Effort Z3-Z4 soutenu ~1h10. Échauffement 20 min progressif avant départ.",
        "duration_min": 90,
        "distance_m": 50000,
        "primary_zone": "Z3-Z4",
        "plan_workout_id": "bcf-clm-2026"
      },
      "executed": null,
      "notes": "Objectif A 2026 — BCF CLM en équipe"
    },
    {
      "id": "2026-06-16-run-easy",
      "date": "2026-06-16",
      "week_id": "2026-06",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z1 récup",
        "duration_min": 30,
        "description": "30 min très léger, FC < 152 bpm",
        "primary_zone": "Z1"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-17-bike-recovery",
      "date": "2026-06-17",
      "week_id": "2026-06",
      "sport": "bike",
      "type": "recovery",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Vélo récup Z1",
        "duration_min": 60,
        "description": "1h Z1, FC < 140 bpm, cadence élevée",
        "primary_zone": "Z1"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-18-strength-renfo",
      "date": "2026-06-18",
      "week_id": "2026-06",
      "sport": "strength",
      "type": "renfo",
      "type_log": "Renforcement",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Renfo A léger",
        "duration_min": 30,
        "description": "30 min, intensité réduite",
        "primary_zone": null
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-20-run-easy",
      "date": "2026-06-20",
      "week_id": "2026-06",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z2",
        "duration_min": 60,
        "description": "60 min, FC 152-162 bpm",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-21-bike-endurance",
      "date": "2026-06-21",
      "week_id": "2026-06",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Vélo Z2",
        "duration_min": 120,
        "description": "2h, FC < 155 bpm",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-22-strength-renfo",
      "date": "2026-06-22",
      "week_id": "2026-06",
      "sport": "strength",
      "type": "renfo",
      "type_log": "Renforcement",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Renfo A",
        "duration_min": 40,
        "description": "40 min",
        "primary_zone": null
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-23-run-easy",
      "date": "2026-06-23",
      "week_id": "2026-06",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z2",
        "duration_min": 50,
        "description": "50 min",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-24-bike-endurance",
      "date": "2026-06-24",
      "week_id": "2026-06",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Vélo Z2",
        "duration_min": 120,
        "description": "2h, FC < 155 bpm",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-25-run-easy",
      "date": "2026-06-25",
      "week_id": "2026-06",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z2",
        "duration_min": 45,
        "description": "45 min",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-26-strength-renfo",
      "date": "2026-06-26",
      "week_id": "2026-06",
      "sport": "strength",
      "type": "renfo",
      "type_log": "Renforcement",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Renfo B",
        "duration_min": 30,
        "description": "30 min",
        "primary_zone": "None"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-06-30-run-easy",
      "date": "2026-06-30",
      "week_id": "2026-06",
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
      "week_id": "2026-07",
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
      "week_id": "2026-07",
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
      "id": "2026-07-05-run-easy",
      "date": "2026-07-05",
      "week_id": "2026-07",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z2 ou repos",
        "duration_min": 45,
        "description": "45 min Z2 OU repos selon fatigue",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-07-07-run-easy",
      "date": "2026-07-07",
      "week_id": "2026-07",
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
      "week_id": "2026-07",
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
      "week_id": "2026-07",
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
      "id": "2026-07-12-run-easy",
      "date": "2026-07-12",
      "week_id": "2026-07",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z2 ou repos",
        "duration_min": 50,
        "description": "50 min OU repos",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-07-14-run-easy",
      "date": "2026-07-14",
      "week_id": "2026-07",
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
      "week_id": "2026-07",
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
      "week_id": "2026-07",
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
      "id": "2026-07-19-run-easy",
      "date": "2026-07-19",
      "week_id": "2026-07",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z2 ou repos",
        "duration_min": 50,
        "description": "50 min OU repos",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-07-21-run-easy",
      "date": "2026-07-21",
      "week_id": "2026-07",
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
      "week_id": "2026-07",
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
      "week_id": "2026-07",
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
      "week_id": "2026-07",
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
    },
    {
      "id": "2026-07-29-bike-endurance",
      "date": "2026-07-29",
      "week_id": "2026-07",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Vélo Z2",
        "duration_min": 90,
        "description": "1h30, remettre les jambes en selle",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-07-30-run-easy",
      "date": "2026-07-30",
      "week_id": "2026-07",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z2",
        "duration_min": 40,
        "description": "40 min",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-07-31-strength-renfo",
      "date": "2026-07-31",
      "week_id": "2026-07",
      "sport": "strength",
      "type": "renfo",
      "type_log": "Renforcement",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Renfo B",
        "duration_min": 30,
        "description": "30 min",
        "primary_zone": null
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-01-run-long",
      "date": "2026-08-01",
      "week_id": "2026-08",
      "sport": "run",
      "type": "long",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Longue running",
        "duration_min": 65,
        "description": "65 min Z2",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-02-bike-endurance",
      "date": "2026-08-02",
      "week_id": "2026-08",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Vélo Z2",
        "duration_min": 120,
        "description": "2h Z2",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-03-strength-renfo",
      "date": "2026-08-03",
      "week_id": "2026-08",
      "sport": "strength",
      "type": "renfo",
      "type_log": "Renforcement",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Renfo A",
        "duration_min": 40,
        "description": "40 min",
        "primary_zone": null
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-04-run-easy",
      "date": "2026-08-04",
      "week_id": "2026-08",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z2",
        "duration_min": 50,
        "description": "50 min",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-05-bike-endurance",
      "date": "2026-08-05",
      "week_id": "2026-08",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Vélo Z2",
        "duration_min": 120,
        "description": "2h, FC < 155 bpm",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-06-run-easy",
      "date": "2026-08-06",
      "week_id": "2026-08",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z2",
        "duration_min": 45,
        "description": "45 min",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-07-strength-renfo",
      "date": "2026-08-07",
      "week_id": "2026-08",
      "sport": "strength",
      "type": "renfo",
      "type_log": "Renforcement",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Renfo B",
        "duration_min": 30,
        "description": "30 min",
        "primary_zone": null
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-08-run-long",
      "date": "2026-08-08",
      "week_id": "2026-08",
      "sport": "run",
      "type": "long",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Longue running",
        "duration_min": 75,
        "description": "75 min Z2",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-09-bike-endurance",
      "date": "2026-08-09",
      "week_id": "2026-08",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Vélo Z2",
        "duration_min": 150,
        "description": "2h30 Z2",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-10-strength-renfo",
      "date": "2026-08-10",
      "week_id": "2026-08",
      "sport": "strength",
      "type": "renfo",
      "type_log": "Renforcement",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Renfo A",
        "duration_min": 40,
        "description": "40 min",
        "primary_zone": null
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-11-run-easy",
      "date": "2026-08-11",
      "week_id": "2026-08",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z2",
        "duration_min": 50,
        "description": "50 min",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-12-bike-endurance",
      "date": "2026-08-12",
      "week_id": "2026-08",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Vélo Z2",
        "duration_min": 120,
        "description": "2h",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-13-run-quality",
      "date": "2026-08-13",
      "week_id": "2026-08",
      "sport": "run",
      "type": "quality",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running qualité 3×8' Z3",
        "duration_min": 65,
        "description": "Échauff 15' + 3×8' Z3 (FC 169-178) + récup 3' + retour 10'",
        "primary_zone": "Z3"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-14-strength-renfo",
      "date": "2026-08-14",
      "week_id": "2026-08",
      "sport": "strength",
      "type": "renfo",
      "type_log": "Renforcement",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Renfo B",
        "duration_min": 30,
        "description": "30 min",
        "primary_zone": null
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-15-run-long",
      "date": "2026-08-15",
      "week_id": "2026-08",
      "sport": "run",
      "type": "long",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Longue running",
        "duration_min": 80,
        "description": "80 min Z2",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-16-bike-endurance",
      "date": "2026-08-16",
      "week_id": "2026-08",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Vélo long",
        "duration_min": 165,
        "description": "2h30-3h Z2",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-17-strength-renfo",
      "date": "2026-08-17",
      "week_id": "2026-08",
      "sport": "strength",
      "type": "renfo",
      "type_log": "Renforcement",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Renfo A",
        "duration_min": 40,
        "description": "40 min",
        "primary_zone": null
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-18-run-easy",
      "date": "2026-08-18",
      "week_id": "2026-08",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z2",
        "duration_min": 55,
        "description": "55 min",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-19-bike-tempo",
      "date": "2026-08-19",
      "week_id": "2026-08",
      "sport": "bike",
      "type": "tempo",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Vélo intensité 3×10' Z3",
        "duration_min": 120,
        "description": "2h dont 3×10 min Z3 (FC 158-170), récup 5 min",
        "primary_zone": "Z3"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-20-run-easy",
      "date": "2026-08-20",
      "week_id": "2026-08",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z2",
        "duration_min": 45,
        "description": "45 min",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-21-strength-renfo",
      "date": "2026-08-21",
      "week_id": "2026-08",
      "sport": "strength",
      "type": "renfo",
      "type_log": "Renforcement",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Renfo B",
        "duration_min": 30,
        "description": "30 min",
        "primary_zone": null
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-22-run-long",
      "date": "2026-08-22",
      "week_id": "2026-08",
      "sport": "run",
      "type": "long",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Longue running",
        "duration_min": 85,
        "description": "85 min Z2",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-23-bike-endurance",
      "date": "2026-08-23",
      "week_id": "2026-08",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Vélo long",
        "duration_min": 180,
        "description": "3h Z2",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-24-strength-renfo",
      "date": "2026-08-24",
      "week_id": "2026-08",
      "sport": "strength",
      "type": "renfo",
      "type_log": "Renforcement",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Renfo A",
        "duration_min": 40,
        "description": "40 min",
        "primary_zone": null
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-25-run-easy",
      "date": "2026-08-25",
      "week_id": "2026-08",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z2",
        "duration_min": 55,
        "description": "55 min",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-26-bike-endurance",
      "date": "2026-08-26",
      "week_id": "2026-08",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Vélo Z2",
        "duration_min": 120,
        "description": "2h",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-27-run-quality",
      "date": "2026-08-27",
      "week_id": "2026-08",
      "sport": "run",
      "type": "quality",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running seuil 4×8' Z3/Z4",
        "duration_min": 70,
        "description": "Échauff 15' + 4×8' Z3/Z4 (FC 175-185) + récup 3'",
        "primary_zone": "Z4"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-28-strength-renfo",
      "date": "2026-08-28",
      "week_id": "2026-08",
      "sport": "strength",
      "type": "renfo",
      "type_log": "Renforcement",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Renfo B",
        "duration_min": 30,
        "description": "30 min",
        "primary_zone": null
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-29-run-long",
      "date": "2026-08-29",
      "week_id": "2026-08",
      "sport": "run",
      "type": "long",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Longue running",
        "duration_min": 90,
        "description": "90 min Z2",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-30-bike-endurance",
      "date": "2026-08-30",
      "week_id": "2026-08",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Vélo long",
        "duration_min": 180,
        "description": "3h Z2",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-08-31-strength-renfo",
      "date": "2026-08-31",
      "week_id": "2026-08",
      "sport": "strength",
      "type": "renfo",
      "type_log": "Renforcement",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Renfo A",
        "duration_min": 40,
        "description": "40 min",
        "primary_zone": null
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-09-01-run-easy",
      "date": "2026-09-01",
      "week_id": "2026-09",
      "sport": "run",
      "type": "easy",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running Z2",
        "duration_min": 55,
        "description": "55 min",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-09-02-bike-endurance",
      "date": "2026-09-02",
      "week_id": "2026-09",
      "sport": "bike",
      "type": "endurance",
      "type_log": "Vélo",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Vélo Z2",
        "duration_min": 120,
        "description": "2h",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-09-03-run-quality",
      "date": "2026-09-03",
      "week_id": "2026-09",
      "sport": "run",
      "type": "quality",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Running qualité 4×8' Z3",
        "duration_min": 70,
        "description": "Échauff 15' + 4×8' Z3 (FC 169-178) + récup 3'",
        "primary_zone": "Z3"
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-09-04-strength-renfo",
      "date": "2026-09-04",
      "week_id": "2026-09",
      "sport": "strength",
      "type": "renfo",
      "type_log": "Renforcement",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Renfo B",
        "duration_min": 30,
        "description": "30 min",
        "primary_zone": null
      },
      "executed": null,
      "notes": null
    },
    {
      "id": "2026-09-05-run-long",
      "date": "2026-09-05",
      "week_id": "2026-09",
      "sport": "run",
      "type": "long",
      "type_log": "Course à pied",
      "status": "planned",
      "source": "plan_generated",
      "planned": {
        "name": "Longue running",
        "duration_min": 90,
        "description": "90 min Z2 — dernière séance avant voyage",
        "primary_zone": "Z2"
      },
      "executed": null,
      "notes": null
    }
  ],
  "current_plan": {
    "id": "cla-2026-juin",
    "html_path": "Plan_CLA/plan_CLA_2026-06.html",
    "event": "BCF CLM en équipe",
    "event_date": "2026-06-13",
    "plan_start_date": "2026-06-08",
    "plan_end_date": "2026-06-13"
  },
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
