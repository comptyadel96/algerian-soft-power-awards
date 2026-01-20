# 📁 Structure du Projet Complète

```
algerian-soft-power-awards/
│
├── 📄 Fichiers de Configuration
│   ├── .env.local                          # Variables d'environnement (⚠️ NON commité)
│   ├── .env.local.example                  # Template des env variables
│   ├── package.json                        # Dépendances et scripts npm
│   ├── tsconfig.json                       # Configuration TypeScript
│   ├── next.config.ts                      # Configuration Next.js
│   ├── tailwind.config.ts                  # Configuration Tailwind CSS
│   ├── postcss.config.mjs                  # Configuration PostCSS
│   ├── eslint.config.mjs                   # Configuration ESLint
│   └── .gitignore                          # Fichiers ignorés par Git
│
├── 📚 Documentation
│   ├── README.md                           # Documentation générale (standard)
│   ├── PROJECT_README.md                   # Vue d'ensemble complète du projet
│   ├── QUICK_START.md                      # Guide de démarrage rapide
│   ├── API_DOCUMENTATION.md                # Documentation API complète
│   └── ARCHITECTURE.md                     # Détails architecture système
│
├── 🗂️ Prisma (Gestion Base de Données)
│   ├── schema.prisma                       # Schéma de données MongoDB
│   ├── seed.ts                             # Script de seeding (données de test)
│   └── migrations/                         # Historique des migrations
│
├── 📁 src/ (Code Source)
│   │
│   ├── 🎨 app/ (Next.js App Router)
│   │   │
│   │   ├── 🌐 API Routes
│   │   │   ├── api/
│   │   │   │   ├── auth/                   # Routes d'authentification
│   │   │   │   │   ├── login/route.ts      # POST: Connexion utilisateur
│   │   │   │   │   ├── register/route.ts   # POST: Inscription utilisateur
│   │   │   │   │   └── verify/route.ts     # POST: Vérification JWT
│   │   │   │   │
│   │   │   │   ├── categories/route.ts     # GET/POST: Catégories d'awards
│   │   │   │   ├── submissions/route.ts    # GET/POST: Candidatures
│   │   │   │   ├── nominations/route.ts    # GET/POST: Nominations
│   │   │   │   ├── votes/route.ts          # GET/POST: Votes
│   │   │   │   │
│   │   │   │   └── admin/
│   │   │   │       └── export/route.ts     # GET: Export données (Admin)
│   │   │
│   │   ├── 📄 Pages Publiques
│   │   │   ├── page.tsx                    # Page d'accueil
│   │   │   │
│   │   │   ├── auth/
│   │   │   │   ├── login/page.tsx          # Page de connexion
│   │   │   │   └── register/page.tsx       # Page d'inscription
│   │   │   │
│   │   │   └── dashboard/
│   │   │       ├── user/page.tsx           # Dashboard utilisateur
│   │   │       └── admin/page.tsx          # Dashboard administrateur
│   │   │
│   │   ├── 🎨 Styling
│   │   │   ├── layout.tsx                  # Layout root avec metadata
│   │   │   └── globals.css                 # Styles globaux
│   │   │
│   │   └── 📝 next.config.ts               # Configuration Next.js
│   │
│   ├── 🧩 components/ (Composants React)
│   │   │
│   │   ├── navbar/
│   │   │   └── Navbar.tsx                  # Navigation bar responsive
│   │   │
│   │   ├── hero/
│   │   │   └── HeroSection.tsx             # Section héro avec animations
│   │   │
│   │   ├── about/
│   │   │   └── AboutSection.tsx            # Section "À propos"
│   │   │
│   │   ├── categories/
│   │   │   └── CategoriesGrid.tsx          # Grille des 8 catégories
│   │   │
│   │   ├── programme/
│   │   │   └── ProgrammeSection.tsx        # Calendrier et timeline
│   │   │
│   │   ├── gallery/
│   │   │   └── GallerySection.tsx          # Galerie d'images scrollable
│   │   │
│   │   ├── contact/
│   │   │   └── ContactSection.tsx          # Formulaire de contact
│   │   │
│   │   ├── footer/
│   │   │   └── Footer.tsx                  # Pied de page
│   │   │
│   │   └── shared/
│   │       └── Animations.tsx              # Animations CSS réutilisables
│   │
│   └── 🛠️ lib/ (Utilitaires et Helpers)
│       ├── auth.ts                         # Gestion JWT et authentification
│       ├── validators.ts                   # Validation (email, password, etc)
│       ├── api.ts                          # Utilitaires API (CORS, responses)
│       ├── api-client.ts                   # Client API frontend
│       └── API_INTEGRATION_EXAMPLES.ts     # Exemples d'utilisation API
│
├── 📦 public/ (Fichiers Statiques)
│   └── ... (images, fonts, etc)
│
└── 🔧 Configuration Racine
    └── next-env.d.ts                       # Déclarations de type Next.js
```

