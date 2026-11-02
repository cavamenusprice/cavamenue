import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MenuBrowser from '@/components/MenuBrowser';
import { menuData, categoryOrder } from '@/data/menu';

export const metadata: Metadata = {
  title: {
    absolute: 'Cava Menu With Prices and Calories 2026',
  },
  description:
    'Are you looking for the latest Cava menu with prices? Explore bowls, pitas, dips, sides, drinks, and calories to find your next favorite meal.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cava Menu With Prices and Calories 2026',
    description:
      'Are you looking for the latest Cava menu with prices? Explore bowls, pitas, dips, sides, drinks, and calories to find your next favorite meal.',
    url: 'https://cavamenue.us',
    images: [
      {
        url: '/images/Cava%20Menu.webp',
        width: 1200,
        height: 630,
        alt: 'Cava Menu',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cava Menu With Prices and Calories 2026',
    description:
      'Are you looking for the latest Cava menu with prices? Explore bowls, pitas, dips, sides, drinks, and calories to find your next favorite meal.',
    images: ['/images/Cava%20Menu.webp'],
  },
};

export default function Home() {
  const totalItems = menuData.length;

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CAVA Menu — Prices, Calories & Nutrition",
    url: "https://cavamenue.us",
    description: "Explore the full CAVA menu with prices, calories, nutrition facts, and allergen information.",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CAVA Nutrition",
    url: "https://cavamenue.us",
    logo: "https://cavamenue.us/images/Cava%20Menu.webp",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What are the average prices on the CAVA menu?", acceptedAnswer: { "@type": "Answer", text: "Most CAVA bowls and pitas range from $11.95 to $16.55. The price depends on your protein selection and location. Chicken options start around $12.85. Premium proteins like Grilled Steak cost more." } },
      { "@type": "Question", name: "How many dips and toppings are free at CAVA?", acceptedAnswer: { "@type": "Answer", text: "CAVA includes up to 3 scoops of dips and spreads at no charge. Standard vegetable toppings are also free and unlimited. Fresh avocado is an optional paid add-on priced between $1.95 and $2.45." } },
      { "@type": "Question", name: "Which CAVA bowl has the highest protein and lowest calories?", acceptedAnswer: { "@type": "Answer", text: "The Greek Salad Bowl offers 37 grams of protein for only 580 calories. A custom bowl using SuperGreens, double grilled chicken, and tzatziki can go above 55 grams of protein." } },
      { "@type": "Question", name: "Is the CAVA menu good for weight loss?", acceptedAnswer: { "@type": "Answer", text: "Yes, CAVA is one of the best fast-casual options for weight loss. A greens base with lean protein and a light dressing stays under 450 calories." } },
      { "@type": "Question", name: "Does CAVA have vegetarian and vegan options?", acceptedAnswer: { "@type": "Answer", text: "Yes, CAVA offers several vegetarian and vegan-friendly items. Crispy Falafel, Roasted Vegetables, and most toppings are fully plant-based. Many dips like Hummus and Harissa are also vegan." } },
      { "@type": "Question", name: "Can I calculate exact calories before ordering at CAVA?", acceptedAnswer: { "@type": "Answer", text: "Yes, use the free CAVA Nutrition Calculator to select your base, protein, dips, and dressings and see instant totals for calories, protein, carbs, fat, and sodium." } },
    ],
  };

  return (
    <main className="min-h-screen font-sans text-[#1A1A2E] bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO SECTION */}
      <section className="py-[10px] bg-gradient-to-b from-[#FAFAF8] via-white to-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[35px] font-black text-[#1A1A2E] leading-tight tracking-tight mb-4">
                CAVA Menu Prices &amp; <span className="text-[#0A6847]">Full Food List 2026</span>
              </h1>

              <div className="space-y-4 text-sm sm:text-base text-[#4B5563] max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                <p>
                  The <strong>CAVA menu</strong> offers fresh Mediterranean meals at honest prices. Every item is made with real ingredients. You can build your own bowl or choose a curated option. The <strong>cava menu with prices</strong> is updated for 2026. It covers bowls, pitas, sides, drinks, and desserts. Each category gives you full control over what you eat and spend.
                </p>
                <p>
                  Knowing <strong>cava menu and prices</strong> before you order saves time and removes surprises. Meals typically range from $11 to $17. The price depends on your protein and add-ons. CAVA keeps its pricing fair for the quality it delivers. You get wholesome food without paying for extras you did not choose. Every dollar goes toward a real and nourishing meal.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="#menu"
                  className="px-8 py-3.5 rounded-full bg-[#0A6847] text-white font-bold text-sm sm:text-base hover:bg-[#085238] transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
                >
                  <span>Explore Full Menu</span>
                  <span>↓</span>
                </a>
                <Link
                  href="/calculator"
                  className="px-8 py-3.5 rounded-full bg-white border-2 border-gray-200 text-[#1A1A2E] font-bold text-sm sm:text-base hover:border-[#0A6847] hover:text-[#0A6847] transition-all inline-flex items-center gap-2 shadow-xs"
                >
                  <span>Nutrition Calculator</span>
                  <span>⚡</span>
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 mt-8 text-xs sm:text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <strong className="text-gray-900 font-bold">{totalItems}+</strong> Menu Items
                </span>
                <span className="text-gray-300">•</span>
                <span className="flex items-center gap-1.5">
                  <strong className="text-gray-900 font-bold">{categoryOrder.length}</strong> Categories
                </span>
                <span className="text-gray-300">•</span>
                <span className="flex items-center gap-1.5">
                  <strong className="text-gray-900 font-bold">100%</strong> Nutritional Transparency
                </span>
              </div>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end w-full max-w-xl">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                <Image
                  src="/images/Cava Menu With Prices.webp"
                  alt="Cava Menu With Prices and Calories 2026"
                  width={1200}
                  height={800}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── INTERACTIVE MENU BROWSER ── */}
      <section id="menu" className="py-[10px] bg-[#FAFAF8] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro SEO Content */}
          <div className="max-w-4xl mx-auto mb-[10px]">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4 text-center">
                CAVA Menu With Prices &amp; Calories 2026
              </h2>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-[#4B5563] leading-relaxed text-[15px] text-center shadow-xs">
                <p>
                  This page shows the full <strong>CAVA menu</strong> with both prices and calories in one place. You do not need to visit the restaurant to know what things cost. Every item includes its calorie count, macros, and current price. This helps you plan meals without stress. Whether you track calories or just want value for money, this guide covers everything you need.
                </p>
              </div>
            </section>
          </div>

          <MenuBrowser />
        </div>
      </section>


      {/* ── REMAINING SEO CONTENT ── */}
      <article className="bg-white py-[10px] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-[10px]">

          {/* Nutrition & Allergen Information */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4">
              Nutrition &amp; Allergen Information
            </h2>
            <div className="bg-[#FAFAF8] border-l-4 border-[#0A6847] rounded-r-xl p-5 text-[#4B5563] leading-relaxed text-[15px]">
              <p>
                CAVA publishes detailed nutrition and allergen data for every menu item. You can see calories, protein, carbs, fat, and sodium for each ingredient. Common allergens like gluten, dairy, eggs, and tree nuts are clearly labeled. This makes it easy to order safely with food sensitivities or dietary restrictions. Always verify with staff for the latest allergen updates at your local CAVA location.
              </p>
            </div>
          </section>

          {/* About CAVA 2026 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4">
              About CAVA 2026
            </h2>
            <p className="text-[#4B5563] leading-relaxed text-[15px]">
              CAVA is a fast-growing Mediterranean restaurant chain known for fresh, customizable meals. Founded in 2010, it has expanded to hundreds of locations across the United States. In 2026, CAVA continues to grow while staying true to its core values of quality, transparency, and bold flavor. The brand focuses on nourishing communities through accessible and wholesome Mediterranean cuisine every single day.
            </p>
          </section>

          {/* How to Order CAVA Menu Online in 2026 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4">
              How to Order CAVA Menu Online in 2026
            </h2>
            <div className="bg-gradient-to-br from-[#f8fdf9] to-[#f0faf4] border border-[#0A6847]/15 rounded-xl p-6">
              <ol className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#0A6847] text-white text-xs font-bold flex items-center justify-center mt-0.5">1</span>
                  <div>
                    <strong className="text-gray-900 block font-semibold text-[15px]">Visit the CAVA website or app.</strong>
                    <p className="text-[#4B5563] text-sm leading-relaxed">Go to cava.com or download the official CAVA mobile app on your phone.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#0A6847] text-white text-xs font-bold flex items-center justify-center mt-0.5">2</span>
                  <div>
                    <strong className="text-gray-900 block font-semibold text-[15px]">Select your nearest location.</strong>
                    <p className="text-[#4B5563] text-sm leading-relaxed">Use the location finder to choose a CAVA restaurant near you for pickup or delivery.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#0A6847] text-white text-xs font-bold flex items-center justify-center mt-0.5">3</span>
                  <div>
                    <strong className="text-gray-900 block font-semibold text-[15px]">Build your bowl or pick a curated option.</strong>
                    <p className="text-[#4B5563] text-sm leading-relaxed">Browse the full cava menu with prices, pick your base, protein, dips, and toppings.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#0A6847] text-white text-xs font-bold flex items-center justify-center mt-0.5">4</span>
                  <div>
                    <strong className="text-gray-900 block font-semibold text-[15px]">Review your order and pay online.</strong>
                    <p className="text-[#4B5563] text-sm leading-relaxed">Check your cart, apply any rewards or promo codes, and complete your checkout securely.</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* Famous CAVA Menu Items 2026 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4">
              Famous CAVA Menu Items 2026
            </h2>
            <p className="text-[#4B5563] leading-relaxed text-[15px]">
              Some items on the CAVA menu stand out above the rest. The Greek Salad Bowl, Harissa Avocado Bowl, and Spicy Lamb Meatball Pita are all customer favorites. The Crazy Feta dip has its own dedicated fan following. Grilled Chicken is the most ordered protein across all CAVA locations. These famous items show why people keep coming back and exploring <strong>cava menu and prices</strong> time after time.
            </p>
          </section>

          {/* Why CAVA Is a Popular Choice for Fresh Meals */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4">
              Why CAVA Is a Popular Choice for Fresh Meals
            </h2>
            <p className="text-[#4B5563] leading-relaxed text-[15px]">
              CAVA stands out because it combines flavor, health, and transparency in every meal. <strong>CAVA prices</strong> are competitive for the quality of ingredients used. Every bowl is assembled fresh in front of you with no hidden additives. The customizable menu means no two meals have to be the same. Whether you eat for fitness, weight loss, or simply great taste, CAVA always delivers a meal worth returning for.
            </p>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4">
              Conclusion
            </h2>
            <div className="bg-gradient-to-r from-[#0A6847] to-[#065F46] rounded-xl p-6">
              <p className="text-white/90 leading-relaxed text-[15px]">
                The <strong className="text-white">CAVA menu with prices</strong> for 2026 gives you everything you need to eat well. From curated bowls and pitas to dips, dressings, and desserts, there is something for everyone. Use this guide to explore the full <strong className="text-white">cava menu</strong> categories, check calories, and plan your meal with confidence. Visit your nearest CAVA location or order online today and enjoy fresh Mediterranean food done right.
              </p>
            </div>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-5">
              Frequently Asked Questions About CAVA Menu &amp; Prices
            </h2>
            <div className="space-y-3">

              <details className="group bg-[#FAFAF8] rounded-xl border border-gray-200 overflow-hidden" open>
                <summary className="flex items-center justify-between cursor-pointer p-5 text-[#1A1A2E] font-semibold text-[15px] select-none hover:bg-gray-100 transition-colors">
                  <span>What are the average prices on the CAVA menu?</span>
                  <span className="ml-4 flex-shrink-0 text-[#0A6847] text-xs font-bold group-open:rotate-180 transition-transform duration-200">▼</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-[#4B5563] leading-relaxed text-sm">
                    Most CAVA bowls and pitas range from <strong>$11.95 to $16.55</strong>. The price depends on your protein selection and location. Chicken options start around $12.85. Premium proteins like Grilled Steak cost more. CAVA prices are fair for the portion size and ingredient quality you receive every visit.
                  </p>
                </div>
              </details>

              <details className="group bg-[#FAFAF8] rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-[#1A1A2E] font-semibold text-[15px] select-none hover:bg-gray-100 transition-colors">
                  <span>How many dips and toppings are free at CAVA?</span>
                  <span className="ml-4 flex-shrink-0 text-[#0A6847] text-xs font-bold group-open:rotate-180 transition-transform duration-200">▼</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-[#4B5563] leading-relaxed text-sm">
                    CAVA includes up to <strong>3 scoops of dips and spreads</strong> at no charge. Standard vegetable toppings are also free and unlimited. Fresh avocado is an optional paid add-on priced between $1.95 and $2.45. You get real value without paying for every single topping you want to add.
                  </p>
                </div>
              </details>

              <details className="group bg-[#FAFAF8] rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-[#1A1A2E] font-semibold text-[15px] select-none hover:bg-gray-100 transition-colors">
                  <span>Which CAVA bowl has the highest protein and lowest calories?</span>
                  <span className="ml-4 flex-shrink-0 text-[#0A6847] text-xs font-bold group-open:rotate-180 transition-transform duration-200">▼</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-[#4B5563] leading-relaxed text-sm">
                    The <strong>Greek Salad Bowl</strong> offers 37 grams of protein for only 580 calories. A custom bowl using SuperGreens, double grilled chicken, and tzatziki can go above 55 grams of protein. Use our <Link href="/calculator" className="text-[#0A6847] font-semibold hover:underline">Nutrition Calculator</Link> to build your ideal high-protein bowl easily.
                  </p>
                </div>
              </details>

              <details className="group bg-[#FAFAF8] rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-[#1A1A2E] font-semibold text-[15px] select-none hover:bg-gray-100 transition-colors">
                  <span>Is the CAVA menu good for weight loss?</span>
                  <span className="ml-4 flex-shrink-0 text-[#0A6847] text-xs font-bold group-open:rotate-180 transition-transform duration-200">▼</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-[#4B5563] leading-relaxed text-sm">
                    Yes, CAVA is one of the best fast-casual options for weight loss. A greens base with lean protein and a light dressing stays under 450 calories. The cava menu and prices make it easy to eat healthy without spending too much. Tracking macros is simple with full nutrition data available on every single item.
                  </p>
                </div>
              </details>

              <details className="group bg-[#FAFAF8] rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-[#1A1A2E] font-semibold text-[15px] select-none hover:bg-gray-100 transition-colors">
                  <span>Does CAVA have vegetarian and vegan options?</span>
                  <span className="ml-4 flex-shrink-0 text-[#0A6847] text-xs font-bold group-open:rotate-180 transition-transform duration-200">▼</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-[#4B5563] leading-relaxed text-sm">
                    Yes, CAVA offers several vegetarian and vegan-friendly items. Crispy Falafel, Roasted Vegetables, and most toppings are fully plant-based. Many dips like Hummus and Harissa are also vegan. The CAVA menu is very flexible for people who want to avoid animal products in their daily diet.
                  </p>
                </div>
              </details>

              <details className="group bg-[#FAFAF8] rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-[#1A1A2E] font-semibold text-[15px] select-none hover:bg-gray-100 transition-colors">
                  <span>Can I calculate exact calories before ordering at CAVA?</span>
                  <span className="ml-4 flex-shrink-0 text-[#0A6847] text-xs font-bold group-open:rotate-180 transition-transform duration-200">▼</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-[#4B5563] leading-relaxed text-sm">
                    Yes, use our free <Link href="/calculator" className="text-[#0A6847] font-semibold hover:underline">CAVA Nutrition Calculator</Link> to do exactly that. Select your base, protein, dips, and dressings. See instant totals for calories, protein, carbs, fat, and sodium. It is the easiest way to plan a healthy CAVA meal before you even walk in.
                  </p>
                </div>
              </details>

            </div>
          </section>

        </div>
      </article>

    </main>
  );
}
