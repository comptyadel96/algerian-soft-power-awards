# Algerian Soft Power Awards 🏆

Une plateforme moderne pour célébrer et récompenser l'influence culturelle et le rayonnement de l'Algérie dans le monde.

![Status](https://img.shields.io/badge/Status-In%20Development-blue)
![Version](https://img.shields.io/badge/Version-1.0.0-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 📋 Table des Matières

- [Architecture](#architecture)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Structure du Projet](#structure-du-projet)
- [Technologies](#technologies)

---

## 🏗️ Architecture

### Frontend

- **Framework**: Next.js 16.1.4
- **Styling**: Tailwind CSS 4
- **Components**: React 19.2.3
- **Icons**: Lucide React
- **Design**: Moderne, Responsif, Premium

### Backend

- **Database**: MongoDB
- **ORM**: Prisma
- **Authentication**: JWT (JSON Web Tokens)
- **Password**: bcryptjs (hachage sécurisé)
- **Validation**: Email et Password strength

---

## ✨ Fonctionnalités

### 🎯 Pages Publiques

- ✅ Landing page avec hero section
- ✅ Section "À propos" avec statistiques
- ✅ Grid des 8 catégories d'awards
- ✅ Timeline du programme
- ✅ Galerie d'images scrollable
- ✅ Section contact avec formulaire
- ✅ Navigation responsive

### 🔐 Authentification

- ✅ Inscription utilisateur
- ✅ Login sécurisé
- ✅ Validation des mots de passe robustes
- ✅ JWT tokens
- ✅ Vérification de token

### 👤 Dashboard Utilisateur

- ✅ Mes nominations
- ✅ Mes candidatures
- ✅ Gestion du profil
- ✅ Paramètres compte
- ✅ Historique votes

### 🛡️ Dashboard Admin

- ✅ Tableau de bord avec statistiques
- ✅ Gestion des utilisateurs
- ✅ Gestion des candidatures
- ✅ Configuration des catégories
- ✅ Gestion du calendrier
- ✅ Export de rapports

### 🗳️ Système de Votes

- ✅ Vote pour candidats
- ✅ Nominations avec messages
- ✅ Votes pondérés
- ✅ Comptage automatique

---

## 🚀 Installation

### Prérequis

- Node.js 20.19+ ou 22.12+ ou 24.0+
- npm ou yarn
- MongoDB (Atlas ou local)

### Étapes

1. **Cloner le repository**

```bash
git clone <repository-url>
cd algerian-soft-power-awards
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Configurer les variables d'environnement**

```bash
cp .env.local.example .env.local
# Éditer .env.local avec vos valeurs
```

4. **Initialiser la base de données**

```bash
npx prisma migrate dev
# ou
npx prisma db push
```

5. **Lancer le serveur de développement**

```bash
npm run dev
```

6. **Accéder à l'application**

```
http://localhost:3000
```

---

## ⚙️ Configuration

### Variables d'Environnement

```env
# MongoDB Connection
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/algerian_soft_power?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### MongoDB Setup

1. Créer un compte sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Créer un cluster
3. Ajouter un utilisateur avec mot de passe
4. Copier la connection string
5. Remplacer dans `DATABASE_URL`

---

## 💻 Utilisation

### Mode Développement

```bash
npm run dev
```

- Accès: http://localhost:3000
- Hot reload activé

### Build Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

---

## 📁 Structure du Projet

```
algerian-soft-power-awards/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── login/route.ts
│   │   │   │   ├── register/route.ts
│   │   │   │   └── verify/route.ts
│   │   │   ├── categories/route.ts
│   │   │   ├── submissions/route.ts
│   │   │   ├── nominations/route.ts
│   │   │   └── votes/route.ts
│   │   ├── auth/
│   │   │   ├── login/page.tsx
│   │   │   └── register/page.tsx
│   │   ├── dashboard/
│   │   │   ├── user/page.tsx
│   │   │   └── admin/page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── navbar/
│   │   │   └── Navbar.tsx
│   │   ├── hero/
│   │   │   └── HeroSection.tsx
│   │   ├── about/
│   │   │   └── AboutSection.tsx
│   │   ├── categories/
│   │   │   └── CategoriesGrid.tsx
│   │   ├── programme/
│   │   │   └── ProgrammeSection.tsx
│   │   ├── gallery/
│   │   │   └── GallerySection.tsx
│   │   ├── contact/
│   │   │   └── ContactSection.tsx
│   │   ├── footer/
│   │   │   └── Footer.tsx
│   │   └── shared/
│   │       └── Animations.tsx
│   └── lib/
│       ├── auth.ts
│       ├── validators.ts
│       └── api.ts
├── prisma/
│   └── schema.prisma
├── public/
├── .env.local
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── eslint.config.mjs
├── API_DOCUMENTATION.md
└── README.md
```

---

## 🛠️ Technologies

### Frontend

| Technologie  | Version  | Usage           |
| ------------ | -------- | --------------- |
| Next.js      | 16.1.4   | Framework React |
| React        | 19.2.3   | UI Library      |
| TypeScript   | 5        | Type Safety     |
| Tailwind CSS | 4        | Styling         |
| Lucide React | ^0.562.0 | Icons           |

### Backend

| Technologie | Usage                 |
| ----------- | --------------------- |
| MongoDB     | Base de données NoSQL |
| Prisma      | ORM moderne           |
| JWT         | Authentication        |
| bcryptjs    | Password hashing      |
| Node.js     | Runtime               |

### DevTools

| Technologie | Usage          |
| ----------- | -------------- |
| ESLint      | Linting        |
| TypeScript  | Type checking  |
| PostCSS     | CSS processing |

---

## 🔐 Sécurité

- ✅ Hachage des mots de passe avec bcryptjs
- ✅ Tokens JWT avec expiration
- ✅ Validation stricte des inputs
- ✅ CORS configuré
- ✅ Validation d'email
- ✅ Politique de mots de passe forts
- ✅ Protection contre les injections

---

## 📊 Catégories d'Awards

1. **Cinéma & Image internationale** 🎬
2. **Gastronomie & Art de vivre** 🍽️
3. **Tourisme & Destination Branding** 🗺️
4. **Médias, Contenus & Narration** 📻
5. **Création artistique & Industries Culturelles** 🎨
6. **Sport & Image du pays** 🏆
7. **Jeunesse, Innovation & Influence digitale** ⚡
8. **Grand SP Award – Influence de l'année** ⭐

---

## 📞 Support

Pour toute question ou problème:

1. Consultez la [documentation API](./API_DOCUMENTATION.md)
2. Vérifiez les [issues GitHub](https://github.com)
3. Contactez l'équipe: info@algeriansoftpowerawards.com

---

## 📄 License

Ce projet est sous license MIT. Voir [LICENSE](LICENSE) pour plus de détails.

---

## 🎉 Contribuer

Les contributions sont bienvenues! Pour contribuer:

1. Fork le projet
2. Créez une branche pour votre feature (`git checkout -b feature/AmazingFeature`)
3. Commituez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

---

**Algerian Soft Power Awards © 2024**
_Célébrer l'excellence du rayonnement algérien_ 🇩🇿
