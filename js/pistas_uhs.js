// Generado por web_i18n/i18n_rebuild.js (fr) a partir de web/js/pistas_uhs.js. No editar a mano: editar la memoria tm/fr.json y regenerar.
const PISTAS = [
 {
  "id": "fil-validez",
  "subject": "fil",
  "tema": "Thème 4 · Logique et argumentation",
  "unidad": "fil-t4",
  "materia": "Philosophie 1re année · Logique",
  "titulo": "Qu'est-ce qui rend un argument valide ?",
  "lede": "La distinction clé du thème : validité et vérité. Ne demande que les indices dont tu as besoin.",
  "ciclos": [
   {
    "fase": "Phase 1 · Rappel",
    "etiqueta": "Question de départ",
    "pregunta": "Que signifie qu'un argument soit valide ?",
    "intro": [
     "Essaie de l'expliquer avant de demander de l'aide. Un indice pour commencer à réfléchir : la validité dépend-elle de <em>ce que</em> dit l'argument ou de <em>la façon dont</em> il raisonne ?"
    ],
    "pistas": [
     "Pour y voir clair : un argument a des <strong>prémisses</strong> (dont on part) et une <strong>conclusion</strong> (à laquelle on arrive). La validité porte sur la relation entre elles.",
     "Cette relation nous permet de juger le <em>raisonnement</em> lui-même, indépendamment des faits : elle nous dit si le passage des prémisses à la conclusion est correct.",
     "C'est donc une question de <em>forme</em>, non de contenu : elle ne regarde pas si les prémisses sont vraies, mais si, en les admettant, la conclusion devrait l'être aussi.",
     "Dans un argument valide, il <strong>ne peut pas arriver</strong> que les prémisses soient vraies et la conclusion fausse : la conclusion découle nécessairement des prémisses, qu'elles soient vraies ou non."
    ],
    "comprobacion": {
     "pregunta": "Laquelle de ces définitions de l'« argument valide » est la bonne ?",
     "opciones": [
      [
       "Un argument dont la conclusion découle nécessairement des prémisses.",
       true
      ],
      [
       "Un argument dont toutes les prémisses sont vraies.",
       false,
       "Cela revient à parler de la vérité des prémisses, non de la validité : la validité regarde la forme."
      ],
      [
       "Un argument dont la conclusion est vraie.",
       false,
       "Une conclusion peut être vraie par hasard sans découler des prémisses."
      ],
      [
       "Un argument qui convainc la majorité de ceux qui l'écoutent.",
       false,
       "Convaincre n'est pas la même chose que bien raisonner : les sophismes aussi convainquent."
      ]
     ],
     "ok": "Bien. La validité dépend de la relation entre les prémisses et la conclusion, non de leur vérité.",
     "mal": "Pas encore."
    },
    "rescate": [
     {
      "boton": "J'ai besoin de voir un exemple",
      "etiqueta": "Exemple",
      "titulo": "Un argument valide avec une prémisse fausse",
      "definicion": [
       "Prémisse 1 : Tous les poissons volent.",
       "Prémisse 2 : Le saumon est un poisson.",
       "Conclusion : Donc, le saumon vole."
      ],
      "parrafos": [
       "La première prémisse est fausse, et la conclusion aussi. Mais regarde bien : <em>si</em> tous les poissons volaient et que le saumon était un poisson, le saumon pourrait-il ne pas voler ? C'est cela, la question de la validité."
      ],
      "comprobacion": {
       "etiqueta": "Vérification de l'exemple",
       "pregunta": "L'argument du saumon est-il valide ?",
       "opciones": [
        [
         "Oui : si les prémisses étaient vraies, la conclusion devrait l'être.",
         true
        ],
        [
         "Non, parce que la première prémisse est fausse.",
         false,
         "La fausseté d'une prémisse n'affecte pas la validité : la validité regarde seulement si la conclusion découle des prémisses."
        ],
        [
         "Non, parce que la conclusion est fausse.",
         false,
         "Une conclusion fausse ne rend pas l'argument invalide si une prémisse est fausse elle aussi."
        ],
        [
         "Cela dépend de l'avis de chacun.",
         false,
         "La validité n'est pas une question d'opinion : elle se vérifie en examinant la forme du raisonnement."
        ]
       ],
       "ok": "Correct. Il est valide même s'il ne prouve rien, parce qu'il part d'une prémisse fausse.",
       "mal": "Regarde-le de nouveau.",
       "intentos": 2
      }
     },
     {
      "etiqueta": "Définition et explication",
      "titulo": "Validité et vérité",
      "definicion": [
       "La <strong>validité</strong> est une propriété de la forme : un argument est valide quand la conclusion découle correctement des prémisses.",
       "La <strong>vérité</strong> est une propriété du contenu : les prémisses décrivent ou non la façon dont sont les choses.",
       "Elles sont indépendantes : il peut y avoir des arguments valides avec des prémisses fausses, et des arguments invalides avec des prémisses vraies."
      ],
      "comprobacion": {
       "boton": "Vérifier ma compréhension",
       "etiqueta": "Vérification finale",
       "pregunta": "De quoi dépend la validité d'un argument ?",
       "opciones": [
        [
         "De sa forme : du fait que la conclusion découle des prémisses.",
         true
        ],
        [
         "Du fait que les prémisses sont vraies.",
         false,
         "Cela, c'est la vérité, qui est indépendante de la validité."
        ],
        [
         "Du fait que la conclusion nous plaît.",
         false,
         "Ce qui nous plaît ne change pas la forme du raisonnement."
        ],
        [
         "Du fait qu'un expert le dit.",
         false,
         "Ce serait faire appel à l'autorité, et non examiner le raisonnement."
        ]
       ],
       "ok": "Correct : la validité est une question de forme.",
       "mal": "Pas encore."
      }
     }
    ]
   },
   {
    "fase": "Phase 2 · Approfondissement",
    "etiqueta": "Nouvelle question",
    "pregunta": "Suffit-il qu'un argument soit valide pour que sa conclusion soit vraie ?",
    "intro": [
     "Tu sais maintenant ce qu'est la validité. Pense à présent à l'argument du saumon : il était valide… et sa conclusion était fausse. Que manque-t-il à un argument pour <em>garantir</em> sa conclusion ?"
    ],
    "pistas": [
     "Rappelle-toi la distinction du thème : la validité regarde la <em>forme</em> ; la vérité regarde si les prémisses décrivent bien la façon dont sont les choses. Ce sont deux choses distinctes.",
     "C'est pourquoi la validité seule ne suffit pas : elle assure le passage des prémisses à la conclusion, mais pas que nous soyons partis de prémisses vraies.",
     "Pour <em>garantir</em> la conclusion, il faut les deux à la fois : que l'argument soit valide et que toutes ses prémisses soient vraies. Cela porte un nom propre.",
     "Imagine une machine : si de la vérité entre par les prémisses et que la forme est valide, de la vérité sort par la conclusion ; si quelque chose de faux entre, plus rien n'est garanti. L'argument qui réunit validité et prémisses vraies s'appelle <strong>solide</strong>."
    ],
    "comprobacion": {
     "pregunta": "Quel argument garantit que sa conclusion est vraie ?",
     "opciones": [
      [
       "Celui qui est valide et dont toutes les prémisses sont vraies (solide).",
       true
      ],
      [
       "Tout argument valide.",
       false,
       "Non : un argument valide avec une prémisse fausse peut mener à une conclusion fausse, comme celui du saumon."
      ],
      [
       "Celui dont les prémisses sont vraies, même s'il est invalide.",
       false,
       "Non : si la conclusion ne découle pas des prémisses, des prémisses vraies ne la garantissent pas."
      ],
      [
       "Celui qui a le plus de prémisses.",
       false,
       "Le nombre de prémisses ne garantit rien : ce qui compte, c'est la forme et la vérité."
      ]
     ],
     "ok": "Exact. Validité plus prémisses vraies : argument solide.",
     "mal": "Pas tout à fait."
    },
    "rescate": [
     {
      "boton": "Afficher le tableau",
      "etiqueta": "Le tableau de la validité et de la vérité",
      "titulo": "Quatre cas possibles",
      "definicion": [
       "<strong>Valide + prémisses vraies</strong> → solide : la conclusion est garantie.",
       "<strong>Invalide + prémisses vraies</strong> → la conclusion n'est pas garantie.",
       "<strong>Valide + prémisses fausses</strong> → correct dans la forme, mais ne prouve rien.",
       "<strong>Invalide + prémisses fausses</strong> → doublement raté."
      ],
      "comprobacion": {
       "boton": "Terminer par une vérification",
       "pregunta": "Un argument valide a une conclusion fausse. Que pouvons-nous affirmer ?",
       "opciones": [
        [
         "Qu'au moins une de ses prémisses est fausse.",
         true
        ],
        [
         "Que toutes ses prémisses sont vraies.",
         false,
         "Si elles étaient toutes vraies, l'argument étant valide, la conclusion serait vraie."
        ],
        [
         "Qu'en réalité il est invalide.",
         false,
         "Il peut parfaitement être valide : le défaut vient d'une prémisse."
        ],
        [
         "Rien du tout.",
         false,
         "On peut affirmer quelque chose : regarde la ligne « valide + prémisses fausses » du tableau."
        ]
       ],
       "ok": "Correct : s'il est valide et que la conclusion est fausse, une prémisse au moins doit être fausse.",
       "mal": "Relis le tableau."
      }
     }
    ]
   }
  ],
  "cierre": {
   "titulo": "Tu distingues maintenant validité et vérité",
   "parrafos": [
    "Un argument est valide quand sa conclusion découle des prémisses ; il est solide quand, en plus, ses prémisses sont vraies. Seul l'argument solide garantit la vérité de la conclusion.",
    "Pour continuer : cherche dans la liste des sophismes du thème un argument qui convainc sans être valide."
   ]
  }
 },
 {
  "id": "fil-virtud",
  "subject": "fil",
  "tema": "Thème 5 · Les questions de l'éthique",
  "unidad": "fil-t5",
  "materia": "Philosophie 1re année · Éthique",
  "titulo": "Qu'est-ce que la vertu pour Aristote ?",
  "lede": "L'éthique du bonheur et du juste milieu. Ne demande que les indices dont tu as besoin.",
  "ciclos": [
   {
    "fase": "Phase 1 · Rappel",
    "etiqueta": "Question de départ",
    "pregunta": "Qu'est-ce que la vertu pour Aristote ?",
    "intro": [
     "Pense à une personne courageuse. Qu'est-ce qui la distingue d'une personne lâche… et d'une personne téméraire ?"
    ],
    "pistas": [
     "Pour y voir clair : le but de la vie humaine est, pour Aristote, le bonheur (<em>eudaimonía</em>) ; non pas un moment de plaisir, mais une vie réussie dans son ensemble.",
     "On parvient à cette vie réussie en développant la <em>vertu</em> ; et la vertu n'est pas un don avec lequel on naît, mais quelque chose qui s'apprend.",
     "Comment est cette vertu ? Elle ne consiste ni à se réprimer ni à obéir à des normes : dans chaque trait, il y a un vice par <em>défaut</em> et un autre par <em>excès</em>, et réussir, c'est ne pas aller trop loin ni rester en deçà.",
     "La vertu est le <strong>juste milieu</strong> entre ces deux extrêmes, indiqué par la raison et fixé par l'habitude : ni trop peu ni trop, mais la juste mesure."
    ],
    "comprobacion": {
     "pregunta": "Laquelle de ces définitions se rapproche le plus de la vertu aristotélicienne ?",
     "opciones": [
      [
       "Une habitude de choisir le juste milieu entre deux extrêmes, guidée par la raison.",
       true
      ],
      [
       "Un talent avec lequel on naît.",
       false,
       "Pour Aristote, la vertu s'acquiert par la pratique : personne ne naît vertueux."
      ],
      [
       "Faire toujours le contraire de ce dont on a envie.",
       false,
       "Il ne s'agit pas de se réprimer, mais de trouver la juste mesure."
      ],
      [
       "Respecter les normes de la cité, quelles qu'elles soient.",
       false,
       "La vertu est guidée par la raison pratique, non par la simple obéissance."
      ]
     ],
     "ok": "Bien : habitude, juste milieu et raison sont les trois clés.",
     "mal": "Pas encore."
    },
    "rescate": [
     {
      "boton": "J'ai besoin de voir des exemples",
      "etiqueta": "Exemples",
      "titulo": "Défaut, juste milieu et excès",
      "definicion": [
       "Lâcheté ← <strong>courage</strong> → témérité",
       "Avarice ← <strong>générosité</strong> → prodigalité",
       "Insensibilité ← <strong>modération</strong> → débauche"
      ],
      "parrafos": [
       "Remarque que la vertu n'est pas le milieu exact : c'est ce qui convient dans chaque situation, comme le déciderait une personne prudente."
      ],
      "comprobacion": {
       "etiqueta": "Vérification des exemples",
       "pregunta": "Quel est le juste milieu entre l'avarice et la prodigalité ?",
       "opciones": [
        [
         "La générosité.",
         true
        ],
        [
         "La richesse.",
         false,
         "La richesse n'est pas une vertu, mais un bien extérieur."
        ],
        [
         "Dépenser exactement la moitié de ce que l'on a.",
         false,
         "Le juste milieu n'est pas un calcul mathématique : c'est ce qui convient dans chaque cas."
        ],
        [
         "Ne jamais dépenser.",
         false,
         "Ce serait l'extrême de l'avarice."
        ]
       ],
       "ok": "Correct. Ni donner trop peu ni trop : donner comme il convient.",
       "mal": "Regarde de nouveau le tableau.",
       "intentos": 2
      }
     },
     {
      "etiqueta": "Définition et explication",
      "titulo": "La vertu aristotélicienne",
      "definicion": [
       "La <strong>vertu</strong> (<em>arétè</em>) est une disposition stable à choisir le juste milieu entre deux vices, l'un par défaut et l'autre par excès.",
       "Ce juste milieu n'est pas mathématique : c'est la <strong>raison pratique</strong> (la prudence) qui le détermine dans chaque situation.",
       "Elle s'acquiert par l'<strong>habitude</strong> : on devient courageux en accomplissant des actes courageux. Et pratiquer la vertu est le chemin du bonheur."
      ],
      "comprobacion": {
       "boton": "Vérifier ma compréhension",
       "etiqueta": "Vérification finale",
       "pregunta": "Comment devient-on vertueux, selon Aristote ?",
       "opciones": [
        [
         "En pratiquant des actes vertueux jusqu'à ce qu'ils deviennent une habitude.",
         true
        ],
        [
         "En lisant beaucoup sur l'éthique.",
         false,
         "Savoir ce qu'est le courage ne suffit pas : il faut le pratiquer."
        ],
        [
         "En naissant dans une bonne famille.",
         false,
         "La vertu ne s'hérite pas : elle s'acquiert."
        ],
        [
         "En suivant toujours le plaisir.",
         false,
         "Cela se rapproche davantage de l'hédonisme, et le plaisir sans mesure est un vice."
        ]
       ],
       "ok": "Correct : la vertu s'apprend en la pratiquant.",
       "mal": "Pas encore."
      }
     }
    ]
   },
   {
    "fase": "Phase 2 · Approfondissement",
    "etiqueta": "Nouvelle question",
    "pregunta": "Quelle relation y a-t-il entre la vertu et le bonheur ?",
    "intro": [
     "Tu sais maintenant ce qu'est la vertu. Réfléchis à présent : à quoi sert d'être vertueux ? Le bonheur est-il une récompense qui vient après ?"
    ],
    "pistas": [
     "Pour y voir clair : tout ce que nous faisons vise une fin, et le bonheur est la <em>fin dernière</em>, celle que nous voulons pour elle-même et non comme moyen d'autre chose.",
     "Cela change la question : il ne s'agit pas d'être vertueux <em>pour</em> gagner à part une récompense appelée bonheur, mais de voir en quoi consiste ce bonheur.",
     "Comment répondre ? Chaque être s'accomplit quand il réalise bien sa fonction propre ; celle de l'être humain est de vivre selon la raison, et vivre ainsi, c'est vivre avec vertu.",
     "C'est pourquoi la vertu n'est pas le chemin vers le bonheur, mais le bonheur lui-même en action : être heureux, c'est <strong>vivre</strong> de façon vertueuse, ce n'est pas une récompense qui vient après."
    ],
    "comprobacion": {
     "pregunta": "Quelle relation y a-t-il entre vertu et bonheur pour Aristote ?",
     "opciones": [
      [
       "Le bonheur consiste en une vie conforme à la vertu.",
       true
      ],
      [
       "La vertu est un sacrifice récompensé après la mort.",
       false,
       "Aristote parle du bonheur dans cette vie, non d'une récompense dans une autre."
      ],
      [
       "Aucune : le bonheur ne dépend que de la chance.",
       false,
       "La chance joue un rôle, mais la clé est l'activité vertueuse."
      ],
      [
       "Le bonheur, c'est accumuler des plaisirs.",
       false,
       "Cela, c'est une vie de plaisir, non la vie réussie dans son ensemble."
      ]
     ],
     "ok": "Exact. Être heureux, c'est bien vivre, et bien vivre, c'est vivre avec vertu.",
     "mal": "Pas tout à fait."
    },
    "rescate": [
     {
      "boton": "Afficher l'explication",
      "etiqueta": "Éthique du bonheur",
      "titulo": "Une vie réussie",
      "definicion": [
       "L'éthique d'Aristote est une <strong>éthique du bonheur</strong> (eudémoniste) : elle demande comment vivre une bonne vie.",
       "Le bonheur (<em>eudaimonía</em>) est la fin dernière et consiste à bien remplir la fonction propre de l'être humain : vivre selon la raison.",
       "C'est pourquoi la vertu n'est pas un moyen d'obtenir le bonheur comme récompense : vivre vertueusement, c'est <strong>déjà</strong> être heureux, même si les biens extérieurs (santé, amis, ressources) aident aussi."
      ],
      "comprobacion": {
       "boton": "Terminer par une vérification",
       "pregunta": "Pourquoi dit-on que l'éthique d'Aristote est eudémoniste ?",
       "opciones": [
        [
         "Parce qu'elle tourne autour du bonheur comme fin dernière.",
         true
        ],
        [
         "Parce qu'elle repose sur le devoir pour le devoir.",
         false,
         "C'est l'éthique de Kant, non celle d'Aristote."
        ],
        [
         "Parce qu'elle mesure le bien aux conséquences pour le plus grand nombre.",
         false,
         "C'est l'utilitarisme."
        ],
        [
         "Parce qu'elle obéit aux commandements des dieux.",
         false,
         "Aristote fonde l'éthique sur la raison humaine."
        ]
       ],
       "ok": "Correct : <em>eudaimonía</em> signifie bonheur.",
       "mal": "Relis l'explication."
      }
     }
    ]
   }
  ],
  "cierre": {
   "titulo": "Tu connais maintenant l'éthique d'Aristote",
   "parrafos": [
    "La vertu est une habitude de choisir le juste milieu entre deux vices, guidée par la raison pratique. Vivre ainsi, c'est le bonheur : une vie réussie dans son ensemble.",
    "Pour continuer : compare-la avec Épicure (le plaisir comme absence de douleur) et avec Kant (le devoir)."
   ]
  }
 },
 {
  "id": "fil-contrato",
  "subject": "fil",
  "tema": "Thème 6 · La vie en société",
  "unidad": "fil-t6",
  "materia": "Philosophie 1re année · Politique",
  "titulo": "Qu'est-ce que le contrat social ?",
  "lede": "Pourquoi obéissons-nous à l'État ? Ne demande que les indices dont tu as besoin.",
  "ciclos": [
   {
    "fase": "Phase 1 · Rappel",
    "etiqueta": "Question de départ",
    "pregunta": "Qu'est-ce que le contrat social ?",
    "intro": [
     "Imagine qu'il n'existe aucun gouvernement, ni lois, ni police. Pourquoi accepterions-nous que quelqu'un nous commande ?"
    ],
    "pistas": [
     "Pour y voir clair : les contractualistes ne voient pas l'État comme quelque chose de naturel ni d'éternel, mais comme un <em>artifice</em>, quelque chose que les êtres humains ont fabriqué.",
     "Cela change la question : si c'est nous qui l'avons fait, son pouvoir ne commande pas sans raison ; il doit se justifier devant ceux qui obéissent.",
     "Comment le justifient-ils ? Non pas en invoquant un document signé un jour de l'histoire, mais en imaginant ce que serait la vie sans pouvoir politique (l'<em>état de nature</em>) et un <strong>accord</strong> pour en sortir.",
     "Le contrat social est ce pacte imaginé : comme si nous nous mettions tous d'accord pour créer, tous ensemble, le pouvoir qui ensuite nous commande."
    ],
    "comprobacion": {
     "pregunta": "Qu'est-ce que le contrat social ?",
     "opciones": [
      [
       "Un accord imaginé par lequel les personnes créent le pouvoir politique pour sortir de l'état de nature.",
       true
      ],
      [
       "Un document signé à une date précise de l'histoire.",
       false,
       "Ce n'est pas un fait historique : c'est une hypothèse pour penser pourquoi le pouvoir est légitime."
      ],
      [
       "Un contrat de travail entre entreprises et travailleurs.",
       false,
       "Ici, « contrat » renvoie à l'origine de l'État, non à un accord de travail."
      ],
      [
       "L'idée que le pouvoir vient de Dieu.",
       false,
       "Exactement le contraire : le contrat fonde le pouvoir sur l'accord humain."
      ]
     ],
     "ok": "Bien. Le pouvoir politique naît d'un accord, non de la nature ni de Dieu.",
     "mal": "Pas encore."
    },
    "rescate": [
     {
      "boton": "J'ai besoin d'une explication",
      "etiqueta": "Les pièces de la théorie",
      "titulo": "État de nature, pacte et État",
      "definicion": [
       "<strong>État de nature</strong> : ce que serait la vie humaine sans pouvoir politique.",
       "<strong>Pacte</strong> : l'accord par lequel on sort de cet état et on cède quelque chose (pouvoir, droits) en échange d'autre chose (sécurité, protection, liberté).",
       "<strong>État</strong> : le pouvoir politique qui résulte du pacte, et qui est légitime parce qu'il naît du consentement."
      ],
      "parrafos": [
       "Attention : personne ne pense que cela s'est vraiment produit. C'est une hypothèse pour penser les fondements du pouvoir."
      ],
      "comprobacion": {
       "etiqueta": "Vérification",
       "pregunta": "Pourquoi les contractualistes imaginent-ils un état de nature ?",
       "opciones": [
        [
         "Pour justifier pourquoi il convient d'en sortir et de créer l'État.",
         true
        ],
        [
         "Parce qu'ils croient qu'il a existé tel quel à la préhistoire.",
         false,
         "Ce n'est pas un fait historique, mais une expérience de pensée."
        ],
        [
         "Pour défendre que nous vivions sans lois.",
         false,
         "Au contraire : il sert à montrer pourquoi nous avons besoin d'un pouvoir politique."
        ],
        [
         "Pour étudier la vie des animaux.",
         false,
         "Il parle d'êtres humains sans gouvernement, non de biologie."
        ]
       ],
       "ok": "Correct. L'état de nature est le point de départ de l'argument.",
       "mal": "Relis-le.",
       "intentos": 2
      }
     },
     {
      "etiqueta": "Définition",
      "titulo": "Contrat social",
      "definicion": [
       "Le <strong>contrat social</strong> est l'accord hypothétique par lequel les êtres humains créent le pouvoir politique.",
       "L'État est ainsi un <strong>artifice</strong> : sa légitimité ne vient ni de la nature ni de Dieu, mais du <strong>consentement</strong> de ceux qui le composent.",
       "Chaque auteur imagine un état de nature différent, et c'est pourquoi il aboutit à un État différent."
      ],
      "comprobacion": {
       "boton": "Vérifier ma compréhension",
       "etiqueta": "Vérification finale",
       "pregunta": "Selon le contractualisme, d'où vient la légitimité de l'État ?",
       "opciones": [
        [
         "Du consentement de ceux qui le composent.",
         true
        ],
        [
         "De la force de celui qui gouverne.",
         false,
         "La force ne donne pas de légitimité : le contrat cherche à justifier le pouvoir."
        ],
        [
         "De la volonté de Dieu.",
         false,
         "C'est la théorie du droit divin, que le contractualisme remplace."
        ],
        [
         "De la tradition : cela a toujours été ainsi.",
         false,
         "Que quelque chose soit ancien ne le rend pas légitime."
        ]
       ],
       "ok": "Correct : le pouvoir est légitime parce que nous en avons convenu.",
       "mal": "Pas encore."
      }
     }
    ]
   },
   {
    "fase": "Phase 2 · Approfondissement",
    "etiqueta": "Nouvelle question",
    "pregunta": "Pourquoi Hobbes et Locke aboutissent-ils à des États si différents ?",
    "intro": [
     "Tous deux sont contractualistes, mais Hobbes défend un pouvoir absolu et Locke un pouvoir limité. La clé est dans la façon dont ils imaginent le point de départ."
    ],
    "pistas": [
     "Pour y voir clair : tous deux partent d'un état de nature imaginé et d'un pacte pour en sortir. La différence ne tient ni au pays ni à l'époque, mais à ce point de départ.",
     "Ce que tu cherches, c'est un levier : plus on dépeint sombrement la vie sans État, plus nous sommes prêts à céder de pouvoir pour y échapper.",
     "Ainsi, celui qui imagine le point de départ comme un danger insupportable justifie de remettre <em>tout</em> le pouvoir ; celui qui l'imagine supportable mais précaire justifie d'en céder seulement une partie et de conserver des droits.",
     "C'est pourquoi un même pacte donne des États opposés : un pouvoir absolu si la peur teinte tout, un pouvoir limité s'il ne manque qu'un arbitre de confiance."
    ],
    "comprobacion": {
     "pregunta": "Qu'est-ce qui explique le mieux la différence entre Hobbes et Locke ?",
     "opciones": [
      [
       "Ils imaginent des états de nature différents, et c'est pourquoi ils concluent des pactes différents.",
       true
      ],
      [
       "Hobbes n'est pas contractualiste.",
       false,
       "Si, il l'est : le Léviathan naît d'un pacte."
      ],
      [
       "Locke préfère la monarchie absolue.",
       false,
       "C'est l'inverse : Locke défend le pouvoir limité et la séparation des pouvoirs."
      ],
      [
       "Ils ont vécu dans des pays différents.",
       false,
       "Le contexte joue un rôle, mais la raison philosophique est dans leur idée de l'état de nature."
      ]
     ],
     "ok": "Exact. Le point de départ décide du type d'État.",
     "mal": "Pas tout à fait."
    },
    "rescate": [
     {
      "boton": "Afficher le tableau",
      "etiqueta": "Trois contractualistes",
      "titulo": "De l'état de nature à l'État",
      "definicion": [
       "<strong>Hobbes</strong> : « guerre de tous contre tous » (« l'homme est un loup pour l'homme ») → par peur, tous cèdent leur pouvoir à un souverain → monarchie absolue (le Léviathan).",
       "<strong>Locke</strong> : paix précaire, avec des droits naturels (vie, liberté, propriété) → pacte limité → État libéral, avec séparation des pouvoirs et droit de se rebeller contre le tyran.",
       "<strong>Rousseau</strong> : le « bon sauvage » est libre et égal ; la société le corrompt → pacte dans lequel chacun se soumet à la volonté générale → démocratie."
      ],
      "comprobacion": {
       "boton": "Terminer par une vérification",
       "pregunta": "Quel auteur défend le droit de se rebeller contre un gouvernement tyrannique ?",
       "opciones": [
        [
         "Locke.",
         true
        ],
        [
         "Hobbes.",
         false,
         "Hobbes donne au souverain un pouvoir absolu, précisément pour éviter le chaos."
        ],
        [
         "Aucun d'eux.",
         false,
         "L'un d'eux le fait : relis la ligne de l'État libéral."
        ],
        [
         "Tous les contractualistes pareillement.",
         false,
         "Non : cela dépend de ce qui a été cédé dans le pacte."
        ]
       ],
       "ok": "Correct : si le gouvernement rompt le pacte, le peuple peut lui retirer son consentement.",
       "mal": "Relis le tableau."
      }
     }
    ]
   }
  ],
  "cierre": {
   "titulo": "Tu comprends maintenant le contrat social",
   "parrafos": [
    "Le contrat social est l'accord hypothétique par lequel nous créons l'État : sa légitimité vient du consentement. Selon la manière d'imaginer l'état de nature, le pacte donne un État absolu (Hobbes), libéral (Locke) ou démocratique (Rousseau).",
    "Pour réfléchir : que céderais-tu pour vivre en sécurité ? Y a-t-il quelque chose que tu ne céderais jamais ?"
   ]
  }
 }
];