---

## 🎯 Flux de Données

### Inscription → Login → Utilisation

```
1. User
   ├─ Remplir formulaire inscription
   └─ POST /api/auth/register
       └─ Validation email/password
       └─ Hash password avec bcryptjs
       └─ Créer user dans MongoDB
       └─ Générer JWT token
       └─ Retourner token + user data

2. LocalStorage
   └─ Stocke token et user data

3. Requête API
   ├─ Headers: { Authorization: "Bearer <token>" }
   └─ Middleware: Vérifie JWT valide

4. Dashboard
   ├─ Affiche données utilisateur
   └─ Accès aux fonctionnalités
```

---

## 🗄️ Modèles de Données (MongoDB)

### Collections

```typescript
// User
{
  _id: ObjectId,
  email: string,
  password: string (hashed),
  firstName: string,
  lastName: string,
  role: enum(USER, JURY, PARTNER),
  createdAt: date,
  updatedAt: date
}

// Admin
{
  _id: ObjectId,
  email: string,
  password: string (hashed),
  firstName: string,
  lastName: string,
  role: enum(MODERATOR, ADMIN, SUPER_ADMIN),
  active: boolean,
  createdAt: date,
  updatedAt: date
}

// Category (8 catégories + 1 Grand Prix)
{
  _id: ObjectId,
  title: string,
  description: string,
  icon: string,
  order: number (1-8),
  isGrand: boolean,
  createdAt: date,
  updatedAt: date
}

// CandidateSubmission
{
  _id: ObjectId,
  categoryId: ObjectId,
  userId: ObjectId,
  fullName: string,
  email: string,
  biography: string,
  achievements: string[],
  projectTitle: string,
  projectDesc: string,
  mediaUrl: string,
  status: enum(PENDING, APPROVED, REJECTED, WITHDRAWN),
  votes: number,
  createdAt: date,
  updatedAt: date
}

// Nomination
{
  _id: ObjectId,
  userId: ObjectId,
  categoryId: ObjectId,
  candidateId: ObjectId,
  message: string,
  createdAt: date
}

// Vote
{
  _id: ObjectId,
  userId: ObjectId,
  candidateId: ObjectId,
  weight: number,
  createdAt: date
}
```

---

## 🔐 Sécurité

- ✅ Passwords hashés avec bcryptjs (10 rounds salt)
- ✅ JWT avec signature HS256 et expiration
- ✅ Validation stricte des inputs
- ✅ Protection contre les injections MongoDB
- ✅ Middleware d'authentification
- ✅ Rôles et permissions (USER, ADMIN)
- ✅ CORS configuré

---

## 📊 Routes API Résumé

| Méthode | Route                | Auth | Description           |
| ------- | -------------------- | ---- | --------------------- |
| POST    | `/api/auth/register` | ❌   | Inscription           |
| POST    | `/api/auth/login`    | ❌   | Connexion             |
| POST    | `/api/auth/verify`   | ❌   | Vérifier token        |
| GET     | `/api/categories`    | ❌   | Lister catégories     |
| POST    | `/api/categories`    | 🔐   | Créer catégorie       |
| GET     | `/api/submissions`   | ❌   | Lister candidatures   |
| POST    | `/api/submissions`   | ✅   | Soumettre candidature |
| GET     | `/api/nominations`   | ❌   | Lister nominations    |
| POST    | `/api/nominations`   | ✅   | Nominer candidat      |
| GET     | `/api/votes`         | ❌   | Lister votes          |
| POST    | `/api/votes`         | ✅   | Voter candidat        |
| GET     | `/api/admin/export`  | 🛡️   | Exporter données      |

**Légende:**

- ❌ Accès public
- ✅ Authentification requise
- 🔐 Admin requis
- 🛡️ Super Admin requis

---

## 🚀 Étapes de Déploiement

1. **Environnement Production**
   - Configurer variables env pour production
   - `JWT_SECRET` fort et unique
   - `DATABASE_URL` MongoDB production

2. **Build**

   ```bash
   npm run build
   ```

3. **Deploy**
   - Vercel (recommandé pour Next.js)
   - AWS, Google Cloud, DigitalOcean, etc.

4. **Variables d'Environnement**
   - Sur la plateforme de déploiement
   - `.env.production` ou dashboard

---

## 📖 Fichiers à Consulter

| Besoin                | Fichier                             |
| --------------------- | ----------------------------------- |
| Démarrer rapidement   | QUICK_START.md                      |
| API endpoints         | API_DOCUMENTATION.md                |
| Exemples code         | src/lib/API_INTEGRATION_EXAMPLES.ts |
| Vue générale          | PROJECT_README.md                   |
| Architecture complète | Ce fichier                          |

---

**Dernière mise à jour:** 20 Janvier 2026
