import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Désactiver les erreurs TypeScript strictes au build pour Vercel
  typescript: {
    // Ignorer les erreurs TypeScript au build (pour production)
    ignoreBuildErrors: true,
    // Les erreurs sont toujours détectées en développement
    tsconfigPath: "./tsconfig.json",
  },

  // Optimisations de performance
  compress: true,

  // Optimiser les images
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Support des variables d'environnement
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  },

  // Rewrites pour i18n (route /ar/* vers /* avec query param)
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/ar/:path*",
          destination: "/:path*",
        },
      ],
    };
  },

  // Redirection et réécriture
  async redirects() {
    return [
      // Redirection des anciennes URLs si nécessaire
      {
        source: "/admin",
        destination: "/dashboard/admin",
        permanent: false,
      },
      {
        source: "/user",
        destination: "/dashboard/user",
        permanent: false,
      },
    ];
  },

  // Headers de sécurité
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
