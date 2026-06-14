// ═══════════════════════════════════════════════════════════════
// Recettes CLA — Base de données structurée
// Source : Recettes.md (recettes avec ingrédients complets uniquement)
// Format : window.RECETTES_DATA
// ═══════════════════════════════════════════════════════════════
// Tags training :
//   REPOS    → repos/renfo · glucides 100-120g/j
//   RUNNING_COURT → running court 35-50 min · glucides 160-180g/j
//   RUNNING_LONG  → running long 70-90 min · glucides 260-280g/j
//   VELO          → longue vélo 2h30+ · glucides 310-350g/j
//   UNIVERSEL     → tous les jours (ajuster portion)
// Moments : "midi" | "soir" | "midi_soir"
// ═══════════════════════════════════════════════════════════════

window.RECETTES_DATA = {
  "schema_version": "1.0",
  "last_updated": "2026-06-08T14:25:03.000Z",
  "petit_dejeuner_fixe": {
    "semaine": {
      "nom": "Œufs + bacon/lardons",
      "macros": {
        "proteines": 25,
        "glucides": 2,
        "lipides": 18,
        "kcal": 270
      },
      "ingredients_semaine_2pers": [
        {
          "nom": "Œufs",
          "quantite": 42,
          "unite": "pièces",
          "categorie": "proteines"
        },
        {
          "nom": "Bacon / lardons",
          "quantite": 420,
          "unite": "g",
          "categorie": "proteines"
        },
        {
          "nom": "Huile d'olive ou beurre",
          "quantite": 1,
          "unite": "cs",
          "categorie": "matiere_grasse"
        }
      ]
    },
    "weekend": {
      "nom": "Tartines + pâte à tartiner",
      "macros": {
        "proteines": 8,
        "glucides": 55,
        "lipides": 18,
        "kcal": 410
      },
      "ingredients_weekend_2pers": [
        {
          "nom": "Pain de mie ou baguette",
          "quantite": 200,
          "unite": "g",
          "categorie": "feculent"
        },
        {
          "nom": "Pâte à tartiner",
          "quantite": 60,
          "unite": "g",
          "categorie": "condiment"
        }
      ]
    }
  },
  "recettes": [
    {
      "id": "poulet-skyr-citron",
      "nom": "Poulet mariné skyr-citron-épices",
      "source": "Base maison",
      "moments": [
        "midi",
        "soir"
      ],
      "tags": [
        "UNIVERSEL"
      ],
      "temps_prep_min": 45,
      "portions": 2,
      "macros": {
        "proteines": 42,
        "glucides": 8,
        "lipides": 14,
        "kcal": 320
      },
      "note_adaptation": "Ajouter riz selon le jour (voir ci-dessous)",
      "adaptations": {
        "REPOS": "Légumes rôtis + salade",
        "RUNNING_LONG": "+ 180g riz basmati cuit",
        "VELO": "+ 250g riz + pain"
      },
      "ingredients": [
        {
          "nom": "Blancs de poulet",
          "quantite": 300,
          "unite": "g",
          "categorie": "proteines"
        },
        {
          "nom": "Skyr nature",
          "quantite": 150,
          "unite": "g",
          "categorie": "laitier"
        },
        {
          "nom": "Huile d'olive",
          "quantite": 1,
          "unite": "cs",
          "categorie": "matiere_grasse"
        },
        {
          "nom": "Paprika fumé",
          "quantite": 1,
          "unite": "cc",
          "categorie": "condiment"
        },
        {
          "nom": "Cumin",
          "quantite": 0.5,
          "unite": "cc",
          "categorie": "condiment"
        },
        {
          "nom": "Ail en poudre",
          "quantite": 0.5,
          "unite": "cc",
          "categorie": "condiment"
        },
        {
          "nom": "Citron",
          "quantite": 0.5,
          "unite": "pièce",
          "categorie": "legumes"
        }
      ],
      "steps": [
        "Mélanger skyr + épices (paprika, cumin, ail) + jus de citron + huile d'olive → marinade.",
        "Inciser les blancs en croisillons (permet à la marinade de pénétrer plus profondément).",
        "Enrober généreusement, laisser mariner 30 min minimum au frigo (idéalement 2h).",
        "Four à 200°C, cuire 25–30 min selon l'épaisseur du blanc.",
        "Repos 5 min avant de couper — le jus se redistribue.",
        "Servir avec légumes rôtis (repos), riz basmati (running long) ou riz + pain (vélo)."
      ],
      "source_url": null
    },
    {
      "id": "saumon-croute-amandes",
      "nom": "Saumon croûte herbes-amandes",
      "source": "Base maison",
      "moments": [
        "midi",
        "soir"
      ],
      "tags": [
        "REPOS"
      ],
      "temps_prep_min": 20,
      "portions": 2,
      "macros": {
        "proteines": 44,
        "glucides": 5,
        "lipides": 28,
        "kcal": 450
      },
      "note_adaptation": "Idéal avec légumes verts rôtis",
      "ingredients": [
        {
          "nom": "Pavés de saumon",
          "quantite": 400,
          "unite": "g",
          "categorie": "proteines"
        },
        {
          "nom": "Amandes effilées",
          "quantite": 30,
          "unite": "g",
          "categorie": "matiere_grasse"
        },
        {
          "nom": "Moutarde de Dijon",
          "quantite": 1,
          "unite": "cs",
          "categorie": "condiment"
        },
        {
          "nom": "Persil / ciboulette fraîche",
          "quantite": 1,
          "unite": "cs",
          "categorie": "legumes"
        },
        {
          "nom": "Huile d'olive",
          "quantite": 1,
          "unite": "cs",
          "categorie": "matiere_grasse"
        },
        {
          "nom": "Brocoli ou haricots verts",
          "quantite": 300,
          "unite": "g",
          "categorie": "legumes"
        }
      ],
      "steps": [
        "Préchauffer le four à 200°C.",
        "Badigeonner généreusement les pavés de moutarde de Dijon côté chair.",
        "Presser les amandes effilées + herbes fraîches hachées sur la moutarde — elles adhèrent bien.",
        "Poêle chaude avec huile d'olive : saisir côté peau 3 min jusqu'à dorure.",
        "Enfourner 8–10 min (croûte dorée et chair rosée au centre — ne pas trop cuire).",
        "Servir avec légumes verts rôtis : brocoli, haricots verts ou courgettes."
      ],
      "source_url": null
    },
    {
      "id": "riz-saute-poulet-wok",
      "nom": "Riz sauté poulet-légumes façon wok",
      "source": "Base maison",
      "moments": [
        "midi",
        "soir"
      ],
      "tags": [
        "RUNNING_LONG"
      ],
      "temps_prep_min": 25,
      "portions": 2,
      "macros": {
        "proteines": 48,
        "glucides": 65,
        "lipides": 12,
        "kcal": 580
      },
      "ingredients": [
        {
          "nom": "Blancs de poulet",
          "quantite": 280,
          "unite": "g",
          "categorie": "proteines"
        },
        {
          "nom": "Riz cuit (200g sec)",
          "quantite": 400,
          "unite": "g",
          "categorie": "feculent"
        },
        {
          "nom": "Poivron",
          "quantite": 1,
          "unite": "pièce",
          "categorie": "legumes"
        },
        {
          "nom": "Courgette",
          "quantite": 1,
          "unite": "pièce",
          "categorie": "legumes"
        },
        {
          "nom": "Œufs",
          "quantite": 2,
          "unite": "pièces",
          "categorie": "proteines"
        },
        {
          "nom": "Sauce soja",
          "quantite": 2,
          "unite": "cs",
          "categorie": "condiment"
        },
        {
          "nom": "Huile de sésame",
          "quantite": 1,
          "unite": "cs",
          "categorie": "matiere_grasse"
        },
        {
          "nom": "Ail",
          "quantite": 2,
          "unite": "gousses",
          "categorie": "legumes"
        },
        {
          "nom": "Gingembre frais",
          "quantite": 1,
          "unite": "cc",
          "categorie": "condiment"
        }
      ],
      "steps": [
        "Wok ou grande poêle à feu très vif avec huile neutre. La chaleur est essentielle.",
        "Cuire le poulet en dés à feu vif 4–5 min jusqu'à dorure → réserver.",
        "Légumes coupés en petits dés, sauter 3 min à feu vif sans les couvrir.",
        "Pousser les légumes sur les bords, casser les œufs au centre, brouiller rapidement.",
        "Ajouter le riz cuit (de préférence de la veille — moins humide), mélanger tout, sauce soja + huile de sésame.",
        "Remettre le poulet, 2 min de plus à feu vif. Servir immédiatement."
      ],
      "source_url": null
    },
    {
      "id": "cabillaud-papillote",
      "nom": "Cabillaud en papillote légumes-citron",
      "source": "Base maison",
      "moments": [
        "midi",
        "soir"
      ],
      "tags": [
        "UNIVERSEL"
      ],
      "temps_prep_min": 30,
      "portions": 2,
      "macros": {
        "proteines": 38,
        "glucides": 8,
        "lipides": 10,
        "kcal": 270
      },
      "note_adaptation": "Ajouter riz/pain selon le jour",
      "adaptations": {
        "REPOS": "Tel quel + salade verte",
        "VELO": "+ 250g riz + pain"
      },
      "ingredients": [
        {
          "nom": "Dos de cabillaud",
          "quantite": 400,
          "unite": "g",
          "categorie": "proteines"
        },
        {
          "nom": "Fenouil",
          "quantite": 1,
          "unite": "pièce",
          "categorie": "legumes"
        },
        {
          "nom": "Poivron",
          "quantite": 1,
          "unite": "pièce",
          "categorie": "legumes"
        },
        {
          "nom": "Citron",
          "quantite": 1,
          "unite": "pièce",
          "categorie": "legumes"
        },
        {
          "nom": "Huile d'olive",
          "quantite": 2,
          "unite": "cs",
          "categorie": "matiere_grasse"
        },
        {
          "nom": "Thym, laurier",
          "quantite": 1,
          "unite": "bouquet",
          "categorie": "condiment"
        }
      ],
      "steps": [
        "Préchauffer le four à 190°C.",
        "Sur une grande feuille de papier cuisson : faire un lit de fenouil émincé + poivron en lanières + herbes.",
        "Poser le dos de cabillaud dessus, couvrir de tranches fines de citron.",
        "Filet d'huile d'olive, sel, poivre.",
        "Refermer hermétiquement la papillote en repliant les bords plusieurs fois.",
        "Enfourner 18–22 min selon l'épaisseur. Servir directement dans la papillote."
      ],
      "source_url": null
    },
    {
      "id": "pates-poulet-epinards",
      "nom": "Pâtes poulet-épinards-ail (one pot)",
      "source": "Base maison",
      "moments": [
        "midi",
        "soir"
      ],
      "tags": [
        "VELO"
      ],
      "temps_prep_min": 30,
      "portions": 2,
      "macros": {
        "proteines": 50,
        "glucides": 80,
        "lipides": 14,
        "kcal": 650
      },
      "note_adaptation": "Jour de longue vélo ou course longue uniquement",
      "ingredients": [
        {
          "nom": "Blancs de poulet",
          "quantite": 280,
          "unite": "g",
          "categorie": "proteines"
        },
        {
          "nom": "Pâtes sèches (penne)",
          "quantite": 200,
          "unite": "g",
          "categorie": "feculent"
        },
        {
          "nom": "Épinards frais",
          "quantite": 200,
          "unite": "g",
          "categorie": "legumes"
        },
        {
          "nom": "Ail",
          "quantite": 3,
          "unite": "gousses",
          "categorie": "legumes"
        },
        {
          "nom": "Bouillon de poulet",
          "quantite": 200,
          "unite": "ml",
          "categorie": "condiment"
        },
        {
          "nom": "Huile d'olive",
          "quantite": 2,
          "unite": "cs",
          "categorie": "matiere_grasse"
        },
        {
          "nom": "Parmesan râpé",
          "quantite": 20,
          "unite": "g",
          "categorie": "laitier"
        }
      ],
      "steps": [
        "Cuire les pâtes al dente dans de l'eau salée → réserver en gardant 100ml d'eau de cuisson.",
        "Dans la même casserole : saisir le poulet coupé en morceaux avec l'ail émincé, 5–6 min.",
        "Ajouter les épinards frais, laisser tomber 2 min en remuant.",
        "Ajouter les pâtes + bouillon de poulet + eau de cuisson réservée.",
        "Mélanger à feu vif 2 min jusqu'à obtenir une sauce légèrement crémeuse et liante.",
        "Terminer avec le parmesan râpé. Servir uniquement les jours vélo long ou running long."
      ],
      "source_url": null
    },
    {
      "id": "omelette-garnie",
      "nom": "Omelette garnie (version dîner)",
      "source": "Base maison",
      "moments": [
        "soir"
      ],
      "tags": [
        "REPOS"
      ],
      "temps_prep_min": 15,
      "portions": 2,
      "macros": {
        "proteines": 32,
        "glucides": 6,
        "lipides": 24,
        "kcal": 370
      },
      "note_adaptation": "Dîner rapide jour repos ou renfo",
      "ingredients": [
        {
          "nom": "Œufs entiers",
          "quantite": 5,
          "unite": "pièces",
          "categorie": "proteines"
        },
        {
          "nom": "Jambon blanc",
          "quantite": 100,
          "unite": "g",
          "categorie": "proteines"
        },
        {
          "nom": "Épinards ou champignons",
          "quantite": 60,
          "unite": "g",
          "categorie": "legumes"
        },
        {
          "nom": "Fromage râpé",
          "quantite": 30,
          "unite": "g",
          "categorie": "laitier"
        },
        {
          "nom": "Huile d'olive ou beurre",
          "quantite": 1,
          "unite": "cs",
          "categorie": "matiere_grasse"
        },
        {
          "nom": "Herbes fraîches",
          "quantite": 1,
          "unite": "poignée",
          "categorie": "condiment"
        }
      ],
      "steps": [
        "Battre les œufs avec sel, poivre et herbes fraîches hachées.",
        "Faire revenir le jambon en dés + légumes (épinards ou champignons) 2–3 min à la poêle.",
        "Verser les œufs battus à feu moyen-doux — ne pas remuer, laisser prendre.",
        "Quand les bords sont pris mais le centre encore légèrement coulant : fromage râpé + garniture au centre.",
        "Plier l'omelette en deux, finir 1 min à feu doux.",
        "Servir immédiatement. Parfait pour un dîner rapide jour repos ou renfo."
      ],
      "source_url": null
    },
    {
      "id": "salade-lentilles-thon",
      "nom": "Salade tiède lentilles-thon-œuf mollet",
      "source": "Base maison",
      "moments": [
        "midi"
      ],
      "tags": [
        "RUNNING_COURT"
      ],
      "temps_prep_min": 25,
      "portions": 2,
      "macros": {
        "proteines": 44,
        "glucides": 35,
        "lipides": 14,
        "kcal": 440
      },
      "ingredients": [
        {
          "nom": "Lentilles vertes cuites",
          "quantite": 200,
          "unite": "g",
          "categorie": "feculent"
        },
        {
          "nom": "Thon en boîte (eau)",
          "quantite": 320,
          "unite": "g",
          "categorie": "proteines"
        },
        {
          "nom": "Œufs",
          "quantite": 2,
          "unite": "pièces",
          "categorie": "proteines"
        },
        {
          "nom": "Échalote",
          "quantite": 1,
          "unite": "pièce",
          "categorie": "legumes"
        },
        {
          "nom": "Huile d'olive",
          "quantite": 2,
          "unite": "cs",
          "categorie": "matiere_grasse"
        },
        {
          "nom": "Vinaigre balsamique",
          "quantite": 1,
          "unite": "cs",
          "categorie": "condiment"
        },
        {
          "nom": "Moutarde",
          "quantite": 1,
          "unite": "cc",
          "categorie": "condiment"
        },
        {
          "nom": "Persil frais",
          "quantite": 1,
          "unite": "poignée",
          "categorie": "legumes"
        }
      ],
      "steps": [
        "Cuire les œufs mollets : 6 min dans l'eau bouillante, puis eau froide immédiatement → écaler.",
        "Réchauffer les lentilles vertes avec l'échalote émincée dans une poêle, 3 min.",
        "Préparer la vinaigrette : moutarde + vinaigre balsamique + huile d'olive + sel. Fouetter.",
        "Émietter le thon en boîte (bien égoutté).",
        "Assembler dans un bol : lentilles chaudes + thon + vinaigrette + œufs coupés en deux.",
        "Terminer avec persil ciselé et poivre noir. Servir tiède."
      ],
      "source_url": null
    },
    {
      "id": "loaded-sweet-potato",
      "nom": "Loaded Sweet Potatoes bœuf & épinards",
      "source": "@alexcookjoy",
      "moments": [
        "midi",
        "soir"
      ],
      "tags": [
        "RUNNING_LONG"
      ],
      "temps_prep_min": 75,
      "portions": 4,
      "macros": {
        "proteines": 40,
        "glucides": 46,
        "lipides": 28,
        "kcal": 560
      },
      "note_adaptation": "Idéal post-running long ou veille longue vélo",
      "ingredients": [
        {
          "nom": "Patates douces",
          "quantite": 4,
          "unite": "pièces",
          "categorie": "feculent"
        },
        {
          "nom": "Bœuf haché",
          "quantite": 600,
          "unite": "g",
          "categorie": "proteines"
        },
        {
          "nom": "Oignon",
          "quantite": 1,
          "unite": "pièce",
          "categorie": "legumes"
        },
        {
          "nom": "Ail",
          "quantite": 2,
          "unite": "gousses",
          "categorie": "legumes"
        },
        {
          "nom": "Épinards frais",
          "quantite": 60,
          "unite": "g",
          "categorie": "legumes"
        },
        {
          "nom": "Beurre",
          "quantite": 2,
          "unite": "cs",
          "categorie": "matiere_grasse"
        },
        {
          "nom": "Cheddar râpé",
          "quantite": 150,
          "unite": "g",
          "categorie": "laitier"
        },
        {
          "nom": "Skyr nature",
          "quantite": 100,
          "unite": "g",
          "categorie": "laitier"
        },
        {
          "nom": "Paprika fumé",
          "quantite": 1,
          "unite": "cc",
          "categorie": "condiment"
        },
        {
          "nom": "Oignons verts",
          "quantite": 2,
          "unite": "tiges",
          "categorie": "legumes"
        }
      ],
      "steps": [
        "Laver les patates douces sans éplucher. Huiler + saler. Four à 200°C, 45–55 min jusqu'à très tendres.",
        "Faire revenir l'oignon émincé 3–4 min. Ajouter l'ail 30 sec.",
        "Ajouter le bœuf haché + sel + poivre + paprika fumé, cuire 6–8 min. Ajouter les épinards 1 min. Réserver.",
        "Fendre chaque patate en longueur. Ajouter le beurre et écraser l'intérieur à la fourchette.",
        "Garnir avec la farce bœuf, couvrir de cheddar râpé. Remettre au four 8–10 min.",
        "Servir avec skyr (remplace la sour cream) et oignons verts ciselés."
      ],
      "source_url": "https://www.instagram.com/p/DTGGvz9DCiL/"
    },
    {
      "id": "caesar-chicken-cutlets",
      "nom": "Crispy Chicken Caesar Cutlets",
      "source": "@maxiskitchen",
      "moments": [
        "midi",
        "soir"
      ],
      "tags": [
        "REPOS"
      ],
      "temps_prep_min": 40,
      "portions": 2,
      "macros": {
        "proteines": 52,
        "glucides": 22,
        "lipides": 28,
        "kcal": 560
      },
      "note_adaptation": "Excellent profil protéique. + 150g riz pour running court.",
      "ingredients": [
        {
          "nom": "Blancs de poulet",
          "quantite": 450,
          "unite": "g",
          "categorie": "proteines"
        },
        {
          "nom": "Panko",
          "quantite": 30,
          "unite": "g",
          "categorie": "feculent"
        },
        {
          "nom": "Chapelure italienne",
          "quantite": 30,
          "unite": "g",
          "categorie": "feculent"
        },
        {
          "nom": "Parmesan râpé",
          "quantite": 60,
          "unite": "g",
          "categorie": "laitier"
        },
        {
          "nom": "Œufs",
          "quantite": 2,
          "unite": "pièces",
          "categorie": "proteines"
        },
        {
          "nom": "Farine",
          "quantite": 30,
          "unite": "g",
          "categorie": "feculent"
        },
        {
          "nom": "Filets d'anchois",
          "quantite": 3,
          "unite": "pièces",
          "categorie": "proteines"
        },
        {
          "nom": "Moutarde de Dijon",
          "quantite": 1,
          "unite": "cc",
          "categorie": "condiment"
        },
        {
          "nom": "Huile d'avocat (ou neutre)",
          "quantite": 60,
          "unite": "ml",
          "categorie": "matiere_grasse"
        },
        {
          "nom": "Ail",
          "quantite": 1,
          "unite": "gousse",
          "categorie": "legumes"
        },
        {
          "nom": "Cœurs de romaine",
          "quantite": 2,
          "unite": "pièces",
          "categorie": "legumes"
        },
        {
          "nom": "Citron",
          "quantite": 1,
          "unite": "pièce",
          "categorie": "legumes"
        }
      ],
      "steps": [
        "Dressing caesar : fouetter jaune d'œuf + jus de citron + moutarde. Incorporer l'huile cuillère par cuillère en fouettant pour créer une émulsion. Ajouter anchois hachés + ail râpé + parmesan. Réserver au frais.",
        "Four à 220°C (convection) ou 230°C (classique). Grille légèrement huilée sur plaque.",
        "Aplatir les blancs de poulet entre 2 feuilles de film plastique à ~6 mm d'épaisseur.",
        "Paner en 3 étapes : farine → œuf battu → mélange panko/chapelure/parmesan (bien appuyer pour adhérer).",
        "Poser sur la grille huilée, huiler légèrement le dessus. Cuire 12–15 min jusqu'à 74°C à cœur.",
        "Option : 1–2 min sous le gril pour dorer davantage. Servir le poulet avec la salade de romaine + dressing."
      ],
      "source_url": "https://www.instagram.com/p/DJcRUGUx3CZ/"
    },
    {
      "id": "galettes-cabillaud-feta",
      "nom": "Galettes cabillaud, fêta & épinards",
      "source": "@unzestepourdeux",
      "moments": [
        "midi",
        "soir"
      ],
      "tags": [
        "REPOS"
      ],
      "temps_prep_min": 25,
      "portions": 2,
      "macros": {
        "proteines": 43,
        "glucides": 12,
        "lipides": 20,
        "kcal": 400
      },
      "ingredients": [
        {
          "nom": "Filet de cabillaud",
          "quantite": 300,
          "unite": "g",
          "categorie": "proteines"
        },
        {
          "nom": "Fêta",
          "quantite": 70,
          "unite": "g",
          "categorie": "laitier"
        },
        {
          "nom": "Épinards (revenus hachés)",
          "quantite": 60,
          "unite": "g",
          "categorie": "legumes"
        },
        {
          "nom": "Œufs",
          "quantite": 1,
          "unite": "pièce",
          "categorie": "proteines"
        },
        {
          "nom": "Chapelure panko",
          "quantite": 4,
          "unite": "cs",
          "categorie": "feculent"
        },
        {
          "nom": "Ail",
          "quantite": 1,
          "unite": "gousse",
          "categorie": "legumes"
        },
        {
          "nom": "Persil frais",
          "quantite": 1,
          "unite": "poignée",
          "categorie": "legumes"
        },
        {
          "nom": "Skyr nature",
          "quantite": 150,
          "unite": "g",
          "categorie": "laitier"
        },
        {
          "nom": "Concombre",
          "quantite": 1,
          "unite": "pièce",
          "categorie": "legumes"
        },
        {
          "nom": "Huile d'olive",
          "quantite": 2,
          "unite": "cs",
          "categorie": "matiere_grasse"
        }
      ],
      "steps": [
        "Couper le cabillaud très finement (quasi en tartare). Faire revenir les épinards à sec 2 min, bien essorer, hacher.",
        "Mélanger cabillaud + feta émiettée + épinards + ail râpé + persil + œuf + panko. Former des galettes épaisses.",
        "Poêle bien chaude avec huile d'olive. Cuire 3–4 min par face à feu moyen. Couvrir pour cuire à cœur.",
        "Préparer la sauce skyr-tzatziki : râper le concombre, bien essorer, mélanger avec skyr + ail + aneth + citron.",
        "Préparer la salade concombre : rondelles + oignon rouge + olives + persil + huile d'olive.",
        "Servir les galettes chaudes avec la salade et la sauce à côté."
      ],
      "source_url": "https://www.instagram.com/p/DWwam0xiB8w/"
    },
    {
      "id": "calzone-poulet-ricotta",
      "nom": "Calzone poulet haché, ricotta & épinards",
      "source": "@terre_deccezione",
      "moments": [
        "midi",
        "soir"
      ],
      "tags": [
        "REPOS"
      ],
      "temps_prep_min": 35,
      "portions": 4,
      "macros": {
        "proteines": 49,
        "glucides": 10,
        "lipides": 18,
        "kcal": 400
      },
      "note_adaptation": "Meilleure recette protéique. + riz pour running.",
      "ingredients": [
        {
          "nom": "Poulet haché",
          "quantite": 740,
          "unite": "g",
          "categorie": "proteines"
        },
        {
          "nom": "Mozzarella râpée",
          "quantite": 125,
          "unite": "g",
          "categorie": "laitier"
        },
        {
          "nom": "Ricotta",
          "quantite": 8,
          "unite": "cs",
          "categorie": "laitier"
        },
        {
          "nom": "Épinards frais",
          "quantite": 60,
          "unite": "g",
          "categorie": "legumes"
        },
        {
          "nom": "Tomates cerises",
          "quantite": 4,
          "unite": "pièces",
          "categorie": "legumes"
        },
        {
          "nom": "Jaune d'œuf",
          "quantite": 1,
          "unite": "pièce",
          "categorie": "proteines"
        },
        {
          "nom": "Chapelure",
          "quantite": 4,
          "unite": "cs",
          "categorie": "feculent"
        },
        {
          "nom": "Huile d'olive",
          "quantite": 2,
          "unite": "cs",
          "categorie": "matiere_grasse"
        }
      ],
      "steps": [
        "Diviser le poulet haché en 4 portions, aplatir chacune en base fine (~5 mm) sur papier cuisson.",
        "Sur une moitié de chaque base : 2 c.à.s ricotta + épinards + tomates cerises coupées + mozzarella.",
        "Replier l'autre moitié pour former la calzone. Bien sceller les bords avec les doigts en appuyant.",
        "Badigeonner de jaune d'œuf battu. Rouler dans la chapelure pour la croûte.",
        "Filet d'huile d'olive. Four à 195°C, 20–25 min jusqu'à bien doré.",
        "Repos impératif 3–5 min avant de couper — le jus se stabilise."
      ],
      "source_url": "https://www.instagram.com/p/DWErIR7jNUN/"
    },
    {
      "id": "beef-shawarma",
      "nom": "Beef shawarma maison",
      "source": "@derevensky.food",
      "moments": [
        "midi",
        "soir"
      ],
      "tags": [
        "RUNNING_COURT"
      ],
      "temps_prep_min": 50,
      "portions": 2,
      "macros": {
        "proteines": 38,
        "glucides": 32,
        "lipides": 22,
        "kcal": 480
      },
      "note_adaptation": "Sauce skyr à la place du yaourt grec",
      "ingredients": [
        {
          "nom": "Bœuf haché",
          "quantite": 400,
          "unite": "g",
          "categorie": "proteines"
        },
        {
          "nom": "Pains pita ou tortillas",
          "quantite": 2,
          "unite": "pièces",
          "categorie": "feculent"
        },
        {
          "nom": "Tomates cerises",
          "quantite": 250,
          "unite": "g",
          "categorie": "legumes"
        },
        {
          "nom": "Têtes d'ail",
          "quantite": 2,
          "unite": "pièces",
          "categorie": "legumes"
        },
        {
          "nom": "Skyr nature",
          "quantite": 200,
          "unite": "g",
          "categorie": "laitier"
        },
        {
          "nom": "Concombre",
          "quantite": 0.5,
          "unite": "pièce",
          "categorie": "legumes"
        },
        {
          "nom": "Paprika, chili, ail séché",
          "quantite": 1,
          "unite": "mélange",
          "categorie": "condiment"
        },
        {
          "nom": "Menthe, aneth",
          "quantite": 1,
          "unite": "bouquet",
          "categorie": "condiment"
        }
      ],
      "steps": [
        "Étaler le bœuf haché assaisonné (paprika, chili, ail séché, sel) sur papier cuisson. Couvrir d'une 2e feuille. Étaler finement au rouleau.",
        "Retirer la feuille du dessus. Rouler en boudin serré. Disposer sur plaque avec les têtes d'ail entières et les tomates cerises.",
        "Huiler légèrement les têtes d'ail. Four à 200°C, 40 min.",
        "Laisser tiédir 15 min. Écraser l'ail rôti, préparer la sauce : skyr + concombre râpé essoré + ail rôti + menthe + aneth + citron.",
        "Effiler/trancher la viande en fines lamelles.",
        "Assembler le wrap dans un pita ou tortilla : sauce + viande + oignon rouge + tomates rôties pelées."
      ],
      "source_url": "https://www.instagram.com/p/DSHTC6fDHrL/"
    },
    {
      "id": "sushi-sandwich-thon",
      "nom": "Sushi sandwich thon-avocat",
      "source": "@lacuisinedekam",
      "moments": [
        "midi"
      ],
      "tags": [
        "RUNNING_LONG"
      ],
      "temps_prep_min": 30,
      "portions": 2,
      "macros": {
        "proteines": 38,
        "glucides": 52,
        "lipides": 14,
        "kcal": 490
      },
      "note_adaptation": "Servir 2 sandwichs / personne",
      "ingredients": [
        {
          "nom": "Riz à sushi",
          "quantite": 250,
          "unite": "g",
          "categorie": "feculent"
        },
        {
          "nom": "Feuilles algue nori",
          "quantite": 4,
          "unite": "feuilles",
          "categorie": "condiment"
        },
        {
          "nom": "Thon en boîte (nature)",
          "quantite": 200,
          "unite": "g",
          "categorie": "proteines"
        },
        {
          "nom": "Avocat",
          "quantite": 1,
          "unite": "pièce",
          "categorie": "legumes"
        },
        {
          "nom": "Concombre",
          "quantite": 0.5,
          "unite": "pièce",
          "categorie": "legumes"
        },
        {
          "nom": "Fromage type Kiri",
          "quantite": 2,
          "unite": "portions",
          "categorie": "laitier"
        },
        {
          "nom": "Mayonnaise",
          "quantite": 2,
          "unite": "cs",
          "categorie": "condiment"
        },
        {
          "nom": "Sauce sweet chili",
          "quantite": 2,
          "unite": "cs",
          "categorie": "condiment"
        },
        {
          "nom": "Vinaigre de riz",
          "quantite": 30,
          "unite": "ml",
          "categorie": "condiment"
        }
      ],
      "steps": [
        "Rincer le riz à sushi 4–5 fois jusqu'à eau claire. Cuire (casserole : ébullition 4 min, feu doux 12 min couvercle, repos 10 min feu éteint).",
        "Mélanger vinaigre de riz + sucre + sel. Verser sur le riz tiède, mélanger délicatement à la spatule.",
        "Sur une feuille nori : 2 c.à.s de riz humidifié, former un carré fin. Garniture au centre (thon+mayo+chili, avocat, concombre, kiri).",
        "Couvrir de riz. Plier en deux. Filmer serré. Réfrigérer au moins 15 min.",
        "Couper en deux à la dégustation pour un effet révélation.",
        "Servir 2 sandwichs par personne pour atteindre l'apport protéique cible."
      ],
      "source_url": "https://www.instagram.com/p/DXWZgoqjSiq/"
    },
    {
      "id": "bruschetta-pasta",
      "nom": "Bruschetta pasta poulet grillé & lard",
      "source": "@ellies.fav.eats",
      "moments": [
        "midi",
        "soir"
      ],
      "tags": [
        "RUNNING_LONG"
      ],
      "temps_prep_min": 30,
      "portions": 4,
      "macros": {
        "proteines": 44,
        "glucides": 58,
        "lipides": 24,
        "kcal": 620
      },
      "note_adaptation": "Préparation en avance compatible. Marinade 6-12h idéal.",
      "ingredients": [
        {
          "nom": "Blancs de poulet",
          "quantite": 3,
          "unite": "pièces",
          "categorie": "proteines"
        },
        {
          "nom": "Pâtes (penne ou farfalle)",
          "quantite": 450,
          "unite": "g",
          "categorie": "feculent"
        },
        {
          "nom": "Tomates cerises",
          "quantite": 300,
          "unite": "g",
          "categorie": "legumes"
        },
        {
          "nom": "Mozzarella perles",
          "quantite": 225,
          "unite": "g",
          "categorie": "laitier"
        },
        {
          "nom": "Lard tranches",
          "quantite": 8,
          "unite": "tranches",
          "categorie": "proteines"
        },
        {
          "nom": "Basilic frais",
          "quantite": 125,
          "unite": "g",
          "categorie": "legumes"
        },
        {
          "nom": "Ail",
          "quantite": 5,
          "unite": "gousses",
          "categorie": "legumes"
        },
        {
          "nom": "Huile d'olive",
          "quantite": 60,
          "unite": "ml",
          "categorie": "matiere_grasse"
        },
        {
          "nom": "Balsamique",
          "quantite": 180,
          "unite": "ml",
          "categorie": "condiment"
        },
        {
          "nom": "Moutarde Dijon",
          "quantite": 1,
          "unite": "cs",
          "categorie": "condiment"
        }
      ],
      "steps": [
        "Mariner le poulet 6–12h au frigo (huile + balsamique + citron + moutarde + ail + herbes).",
        "Griller le poulet 4–5 min par face. Laisser refroidir, couper en morceaux.",
        "Glaze balsamique : fouetter balsamique + sucre brun + eau + soja + maïzena, porter à ébullition, réduire 3–5 min.",
        "Cuire les pâtes al dente, rincer à l'eau froide si servi froid.",
        "Assembler dans un grand plat : pâtes + poulet + tomates cerises + mozzarella perles + basilic frais + lard croustillant.",
        "Arroser généreusement de glaze balsamique. Se prépare en avance — meilleur le lendemain."
      ],
      "source_url": "https://www.instagram.com/p/DWCfPfKkVHE/"
    },
    {
      "id": "calzone-crust-poulet",
      "nom": "Chicken Crust Calzone (sans farine)",
      "source": "@alexcookjoy",
      "moments": [
        "midi",
        "soir"
      ],
      "tags": [
        "REPOS"
      ],
      "temps_prep_min": 35,
      "portions": 2,
      "macros": {
        "proteines": 45,
        "glucides": 6,
        "lipides": 24,
        "kcal": 430
      },
      "note_adaptation": "Version encore plus protéinée — parfaite les jours repos",
      "ingredients": [
        {
          "nom": "Poulet haché",
          "quantite": 450,
          "unite": "g",
          "categorie": "proteines"
        },
        {
          "nom": "Fromage frais (Philadelphia)",
          "quantite": 3,
          "unite": "cs",
          "categorie": "laitier"
        },
        {
          "nom": "Jambon cuit",
          "quantite": 2,
          "unite": "tranches",
          "categorie": "proteines"
        },
        {
          "nom": "Tomate",
          "quantite": 1,
          "unite": "pièce",
          "categorie": "legumes"
        },
        {
          "nom": "Mozzarella",
          "quantite": 80,
          "unite": "g",
          "categorie": "laitier"
        },
        {
          "nom": "Parmesan râpé",
          "quantite": 30,
          "unite": "g",
          "categorie": "laitier"
        },
        {
          "nom": "Œufs",
          "quantite": 1,
          "unite": "pièce",
          "categorie": "proteines"
        }
      ],
      "steps": [
        "Four à 195°C. Papier cuisson sur plaque.",
        "Étaler le poulet haché assaisonné en ovale/cercle fin (~5 mm) sur la plaque.",
        "Sur une moitié : fromage frais → tranches de jambon → rondelles de tomate → mozzarella.",
        "Replier l'autre moitié. Sceller les bords en appuyant fermement.",
        "Badigeonner généreusement d'œuf battu, parsemer de parmesan.",
        "Four 20–25 min jusqu'à bien doré. Repos 3–5 min avant de couper."
      ],
      "source_url": "https://www.instagram.com/p/DT3ya8njK9e/"
    },
    {
      "id": "sweet-potato-nachos",
      "nom": "Sweet Potato Nachos bœuf & avocat",
      "source": "@ellena_fit",
      "moments": [
        "midi",
        "soir"
      ],
      "tags": [
        "RUNNING_LONG"
      ],
      "temps_prep_min": 35,
      "portions": 2,
      "macros": {
        "proteines": 47,
        "glucides": 42,
        "lipides": 19,
        "kcal": 514
      },
      "note_adaptation": "Meilleur rapport protéines/glucides. Date night compatible.",
      "ingredients": [
        {
          "nom": "Patates douces",
          "quantite": 600,
          "unite": "g",
          "categorie": "feculent"
        },
        {
          "nom": "Bœuf haché 5%",
          "quantite": 500,
          "unite": "g",
          "categorie": "proteines"
        },
        {
          "nom": "Avocat",
          "quantite": 120,
          "unite": "g",
          "categorie": "legumes"
        },
        {
          "nom": "Cheddar rouge râpé",
          "quantite": 80,
          "unite": "g",
          "categorie": "laitier"
        },
        {
          "nom": "Tomates cerises",
          "quantite": 200,
          "unite": "g",
          "categorie": "legumes"
        },
        {
          "nom": "Coriandre fraîche",
          "quantite": 1,
          "unite": "poignée",
          "categorie": "legumes"
        },
        {
          "nom": "Oignon rouge",
          "quantite": 0.5,
          "unite": "pièce",
          "categorie": "legumes"
        },
        {
          "nom": "Skyr nature",
          "quantite": 80,
          "unite": "g",
          "categorie": "laitier"
        },
        {
          "nom": "Épices taco (paprika, cumin, chili)",
          "quantite": 1,
          "unite": "mélange",
          "categorie": "condiment"
        },
        {
          "nom": "Citron vert",
          "quantite": 1,
          "unite": "pièce",
          "categorie": "legumes"
        }
      ],
      "steps": [
        "Four à 200°C. Tranches fines de patate douce (mandoline si possible) → huile légère + sel + paprika. Étaler sur plaque. Four 20–25 min jusqu'à doré et croustillant.",
        "Faire revenir le bœuf haché avec les épices taco (paprika, cumin, chili, ail) jusqu'à bien doré.",
        "Sortir les patates, répartir le bœuf par-dessus, les deux fromages. Remettre 5 min au four pour fondre.",
        "Préparer la salsa maison : tomates cerises + coriandre + oignon rouge + citron vert + sel.",
        "Couper l'avocat en tranches ou écraser grossièrement.",
        "Servir directement dans le plat avec avocat, salsa maison et skyr en dollops."
      ],
      "source_url": "https://www.instagram.com/p/DTDEI-yiPGr/"
    }
  ],
  "mapping_training_tags": {
    "rest": {
      "tags": [
        "REPOS"
      ],
      "glucides_cible": [
        100,
        120
      ],
      "label": "Repos"
    },
    "strength": {
      "tags": [
        "REPOS"
      ],
      "glucides_cible": [
        100,
        120
      ],
      "label": "Renfo"
    },
    "easy": {
      "tags": [
        "RUNNING_COURT"
      ],
      "glucides_cible": [
        160,
        180
      ],
      "label": "Running court"
    },
    "trail": {
      "tags": [
        "RUNNING_LONG"
      ],
      "glucides_cible": [
        260,
        280
      ],
      "label": "Trail"
    },
    "long": {
      "tags": [
        "RUNNING_LONG"
      ],
      "glucides_cible": [
        260,
        280
      ],
      "label": "Running long"
    },
    "endurance": {
      "tags": [
        "VELO"
      ],
      "glucides_cible": [
        310,
        350
      ],
      "label": "Vélo long"
    },
    "activation": {
      "tags": [
        "RUNNING_COURT"
      ],
      "glucides_cible": [
        160,
        180
      ],
      "label": "Activation"
    },
    "tempo": {
      "tags": [
        "VELO"
      ],
      "glucides_cible": [
        350,
        420
      ],
      "label": "Tempo vélo"
    },
    "quality": {
      "tags": [
        "RUNNING_LONG"
      ],
      "glucides_cible": [
        260,
        280
      ],
      "label": "Running qualité"
    },
    "recovery": {
      "tags": [
        "REPOS"
      ],
      "glucides_cible": [
        100,
        120
      ],
      "label": "Récupération"
    },
    "default": {
      "tags": [
        "UNIVERSEL"
      ],
      "glucides_cible": [
        160,
        200
      ],
      "label": "—"
    }
  }
};
