// Exemples d'intégration - Multilingue, Animations & SEO
// Algerian Soft Power Day v1.1.0

// ═══════════════════════════════════════════════════════════════════════════
// 1. UTILISER LES TRADUCTIONS (MULTILINGUE FR/AR)
// ═══════════════════════════════════════════════════════════════════════════

'use client';

import { useState } from 'react';
import { t, Language, isRTL } from '@/lib/i18n';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';

// Exemple 1: Composant avec sélecteur de langue
export function MultilingualExample() {
  const [lang, setLang] = useState<Language>('fr');

  return (
    <div dir={isRTL(lang) ? 'rtl' : 'ltr'}>
      {/* Sélecteur de langue */}
      <LanguageSwitcher />

      {/* Navigation traduite */}
      <nav>
        <a href="/">{t(lang, 'nav.home')}</a>
        <a href="/about">{t(lang, 'nav.about')}</a>
        <a href="/categories">{t(lang, 'nav.categories')}</a>
        <a href="/contact">{t(lang, 'nav.contact')}</a>
      </nav>

      {/* Hero section traduite */}
      <section>
        <h1>{t(lang, 'hero.title')}</h1>
        <p>{t(lang, 'hero.subtitle')}</p>
        <button>{t(lang, 'hero.cta')}</button>
      </section>

      {/* Contact form traduite */}
      <form>
        <input placeholder={t(lang, 'contact.form.name')} />
        <input type="email" placeholder={t(lang, 'contact.form.email')} />
        <textarea placeholder={t(lang, 'contact.form.message')} />
        <button type="submit">{t(lang, 'contact.form.submit')}</button>
      </form>
    </div>
  );
}

