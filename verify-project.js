#!/usr/bin/env node

/**
 * 🔍 Vérification de l'intégrité du projet
 * Exécuter: node verify-project.js
 */

const fs = require("fs");
const path = require("path");

const requiredFiles = [
  // Root configuration
  "package.json",
  ".env.local.example",
  "tsconfig.json",
  "next.config.ts",
  "tailwind.config.ts",
  "eslint.config.mjs",
  "postcss.config.mjs",

  // Documentation
  "README.md",
  "PROJECT_README.md",
  "QUICK_START.md",
  "API_DOCUMENTATION.md",
  "ARCHITECTURE.md",

  // Prisma
  "prisma/schema.prisma",
  "prisma/seed.ts",

  // App structure
  "src/app/page.tsx",
  "src/app/layout.tsx",
  "src/app/globals.css",

  // Auth pages
  "src/app/auth/login/page.tsx",
  "src/app/auth/register/page.tsx",

  // Dashboards
  "src/app/dashboard/user/page.tsx",
  "src/app/dashboard/admin/page.tsx",

  // API routes
  "src/app/api/auth/login/route.ts",
  "src/app/api/auth/register/route.ts",
  "src/app/api/auth/verify/route.ts",
  "src/app/api/categories/route.ts",
  "src/app/api/submissions/route.ts",
  "src/app/api/nominations/route.ts",
  "src/app/api/votes/route.ts",
  "src/app/api/admin/export/route.ts",

  // Components
  "src/components/navbar/Navbar.tsx",
  "src/components/hero/HeroSection.tsx",
  "src/components/about/AboutSection.tsx",
  "src/components/categories/CategoriesGrid.tsx",
  "src/components/programme/ProgrammeSection.tsx",
  "src/components/gallery/GallerySection.tsx",
  "src/components/contact/ContactSection.tsx",
  "src/components/footer/Footer.tsx",
  "src/components/shared/Animations.tsx",

  // Lib utilities
  "src/lib/auth.ts",
  "src/lib/validators.ts",
  "src/lib/api.ts",
  "src/lib/api-client.ts",
  "src/lib/API_INTEGRATION_EXAMPLES.ts",
];

const requiredDirs = [
  "src/app/api",
  "src/app/auth",
  "src/app/dashboard",
  "src/components",
  "src/lib",
  "prisma",
  "public",
];

console.log("🔍 Vérification du projet Algerian Soft Power Awards...\n");

// Vérifier les fichiers
let filesOk = 0;
let filesMissing = [];

requiredFiles.forEach((file) => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`);
    filesOk++;
  } else {
    console.log(`❌ ${file} - MANQUANT`);
    filesMissing.push(file);
  }
});

console.log(`\n📂 Vérification des dossiers...\n`);

// Vérifier les répertoires
let dirsOk = 0;
let dirsMissing = [];

requiredDirs.forEach((dir) => {
  const dirPath = path.join(__dirname, dir);
  if (fs.existsSync(dirPath)) {
    console.log(`✅ ${dir}/`);
    dirsOk++;
  } else {
    console.log(`❌ ${dir}/ - MANQUANT`);
    dirsMissing.push(dir);
  }
});

// Résumé
console.log("\n" + "=".repeat(50));
console.log("📊 RÉSUMÉ");
console.log("=".repeat(50));
console.log(`\n📄 Fichiers:`);
console.log(`   ✅ Valides: ${filesOk}/${requiredFiles.length}`);
if (filesMissing.length > 0) {
  console.log(`   ❌ Manquants: ${filesMissing.length}`);
  filesMissing.forEach((f) => console.log(`      - ${f}`));
}

console.log(`\n📂 Dossiers:`);
console.log(`   ✅ Valides: ${dirsOk}/${requiredDirs.length}`);
if (dirsMissing.length > 0) {
  console.log(`   ❌ Manquants: ${dirsMissing.length}`);
  dirsMissing.forEach((d) => console.log(`      - ${d}`));
}

console.log("\n" + "=".repeat(50));

if (filesMissing.length === 0 && dirsMissing.length === 0) {
  console.log("✅ SUCCÈS! Le projet est complet!\n");
  console.log("🚀 Prochaines étapes:");
  console.log("   1. npm install");
  console.log("   2. Configurer .env.local avec MongoDB URL");
  console.log("   3. npm run db:push");
  console.log("   4. npm run dev\n");
  process.exit(0);
} else {
  console.log(
    `⚠️  ATTENTION! ${filesMissing.length + dirsMissing.length} éléments manquent.\n`,
  );
  console.log("Veuillez recréer les fichiers/dossiers manquants.\n");
  process.exit(1);
}
