import { PrismaClient } from "@prisma/client";
import { hashPassword } from "@/lib/validators";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Début du seeding...");

  // Create categories
  const categories = [
    {
      title: "Cinéma & Image internationale",
      description:
        "Célébrer le 7ème art qui porte nos récits au-delà des frontières.",
      icon: "Film",
      order: 1,
      isGrand: false,
    },
    {
      title: "Gastronomie & Art de vivre",
      description:
        "Honorer les saveurs et traditions qui font la fierté de notre table.",
      icon: "Utensils",
      order: 2,
      isGrand: false,
    },
    {
      title: "Tourisme & Destination Branding",
      description:
        "Valoriser l'attractivité et l'hospitalité de la terre algérienne.",
      icon: "MapPin",
      order: 3,
      isGrand: false,
    },
    {
      title: "Médias, Contenus & Narration",
      description:
        "Récompenser ceux qui racontent l'Algérie avec audace et vérité.",
      icon: "Radio",
      order: 4,
      isGrand: false,
    },
    {
      title: "Création artistique & Industries Culturelles",
      description: "L'excellence créative sous toutes ses formes d'expression.",
      icon: "Palette",
      order: 5,
      isGrand: false,
    },
    {
      title: "Sport & Image du pays",
      description:
        "Quand la performance athlétique devient un vecteur d'influence mondiale.",
      icon: "Trophy",
      order: 6,
      isGrand: false,
    },
    {
      title: "Jeunesse, Innovation & Influence digitale",
      description:
        "La nouvelle garde qui redéfinit l'influence à l'ère du numérique.",
      icon: "Zap",
      order: 7,
      isGrand: false,
    },
    {
      title: "Grand SP Award – Influence de l'année",
      description:
        "La plus haute distinction pour un rayonnement exceptionnel.",
      icon: "Star",
      order: 8,
      isGrand: true,
    },
  ];

  for (const cat of categories) {
    const existing = await prisma.category.findUnique({
      where: { title: cat.title },
    });

    if (!existing) {
      await prisma.category.create({ data: cat });
      console.log(`✅ Catégorie créée: ${cat.title}`);
    }
  }

  // Create test admin user
  const adminEmail = "admin@aspa.com";
  const adminExists = await prisma.admin.findUnique({
    where: { email: adminEmail },
  });

  if (!adminExists) {
    const hashedPassword = await hashPassword("AdminPass123!");
    await prisma.admin.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        firstName: "Admin",
        lastName: "System",
        role: "SUPER_ADMIN",
        active: true,
      },
    });
    console.log(`✅ Admin créé: ${adminEmail}`);
  }

  // Create test regular user
  const userEmail = "user@example.com";
  const userExists = await prisma.user.findUnique({
    where: { email: userEmail },
  });

  if (!userExists) {
    const hashedPassword = await hashPassword("UserPass123!");
    await prisma.user.create({
      data: {
        email: userEmail,
        password: hashedPassword,
        firstName: "Jean",
        lastName: "Dupont",
        role: "USER",
      },
    });
    console.log(`✅ Utilisateur créé: ${userEmail}`);
  }

  console.log("🎉 Seeding terminé!");
}

main()
  .catch((e) => {
    console.error("❌ Erreur:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