// Exemple 2: Ajouter une nouvelle traduction
const newTranslation = {
  fr: {
    footer: {
      copyright: '© 2026 Algerian Soft Power Awards. Tous droits réservés.',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d\'Utilisation',
    },
  },
  ar: {
    footer: {
      copyright: '© 2026 جوائز القوة الناعمة الجزائرية. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام',
    },
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// 2. UTILISER LES ANIMATIONS AVANCÉES
// ═══════════════════════════════════════════════════════════════════════════

// Exemple 1: Animation au chargement
export function HeroWithAnimation() {
  return (
    <section className="bg-black text-white">
      <div className="animate-fadeInUp">
        <h1 className="text-4xl font-bold animate-goldGlow">
          Algerian Soft Power Awards
        </h1>
      </div>

      <div className="animate-fadeInUp animate-stagger-1">
        <p className="text-lg">
          Celebrating Excellence & Cultural Influence
        </p>
      </div>

      <button className="animate-fadeInUp animate-stagger-2 hover-lift hover-glow">
        Discover More
      </button>
    </section>
  );
}

// Exemple 2: Grille animée avec stagger
export function AnimatedGrid() {
  const items = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    title: `Category ${i + 1}`,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`animate-scaleIn hover-lift ${`animate-stagger-${(index % 5) + 1}`}`}
        >
          <div className="bg-gray-900 p-6 rounded-lg border border-gold hover:border-gold">
            <h3 className="text-gold font-bold">{item.title}</h3>
            <p className="text-gray-300 mt-2">Description...</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Exemple 3: Utiliser tous les types d'animations
export function AnimationShowcase() {
  return (
    <div className="space-y-8 p-8">
      {/* Fade animations */}
      <div className="animate-fadeInUp">Fade In Up</div>
      <div className="animate-fadeInDown">Fade In Down</div>
      <div className="animate-fadeInLeft">Fade In Left</div>
      <div className="animate-fadeInRight">Fade In Right</div>

      {/* Slide animations */}
      <div className="animate-slideInLeft">Slide In Left</div>
      <div className="animate-slideInRight">Slide In Right</div>

      {/* Glow animations */}
      <div className="animate-glowPulse bg-gold/10 rounded-lg p-4">
        Glow Pulse
      </div>
      <h2 className="animate-goldGlow text-gold text-2xl">Gold Glow Text</h2>

      {/* 3D & Bounce */}
      <div className="animate-bounce3D">Bounce 3D</div>
      <div className="animate-float">Float</div>

      {/* Scale animations */}
      <div className="animate-scaleIn">Scale In</div>
      <div className="animate-scaleUp">Scale Up</div>

      {/* Rotation */}
      <div className="w-12 h-12 bg-gold animate-rotateSlow rounded-full" />
      <div className="w-8 h-8 bg-gold animate-rotateFast rounded-full" />

      {/* Special animations */}
      <div className="animate-shimmer bg-gradient-to-r from-gray-700 to-gray-900">
        Shimmer
      </div>
      <div className="animate-wave">👋 Wave</div>
      <div className="animate-pulseIntense text-gold">Pulse Intense</div>
      <div className="animate-blurIn">Blur In</div>
    </div>
  );
}

// Exemple 4: Scroll reveal animations
export function ScrollReveal() {
  return (
    <div className="space-y-20">
      <section className="reveal">
        <h2>This appears on scroll</h2>
      </section>
      <section className="reveal">
        <h2>This appears on scroll too</h2>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// 3. OPTIMISER LE SEO
// ═══════════════════════════════════════════════════════════════════════════

// Exemple 1: Métadonnées pour une page personnalisée
import { generateSEOMetadata } from '@/config/seo';

export const metadata = generateSEOMetadata({
  title: 'Categories - Algerian Soft Power Awards',
  description:
    'Explore the 8 categories of excellence we celebrate at the Algerian Soft Power Awards',
  keywords: ['categories', 'awards', 'excellence', 'algerian culture'],
  ogImage: 'https://algerian-soft-power-awards.com/categories-og.jpg',
  canonicalUrl: 'https://algerian-soft-power-awards.com/categories',
});

// Exemple 2: Ajouter JSON-LD Structured Data
import { JSONLDScript } from '@/lib/seo';

export function PageWithStructuredData() {
  return (
    <>
      <JSONLDScript type="Organization" />
      <JSONLDScript type="Event" />

      <div>
        {/* Page content */}
      </div>
    </>
  );
}

// Exemple 3: SEO pour articles/blog
interface BlogPostProps {
  title: string;
  description: string;
  publishedDate: string;
  image: string;
}

export async function BlogPostLayout({ title, description, publishedDate, image }: BlogPostProps) {
  const metadata = generateSEOMetadata({
    title,
    description,
    ogImage: image,
    publishedDate,
    ogType: 'article',
  });

  return (
    <article>
      <h1>{title}</h1>
      <time dateTime={publishedDate}>{new Date(publishedDate).toLocaleDateString()}</time>
      <img src={image} alt={title} />
      <p>{description}</p>
    </article>
  );
}

// Exemple 4: Breadcrumb avec JSON-LD
import { structuredData } from '@/config/seo';

export function BreadcrumbNavigation() {
  const paths = [
    { name: 'Home', url: 'https://algerian-soft-power-awards.com' },
    { name: 'Categories', url: 'https://algerian-soft-power-awards.com/categories' },
    { name: 'Culture', url: 'https://algerian-soft-power-awards.com/categories/culture' },
  ];

  const breadcrumbSchema = structuredData.breadcrumb(paths);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav aria-label="Breadcrumb">
        <ol className="flex gap-2">
          {paths.map((path, index) => (
            <li key={path.url}>
              <a href={path.url}>{path.name}</a>
              {index < paths.length - 1 && <span> / </span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// 4. COMBINER TOUT: COMPOSANT COMPLÈTEMENT OPTIMISÉ
// ═══════════════════════════════════════════════════════════════════════════

'use client';

import { useState } from 'react';
import { t, Language, isRTL } from '@/lib/i18n';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';

export function FullyOptimizedPage() {
  const [lang, setLang] = useState<Language>('fr');

  return (
    <div dir={isRTL(lang) ? 'rtl' : 'ltr'}>
      {/* Header avec sélecteur de langue */}
      <header className="bg-black p-4 flex justify-between items-center">
        <h1 className="text-gold text-2xl font-bold">{t(lang, 'nav.home')}</h1>
        <LanguageSwitcher />
      </header>

      {/* Hero avec animations */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold animate-fadeInUp animate-goldGlow">
            {t(lang, 'hero.title')}
          </h1>

          <p className="text-xl text-gray-300 mt-4 animate-fadeInUp animate-stagger-1">
            {t(lang, 'hero.subtitle')}
          </p>

          <button className="mt-8 px-8 py-3 bg-gold text-black font-bold rounded-lg hover-lift hover-glow animate-fadeInUp animate-stagger-2">
            {t(lang, 'hero.cta')}
          </button>
        </div>
      </section>

      {/* Catégories animées */}
      <section className="bg-gray-900 py-20">
        <h2 className="text-4xl font-bold text-center text-gold mb-12">
          {t(lang, 'categories.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className={`animate-scaleIn hover-lift ${`animate-stagger-${(i % 5) + 1}`}`}
            >
              <div className="bg-black p-6 rounded-lg border border-gold/50 hover:border-gold hover:border-2 transition-all duration-300">
                <h3 className="text-gold font-bold text-lg">Category {i}</h3>
                <p className="text-gray-400 mt-2">
                  {t(lang, 'categories.description')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-black py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gold mb-8 animate-fadeInUp">
            {t(lang, 'contact.title')}
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder={t(lang, 'contact.form.name')}
              className="w-full px-4 py-2 bg-gray-900 border border-gold/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold"
            />
            <input
              type="email"
              placeholder={t(lang, 'contact.form.email')}
              className="w-full px-4 py-2 bg-gray-900 border border-gold/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold"
            />
            <textarea
              placeholder={t(lang, 'contact.form.message')}
              rows={5}
              className="w-full px-4 py-2 bg-gray-900 border border-gold/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold"
            />
            <button
              type="submit"
              className="w-full px-4 py-3 bg-gold text-black font-bold rounded-lg hover-scale transition-all duration-300"
            >
              {t(lang, 'contact.form.submit')}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gold/20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>{t(lang, 'footer.description')}</p>
          <p className="mt-4 text-sm">© 2026 {t(lang, 'nav.home')}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default FullyOptimizedPage;
