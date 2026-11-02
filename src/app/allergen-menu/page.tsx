import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AllergenTable from './AllergenTable';

export const metadata: Metadata = {
  title: 'CAVA Allergen Menu 2026 | Food Allergy Guide',
  description:
    'Explore the CAVA Allergen Menu with food allergy information. Check milk, wheat, soy, sesame, nuts, and eggs before choosing your meal.',
  alternates: {
    canonical: '/allergen-menu',
  },
  keywords: [
    'cava allergen menu',
    'cava allergy guide',
    'cava allergens 2026',
    'cava gluten dairy nuts allergies',
    'cava food allergy information',
  ],
  openGraph: {
    title: 'CAVA Allergen Menu 2026 | Food Allergy Guide',
    description:
      'Explore the CAVA Allergen Menu with food allergy information. Check milk, wheat, soy, sesame, nuts, and eggs before choosing your meal.',
    url: 'https://cavamenue.us/allergen-menu',
    images: [
      {
        url: '/images/Cava Allergen Menu USA.webp',
        width: 1672,
        height: 941,
        alt: 'CAVA Allergen Menu 2026 | Food Allergy Guide',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CAVA Allergen Menu 2026 | Food Allergy Guide',
    description:
      'Explore the CAVA Allergen Menu with food allergy information. Check milk, wheat, soy, sesame, nuts, and eggs before choosing your meal.',
    images: ['/images/Cava Allergen Menu USA.webp'],
  },
};

const faqs = [
  {
    question: 'Does CAVA have an allergen menu?',
    answer:
      'Yes, CAVA provides an allergen menu listing common allergens clearly. This resource helps guests identify safe options before ordering. Checking it regularly ensures you have current allergen information available.',
  },
  {
    question: 'What are the most common allergens in CAVA food?',
    answer:
      'Common allergens at CAVA include dairy, sesame, soy, and tree nuts. Dips and certain spreads are more likely to contain these. Reviewing the allergen chart helps you avoid them easily.',
  },
  {
    question: 'Does CAVA offer dairy free options?',
    answer:
      'Yes, CAVA offers dairy free options when guests skip certain dips. Choosing a base, protein, and toppings without dairy keeps meals safe. Checking current ingredients confirms your bowl stays dairy free.',
  },
  {
    question: 'Is CAVA safe for people with nut allergies?',
    answer:
      'CAVA can be safe for nut allergies with careful ordering. Cross contact remains possible inside the open kitchen setup. Checking the allergen chart and asking staff reduces this risk.',
  },
  {
    question: 'Does CAVA use sesame in its food?',
    answer:
      'Yes, CAVA uses sesame in certain dips and spreads. Guests with sesame allergies should review the allergen chart first. Avoiding specific sauces helps reduce exposure while ordering a bowl.',
  },
  {
    question: 'Can I customize my CAVA bowl to avoid allergens?',
    answer:
      'Yes, CAVA bowls allow heavy customization to avoid allergens. Guests can choose safe bases, proteins, and toppings freely. This flexibility makes CAVA popular among allergy conscious diners.',
  },
  {
    question: 'How does CAVA handle allergen cross contact?',
    answer:
      'CAVA operates an open kitchen, making cross contact possible sometimes. Staff can answer questions about specific preparation procedures upon request. Clear communication helps guests understand their personal risk level.',
  },
  {
    question: 'Where can I find the CAVA allergen menu PDF?',
    answer:
      'The CAVA allergen menu PDF is usually available on their website. This document lists detailed allergen information for every menu item. Downloading it early makes ordering easier and safer overall.',
  },
];

export default function AllergenMenuPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Allergen Menu', item: '/allergen-menu' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen font-sans text-[#1A1A2E] bg-white">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-100 py-3 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-[#0A6847] transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-[#0A6847] font-medium">Allergen Menu</li>
          </ol>
        </div>
      </nav>

      {/* ════════════════════ HERO SECTION (H1 + INTRO) ════════════════════ */}
      <section className="py-[10px] bg-gradient-to-b from-[#FAFAF8] via-white to-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[35px] font-black text-[#1A1A2E] leading-tight tracking-tight mb-4">
                CAVA Allergen Menu <span className="text-[#0A6847]">2026</span>
              </h1>
              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-4">
                Eating out with food allergies can feel stressful and confusing. CAVA wants to make this process simpler for guests. Knowing which ingredients contain common allergens helps you order safely. This guide explains the CAVA allergen menu in full detail.
              </p>
              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6">
                Whether you manage dairy, nuts, sesame, or other allergies, CAVA offers flexible options. Understanding allergen details before ordering reduces risk and saves time. This article covers everything you need to know about CAVA allergens in 2026.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="#allergen-chart"
                  className="px-8 py-3.5 rounded-full bg-[#0A6847] text-white font-bold text-sm sm:text-base hover:bg-[#085238] transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
                >
                  <span>View Allergen Chart</span>
                  <span>↓</span>
                </a>
                <Link
                  href="/calculator"
                  className="px-8 py-3.5 rounded-full bg-white border-2 border-gray-200 text-[#1A1A2E] font-bold text-sm sm:text-base hover:border-[#0A6847] hover:text-[#0A6847] transition-all inline-flex items-center gap-2 shadow-xs"
                >
                  <span>Nutrition Calculator</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end w-full max-w-xl">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                <Image
                  src="/images/Cava Allergen Menu.webp"
                  alt="CAVA Allergen Menu 2026 | Food Allergy Guide"
                  width={1672}
                  height={941}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[10px] space-y-[10px]">
        {/* ════════════════════ H2: CAVA ALLERGEN MENU CHART ════════════════════ */}
        <section id="allergen-chart" className="space-y-[10px] scroll-mt-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A2E] tracking-tight">
              CAVA Allergen Menu Chart
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] max-w-2xl mx-auto">
              CAVA provides an allergen chart covering every major menu category. This chart lists bases, proteins, dips, and toppings clearly. Each item shows which allergens it may contain. Reviewing this chart helps you choose safely before ordering at the counter.
            </p>
          </div>

          <AllergenTable />
        </section>

        {/* ════════════════════ H2: CAVA CROSS CONTACT AND ALLERGY RISKS ════════════════════ */}
        <section className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 sm:p-7 text-amber-950">
          <h2 className="text-base sm:text-lg font-bold text-amber-900 mb-2">
            CAVA Cross Contact and Allergy Risks
          </h2>
          <p className="text-sm sm:text-base text-amber-900 leading-relaxed">
            CAVA prepares food in an open kitchen environment daily. This setup makes cross contact between allergens possible at times. Shared utensils and surfaces can increase risk for sensitive guests. Asking staff detailed questions helps you understand your personal risk.
          </p>
        </section>

        {/* ════════════════════ SEO ARTICLE CONTENT ════════════════════ */}
        <article className="max-w-4xl mx-auto space-y-[10px] w-full pt-4">
          {/* Featured Image */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gray-100">
            <Image
              src="/images/Cava Allergen Menu USA.webp"
              alt="CAVA Allergen Menu 2026 | Food Allergy Guide"
              width={1672}
              height={941}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Common Allergens Found in CAVA Food */}
          <section className="bg-[#FAFAF8] border-l-4 border-[#0A6847] rounded-r-2xl p-6 sm:p-7">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-3">
              Common Allergens Found in CAVA Food
            </h2>
            <p className="text-[#4B5563] leading-relaxed text-[15px]">
              CAVA food can contain dairy, sesame, soy, and tree nuts. Dips like tzatziki typically include dairy as a main ingredient. Certain spreads may also contain sesame or soy. Checking ingredient labels helps you avoid these allergens with confidence.
            </p>
          </section>

          {/* CAVA Allergen Information by Menu Category */}
          <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-3">
              CAVA Allergen Information by Menu Category
            </h2>
            <p className="text-[#4B5563] leading-relaxed text-[15px]">
              CAVA organizes allergen details across bases, proteins, dips, and toppings. Each category lists specific allergens tied to individual ingredients. This structure makes scanning for safe options much faster. Guests can quickly match choices to their own dietary restrictions.
            </p>
          </section>

          {/* Best CAVA Menu Options for Food Allergies */}
          <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-3">
              Best CAVA Menu Options for Food Allergies
            </h2>
            <p className="text-[#4B5563] leading-relaxed text-[15px]">
              Guests with allergies often choose rice, grilled chicken, and fresh vegetables. These ingredients generally avoid common allergens like dairy and nuts. Skipping certain dips and sauces lowers risk even further. This simple combination works well for most sensitive diners.
            </p>
          </section>

          {/* How to Order at CAVA With Food Allergies */}
          <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-3">
              How to Order at CAVA With Food Allergies
            </h2>
            <p className="text-[#4B5563] leading-relaxed text-[15px]">
              Start by reviewing the allergen chart before placing your order. Choose a base, protein, and toppings that avoid your allergens. Ask staff directly about preparation methods when needed. This extra step adds confidence, especially for severe allergy concerns.
            </p>
          </section>

          {/* How to Customize Your CAVA Bowl With Allergies */}
          <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-3">
              How to Customize Your CAVA Bowl With Allergies
            </h2>
            <p className="text-[#4B5563] leading-relaxed text-[15px]">
              Customizing a bowl begins with picking a safe base first. Add a protein that does not contain your specific allergens. Finish with toppings and dressings that match your dietary needs. This process creates a meal that feels both safe and satisfying.
            </p>
          </section>

          {/* CAVA Allergen Menu PDF Download */}
          <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-3">
              CAVA Allergen Menu PDF Download
            </h2>
            <p className="text-[#4B5563] leading-relaxed text-[15px]">
              CAVA offers a downloadable allergen menu PDF for guests. This document lists every allergen tied to specific menu items. Keeping a copy handy makes referencing details much easier. It remains a helpful tool before deciding what to order.
            </p>
          </section>

          {/* Conclusion */}
          <section className="bg-gradient-to-r from-[#0A6847] to-[#065F46] rounded-2xl p-6 sm:p-8 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
              Conclusion
            </h2>
            <p className="text-white/90 leading-relaxed text-[15px]">
              Managing food allergies at CAVA becomes easier with the right information. Using the allergen chart helps you build a safe bowl quickly. Communicating with staff about cross contact adds extra peace of mind. Following these steps lets you enjoy CAVA without unnecessary worry.
            </p>
          </section>

          {/* Frequently Asked Questions */}
          <section className="pt-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-5 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs"
                  open={index === 0}
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 text-[#1A1A2E] font-semibold text-[15px] select-none hover:bg-gray-50 transition-colors list-none">
                    <span>{faq.question}</span>
                    <span className="ml-4 flex-shrink-0 text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-1 border-t border-gray-100 bg-gray-50/50">
                    <p className="text-[#4B5563] leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        </article>

        {/* Bottom CTA Section */}
        <section className="bg-gradient-to-r from-[#0A6847] to-[#085238] rounded-2xl p-5 sm:p-6 text-white shadow-xl text-center space-y-[10px]">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Looking for More Nutrition Information?
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Use our nutrition calculator to build custom meals and track macros.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/calculator"
              className="px-7 py-3 rounded-full bg-white text-[#0A6847] font-bold text-sm sm:text-base hover:bg-emerald-50 transition-colors shadow-md hover:shadow-lg"
            >
              Nutrition Calculator
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
