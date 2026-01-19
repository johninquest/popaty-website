import { de } from './locales/de';
import { en } from './locales/en';

export const languages = {
  en: 'English',
  fr: 'Français',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'site.title': 'Popaty',
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.login': 'Login',
    'nav.getStarted': 'Get Started',
    'hero.title': 'Popaty',
    'hero.tagline': 'Property rent & expense manager',
    'hero.description': 'A simple app for DIY landlords and property managers. Stop wrestling with spreadsheets and track rent payments in seconds.',
    'hero.cta.primary': 'Request A Demo',
    'hero.cta.secondary': 'View Demo',
    'features.title': 'Key Features',
    'features.subtitle': 'Everything you need to manage your properties efficiently',
    'features.rent.title': 'Frictionless Rent Tracking',
    'features.rent.description': 'Record payments in 3 clicks: Select Property → Select Tenant → Save. Track partial payments, payment methods, and due dates.',
    'features.collaboration.title': 'Seamless Collaboration',
    'features.collaboration.description': 'Email-first sharing with no complex team setups. Assign Managers or Viewers to specific properties. Property owners pay, but managers and accountants access shared properties for free.',
    'features.expenses.title': 'Expense Management',
    'features.expenses.description': 'Log maintenance, repairs, utilities, taxes, and management fees. Track vendors and get automatic currency formatting based on property country.',
    'features.trust.title': 'Trust & Transparency',
    'features.trust.description': 'Immutable audit logs record every action permanently. See exactly who changed what and when for dispute resolution.',
    'features.mobile.title': 'Mobile-First Design',
    'features.mobile.description': 'PWA ready with offline capabilities. Install directly to your phone\'s home screen and work even with spotty internet.',
    'pricing.title': 'Simple Pricing',
    'pricing.subtitle': 'Your property managers, spouses, and accountants never pay a dime. Only the property owner subscribes.',
    'pricing.free': 'Free',
    'pricing.free.properties': '1 Property',
    'pricing.free.features': 'Full features. Unlimited sharing.',
    'pricing.starter': 'Starter',
    'pricing.starter.properties': 'Up to 3 Properties',
    'pricing.growth': 'Growth',
    'pricing.growth.properties': 'Up to 10 Properties',
    'pricing.pro': 'Pro',
    'pricing.pro.properties': 'Unlimited Properties',
    'pricing.pro.features': 'Priority Support included.',
    'footer.tagline': 'Simple for owners, power for managers.',
  },
  fr: {
    'site.title': 'Popaty',
    'nav.home': 'Accueil',
    'nav.features': 'Fonctionnalités',
    'nav.pricing': 'Tarifs',
    'nav.login': 'Connexion',
    'nav.getStarted': 'Commencer',
    'hero.title': 'Popaty',
    'hero.tagline': 'Gestionnaire de loyers et de dépenses immobilières',
    'hero.description': 'Une application simple pour les propriétaires et gestionnaires immobiliers. Arrêtez de lutter avec les feuilles de calcul et suivez les paiements de loyer en quelques secondes.',
    'hero.cta.primary': 'Demander une démo',
    'hero.cta.secondary': 'Voir la Démo',
    'features.title': 'Fonctionnalités Clés',
    'features.subtitle': 'Tout ce dont vous avez besoin pour gérer vos propriétés efficacement',
    'features.rent.title': 'Suivi de Loyer Sans Friction',
    'features.rent.description': 'Enregistrez les paiements en 3 clics : Sélectionner la Propriété → Sélectionner le Locataire → Enregistrer. Suivez les paiements partiels, les méthodes de paiement et les dates d\'échéance.',
    'features.collaboration.title': 'Collaboration Transparente',
    'features.collaboration.description': 'Partage par email sans configuration d\'équipe complexe. Attribuez des rôles de Gestionnaire ou d\'Observateur. Les propriétaires paient, mais les gestionnaires et comptables accèdent gratuitement.',
    'features.expenses.title': 'Gestion des Dépenses',
    'features.expenses.description': 'Enregistrez l\'entretien, les réparations, les services publics, les taxes et les frais de gestion. Suivez les fournisseurs avec formatage automatique de la devise.',
    'features.trust.title': 'Confiance & Transparence',
    'features.trust.description': 'Les journaux d\'audit immuables enregistrent chaque action de façon permanente. Voyez exactement qui a modifié quoi et quand pour la résolution des litiges.',
    'features.mobile.title': 'Design Mobile First',
    'features.mobile.description': 'PWA avec capacités hors ligne. Installez directement sur l\'écran d\'accueil de votre téléphone et travaillez même sans connexion stable.',
    'pricing.title': 'Tarification Simple',
    'pricing.subtitle': 'Vos gestionnaires, conjoints et comptables ne paient jamais. Seul le propriétaire s\'abonne.',
    'pricing.free': 'Gratuit',
    'pricing.free.properties': '1 Propriété',
    'pricing.free.features': 'Toutes les fonctionnalités. Partage illimité.',
    'pricing.starter': 'Starter',
    'pricing.starter.properties': 'Jusqu\'à 3 Propriétés',
    'pricing.growth': 'Croissance',
    'pricing.growth.properties': 'Jusqu\'à 10 Propriétés',
    'pricing.pro': 'Pro',
    'pricing.pro.properties': 'Propriétés Illimitées',
    'pricing.pro.features': 'Support prioritaire inclus.',
    'footer.tagline': 'Simple pour les propriétaires, puissant pour les gestionnaires.',
  }
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}