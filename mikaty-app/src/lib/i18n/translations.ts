export type Locale = "fr" | "en";

export const DEFAULT_LOCALE: Locale = "fr";

export const translations = {
  fr: {
    nav: {
      services: "Services",
      entreprise: "Entreprise",
      contact: "Contact",
      faq: "FAQ",
      signIn: "Se connecter",
      getStarted: "Commencer",
    },
    hero: {
      badge: "Gratuit et open source",
      titleStart: "Votre compagnon",
      titleHighlight: "financier tout-en-un",
      description:
        "Suivez vos d\u00e9penses, g\u00e9rez vos budgets et atteignez vos objectifs financiers. Mikaty vous donne les outils pour prendre le contr\u00f4le de votre argent.",
      cta: "Commencer gratuitement",
      ctaSecondary: "Se connecter",
    },
    features: {
      title: "Tout ce dont vous avez besoin pour g\u00e9rer votre argent",
      subtitle:
        "Des fonctionnalit\u00e9s puissantes con\u00e7ues pour vous donner un contr\u00f4le total sur vos finances.",
      items: [
        {
          title: "Analyses intelligentes",
          description:
            "Obtenez des informations sur vos habitudes de d\u00e9penses gr\u00e2ce \u00e0 des graphiques et rapports en temps r\u00e9el.",
        },
        {
          title: "Suivi des d\u00e9penses",
          description:
            "Enregistrez et cat\u00e9gorisez vos d\u00e9penses sans effort. Sachez exactement o\u00f9 va votre argent.",
        },
        {
          title: "Gestion de budget",
          description:
            "D\u00e9finissez des limites de d\u00e9penses par cat\u00e9gorie et recevez des alertes avant de d\u00e9passer.",
        },
        {
          title: "Objectifs d'\u00e9pargne",
          description:
            "Fixez des objectifs financiers et suivez votre progression avec des indicateurs visuels.",
        },
        {
          title: "S\u00e9curis\u00e9 et priv\u00e9",
          description:
            "Vos donn\u00e9es financi\u00e8res restent sur votre appareil. Aucun acc\u00e8s tiers.",
        },
        {
          title: "Mises \u00e0 jour en temps r\u00e9el",
          description:
            "Voyez les changements refl\u00e9t\u00e9s instantan\u00e9ment lorsque vous g\u00e9rez vos finances.",
        },
      ],
    },
    cta: {
      title: "Commencez \u00e0 suivre vos finances d\u00e8s aujourd'hui",
      description:
        "Rejoignez des milliers d'utilisateurs qui ont pris le contr\u00f4le de leur avenir financier avec Mikaty.",
      button: "Cr\u00e9er un compte gratuit",
    },
    footer: {
      tagline: "Mikaty - Application financi\u00e8re tout-en-un",
      builtWith: "Construit avec Next.js, Tailwind CSS et shadcn/ui",
    },
  },
  en: {
    nav: {
      services: "Services",
      entreprise: "Enterprise",
      contact: "Contact",
      faq: "FAQ",
      signIn: "Sign in",
      getStarted: "Get Started",
    },
    hero: {
      badge: "Free and open source",
      titleStart: "Your all-in-one",
      titleHighlight: "finance companion",
      description:
        "Track expenses, manage budgets, and achieve your financial goals. Mikaty gives you the tools to take control of your money.",
      cta: "Get Started Free",
      ctaSecondary: "Sign In",
    },
    features: {
      title: "Everything you need to manage your money",
      subtitle:
        "Powerful features designed to give you complete control over your finances.",
      items: [
        {
          title: "Smart Analytics",
          description:
            "Get insights into your spending patterns with real-time charts and reports.",
        },
        {
          title: "Expense Tracking",
          description:
            "Log and categorize expenses effortlessly. Know exactly where your money goes.",
        },
        {
          title: "Budget Management",
          description:
            "Set spending limits by category and get alerts before you overspend.",
        },
        {
          title: "Savings Goals",
          description:
            "Set financial goals and track your progress with visual indicators.",
        },
        {
          title: "Secure & Private",
          description:
            "Your financial data stays on your device. No third-party access.",
        },
        {
          title: "Real-time Updates",
          description:
            "See changes reflected instantly as you manage your finances.",
        },
      ],
    },
    cta: {
      title: "Start tracking your finances today",
      description:
        "Join thousands of users who have taken control of their financial future with Mikaty.",
      button: "Create Free Account",
    },
    footer: {
      tagline: "Mikaty - All-in-one Finance App",
      builtWith: "Built with Next.js, Tailwind CSS, and shadcn/ui",
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];
