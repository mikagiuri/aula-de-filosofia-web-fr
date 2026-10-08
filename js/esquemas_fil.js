// Generado por web_i18n/i18n_rebuild.js (fr) a partir de web/js/esquemas_fil.js. No editar a mano: editar la memoria tm/fr.json y regenerar.
const ESQUEMAS_FIL = {
 "FIL-T1-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophie · Thème 1",
  "title": "Qu'est-ce que la philosophie ?",
  "mermaid": "flowchart TD\n  center[\"QU'EST-CE QUE LA PHILOSOPHIE ?\"]:::axis\n  origen[\"du mythe au logos\"]:::key\n  mito[\"mythe : explication par les dieux\"]\n  logos[\"logos : explication rationnelle\"]\n  carac[\"caractéristiques\"]:::key\n  c1[\"rationnelle (donne des raisons)\"]\n  c2[\"critique (n'accepte rien sans examen)\"]\n  c3[\"radicale (va à la racine)\"]\n  c4[\"universelle (tout peut être pensé)\"]\n  saber[\"savoir de second degré : interroge les fondements\"]:::key\n  center -->|\"naît\"| origen\n  origen --> mito\n  origen -->|\"passe au\"| logos\n  center -->|\"est un savoir\"| carac\n  carac --> c1\n  carac --> c2\n  carac --> c3\n  carac --> c4\n  center -->|\"c'est pourquoi c'est un\"| saber\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Quel type de savoir est la philosophie et en quoi se distingue-t-elle des autres ?",
   "raiz": "LA PHILOSOPHIE",
   "raiz_d": "Philía (amour) + sophía (sagesse) : amour de la sagesse. Celui qui philosophe ne possède pas la vérité : il la désire et la cherche.",
   "ramas": [
    {
     "rel": "naît de l'",
     "t": "Étonnement",
     "a": "Platon, Aristote",
     "d": "S'étonner devant ce qui semble évident aux autres ; avec la curiosité et le doute.",
     "c": [
      {
       "rel": "commence en reconnaissant",
       "t": "Sa propre ignorance",
       "a": "Socrate",
       "d": "« Je sais seulement que je ne sais rien » : savoir que je ne sais pas est le premier pas pour apprendre."
      }
     ]
    },
    {
     "rel": "surgit avec le passage",
     "t": "Du mythe au logos",
     "k": true,
     "a": "Thalès de Milet",
     "d": "Grèce, VIe s. av. J.-C. : des récits sur les dieux aux explications par des raisons.",
     "c": [
      {
       "rel": "abandonne",
       "t": "Le mythe",
       "d": "Récit traditionnel et dogmatique : tout arrive par la volonté capricieuse des dieux."
      },
      {
       "rel": "adopte",
       "t": "Le logos",
       "d": "Cherche des causes naturelles (l'*arkhé*) avec des arguments que chacun peut discuter."
      }
     ]
    },
    {
     "rel": "se distingue comme",
     "t": "Un savoir des causes dernières",
     "k": true,
     "d": "Face au savoir commun (spontané) et au savoir scientifique (partiel), elle cherche à comprendre la réalité dans son ensemble.",
     "c": [
      {
       "rel": "par sa méthode",
       "t": "Rationnelle et critique",
       "k": true,
       "d": "Elle s'appuie sur des arguments, non sur l'autorité, et n'accepte rien « parce que c'est comme ça », pas même ce qui lui est propre."
      },
      {
       "rel": "par sa portée",
       "t": "Radicale et universelle",
       "d": "Elle va à la racine des problèmes et s'intéresse à toute la réalité."
      },
      {
       "rel": "par sa finalité",
       "t": "Pratique",
       "d": "Elle réfléchit aussi à la manière de vivre : de là naissent l'éthique et la philosophie politique."
      }
     ]
    },
    {
     "rel": "sert aujourd'hui à",
     "t": "Ses fonctions",
     "c": [
      {
       "rel": "enseigne",
       "t": "Fonction critique",
       "d": "À penser par soi-même et à se protéger de la manipulation et de la propagande."
      },
      {
       "rel": "offre",
       "t": "Orientation et sens",
       "d": "Aide à décider comment vivre et à comprendre qui nous sommes."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Fonction critique",
     "rel": "met en pratique l'attitude",
     "a": "Rationnelle et critique"
    }
   ],
   "idea": "« Sapere aude (ose savoir) : aie le courage de te servir de ta propre raison » (Kant). Philosopher, c'est chercher la vérité avec des arguments, sans perdre l'étonnement."
  }
 },
 "FIL-T1-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophie · Thème 1",
  "title": "Les branches de la philosophie",
  "mermaid": "flowchart TD\n  fil[\"LA PHILOSOPHIE\"]:::axis\n  q1[\"qu'est-ce que la réalité ?\"]\n  met[\"Métaphysique et Ontologie\"]:::key\n  q2[\"que pouvons-nous connaître ?\"]\n  epi[\"Épistémologie\"]:::key\n  q3[\"comment devons-nous agir ?\"]\n  eti[\"Éthique\"]:::key\n  q4[\"comment organiser la vie commune ?\"]\n  pol[\"Philosophie politique\"]:::key\n  q5[\"qu'est-ce que la beauté et l'art ?\"]\n  est[\"Esthétique\"]:::key\n  q6[\"comment raisonner correctement ?\"]\n  log[\"Logique\"]:::key\n  fil --> q1 --> met\n  fil --> q2 --> epi\n  fil --> q3 --> eti\n  fil --> q4 --> pol\n  fil --> q5 --> est\n  fil --> q6 --> log\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "À quelle grande question chaque branche de la philosophie s'attache-t-elle à répondre ?",
   "raiz": "LES BRANCHES DE LA PHILOSOPHIE",
   "raiz_d": "Comme son objet est toute la réalité, la philosophie se divise en disciplines, chacune centrée sur un type de questions.",
   "ramas": [
    {
     "rel": "qu'y a-t-il et que savons-nous ?",
     "t": "Philosophie théorique",
     "k": true,
     "c": [
      {
       "rel": "qu'est-ce que la réalité ?",
       "t": "Métaphysique",
       "d": "Ce que signifie « être », ce qui existe et quelles sont les propriétés ultimes des choses."
      },
      {
       "rel": "que pouvons-nous connaître ?",
       "t": "Théorie de la connaissance",
       "d": "Aussi appelée épistémologie ou gnoséologie : origine et limites de la connaissance, et ce qu'est la vérité."
      },
      {
       "rel": "comment bien raisonner ?",
       "t": "Logique",
       "d": "Elle analyse la forme des raisonnements pour séparer les valides de ceux qui ne le sont pas."
      }
     ]
    },
    {
     "rel": "comment devons-nous vivre ?",
     "t": "Philosophie pratique",
     "k": true,
     "c": [
      {
       "rel": "comment dois-je agir ?",
       "t": "Éthique",
       "d": "Le bien et le mal, et le fondement des normes morales."
      },
      {
       "rel": "comment vivre ensemble ?",
       "t": "Philosophie politique",
       "d": "La vie en communauté : le pouvoir, la justice et les formes de gouvernement."
      }
     ]
    },
    {
     "rel": "que sommes-nous et qu'est-ce qui nous émeut ?",
     "t": "L'être humain et son expérience",
     "k": true,
     "c": [
      {
       "rel": "qu'est-ce que l'être humain ?",
       "t": "Anthropologie philosophique",
       "d": "Ce qui nous définit, vu sous l'angle biologique, social et culturel."
      },
      {
       "rel": "qu'est-ce que le beau ?",
       "t": "Esthétique",
       "d": "La beauté et l'art, et ce sur quoi reposent nos jugements sur le beau, le laid ou le sublime."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Anthropologie philosophique",
     "rel": "demande ce que nous sommes avant l'",
     "a": "Éthique"
    }
   ],
   "idea": "Chaque branche naît d'une grande question. Dans le cours : anthropologie (Thème 2), connaissance (3), logique (4), éthique (5), politique (6) et esthétique (7)."
  }
 },
 "FIL-T2-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophie · Thème 2",
  "title": "Nature et culture chez l'être humain",
  "mermaid": "flowchart TD\n  center[\"L'ÊTRE HUMAIN\"]:::axis\n  bio[\"dimension biologique\"]:::key\n  hom[\"hominisation : évolution du corps\"]\n  ev[\"hominidés, bipédie, main, encéphale\"]\n  cul[\"dimension culturelle\"]:::key\n  hum[\"humanisation : apprentissage social\"]\n  simb[\"animal symbolique : langage, technique, culture\"]\n  sintesis[\"nature et culture s'entremêlent\"]:::key\n  center --> bio\n  bio --> hom --> ev\n  center --> cul\n  cul --> hum --> simb\n  bio -->|\"se combinent dans\"| sintesis\n  cul -->|\"se combinent dans\"| sintesis\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Sommes-nous le fruit de la biologie ou de la culture ?",
   "raiz": "NATURE ET CULTURE",
   "raiz_d": "L'être humain est à la fois le produit de l'évolution biologique et de ce qu'il apprend en vivant en société.",
   "ramas": [
    {
     "rel": "est héritée",
     "t": "Nature (le biologique)",
     "k": true,
     "d": "Ce que nous apportons à la naissance : corps, cerveau et capacités. C'est commun à toute l'espèce.",
     "c": [
      {
       "rel": "s'explique par",
       "t": "L'évolution",
       "a": "Darwin, Wallace",
       "d": "Les espèces changent par sélection naturelle : les mieux adaptés survivent et se reproduisent davantage."
      },
      {
       "rel": "dans notre espèce, l'",
       "t": "Hominisation",
       "k": true,
       "d": "Processus biologique jusqu'à l'Homo sapiens : marche bipède, encéphalisation, main au pouce opposable."
      }
     ]
    },
    {
     "rel": "s'apprend",
     "t": "Culture (l'appris)",
     "k": true,
     "a": "Tylor",
     "d": "Connaissances, croyances, morale et coutumes que l'on acquiert en tant que membre d'une société ; elle varie selon les peuples.",
     "c": [
      {
       "rel": "nous rend humains : l'",
       "t": "Humanisation",
       "k": true,
       "d": "Devenir pleinement humain grâce au feu, aux outils, à l'agriculture et à l'organisation sociale."
      },
      {
       "rel": "se transmet par la",
       "t": "Socialisation",
       "d": "Famille, école, amis, médias, langue : c'est ainsi que nous formons l'identité personnelle et collective."
      }
     ]
    },
    {
     "rel": "s'entremêlent dans la",
     "t": "Dialectique nature-culture",
     "d": "Elles ne s'opposent pas : elles ont besoin l'une de l'autre. Nous sommes les deux à la fois.",
     "c": [
      {
       "rel": "parce que nous naissons",
       "t": "Biologiquement « inachevés »",
       "d": "Avec des instincts réduits et un monde ouvert à construire : la culture est une « seconde matrice »."
      },
      {
       "rel": "les unit",
       "t": "Le langage",
       "d": "C'est la charnière entre les deux processus : il permet de transmettre l'appris d'une génération à l'autre."
      },
      {
       "rel": "dépasse le débat",
       "t": "Innéisme contre environnementalisme",
       "d": "Ni seul l'hérité ni seul l'appris du milieu ne décide."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Hominisation",
     "rel": "sur elle se greffe la",
     "a": "Humanisation"
    }
   ],
   "idea": "Nous ne descendons pas du chimpanzé : nous partageons avec lui un ancêtre commun. La biologie nous rend possibles ; la culture achève de nous rendre humains."
  }
 },
 "FIL-T2-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophie · Thème 2",
  "title": "Le problème corps-esprit",
  "mermaid": "flowchart TD\n  q[\"CORPS ET ESPRIT ?\"]:::axis\n  dual[\"Dualisme\"]:::key\n  d1[\"deux réalités distinctes : âme et corps (Platon, Descartes)\"]\n  mon[\"Monisme\"]:::key\n  m1[\"une seule réalité\"]\n  mat[\"matérialisme : tout est matière\"]\n  emer[\"émergentisme : l'esprit surgit du cerveau\"]\n  q --> dual --> d1\n  q --> mon --> m1\n  m1 --> mat\n  m1 --> emer\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Sommes-nous un corps, une âme, ou les deux à la fois ?",
   "raiz": "LE PROBLÈME CORPS-ESPRIT",
   "raiz_d": "De quoi sommes-nous faits : d'une seule réalité ou de deux ? Les réponses se regroupent en deux grandes positions et une voie intermédiaire.",
   "ramas": [
    {
     "rel": "deux réalités",
     "t": "Dualisme",
     "k": true,
     "d": "Corps matériel et âme ou esprit immatériel ; l'âme est ce qu'il y a de supérieur et peut exister sans le corps.",
     "c": [
      {
       "rel": "version ancienne",
       "t": "Le corps, prison de l'âme",
       "a": "Platon",
       "d": "L'âme est immortelle et a trois parties : rationnelle, irascible et concupiscible (mythe de l'attelage ailé)."
      },
      {
       "rel": "version moderne",
       "t": "Res cogitans et res extensa",
       "a": "Descartes",
       "d": "Deux substances : la « chose pensante » (l'esprit) et la « chose étendue » (le corps, presque une machine)."
      }
     ]
    },
    {
     "rel": "une seule réalité",
     "t": "Monisme matérialiste",
     "k": true,
     "a": "Démocrite, Hobbes, La Mettrie ; aujourd'hui, Dennett et les Churchland",
     "d": "Nous sommes corps : l'esprit n'est pas une substance à part, mais une activité du corps, surtout du cerveau.",
     "c": [
      {
       "rel": "le soutient aujourd'hui",
       "t": "Les neurosciences",
       "d": "Une grande partie de la science actuelle comprend le mental comme dépendant du cerveau."
      },
      {
       "rel": "donc",
       "t": "Pas d'âme séparable",
       "d": "Avec la mort du corps, tout s'achève."
      }
     ]
    },
    {
     "rel": "position intermédiaire",
     "t": "L'âme, forme du corps",
     "k": true,
     "a": "Aristote",
     "d": "L'âme est le principe de vie du corps et ne peut exister sans lui.",
     "c": [
      {
       "rel": "distingue",
       "t": "Âme végétative, sensitive et rationnelle"
      },
      {
       "rel": "aujourd'hui on parle de",
       "t": "La structure psychosomatique",
       "d": "Le psychique (psyché) et le corporel (soma) compris comme un tout."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Monisme matérialiste",
     "rel": "nie l'immortalité que défend le",
     "a": "Dualisme"
    },
    {
     "de": "L'âme, forme du corps",
     "rel": "refuse de séparer, comme le fait le",
     "a": "Dualisme"
    }
   ],
   "idea": "Le dualisme sépare âme et corps ; le monisme réduit l'esprit au corps ; Aristote les unit. Aujourd'hui, nous tendons à nous voir comme une unité psychosomatique."
  }
 },
 "FIL-T3-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophie · Thème 3",
  "title": "Rationalisme, empirisme et Kant",
  "mermaid": "flowchart TD\n  con[\"LA CONNAISSANCE\"]:::axis\n  fuente[\"quelle est sa source ?\"]:::key\n  rac[\"Rationalisme\"]:::key\n  r1[\"la raison ; idées innées (Descartes)\"]\n  emp[\"Empirisme\"]:::key\n  e1[\"l'expérience ; esprit comme tabula rasa (Locke, Hume)\"]\n  kant[\"Kant : synthèse critique\"]:::key\n  k1[\"nous connaissons des phénomènes : expérience + formes a priori\"]\n  con --> fuente\n  fuente --> rac --> r1\n  fuente --> emp --> e1\n  rac -->|\"les réunit\"| kant\n  emp -->|\"les réunit\"| kant\n  kant --> k1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "D'où vient notre connaissance et jusqu'où va-t-elle ?",
   "raiz": "L'ORIGINE DE LA CONNAISSANCE",
   "raiz_d": "À l'époque moderne, trois réponses à une même question : la raison, l'expérience ou les deux ?",
   "ramas": [
    {
     "rel": "première réponse",
     "t": "Rationalisme",
     "k": true,
     "a": "Descartes",
     "d": "La source de la connaissance sûre est la raison.",
     "c": [
      {
       "rel": "parce que",
       "t": "Il y a des idées innées",
       "d": "L'esprit apporte dès la naissance des idées qui ne viennent pas des sens."
      },
      {
       "rel": "se méfie des",
       "t": "Les sens",
       "d": "Ils trompent : ils ne sont pas une source sûre de vérité."
      },
      {
       "rel": "limite",
       "t": "La raison bien employée atteint la réalité"
      }
     ]
    },
    {
     "rel": "deuxième réponse",
     "t": "Empirisme",
     "k": true,
     "a": "Locke, Hume",
     "d": "Toute connaissance provient de l'expérience des sens.",
     "c": [
      {
       "rel": "parce que",
       "t": "L'esprit est une page blanche",
       "d": "Il n'y a pas d'idées innées : tout ce que nous savons est entré par les sens."
      },
      {
       "rel": "limite",
       "t": "Nous ne pouvons pas aller au-delà de l'expérience"
      }
     ]
    },
    {
     "rel": "synthèse",
     "t": "Criticisme",
     "k": true,
     "a": "Kant",
     "d": "Les deux sources ont besoin l'une de l'autre et se complètent.",
     "c": [
      {
       "rel": "les sens apportent",
       "t": "Le contenu",
       "d": "Les impressions que nous recevons."
      },
      {
       "rel": "l'entendement apporte",
       "t": "Les formes et les catégories",
       "d": "Elles ordonnent ces impressions."
      },
      {
       "rel": "limite",
       "t": "Nous ne connaissons les choses que telles qu'elles nous apparaissent",
       "d": "Non les choses « en soi »."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Criticisme",
     "rel": "donne en partie raison à l'",
     "a": "Rationalisme"
    },
    {
     "de": "Criticisme",
     "rel": "donne en partie raison à l'",
     "a": "Empirisme"
    }
   ],
   "idea": "« Les pensées sans contenu sont vides ; les intuitions sans concepts sont aveugles » (Kant) : nous connaissons en combinant expérience et raison."
  }
 },
 "FIL-M-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophie · M",
  "title": "La réalité : qu'y a-t-il et comment est-elle ?",
  "mermaid": "flowchart TD\n  center[\"LA MÉTAPHYSIQUE : QU'Y A-T-IL ET COMMENT EST-ELLE ?\"]:::axis\n  apa[\"apparence et réalité\"]:::key\n  a1[\"Parménide : le changement est apparence\"]\n  a2[\"Platon : les Idées, plus réelles que le sensible\"]\n  sus[\"de quoi tout est-il fait ?\"]:::key\n  s1[\"combien de réalités : monisme, dualisme, pluralisme\"]\n  s2[\"de quel type : matérialisme ou idéalisme\"]\n  ari[\"Aristote : la substance\"]:::key\n  r1[\"substance et accidents ; matière et forme\"]\n  r2[\"acte et puissance : expliquent le changement\"]\n  r3[\"essence (ce que c'est) et existence (que c'est)\"]\n  men[\"esprit et corps\"]:::key\n  m1[\"dualisme, théorie de l'identité, fonctionnalisme\"]\n  m2[\"test de Turing face à la chambre chinoise\"]\n  tie[\"temps et changement\"]:::key\n  t1[\"Héraclite face à Parménide et Zénon\"]\n  t2[\"temps absolu (Newton) ou relatif (Leibniz)\"]\n  lib[\"sommes-nous libres ?\"]:::key\n  l1[\"déterminisme dur, libertarisme, compatibilisme\"]\n  dios[\"Dieu existe-t-il ?\"]:::key\n  d1[\"pour : ontologique, cosmologique, du dessein\"]\n  d2[\"contre : le problème du mal\"]\n  d3[\"théisme, athéisme, agnosticisme, fidéisme\"]\n  center --> apa\n  apa --> a1\n  apa --> a2\n  center --> sus\n  sus --> s1\n  sus --> s2\n  center --> ari\n  ari --> r1\n  ari --> r2\n  ari --> r3\n  center --> men\n  men --> m1\n  men -->|\"une machine peut-elle penser ?\"| m2\n  center --> tie\n  tie --> t1\n  tie --> t2\n  center --> lib\n  lib --> l1\n  center --> dios\n  dios --> d1\n  dios --> d2\n  dios --> d3\n  r2 -->|\"répond à\"| a1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "FIL-T3-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophie · Thème 3",
  "title": "La science et sa méthode",
  "mermaid": "flowchart TD\n  ci[\"LA SCIENCE\"]:::axis\n  met[\"méthode hypothético-déductive\"]:::key\n  h[\"problème, hypothèse, mise à l'épreuve, loi\"]\n  pop[\"Popper : falsificationnisme\"]:::key\n  p1[\"une théorie est scientifique si elle peut être réfutée\"]\n  kuhn[\"Kuhn : paradigmes\"]:::key\n  ku[\"science normale, crise, révolution, nouveau paradigme\"]\n  ci --> met --> h\n  ci --> pop --> p1\n  ci --> kuhn --> ku\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Comment la science travaille-t-elle et comment progresse-t-elle ?",
   "raiz": "LE SAVOIR SCIENTIFIQUE",
   "raiz_d": "Une connaissance rationnelle, objective, systématique, méthodique et vérifiable.",
   "ramas": [
    {
     "rel": "se divise en",
     "t": "Types de science",
     "c": [
      {
       "rel": "démontrent par cohérence",
       "t": "Sciences formelles",
       "d": "Logique et mathématiques : elles étudient des formes et des relations abstraites, sans expériences."
      },
      {
       "rel": "se confrontent à l'expérience",
       "t": "Sciences empiriques",
       "d": "Naturelles (physique, chimie, biologie) et sociales (histoire, économie, sociologie)."
      }
     ]
    },
    {
     "rel": "procède avec",
     "t": "La méthode",
     "c": [
      {
       "rel": "généralise",
       "t": "Méthode inductive",
       "d": "De nombreux cas particuliers à une loi générale ; on n'observe jamais tous les cas, donc elle ne donne que des conclusions probables."
      },
      {
       "rel": "l'améliore la",
       "t": "Méthode hypothético-déductive",
       "k": true,
       "a": "Galilée",
       "d": "Problème, hypothèse, conséquences déduites et vérification expérimentale ; si elles se confirment, loi."
      }
     ]
    },
    {
     "rel": "progresse, selon Popper, par",
     "t": "Falsifiabilité",
     "k": true,
     "a": "Popper",
     "d": "Une théorie est scientifique si l'on peut concevoir une expérience capable de la réfuter.",
     "c": [
      {
       "rel": "d'où",
       "t": "Conjectures et réfutations",
       "d": "Aucune théorie n'est entièrement prouvée : elle résiste seulement aux tentatives de la réfuter (essais et erreurs)."
      }
     ]
    },
    {
     "rel": "progresse, selon Kuhn, par",
     "t": "Paradigmes",
     "k": true,
     "a": "Kuhn",
     "d": "Cadre partagé dans lequel travaillent les scientifiques pendant de longues périodes.",
     "c": [
      {
       "rel": "si les anomalies s'accumulent",
       "t": "Révolution scientifique",
       "d": "Un paradigme en remplace un autre, comme la physique d'Einstein celle de Newton."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Sciences empiriques",
     "rel": "emploient surtout la",
     "a": "Méthode hypothético-déductive"
    },
    {
     "de": "Méthode inductive",
     "rel": "ne prouve jamais tout à fait : d'où la",
     "a": "Falsifiabilité"
    }
   ],
   "idea": "La science n'atteint pas de vérités définitives : elle propose des hypothèses, les met à l'épreuve et change de cadre quand les anomalies s'accumulent."
  }
 },
 "FIL-T5-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophie · Thème 5",
  "title": "Éthique et morale : types de théories",
  "mermaid": "flowchart TD\n  center[\"L'ÉTHIQUE\"]:::axis\n  moral[\"réfléchit sur la MORALE\"]:::key\n  m1[\"normes et valeurs d'une communauté\"]\n  tipos[\"types de théories éthiques\"]:::key\n  mat[\"matérielles : disent quel est le bien ou la fin\"]:::key\n  form[\"formelles : donnent la forme du devoir, non le contenu\"]:::key\n  tele[\"téléologiques : regardent la fin et les conséquences\"]\n  deon[\"déontologiques : regardent le devoir en soi\"]\n  center -->|\"pense la\"| moral --> m1\n  center --> tipos\n  tipos --> mat\n  tipos --> form\n  mat -->|\"sont souvent\"| tele\n  form -->|\"sont souvent\"| deon\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Quelle différence y a-t-il entre morale et éthique, et comment classe-t-on les théories éthiques ?",
   "raiz": "ÉTHIQUE ET MORALE",
   "raiz_d": "Elles partent de la question de Socrate, « comment devons-nous vivre ? », qui n'est pas technique mais une question sur les fins.",
   "ramas": [
    {
     "rel": "ce que l'on vit",
     "t": "La morale",
     "d": "Normes et valeurs qui régissent de fait une communauté."
    },
    {
     "rel": "ce que l'on pense",
     "t": "L'éthique",
     "k": true,
     "d": "Réflexion philosophique sur la morale : elle demande si ses normes sont bonnes et justifiées."
    },
    {
     "rel": "présupposent",
     "t": "La liberté",
     "c": [
      {
       "rel": "permet la",
       "t": "Responsabilité morale",
       "d": "Si tout était déterminé, on ne pourrait ni louer ni blâmer."
      },
      {
       "rel": "loi propre",
       "t": "Autonomie",
       "k": true,
       "a": "Kant",
       "d": "Se donner à soi-même la loi morale avec sa propre raison."
      },
      {
       "rel": "loi étrangère",
       "t": "Hétéronomie",
       "d": "Recevoir la norme de l'extérieur : la peur, la coutume, l'autorité."
      }
     ]
    },
    {
     "rel": "qu'est-ce qui rend une action bonne ?",
     "t": "Types de théories éthiques",
     "c": [
      {
       "rel": "fixent une fin",
       "t": "Éthiques matérielles",
       "k": true,
       "d": "Elles disent quel est le bien à poursuivre : le bonheur, le plaisir, l'utilité.",
       "c": [
        {
         "rel": "sont souvent",
         "t": "Téléologiques",
         "a": "Aristote, Épicure, utilitarisme",
         "d": "De telos (fin) : elles jugent l'action par ses conséquences."
        }
       ]
      },
      {
       "rel": "fixent une forme",
       "t": "Éthiques formelles",
       "k": true,
       "d": "Elles ne disent pas quoi faire, mais la forme que doit avoir toute norme morale.",
       "c": [
        {
         "rel": "sont souvent",
         "t": "Déontologiques",
         "a": "Kant",
         "d": "De déon (devoir) : elles jugent l'action par le devoir et l'intention, non par ses résultats."
        }
       ]
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "L'éthique",
     "rel": "examine et justifie (ou critique)",
     "a": "La morale"
    },
    {
     "de": "Autonomie",
     "rel": "est le fondement des",
     "a": "Éthiques formelles"
    }
   ],
   "idea": "La morale se vit ; l'éthique la pense. Face à une action, les éthiques matérielles regardent la fin et les conséquences ; les formelles, le devoir et l'intention."
  }
 },
 "FIL-T5-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophie · Thème 5",
  "title": "Les grandes théories éthiques",
  "mermaid": "flowchart TD\n  et[\"THÉORIES ÉTHIQUES\"]:::axis\n  ar[\"Eudémonisme (Aristote)\"]:::key\n  a1[\"fin : le bonheur (eudaimonía) par la vertu\"]\n  ep[\"Hédonisme et Utilitarisme (Épicure, Mill)\"]:::key\n  e1[\"fin : le plaisir, ou le plus grand bonheur du plus grand nombre\"]\n  ka[\"Déontologie (Kant)\"]:::key\n  k1[\"le devoir par respect pour la loi : impératif catégorique\"]\n  em[\"Émotivisme (Hume)\"]:::key\n  h1[\"les jugements moraux expriment des sentiments\"]\n  et --> ar --> a1\n  et --> ep --> e1\n  et --> ka --> k1\n  et --> em --> h1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Qu'est-ce qui rend une action bonne : la fin qu'elle poursuit, le devoir ou le sentiment ?",
   "raiz": "LES GRANDES THÉORIES ÉTHIQUES",
   "raiz_d": "Trois grandes réponses : le bien comme fin (éthiques matérielles), comme devoir (Kant) ou comme sentiment (Hume).",
   "ramas": [
    {
     "rel": "le bien est une fin",
     "t": "Éthiques matérielles",
     "d": "Elles jugent l'action par la fin qu'elle atteint : elles sont téléologiques.",
     "c": [
      {
       "rel": "la fin est",
       "t": "Le bonheur (eudaimonía)",
       "k": true,
       "a": "Aristote",
       "d": "Une vie réussie dans son ensemble, non un instant de plaisir.",
       "c": [
        {
         "rel": "s'atteint par la",
         "t": "Vertu comme juste milieu",
         "d": "Entre deux extrêmes, guidée par la raison et l'habitude : le courage, entre la lâcheté et la témérité."
        }
       ]
      },
      {
       "rel": "la fin est",
       "t": "Le plaisir serein (ataraxie)",
       "a": "Épicure",
       "d": "Absence de douleur et de trouble : vie sereine, avec des amis et sans crainte des dieux ni de la mort."
      },
      {
       "rel": "la fin est",
       "t": "Le plus grand bonheur du plus grand nombre",
       "k": true,
       "a": "Bentham, Mill",
       "d": "Utilitarisme : le critère du plaisir appliqué à la société. Mill ajoute qu'il existe des plaisirs supérieurs."
      }
     ]
    },
    {
     "rel": "le bien est le devoir",
     "t": "Éthique formelle",
     "a": "Kant",
     "d": "Une action est morale quand elle est faite par respect pour la loi morale, non pour ses conséquences.",
     "c": [
      {
       "rel": "s'exprime dans l'",
       "t": "Impératif catégorique",
       "k": true,
       "d": "Commandement inconditionnel de la raison : agis seulement selon une maxime que tu peux vouloir comme loi universelle."
      },
      {
       "rel": "ordonne de traiter la personne",
       "t": "Toujours comme une fin",
       "d": "Et jamais seulement comme un moyen : fondement de la dignité humaine."
      }
     ]
    },
    {
     "rel": "le bien se ressent",
     "t": "Émotivisme",
     "k": true,
     "a": "Hume",
     "d": "Les jugements moraux ne se déduisent pas de la raison : ils expriment des sentiments d'approbation ou de rejet.",
     "c": [
      {
       "rel": "parce que",
       "t": "La raison, esclave des passions",
       "d": "« La raison est, et ne doit être, que l'esclave des passions » (Hume)."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Éthique formelle",
     "rel": "refuse de fonder la morale sur",
     "a": "Le bonheur (eudaimonía)"
    },
    {
     "de": "Émotivisme",
     "rel": "nie le fondement rationnel de l'",
     "a": "Impératif catégorique"
    }
   ],
   "idea": "Aristote, Épicure et l'utilitarisme regardent la fin ; Kant, le devoir ; Hume, le sentiment. Dans l'éthique appliquée d'aujourd'hui, les mêmes questions reviennent."
  }
 },
 "FIL-T7-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophie · Thème 7",
  "title": "Qu'est-ce que la beauté ?",
  "mermaid": "flowchart TD\n  bel[\"LA BEAUTÉ\"]:::axis\n  q[\"où est-elle ?\"]:::key\n  obj[\"Objectivisme : dans l'objet\"]:::key\n  o1[\"proportion et harmonie (les classiques)\"]\n  sub[\"Subjectivisme : dans le sujet\"]:::key\n  s1[\"des goûts et des couleurs, on ne discute pas\"]\n  jui[\"le jugement esthétique\"]:::key\n  j1[\"Kant : goût sans concept, avec prétention à l'universalité\"]\n  bel --> q\n  q --> obj --> o1\n  q --> sub --> s1\n  bel -->|\"le résout\"| jui --> j1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "La beauté est-elle dans les choses ou dans celui qui les regarde ?",
   "raiz": "LE BEAU",
   "raiz_d": "L'esthétique (de aísthesis, « sensation ») pense la beauté, l'art et l'expérience de contempler quelque chose pour lui-même.",
   "ramas": [
    {
     "rel": "est dans l'objet",
     "t": "Beauté objective",
     "k": true,
     "a": "Pythagoriciens, Polyclète, Augustin, Thomas",
     "d": "Conception classique : le beau, c'est ce qui est bien proportionné.",
     "c": [
      {
       "rel": "consiste en",
       "t": "Proportion, harmonie et mesure",
       "d": "C'est pourquoi elle peut se mesurer et s'enseigner : la musique comme nombre, le Canon du corps."
      }
     ]
    },
    {
     "rel": "est dans le sujet",
     "t": "Beauté subjective",
     "k": true,
     "d": "Conception moderne : le beau, c'est le plaisir que nous ressentons devant quelque chose.",
     "c": [
      {
       "rel": "son risque",
       "t": "« Des goûts et des couleurs, on ne discute pas »",
       "d": "Si tout dépend de celui qui regarde, aucun jugement ne vaudrait mieux qu'un autre."
      }
     ]
    },
    {
     "rel": "vaut-il pour tous ?",
     "t": "Le jugement de goût",
     "k": true,
     "d": "Dire « ceci est beau » : est-ce seulement « cela me plaît » ou réclame-t-on l'accord des autres ?",
     "c": [
      {
       "rel": "le sauve avec le",
       "t": "Critique compétent",
       "a": "Hume",
       "d": "Sensibilité, expérience, comparaison et absence de préjugés : il existe un bon goût."
      },
      {
       "rel": "le définit comme",
       "t": "Désintéressé et universel sans concept",
       "a": "Kant",
       "d": "Je contemple sans vouloir posséder ni utiliser ; je réclame l'accord de tous, mais je ne peux pas le démontrer par des règles."
      }
     ]
    },
    {
     "rel": "au-delà du beau",
     "t": "Le sublime",
     "a": "Kant",
     "d": "Crainte et admiration devant l'immense ou le puissant (une tempête, la mer, le cosmos)."
    }
   ],
   "cruces": [
    {
     "de": "Critique compétent",
     "rel": "nuance, sans la nier, la",
     "a": "Beauté subjective"
    },
    {
     "de": "Désintéressé et universel sans concept",
     "rel": "réclame un accord universel pour le",
     "a": "Beauté subjective"
    }
   ],
   "idea": "Pour les classiques, la beauté est dans l'objet ; pour les modernes, dans le sujet. Hume et Kant cherchent à faire en sorte que le goût, tout en étant subjectif, ne soit pas pur caprice."
  }
 },
 "FIL-T7-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophie · Thème 7",
  "title": "Théories sur ce qu'est l'art",
  "mermaid": "flowchart TD\n  art[\"QU'EST-CE QUE L'ART ?\"]:::axis\n  mim[\"Mimèsis : imiter la réalité\"]:::key\n  exp[\"Expression : communiquer des émotions\"]:::key\n  form[\"Formalisme : la forme importe (l'art pour l'art)\"]:::key\n  inst[\"Théorie institutionnelle : l'art est ce que le monde de l'art reconnaît\"]:::key\n  fun[\"fonctions de l'art\"]:::key\n  f1[\"esthétique, cognitive, sociale et critique\"]\n  art --> mim\n  art --> exp\n  art --> form\n  art --> inst\n  art -->|\"remplit\"| fun --> f1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Qu'est-ce qui fait de quelque chose une œuvre d'art ?",
   "raiz": "L'ART",
   "raiz_d": "Qu'ont en commun une cathédrale, une symphonie et un urinoir signé par Duchamp ? Quatre réponses, chacune avec son problème.",
   "ramas": [
    {
     "rel": "l'art imite",
     "t": "Mimésis",
     "k": true,
     "d": "Représenter la réalité ; domine de la Grèce à la Renaissance.",
     "c": [
      {
       "rel": "peine à expliquer",
       "t": "La musique et l'art abstrait",
       "d": "Ils n'imitent rien."
      }
     ]
    },
    {
     "rel": "l'art exprime",
     "t": "Expression",
     "k": true,
     "d": "Depuis le Romantisme : communiquer le monde intérieur de l'artiste et le faire ressentir.",
     "c": [
      {
       "rel": "peine à expliquer",
       "t": "Pourquoi des pleurs ne sont pas de l'art",
       "d": "Des pleurs ou un cri expriment eux aussi des émotions."
      }
     ]
    },
    {
     "rel": "l'art est forme",
     "t": "Formalisme",
     "k": true,
     "d": "Ce qui est artistique, c'est la forme : composition, couleur, rythme, structure.",
     "c": [
      {
       "rel": "peine à expliquer",
       "t": "La signification et le sujet"
      }
     ]
    },
    {
     "rel": "l'art est ce qui est reconnu",
     "t": "Théorie institutionnelle",
     "k": true,
     "a": "Danto, Dickie",
     "d": "Est de l'art ce que le monde de l'art (musées, critiques, histoire de l'art) traite comme de l'art.",
     "c": [
      {
       "rel": "répond au",
       "t": "Ready-made",
       "a": "Duchamp",
       "d": "Un objet industriel signé et exposé : l'habileté et la beauté ne comptent plus."
      },
      {
       "rel": "son risque",
       "t": "« L'art, c'est ce que disent les experts »"
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Formalisme",
     "rel": "fait bien place à",
     "a": "La musique et l'art abstrait"
    },
    {
     "de": "Ready-made",
     "rel": "rompt avec la",
     "a": "Mimésis"
    }
   ],
   "idea": "Aucune définition ne clôt le débat : chaque théorie explique bien un type d'art et échoue avec un autre. Depuis Duchamp, l'art est aussi une question."
  }
 },
 "FIL-TA-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophie · Atelier d'argumentation",
  "title": "L'argument : validité et vérité",
  "mermaid": "flowchart TD\n  arg[\"L'ARGUMENT\"]:::axis\n  prem[\"prémisses\"]:::key\n  conc[\"conclusion\"]:::key\n  tipos[\"types\"]:::key\n  ded[\"déductif : la conclusion suit avec nécessité\"]\n  ind[\"inductif : la conclusion est seulement probable\"]\n  eval[\"évaluation\"]:::key\n  val[\"validité : la forme est correcte\"]\n  ver[\"vérité : les prémisses sont vraies\"]\n  sol[\"solide : valide + prémisses vraies\"]:::key\n  arg --> prem\n  prem -->|\"soutiennent la\"| conc\n  arg --> tipos\n  tipos --> ded\n  tipos --> ind\n  arg --> eval\n  eval --> val\n  eval --> ver\n  val -->|\"ensemble, elles donnent\"| sol\n  ver -->|\"ensemble, elles donnent\"| sol\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Quand un argument prouve-t-il vraiment sa conclusion ?",
   "raiz": "L'ARGUMENT",
   "raiz_d": "Argumenter, c'est donner des raisons : un ensemble de propositions dans lequel certaines, les prémisses, soutiennent une autre, la conclusion.",
   "ramas": [
    {
     "rel": "se compose de",
     "t": "Prémisses et conclusion",
     "d": "Les prémisses suivent souvent « parce que », « puisque » ; la conclusion, « donc », « par conséquent ».",
     "c": [
      {
       "rel": "chacune est une",
       "t": "Proposition",
       "d": "Énoncé dont il est sensé de dire qu'il est vrai ou faux : « il pleut », « 7 est premier »."
      }
     ]
    },
    {
     "rel": "raisonne de deux manières",
     "t": "Déduction et induction",
     "c": [
      {
       "rel": "conclusion nécessaire",
       "t": "Déduction",
       "k": true,
       "d": "Si les prémisses sont vraies, la conclusion ne peut pas être fausse : « Tous les humains sont mortels… »."
      },
      {
       "rel": "conclusion probable",
       "t": "Induction",
       "d": "De cas particuliers à une loi générale : beaucoup de cygnes blancs ne prouvent pas que tous le sont."
      }
     ]
    },
    {
     "rel": "s'évalue par",
     "t": "Validité et vérité",
     "k": true,
     "d": "Elles sont indépendantes : la validité tient à la forme ; la vérité, au contenu.",
     "c": [
      {
       "rel": "propriété de la forme",
       "t": "Validité",
       "d": "La conclusion découle correctement des prémisses.",
       "c": [
        {
         "rel": "avec des prémisses fausses",
         "t": "Ne prouve rien",
         "d": "« Les poissons volent ; Nemo est un poisson ; donc Nemo vole » : forme valide, conclusion fausse."
        }
       ]
      },
      {
       "rel": "propriété du contenu",
       "t": "Vérité",
       "d": "Les prémisses disent comment sont de fait les choses."
      },
      {
       "rel": "si les deux sont réunies",
       "t": "Argument solide",
       "k": true,
       "d": "Valide et à prémisses vraies : la conclusion est garantie."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Déduction",
     "rel": "bien construite, elle a",
     "a": "Validité"
    },
    {
     "de": "Proposition",
     "rel": "est ce qui peut être ou non",
     "a": "Vérité"
    }
   ],
   "idea": "Un argument valide ne suffit pas : pour prouver sa conclusion, il doit être solide, c'est-à-dire valide et à prémisses vraies."
  }
 },
 "FIL-TA-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophie · Atelier d'argumentation",
  "title": "Les sophismes",
  "mermaid": "flowchart TD\n  fal[\"LES SOPHISMES\"]:::axis\n  def[\"arguments qui semblent valides mais ne le sont pas\"]\n  formal[\"formels : défaut dans la structure logique\"]:::key\n  inf[\"informels : défaut dans le contenu ou le langage\"]:::key\n  ah[\"ad hominem : attaquer la personne\"]\n  ap[\"ad populum : en appeler à la majorité\"]\n  aver[\"ad verecundiam : en appeler à l'autorité\"]\n  fc[\"fausse cause : confondre corrélation et cause\"]\n  hp[\"homme de paille : déformer la thèse adverse\"]\n  fal --> def\n  fal --> formal\n  fal --> inf\n  inf --> ah\n  inf --> ap\n  inf --> aver\n  inf --> fc\n  inf --> hp\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Comment reconnaître un raisonnement qui semble bon mais ne l'est pas ?",
   "raiz": "LES SOPHISMES",
   "raiz_d": "Arguments qui semblent valides et ne le sont pas. Formels : la forme est défaillante. Informels : le contenu ou le langage l'est.",
   "ramas": [
    {
     "rel": "la forme est défaillante",
     "t": "Sophismes formels",
     "k": true,
     "d": "La structure logique est incorrecte, même si chaque phrase peut être vraie.",
     "c": [
      {
       "rel": "par exemple",
       "t": "Affirmer le conséquent",
       "d": "« S'il pleut, le sol est mouillé ; le sol est mouillé ; donc il a plu. » Ce pouvait être un tuyau d'arrosage."
      }
     ]
    },
    {
     "rel": "informels : regardent qui le dit",
     "t": "Font appel aux personnes",
     "d": "Ils remplacent les raisons par celui qui parle ou par le nombre de ceux qui le disent.",
     "c": [
      {
       "rel": "attaque la personne",
       "t": "Ad hominem",
       "k": true,
       "d": "« Tu ne peux pas donner ton avis sur la guerre : tu n'as pas fait ton service militaire. » Qui parle ne réfute pas ce qui est dit."
      },
      {
       "rel": "autorité non pertinente",
       "t": "Ad verecundiam",
       "d": "« Un prix Nobel de physique dit que l'homéopathie marche » : il n'est pas expert en médecine."
      },
      {
       "rel": "en appelle à la majorité",
       "t": "Ad populum",
       "d": "« Tous mes amis achètent cette marque ; ce doit être la meilleure » : qu'une chose soit populaire ne la rend pas vraie."
      }
     ]
    },
    {
     "rel": "informels : déforment",
     "t": "Déforment ou exagèrent",
     "d": "Ils discutent avec une version fausse ou exagérée de ce qui a été dit.",
     "c": [
      {
       "rel": "caricature l'adversaire",
       "t": "Homme de paille",
       "k": true,
       "d": "« Tu veux réguler les réseaux ? Autrement dit, tu veux tout censurer ? » Réguler n'est pas tout censurer."
      },
      {
       "rel": "enchaîne des maux sans preuves",
       "t": "Pente glissante",
       "d": "« Si on laisse le portable pendant la récré, ensuite ils l'utiliseront en classe et à la fin personne n'étudiera. »"
      }
     ]
    },
    {
     "rel": "informels : sautent sans base",
     "t": "Concluent sans base suffisante",
     "d": "Ils tirent des conclusions que les données ne permettent pas.",
     "c": [
      {
       "rel": "corrélation n'est pas cause",
       "t": "Fausse cause",
       "k": true,
       "d": "« Depuis que ce parti gouverne, le chômage a augmenté ; donc c'est lui qui l'a causé » : il peut y avoir d'autres causes."
      },
      {
       "rel": "peu de cas",
       "t": "Généralisation hâtive",
       "d": "« Deux amis ont échoué avec ce professeur : il fait échouer tout le monde. » Deux cas ne suffisent pas."
      }
     ]
    }
   ],
   "idea": "Face à tout argument, demande-toi : la conclusion suit-elle vraiment ? Qu'est-ce que cela change de savoir qui le dit ? Est-ce bien ce qui a été dit ? Y a-t-il des preuves suffisantes ?"
  }
 },
 "FIL-T6-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophie · Thème 6",
  "title": "L'origine de l'État : nature ou contrat ?",
  "mermaid": "flowchart TD\n  est[\"L'ORIGINE DE L'ÉTAT\"]:::axis\n  nat[\"Nature ? (Aristote)\"]:::key\n  n1[\"l'humain est zoon politikón : la polis est naturelle\"]\n  con[\"Contrat ? (les modernes)\"]:::key\n  c1[\"l'État est un artifice : un pacte pour sortir de l'état de nature\"]\n  ho[\"Hobbes\"]:::key\n  h1[\"guerre de tous contre tous → souverain absolu (Léviathan)\"]\n  lo[\"Locke\"]:::key\n  l1[\"droits naturels → État libéral et séparation des pouvoirs\"]\n  ro[\"Rousseau\"]:::key\n  r1[\"volonté générale → souveraineté populaire\"]\n  est --> nat --> n1\n  est --> con --> c1\n  con --> ho --> h1\n  con --> lo --> l1\n  con --> ro --> r1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Pourquoi l'État existe-t-il : naît-il de notre nature ou le créons-nous par un pacte ?",
   "raiz": "L'ORIGINE DE L'ÉTAT",
   "raiz_d": "Aristote : il est naturel. Les contractualistes : c'est un artifice, un pacte pour sortir de l'état de nature (une hypothèse, non un fait).",
   "ramas": [
    {
     "rel": "réponse ancienne",
     "t": "Origine naturelle",
     "k": true,
     "a": "Aristote",
     "d": "L'être humain est zoon politikón, animal politique : la communauté naît de notre condition sociale.",
     "c": [
      {
       "rel": "celui qui vit isolé",
       "t": "« Ou c'est une bête ou c'est un dieu »",
       "d": "En dehors de la pólis, personne ne devient pleinement humain."
      }
     ]
    },
    {
     "rel": "pacte par peur",
     "t": "Souverain absolu",
     "k": true,
     "a": "Hobbes",
     "d": "Tous cèdent leur pouvoir à un seul, le Léviathan, qui garantit la paix.",
     "c": [
      {
       "rel": "pour sortir de la",
       "t": "Guerre de tous contre tous",
       "d": "« L'homme est un loup pour l'homme » : la peur et l'insécurité dominent."
      }
     ]
    },
    {
     "rel": "pacte limité",
     "t": "État libéral",
     "k": true,
     "a": "Locke",
     "d": "Pouvoir limité, séparation des pouvoirs et droit de se rebeller contre le tyran.",
     "c": [
      {
       "rel": "pour protéger les",
       "t": "Droits naturels",
       "d": "Vie, liberté et propriété : ils existent sans État, mais il manque un juge impartial."
      }
     ]
    },
    {
     "rel": "pacte de chacun avec tous",
     "t": "Souveraineté populaire",
     "k": true,
     "a": "Rousseau",
     "d": "Le peuple se gouverne lui-même : racine de la démocratie moderne.",
     "c": [
      {
       "rel": "chacun obéit à la",
       "t": "Volonté générale",
       "d": "Le bien commun, non l'intérêt particulier."
      },
      {
       "rel": "part du",
       "t": "Bon sauvage",
       "d": "Libre et égal ; c'est la société qui le corrompt par l'inégalité et la propriété."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "État libéral",
     "rel": "limite le pouvoir que concentre le",
     "a": "Souverain absolu"
    },
    {
     "de": "Souveraineté populaire",
     "rel": "place dans le peuple le pouvoir du",
     "a": "Souverain absolu"
    }
   ],
   "idea": "Pour Aristote, l'État est naturel ; pour les modernes, un pacte. Selon la façon dont ils imaginent la vie sans État, Hobbes, Locke et Rousseau aboutissent à des États très différents."
  }
 },
 "FIL-T6-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophie · Thème 6",
  "title": "Justice, pouvoir et formes de gouvernement",
  "mermaid": "flowchart TD\n  pol[\"LA VIE POLITIQUE\"]:::axis\n  jus[\"Justice\"]:::key\n  j1[\"Platon : chaque partie remplit sa fonction · Rawls : le voile d'ignorance\"]\n  leg[\"Pouvoir et légitimité (Weber)\"]:::key\n  le1[\"tradition · charisme · légalité rationnelle\"]\n  gob[\"Formes de gouvernement\"]:::key\n  g1[\"un (monarchie) · quelques-uns (aristocratie) · beaucoup (démocratie)\"]\n  dem[\"Démocratie\"]:::key\n  d1[\"souveraineté populaire, libertés et séparation des pouvoirs ; ennemis : manipulation et inégalité\"]\n  dh[\"Droits humains et État de droit\"]:::key\n  dh1[\"limite qu'aucun pouvoir ne peut franchir (Arendt : contre le totalitarisme)\"]\n  pol --> jus --> j1\n  pol --> leg --> le1\n  pol --> gob --> g1\n  gob --> dem --> d1\n  pol --> dh --> dh1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Qu'est-ce qui rend un pouvoir légitime et une société juste ?",
   "raiz": "JUSTICE, POUVOIR ET DÉMOCRATIE",
   "raiz_d": "La philosophie politique ne décrit pas comment sont les sociétés, mais comment elles devraient être.",
   "ramas": [
    {
     "rel": "pourquoi obéissons-nous ?",
     "t": "Légitimité",
     "k": true,
     "a": "Weber",
     "d": "Le pouvoir, c'est faire obéir les autres ; la légitimité, c'est le droit de commander reconnu comme juste.",
     "c": [
      {
       "rel": "trois sources",
       "t": "Tradition, charisme et légalité",
       "d": "« On a toujours fait ainsi » ; la force d'un chef ; obéir aux lois et non aux personnes (État moderne)."
      }
     ]
    },
    {
     "rel": "quel partage est juste ?",
     "t": "Justice",
     "k": true,
     "d": "Donner à chacun ce qui lui revient et répartir équitablement charges et bénéfices.",
     "c": [
      {
       "rel": "selon Platon",
       "t": "Chaque partie remplit sa fonction",
       "d": "La cité juste de la République : ses parties vivent en harmonie."
      },
      {
       "rel": "selon Rawls",
       "t": "Le voile d'ignorance",
       "d": "Choisir les règles sans savoir quelle place tu occuperas : libertés égales et seulement les inégalités qui aident les plus défavorisés."
      }
     ]
    },
    {
     "rel": "qui commande ?",
     "t": "Formes de gouvernement",
     "d": "Un seul (monarchie), quelques-uns (aristocratie) ou beaucoup (démocratie) ; ils dégénèrent en tyrannie, oligarchie et démagogie.",
     "c": [
      {
       "rel": "gouvernement du peuple",
       "t": "Démocratie",
       "k": true,
       "d": "Souveraineté populaire, participation, égalité devant la loi, pluralisme et séparation des pouvoirs.",
       "c": [
        {
         "rel": "ses ennemis",
         "t": "Manipulation, inégalité et apathie"
        }
       ]
      }
     ]
    },
    {
     "rel": "quelle limite a le pouvoir ?",
     "t": "Droits humains",
     "k": true,
     "d": "Exigences minimales de toute personne du seul fait d'être une personne (Déclaration universelle, 1948).",
     "c": [
      {
       "rel": "les garantit l'",
       "t": "État de droit",
       "d": "Le gouvernement lui aussi est soumis à la loi."
      },
      {
       "rel": "les annule le",
       "t": "Totalitarisme",
       "a": "Arendt",
       "d": "Pouvoir qui supprime la liberté, la pluralité et la vie publique."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "État de droit",
     "rel": "est condition de la",
     "a": "Démocratie"
    },
    {
     "de": "Tradition, charisme et légalité",
     "rel": "la légalité est la base de l'",
     "a": "État de droit"
    }
   ],
   "idea": "Un pouvoir est légitime quand ceux qui obéissent le reconnaissent comme juste ; en démocratie, ce pouvoir est limité par la loi et les droits humains."
  }
 },
 "FIL-T4-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophie · Thème 4",
  "title": "Logique formelle : connecteurs, tables de vérité et Boole",
  "mermaid": "flowchart TD\n  log[\"LOGIQUE FORMELLE\"]:::axis\n  con[\"Connecteurs\"]:::key\n  c1[\"¬ non · ∧ et · ∨ ou · → si...alors · ↔ si et seulement si\"]\n  tv[\"Tables de vérité\"]:::key\n  t1[\"évaluent si une formule est vraie ou fausse selon ses parties\"]\n  bo[\"Algèbre de Boole\"]:::key\n  b1[\"le vrai et le faux comme 1 et 0\"]\n  pu[\"Portes logiques (Shannon)\"]:::key\n  p1[\"AND (∧), OR (∨), NOT (¬) : la logique faite électricité → l'ordinateur\"]\n  log --> con --> c1\n  log --> tv --> t1\n  log --> bo --> b1\n  bo --> pu --> p1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Comment calcule-t-on si une formule est vraie, et quel rapport avec un ordinateur ?",
   "raiz": "LOGIQUE FORMELLE",
   "raiz_d": "Un langage de symboles, sans les ambiguïtés du langage courant, pour étudier la forme des raisonnements.",
   "ramas": [
    {
     "rel": "relie des propositions avec des",
     "t": "Connecteurs",
     "k": true,
     "d": "La valeur de vérité de l'ensemble (V ou F) dépend uniquement de la valeur de ses parties.",
     "c": [
      {
       "rel": "inverse la valeur",
       "t": "Négation ¬p (« non p »)",
       "d": "Vraie si p est fausse ; fausse si p est vraie."
      },
      {
       "rel": "exige les deux",
       "t": "Conjonction p ∧ q (« p et q »)",
       "d": "Vraie seulement si p et q sont vraies."
      },
      {
       "rel": "il suffit d'une",
       "t": "Disjonction p ∨ q (« p ou q »)",
       "d": "Vraie si au moins une est vraie ; fausse seulement si les deux sont fausses."
      },
      {
       "rel": "ne échoue que dans un cas",
       "t": "Conditionnel p → q (« si p, alors q »)",
       "d": "Faux seulement si p est vraie et q fausse ; dans les trois autres cas, vrai."
      }
     ]
    },
    {
     "rel": "se calculent avec des",
     "t": "Tables de vérité",
     "k": true,
     "d": "Elles parcourent toutes les combinaisons possibles de V et F des propositions.",
     "c": [
      {
       "rel": "il y a validité s'il n'existe pas",
       "t": "Ligne avec prémisses V et conclusion F",
       "d": "Si dans aucune ligne les prémisses ne sont vraies et la conclusion fausse, le raisonnement est valide."
      },
      {
       "rel": "vraie dans toutes les lignes",
       "t": "Tautologie"
      },
      {
       "rel": "fausse dans toutes les lignes",
       "t": "Contradiction"
      }
     ]
    },
    {
     "rel": "devient calcul dans l'",
     "t": "Algèbre de Boole",
     "k": true,
     "a": "George Boole (1854)",
     "d": "1 = vrai et 0 = faux : la conjonction fonctionne comme un produit ; la disjonction, comme une somme (1 + 1 = 1).",
     "c": [
      {
       "rel": "se construit avec des",
       "t": "Portes logiques",
       "a": "Claude Shannon (1938)",
       "d": "Circuits AND, OR et NOT : la porte AND donne 1 seulement si ses deux entrées sont 1, comme la conjonction.",
       "c": [
        {
         "rel": "sont la base des",
         "t": "Les ordinateurs",
         "d": "Chaque opération d'un processeur est, au fond, de la logique."
        }
       ]
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Portes logiques",
     "rel": "reproduisent avec l'électricité les",
     "a": "Connecteurs"
    }
   ],
   "idea": "Avec les connecteurs et leurs tables de vérité, on vérifie si un raisonnement est valide. Boole et Shannon ont transformé ce calcul en circuits de tout ordinateur."
  }
 },
 "FIL-PRE-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophie · Les présocratiques",
  "title": "Les présocratiques : la quête de l'arkhé",
  "mermaid": "flowchart TD\n  pre[\"LES PRÉSOCRATIQUES\"]:::axis\n  ml[\"Du mythe au logos : expliquer la nature par la raison\"]\n  arc[\"Cherchent l'ARKHÉ : le principe de tout\"]:::key\n  mil[\"Les Milésiens\"]:::key\n  ta[\"Thalès : l'eau\"]\n  an[\"Anaximandre : l'apeiron (l'indéfini)\"]\n  ax[\"Anaximène : l'air\"]\n  je[\"Xénophane : critique des dieux anthropomorphes\"]:::key\n  pi[\"Pythagore : le nombre\"]:::key\n  par[\"Parménide : l'être est un et immobile (le changement, illusion)\"]:::key\n  her[\"Héraclite : tout coule, régi par le logos\"]:::key\n  pre --> ml\n  pre --> arc\n  arc --> mil\n  mil --> ta\n  mil --> an\n  mil --> ax\n  arc --> pi\n  pre --> je\n  pre --> par\n  pre --> her\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "De quoi le monde est-il fait et pourquoi change-t-il ?",
   "raiz": "LES PRÉSOCRATIQUES",
   "raiz_d": "Premiers penseurs grecs (VIIe-Ve s. av. J.-C.), appelés « physiciens » : ils cherchent l'arkhé, le principe commun de la nature (physis).",
   "ramas": [
    {
     "rel": "un arkhé matériel",
     "t": "Les Milésiens",
     "k": true,
     "d": "Milet, VIe s. av. J.-C. : ils pensent « contre Hésiode », à partir de l'expérience et non des dieux.",
     "c": [
      {
       "rel": "selon Thalès",
       "t": "L'eau",
       "d": "Un principe observable, face à l'Océan-dieu d'Homère."
      },
      {
       "rel": "selon Anaximandre",
       "t": "L'apeiron",
       "d": "L'illimité et l'indéterminé : le principe ne peut pas être un élément concret."
      },
      {
       "rel": "selon Anaximène",
       "t": "L'air",
       "d": "Par raréfaction (chaleur) et condensation (froid), il engendre toutes choses."
      }
     ]
    },
    {
     "rel": "critique le mythe",
     "t": "Contre les dieux anthropomorphes",
     "a": "Xénophane",
     "d": "Si les bœufs pouvaient peindre, ils peindraient des dieux en forme de bœuf.",
     "c": [
      {
       "rel": "propose",
       "t": "Un Dieu Un",
       "d": "Sphérique et immobile, qui « embrasse le tout »."
      }
     ]
    },
    {
     "rel": "un arkhé intelligible",
     "t": "Le nombre",
     "k": true,
     "a": "Pythagore",
     "d": "L'univers est harmonique et musical : son essence est mathématique.",
     "c": [
      {
       "rel": "l'âme, immortelle,",
       "t": "Se réincarne (métempsycose)",
       "d": "Elle se purifie par la science et la vie contemplative ; elle influencera Platon."
      }
     ]
    },
    {
     "rel": "seule la raison le saisit",
     "t": "L'être",
     "k": true,
     "a": "Parménide",
     "d": "Penser et être s'identifient : l'être est éternel et immuable.",
     "c": [
      {
       "rel": "le montre",
       "t": "La voie de la vérité (raison)",
       "d": "L'intelligible : l'être, sans changement."
      },
      {
       "rel": "s'oppose à",
       "t": "La voie de l'opinion (sens)",
       "d": "Les sens nous montrent un monde changeant."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "La voie de l'opinion (sens)",
     "rel": "se méfie de l'expérience de",
     "a": "Les Milésiens"
    },
    {
     "de": "Le nombre",
     "rel": "laisse derrière lui le principe matériel de",
     "a": "Les Milésiens"
    }
   ],
   "idea": "Les présocratiques changent la question : non plus quel dieu a fait le monde, mais de quel principe il est fait. Les uns le cherchent dans l'expérience ; Parménide, dans la seule raison."
  }
 },
 "FIL-HEL-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophie · L'hellénisme",
  "title": "Les écoles hellénistiques : chemins vers le bonheur",
  "mermaid": "flowchart TD\n  hel[\"COMMENT ATTEINDRE LE BONHEUR ?\"]:::axis\n  ep[\"Épicuriens (Épicure)\"]:::key\n  e1[\"plaisir serein et absence de douleur : ataraxie\"]\n  es[\"Stoïciens (Zénon, Sénèque)\"]:::key\n  s1[\"vivre selon la raison ; accepter ce qui ne dépend pas de moi (apatheia)\"]\n  ci[\"Cyniques (Diogène)\"]:::key\n  c1[\"autarcie : se suffire à soi-même, sans conventions\"]\n  esc[\"Sceptiques (Pyrrhon)\"]:::key\n  x1[\"suspendre le jugement (épochè) : tranquillité\"]\n  hel --> ep --> e1\n  hel --> es --> s1\n  hel --> ci --> c1\n  hel --> esc --> x1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a ;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Comment atteint-on le bonheur ?",
   "raiz": "LES ÉCOLES HELLÉNISTIQUES",
   "raiz_d": "Après Aristote et les conquêtes d'Alexandre, la polis perd son autonomie et la philosophie se tourne vers la vie personnelle.",
   "ramas": [
    {
     "rel": "le plaisir du moment",
     "t": "Hédonisme",
     "a": "Aristippe de Cyrène",
     "d": "Le plaisir est le bien suprême et le but de la vie.",
     "c": [
      {
       "rel": "s'atteint avec le",
       "t": "Carpe diem",
       "d": "Jouir du plaisir immédiat : nourriture, repos, plaisirs quotidiens."
      }
     ]
    },
    {
     "rel": "le plaisir modéré",
     "t": "Épicurisme",
     "k": true,
     "a": "Épicure",
     "d": "Le plaisir n'est pas dans l'excès, mais dans la modération.",
     "c": [
      {
       "rel": "s'atteint par la",
       "t": "Ataraxie",
       "k": true,
       "d": "Paix de l'âme : éviter la douleur et éliminer la peur de la mort et des dieux."
      }
     ]
    },
    {
     "rel": "la vertu et la raison",
     "t": "Stoïcisme",
     "k": true,
     "a": "Zénon de Kition, Sénèque",
     "d": "Nous ne contrôlons pas ce qui arrive, mais nous contrôlons notre réaction.",
     "c": [
      {
       "rel": "s'atteint avec le",
       "t": "Maîtrise de soi (apatheia)",
       "k": true,
       "d": "Vivre conformément à la nature, accepter le destin et maîtriser les passions."
      }
     ]
    },
    {
     "rel": "avoir besoin du minimum",
     "t": "Cynisme",
     "a": "Diogène de Sinope",
     "d": "« Moins j'ai besoin de choses, plus je suis heureux. »",
     "c": [
      {
       "rel": "s'atteint par la",
       "t": "Autosuffisance",
       "d": "Vie austère, sans biens matériels et en remettant en question les normes sociales."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Épicurisme",
     "rel": "modère le plaisir que cherche l'",
     "a": "Hédonisme"
    },
    {
     "de": "Maîtrise de soi (apatheia)",
     "rel": "recherche aussi la sérénité, comme le",
     "a": "Ataraxie"
    }
   ],
   "idea": "Une même question, quatre réponses : jouir du moment, jouir avec mesure, accepter ce qui ne dépend pas de moi ou avoir besoin du minimum."
  }
 }
};
