// Multilingual Support (FR/AR)
export const translations = {
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      about: "À Propos",
      categories: "Catégories",
      programme: "Programme",
      gallery: "Galerie",
      contact: "Contact",
      login: "Connexion",
      register: "Inscription",
      dashboard: "Tableau de Bord",
      logout: "Déconnexion",
    },
    // Home Page
    hero: {
      title: "Soft Power Algérien",
      subtitle: "Célébrons l'influence culturelle et l'excellence algérienne",
      cta: "Découvrir Plus",
      scroll: "Faire défiler vers le bas",
    },
    // About Section
    about: {
      title: "À Propos",
      description:
        "Les Awards Algerian Soft Power célèbrent les individus et les organisations qui incarnent l'excellence et l'influence positive de l'Algérie sur la scène mondiale.",
    },
    // Categories
    categories: {
      title: "Catégories d'Awards",
      description: "Explorez les 8 domaines d'excellence que nous récompensons",
    },
    // Programme
    programme: {
      title: "Programme des Événements",
      description: "Suivez les différentes phases de notre événement",
      phases: {
        nominations: "Appels à Nominations",
        voting: "Période de Vote",
        ceremony: "Cérémonie de Remise des Prix",
      },
    },
    // Gallery
    gallery: {
      title: "Galerie",
      description: "Revivez les moments forts de nos événements précédents",
    },
    // Contact
    contact: {
      title: "Contactez-Nous",
      description:
        "Avez-vous des questions? Nous serions ravis d'avoir de vos nouvelles.",
      form: {
        name: "Nom Complet",
        email: "Adresse Email",
        message: "Votre Message",
        submit: "Envoyer",
        success: "Message envoyé avec succès!",
      },
    },
    // Footer
    footer: {
      description: "Plateforme de célébration de l'excellence algérienne",
      links: "Liens Utiles",
      social: "Suivez-Nous",
      rights: "Tous droits réservés",
    },
    // Auth
    auth: {
      login: "Se Connecter",
      register: "S'Inscrire",
      email: "Email",
      password: "Mot de Passe",
      confirmPassword: "Confirmer le Mot de Passe",
      firstName: "Prénom",
      lastName: "Nom",
      submit: "Soumettre",
      forgotPassword: "Mot de passe oublié?",
      noAccount: "Pas encore de compte?",
      haveAccount: "Vous avez déjà un compte?",
    },
    // Dashboard
    dashboard: {
      title: "Mon Tableau de Bord",
      admin: "Tableau de Bord Admin",
      nominations: "Mes Nominations",
      submissions: "Mes Candidatures",
      profile: "Mon Profil",
      settings: "Paramètres",
      overview: "Aperçu",
      users: "Utilisateurs",
      stats: "Statistiques",
    },
  },
  ar: {
    // Navigation
    nav: {
      home: "الرئيسية",
      about: "عن",
      categories: "الفئات",
      programme: "البرنامج",
      gallery: "المعرض",
      contact: "اتصل",
      login: "دخول",
      register: "تسجيل",
      dashboard: "لوحة التحكم",
      logout: "خروج",
    },
    // Home Page
    hero: {
      title: "القوة الناعمة الجزائرية",
      subtitle: "احتفل بالتأثير الثقافي والتميز الجزائري",
      cta: "اكتشف المزيد",
      scroll: "قم بالتمرير لأسفل",
    },
    // About Section
    about: {
      title: "نبذة عنا",
      description:
        "تحتفل جوائز القوة الناعمة الجزائرية بالأفراد والمنظمات الذين يجسدون التميز والتأثير الإيجابي للجزائر على المسرح العالمي",
      stats: "الإحصائيات",
    },
    // Categories
    categories: {
      title: "فئات الجوائز",
      description: "استكشف المجالات الثمانية للتميز التي نكافئها",
    },
    // Programme
    programme: {
      title: "برنامج الأحداث",
      description: "تابع المراحل المختلفة من حدثنا",
      phases: {
        nominations: "طلب الترشيحات",
        voting: "فترة التصويت",
        ceremony: "حفل توزيع الجوائز",
      },
    },
    // Gallery
    gallery: {
      title: "المعرض",
      description: "أعد عيش اللحظات المهمة من فعالياتنا السابقة",
    },
    // Contact
    contact: {
      title: "تواصل معنا",
      description: "هل لديك أسئلة؟ سنسعد برؤية رسالتك",
      form: {
        name: "الاسم الكامل",
        email: "عنوان البريد الإلكتروني",
        message: "رسالتك",
        submit: "إرسال",
        success: "تم إرسال الرسالة بنجاح!",
      },
    },
    // Footer
    footer: {
      description: "منصة الاحتفال بالتميز الجزائري",
      links: "روابط مفيدة",
      social: "تابعنا",
      rights: "جميع الحقوق محفوظة",
    },
    // Auth
    auth: {
      login: "دخول",
      register: "تسجيل",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      confirmPassword: "تأكيد كلمة المرور",
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      submit: "إرسال",
      forgotPassword: "هل نسيت كلمة المرور؟",
      noAccount: "ليس لديك حساب بعد؟",
      haveAccount: "هل لديك حساب بالفعل؟",
    },
    // Dashboard
    dashboard: {
      title: "لوحة تحكمي",
      admin: "لوحة تحكم المسؤول",
      nominations: "ترشيحاتي",
      submissions: "طلباتي",
      profile: "ملفي الشخصي",
      settings: "الإعدادات",
      overview: "نظرة عامة",
      users: "المستخدمون",
      stats: "الإحصائيات",
    },
  },
};

export type Language = "fr" | "ar";
export type TranslationKey = keyof typeof translations.fr;

export const t = (lang: Language, key: string): string => {
  const keys = key.split(".");
  let value: any = translations[lang];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
};

export const getLocaleFromURL = (pathname: string): Language => {
  if (pathname.startsWith("/ar")) return "ar";
  return "fr";
};

export const isRTL = (lang: Language): boolean => lang === "ar";
