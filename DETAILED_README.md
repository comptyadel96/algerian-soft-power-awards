# Algerian Soft Power Awards - Documentation Complète

## 🏆 **Algerian Soft Power Awards**

Ce projet est une plateforme web moderne et professionnelle conçue pour gérer les nominations, les votes et les candidatures pour les **Algerian Soft Power Awards**. Il inclut des fonctionnalités avancées pour les utilisateurs et les administrateurs, tout en offrant une expérience utilisateur fluide et un design premium.

---

## 📂 **Structure du Projet**

### **Frontend**

- **Framework**: Next.js (React + TypeScript)
- **Styling**: Tailwind CSS + Animations CSS personnalisées
- **Pages**: 7 pages principales
- **Composants**: 9 composants réutilisables

### **Backend**

- **Base de Données**: MongoDB (via Prisma ORM)
- **API**: Next.js API Routes
- **Authentification**: JWT (JSON Web Tokens)
- **Sécurité**: Validation stricte, hachage des mots de passe, middleware d'authentification

### **Documentation**

- Guides utilisateur et développeur complets
- Documentation des API et des configurations

---

## 🌟 **Fonctionnalités**

### **Utilisateur Standard**

- Inscription avec validation stricte
- Connexion sécurisée avec JWT
- Consultation des catégories disponibles
- Soumission de candidatures
- Vote pour les candidats
- Nomination de candidats
- Gestion du profil utilisateur
- Historique des activités

### **Administrateur**

- Tableau de bord avec statistiques globales
- Gestion des utilisateurs (ajout, suppression, modification)
- Gestion des candidatures (approbation, rejet, suivi)
- Configuration des catégories
- Gestion du calendrier des événements
- Exportation des données en JSON
- Gestion des permissions et accès restreint

### **Système de Votes et Nominations**

- Votes pondérés pour les candidats
- Nominations avec messages personnalisés
- Comptage automatique des votes
- Contraintes: un vote/nomination par utilisateur-candidat
- Historique complet des votes et nominations

### **SEO et Performance**

- Optimisation pour les moteurs de recherche (SEO)
- Génération automatique de sitemap.xml et robots.txt
- Code splitting et caching des réponses API
- Design responsive (mobile-first)

### **Sécurité**

- Hachage des mots de passe avec bcryptjs
- Validation stricte des entrées utilisateur
- Middleware d'authentification et contrôle d'accès
- Protection contre les attaques courantes (injections, XSS, etc.)

---

## 🛠️ **Technologies Utilisées**

### **Frontend**

- Next.js 16.1.4
- React 19.2.3
- TypeScript
- Tailwind CSS 4

### **Backend**

- MongoDB
- Prisma ORM
- Next.js API Routes

### **Outils et Librairies**

- bcryptjs (hachage des mots de passe)
- JWT (authentification sécurisée)
- ESLint (linting)
- PostCSS (préprocesseur CSS)

---

## 📜 **Structure des Dossiers**

### **Racine**

- `package.json`: Dépendances et scripts
- `tsconfig.json`: Configuration TypeScript
- `vercel.json`: Configuration de déploiement
- `prisma/`: Modèles de données et scripts de seed
- `public/`: Fichiers publics (manifest.json, images, etc.)
- `src/`: Code source principal

### **Frontend**

- `src/app/`: Pages Next.js
  - `auth/`: Pages d'authentification (login, register)
  - `dashboard/`: Dashboards utilisateur et admin
  - `participants/`, `presse/`: Pages dédiées
- `src/components/`: Composants réutilisables
  - `navbar/`, `footer/`, `hero/`, etc.
- `src/styles/`: Fichiers CSS personnalisés

### **Backend**

- `src/app/api/`: Routes API
  - `auth/`: Endpoints d'authentification
  - `categories/`, `nominations/`, `votes/`: Gestion des données
  - `admin/export/`: Exportation des données
- `src/lib/`: Fonctions utilitaires
  - `auth.ts`: Gestion des tokens JWT
  - `validators.ts`: Validation des entrées utilisateur
  - `api.ts`: Réponses standardisées

---

## 🚀 **Installation et Démarrage**

### **Prérequis**

- Node.js 18+
- MongoDB (base de données)

### **Étapes**

1. Cloner le dépôt:

   ```bash
   git clone https://github.com/comptyadel96/algerian-soft-power-awards.git
   ```

2. Installer les dépendances:

   ```bash
   npm install
   ```

3. Configurer les variables d'environnement:

   ```env
   DATABASE_URL=mongodb+srv://...
   JWT_SECRET=your-secret
   JWT_EXPIRE=7d
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. Initialiser la base de données:

   ```bash
   npm run db:push
   npm run prisma:seed
   ```

5. Lancer le serveur de développement:
   ```bash
   npm run dev
   ```

---

## 📊 **Prochaines Étapes**

1. **Notifications Email**
   - Confirmation d'inscription
   - Résultats des votes
   - Rappels d'événements

2. **Intégration de Paiements**
   - Sponsorships
   - Intégration Stripe

3. **Analytics**
   - Google Analytics
   - Dashboards de suivi

4. **Améliorations SEO**
   - Meta tags optimisés
   - Schema.org markup

5. **Intégrations Externes**
   - Partage sur les réseaux sociaux
   - API publique pour partenaires

---

## ✨ **Conclusion**

Le projet **Algerian Soft Power Awards** est une plateforme complète, sécurisée et prête pour la production. Avec ses fonctionnalités avancées et son design premium, il répond parfaitement aux besoins des utilisateurs et des administrateurs. 🚀
