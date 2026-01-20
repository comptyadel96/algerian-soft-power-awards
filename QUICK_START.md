# 🚀 Guide de Démarrage Rapide

Bienvenue sur le projet **Algerian Soft Power Awards**! Ce guide vous aide à mettre en place et lancer le projet en quelques minutes.

---

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir:

- ✅ Node.js 20.19+ ([Télécharger](https://nodejs.org))
- ✅ npm ou yarn
- ✅ Un compte MongoDB Atlas ([Créer un compte](https://www.mongodb.com/cloud/atlas))
- ✅ Un éditeur de code (VS Code recommandé)
- ✅ Git (optionnel)

---

## 🔧 Étape 1: Installation

### 1.1 Cloner ou télécharger le projet

```bash
# Via Git
git clone <repository-url>
cd algerian-soft-power-awards

# Ou simplement naviguer dans le dossier du projet
cd algerian-soft-power-awards
```

### 1.2 Installer les dépendances

```bash
npm install
```

> ⏱️ Cela peut prendre quelques minutes à la première installation

---

## 🗄️ Étape 2: Configuration de MongoDB

### 2.1 Créer un cluster MongoDB

1. Aller sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Créer un compte (gratuit)
3. Créer un nouveau **Project**
4. Créer un nouveau **Cluster** (choisir tier gratuit)
5. Attendre que le cluster soit créé (5-10 minutes)

### 2.2 Créer un utilisateur et obtenir la connection string

1. Dans le cluster, aller à **Security > Database Access**
2. Créer un nouvel utilisateur avec mot de passe
3. Aller à **Network Access** et ajouter **0.0.0.0/0** (pour développement)
4. Aller à **Databases** et cliquer **Connect** sur votre cluster
5. Choisir **Drivers** et copier la connection string

### 2.3 Configuration

1. Créer/ouvrir le fichier `.env.local` à la racine du projet
2. Remplacer `DATABASE_URL` par votre connection string:

```env
DATABASE_URL=mongodb+srv://your-username:your-password@cluster.mongodb.net/algerian_soft_power?retryWrites=true&w=majority

JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d

NEXT_PUBLIC_API_URL=http://localhost:3000
```

> 🔐 **Sécurité**: Gardez `JWT_SECRET` secret et change-le en production!

---

## 🗂️ Étape 3: Initialiser la Base de Données

### 3.1 Pousser le schéma Prisma

```bash
npm run db:push
```

Cela créera toutes les tables nécessaires dans MongoDB.

### 3.2 (Optionnel) Seeder les données de test

```bash
npm run prisma:seed
```

Cela crée:

- 8 catégories d'awards
- 1 utilisateur admin: `admin@aspa.com` / `AdminPass123!`
- 1 utilisateur test: `user@example.com` / `UserPass123!`

---

## 💻 Étape 4: Lancer l'application

### 4.1 Mode développement

```bash
npm run dev
```

Vous devriez voir:

```
> algerian-soft-power-awards@1.0.0 dev
> next dev

  ▲ Next.js 16.1.4
  - Local:        http://localhost:3000
```

### 4.2 Accéder à l'application

Ouvrez votre navigateur et allez à: **http://localhost:3000**

Vous devriez voir la landing page avec:

- Hero section
- Section à propos
- Catégories d'awards
- Calendrier
- Galerie
- Contact

---

## 🔐 Étape 5: Tester l'Authentification

### 5.1 Inscription

1. Cliquez sur **Connexion** dans la navbar
2. Allez à **S'inscrire**
3. Créez un nouveau compte:
   - Email: `test@example.com`
   - Prénom: `Jean`
   - Nom: `Dupont`
   - Mot de passe: `SecurePass123!` (minimum 8 caractères, 1 majuscule, 1 chiffre, 1 spécial)

4. Vous serez redirigé vers le **User Dashboard**

### 5.2 Login Admin (si seeded)

1. Cliquez sur **Connexion**
2. Identifiants:
   - Email: `admin@aspa.com`
   - Mot de passe: `AdminPass123!`

3. Vous serez redirigé vers le **Admin Dashboard**

---

## 🎛️ Étape 6: Explorer les Dashboards

### User Dashboard

- Mes Nominations
- Mes Candidatures
- Profil
- Paramètres

### Admin Dashboard

- Aperçu (statistiques)
- Gestion des utilisateurs
- Gestion des candidatures
- Paramètres (catégories, calendrier, exports)

---

## 📡 Étape 7: Utiliser les API

### Exemple: Récupérer les catégories

```bash
curl http://localhost:3000/api/categories
```

### Exemple: Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "password": "SecurePass123!"}'
```

> Pour plus de détails, voir [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)

---

## 🛠️ Commandes Utiles

```bash
# Développement
npm run dev              # Lance le serveur de dev

# Build
npm run build            # Build pour production
npm start                # Lance la version build

# Linting
npm run lint             # Vérifie le code

# Prisma
npm run prisma:generate  # Génère le client Prisma
npm run prisma:migrate   # Crée une migration
npm run prisma:seed      # Exécute le seeder
npm run prisma:studio    # Ouvre Prisma Studio (UI pour explorer les données)
npm run db:push          # Pousse le schéma à MongoDB
```

---

## 🐛 Troubleshooting

### Erreur: "Cannot find module '@prisma/client'"

```bash
npm install @prisma/client
npm run prisma:generate
```

### Erreur: "CONNECTION_STRING is missing"

Vérifiez que `.env.local` existe et contient `DATABASE_URL`.

### Erreur: "Unauthorized: No token provided"

Assurez-vous d'être connecté et que le token est stocké dans localStorage.

### Port 3000 déjà utilisé

```bash
# Sur Windows
netstat -ano | findstr :3000

# Sur Mac/Linux
lsof -i :3000

# Tuer le processus
# Windows: taskkill /PID <PID> /F
# Mac/Linux: kill -9 <PID>
```

---

## 📚 Ressources

- [Documentation API complète](./API_DOCUMENTATION.md)
- [Exemples d'intégration API](./src/lib/API_INTEGRATION_EXAMPLES.ts)
- [Documentation Next.js](https://nextjs.org)
- [Documentation Prisma](https://www.prisma.io)
- [Documentation Tailwind CSS](https://tailwindcss.com)

---

## ✅ Checklist de Démarrage

- [ ] Node.js et npm installés
- [ ] Cluster MongoDB créé
- [ ] `.env.local` configuré
- [ ] `npm install` exécuté
- [ ] `npm run db:push` exécuté
- [ ] `npm run prisma:seed` exécuté (optionnel)
- [ ] `npm run dev` lancé
- [ ] http://localhost:3000 accessible
- [ ] Inscription testée
- [ ] Login testée
- [ ] Dashboards explorés

---

## 🎉 Vous êtes Prêt!

Maintenant vous pouvez:

- ✅ Explorer l'application
- ✅ Tester les fonctionnalités
- ✅ Développer de nouvelles features
- ✅ Personnaliser le design
- ✅ Intégrer avec des services externes

---

## 📞 Support

Si vous rencontrez des problèmes:

1. Vérifiez le [Troubleshooting](#troubleshooting)
2. Lisez la [Documentation API](./API_DOCUMENTATION.md)
3. Vérifiez les logs du serveur (fenêtre du terminal)
4. Consultez la [Documentation Next.js](https://nextjs.org)

**Bonne chance! 🚀**
