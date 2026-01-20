# Architecture Backend - Algerian Soft Power Awards

## 🏗️ Structure de la Base de Données

### Modèles Prisma

#### User

- Utilisateurs standard avec rôles (USER, JURY, PARTNER)
- Authentification par email/password
- Relations: nominations, votes, submissions

#### Admin

- Administrateurs système avec rôles (MODERATOR, ADMIN, SUPER_ADMIN)
- Gestion complète de la plateforme

#### Category

- Catégories d'awards (Cinéma, Gastronomie, etc.)
- 8 catégories + 1 Grand Prix
- Support pour catégories dorées

#### CandidateSubmission

- Candidatures soumises par les utilisateurs
- Statuts: PENDING, APPROVED, REJECTED, WITHDRAWN
- Système de votes intégré

#### Nomination

- Nominations de candidats par les jurés
- Relation unique user-candidate
- Messages de nomination

#### Vote

- Votes pour les candidats
- Support pour votes pondérés
- Relation unique user-candidate

---

## 🔐 Authentification JWT

### Points d'entrée

#### POST `/api/auth/register`

Inscription d'un nouvel utilisateur

```json
{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "firstName": "Jean",
  "lastName": "Dupont"
}
```

#### POST `/api/auth/login`

Connexion utilisateur

```json
{
  "email": "user@example.com",
  "password": "SecurePass123!"
}
```

#### POST `/api/auth/verify`

Vérification d'un token JWT

```json
{
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

---

## 📋 API Routes

### Categories

- **GET** `/api/categories` - Liste toutes les catégories
- **POST** `/api/categories` - Crée une nouvelle catégorie (Admin)

### Submissions

- **GET** `/api/submissions` - Liste les candidatures
  - Query: `categoryId`, `status`
- **POST** `/api/submissions` - Soumet une candidature (Authentifié)

### Nominations

- **GET** `/api/nominations` - Liste les nominations
  - Query: `candidateId`
- **POST** `/api/nominations` - Nominé un candidat (Authentifié)

### Votes

- **GET** `/api/votes` - Liste les votes
  - Query: `candidateId`
- **POST** `/api/votes` - Vote pour un candidat (Authentifié)

---

## 🔑 Variables d'Environnement

```env
# Base de données MongoDB
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/algerian_soft_power

# JWT
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=7d

# API
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

## 🛡️ Sécurité

### Validation des Mots de Passe

- Minimum 8 caractères
- Au moins 1 lettre majuscule
- Au moins 1 chiffre
- Au moins 1 caractère spécial (!@#$%^&\*)

### Hash des Mots de Passe

- Utilise bcryptjs avec 10 rounds de salt
- Jamais stocké en texte brut

### Tokens JWT

- Signature avec HS256
- Expiration configurable (par défaut 7 jours)
- Vérification automatique des middleware

---

## 📱 Utilitaires

### `/lib/auth.ts`

- `generateToken()` - Crée un JWT
- `verifyToken()` - Valide et extrait les données du JWT
- `getTokenFromRequest()` - Extrait le token des headers
- `withAuth()` - Middleware d'authentification
- `withAdminAuth()` - Middleware d'admin

### `/lib/validators.ts`

- `hashPassword()` - Hash un mot de passe
- `comparePasswords()` - Compare mot de passe + hash
- `validateEmail()` - Valide format email
- `validatePassword()` - Valide la force du mot de passe

### `/lib/api.ts`

- `corsHeaders()` - Gère les headers CORS
- `jsonResponse()` - Réponds JSON standardisé
- `errorResponse()` - Réponds d'erreur

---

## 🚀 Déploiement

### Requirements

- Node.js 20.19+ ou 22.12+ ou 24.0+
- MongoDB database
- Environment variables configurées

### Initialisation DB

```bash
npx prisma migrate dev
npx prisma db push
```

### Build Production

```bash
npm run build
npm start
```

---

## 📊 Exemple de Flux Utilisateur

1. **Inscription** → POST `/api/auth/register`
2. **Connexion** → POST `/api/auth/login` → Reçoit JWT
3. **Récupère catégories** → GET `/api/categories`
4. **Soumet candidature** → POST `/api/submissions` (avec token)
5. **Vote** → POST `/api/votes` (avec token)
6. **Consulte dashboard** → Données de l'utilisateur

---

## 🔄 Dashboards

### User Dashboard

- Consultez mes nominations
- Mes candidatures
- Profil et paramètres
- Historique des votes

### Admin Dashboard

- Statistiques globales
- Gestion des utilisateurs
- Gestion des candidatures
- Configuration des catégories et calendrier
- Export de rapports
