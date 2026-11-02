import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'CAVA Gluten Free Menu 2026 | Best Food Options',
  description:
    'Explore the CAVA Gluten Free Menu with bowls, proteins, bases, toppings, and dressings. Discover gluten free options and build your favourite meal.',
  alternates: {
    canonical: '/gluten-free',
  },
  keywords: [
    'cava gluten free menu',
    'cava gluten free',
    'gluten free cava',
    'cava gluten free options',
    'cava gluten free menu with prices',
    'cava gluten free menu 2026',
    'cava gluten free bowls',
  ],
  openGraph: {
    title: 'CAVA Gluten Free Menu 2026 | Best Food Options',
    description:
      'Explore the CAVA Gluten Free Menu with bowls, proteins, bases, toppings, and dressings. Discover gluten free options and build your favourite meal.',
    url: 'https://cavamenue.us/gluten-free',
    images: [
      {
        url: '/images/Cava Gluten Free Menu USA.webp',
        width: 1672,
        height: 941,
        alt: 'CAVA Gluten Free Menu 2026 | Best Food Options',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CAVA Gluten Free Menu 2026 | Best Food Options',
    description:
      'Explore the CAVA Gluten Free Menu with bowls, proteins, bases, toppings, and dressings. Discover gluten free options and build your favourite meal.',
    images: ['/images/Cava Gluten Free Menu USA.webp'],
  },
};

const bases = [
  { name: 'Brown Rice', notes: 'Whole grain brown rice prepared with olive oil and spices' },
  { name: 'Saffron Basmati Rice', notes: 'Fragrant basmati rice infused with aromatic saffron' },
  { name: 'Black Lentils', notes: 'Tender black beluga lentils rich in dietary fiber' },
  { name: 'RightRice', notes: 'High protein grain blend crafted from lentils, chickpeas, and peas' },
  { name: 'SuperGreens', notes: 'Nutrient-dense mix of shredded cabbage, kale, and chicory' },
  { name: 'Arugula', notes: 'Peppery wild baby arugula greens' },
  { name: 'Baby Spinach', notes: 'Tender leafy green spinach leaves' },
  { name: 'Romaine', notes: 'Chopped crunchy romaine lettuce hearts' },
];

const proteins = [
  { name: 'Grilled Chicken', notes: 'Marinated and chargrilled fresh white meat chicken' },
  { name: 'Harissa Honey Chicken', notes: 'Grilled chicken tossed with spicy honey' },
  { name: 'Braised Lamb', notes: 'Slow-cooked tender shredded lamb with Mediterranean spices' },
  { name: 'Grilled Steak', notes: 'Marinated tender beef steak grilled to order' },
  { name: 'Roasted Vegetables', notes: 'Oven-roasted seasonal garden vegetables' },
  { name: 'Roasted White Sweet Potato', notes: 'Caramelized sweet potatoes roasted with olive oil' },
  { name: 'Glazed Salmon', notes: 'Baked salmon fillet lightly glazed with savory herbs' },
];

const dips = [
  { name: 'Hummus', notes: 'Pureed chickpeas with tahini, garlic, and lemon juice' },
  { name: 'Red Pepper Hummus', notes: 'Classic hummus blended with roasted sweet red bell peppers' },
  { name: 'Harissa', notes: 'North African chili paste with garlic and spices' },
  { name: 'Roasted Eggplant Dip', notes: 'Smoky roasted eggplant puree with garlic and herbs' },
  { name: 'Tzatziki', notes: 'Greek yogurt blended with grated cucumber and dill' },
  { name: 'Crazy Feta', notes: 'Whipped feta cheese infused with jalapeno peppers and olive oil' },
];

const toppings = [
  { name: 'Shredded Romaine', notes: 'Crisp shredded salad greens' },
  { name: 'Sumac Slaw', notes: 'Crunchy cabbage slaw tossed with tangy sumac' },
  { name: 'Tomato + Onion', notes: 'Diced ripe tomatoes with sweet onions' },
  { name: 'Persian Cucumber', notes: 'Sliced seedless Persian cucumber rounds' },
  { name: 'Tomato + Cucumber', notes: 'Diced Mediterranean garden salad mix' },
  { name: 'Kalamata Olives', notes: 'Naturally cured pitted purple Greek olives' },
  { name: 'Fiery Broccoli', notes: 'Charred fresh broccoli florets with chili spice' },
  { name: 'Pickled Onions', notes: 'Quick-pickled crimson red onion slices' },
  { name: 'Salt-Brined Pickles', notes: 'Crisp sour cucumber pickle chips' },
  { name: 'Crumbled Feta', notes: 'Crumbled Mediterranean sheep and goat cheese' },
  { name: 'Fire-Roasted Corn', notes: 'Charred sweet corn kernels with peppers and lime' },
  { name: 'Avocado', notes: 'Fresh Hass avocado prepared daily' },
];

const dressings = [
  { name: 'Garlic Dressing', notes: 'Roasted garlic emulsified vinaigrette' },
  { name: 'Greek Vinaigrette', notes: 'Extra virgin olive oil, red vinegar, and oregano' },
  { name: 'Lemon Herb Tahini', notes: 'Ground sesame seed paste balanced with tart lemon' },
  { name: 'Hot Harissa Vinaigrette', notes: 'Salad vinaigrette with spicy harissa pepper' },
  { name: 'Skhug', notes: 'Yemeni herbal condiment with hot chilies and cilantro' },
  { name: 'Balsamic Date Vinaigrette', notes: 'Aged balsamic vinegar paired with date puree' },
  { name: 'Yogurt Dill', notes: 'Greek yogurt sauce scented with fresh dill' },
  { name: 'Tahini Caesar', notes: 'Plant-based Caesar alternative prepared with pure tahini' },
];

const unsafeItems = [
  { item: 'Pita Bread (Sprouted Pita)', reason: 'Contains wheat flour' },
  { item: 'Falafel', reason: 'Contains wheat as a binding ingredient' },
  { item: 'Spicy Lamb Meatballs', reason: 'Contains wheat breadcrumbs' },
  { item: 'Pita Chips', reason: 'Made directly from wheat pita' },
  { item: 'Pita Crisps', reason: 'Made directly from wheat pita' },
  { item: 'Greyston Blondie & Brownie', reason: 'Baked with traditional wheat flour' },
];

const faqs = [
  {
    question: 'Does CAVA have a gluten free menu?',
    answer:
      'CAVA does not offer a separate gluten free menu, but many standard ingredients are naturally gluten free. Guests can build a safe bowl using rice, proteins, and fresh toppings while avoiding pita bread and other wheat based items on the regular menu.',
  },
  {
    question: 'Are CAVA bowls gluten free?',
    answer:
      'Most CAVA bowls can be made gluten free depending on the ingredients chosen. Selecting rice or greens instead of pita keeps the bowl safe. Checking specific proteins and dressings also helps confirm the entire bowl stays free from gluten.',
  },
  {
    question: 'Is CAVA grilled chicken gluten free?',
    answer:
      'Yes, CAVA grilled chicken is generally considered gluten free based on standard ingredient information. However, preparation methods can introduce cross contact risks. Guests with severe sensitivities should confirm current details with staff before ordering grilled chicken at their location.',
  },
  {
    question: 'Is CAVA falafel gluten free?',
    answer:
      'CAVA falafel is typically gluten free, though recipes can vary slightly by location. Checking the allergen guide or asking staff directly helps confirm current ingredients. This extra step ensures your falafel order fits safely within your dietary requirements.',
  },
  {
    question: 'Are CAVA dressings gluten free?',
    answer:
      'Many CAVA dressings are gluten free, though some may contain trace ingredients depending on recipe updates. Reviewing the allergen guide before ordering helps you choose safely. Staff can also confirm current dressing ingredients if you have specific concerns.',
  },
  {
    question: 'Does CAVA have gluten free pita?',
    answer:
      'No, CAVA does not currently offer a gluten free pita option. Guests avoiding gluten should choose rice or greens instead as their base. This swap still delivers a filling, flavorful meal without the gluten found in traditional pita bread.',
  },
  {
    question: 'Can people with celiac disease eat at CAVA?',
    answer:
      'People with celiac disease can eat at CAVA with caution, since cross contact remains possible in the open kitchen. Choosing gluten free ingredients and speaking with staff about preparation helps reduce risk, though zero contamination cannot be fully guaranteed.',
  },
];

export default function GlutenFreePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Gluten Free Menu', item: '/gluten-free' },
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

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-100 py-3 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-[#0A6847] transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-[#0A6847] font-medium">Gluten Free Menu</li>
          </ol>
        </div>
      </nav>

      {/* ════════════════════ HERO SECTION ════════════════════ */}
      <section className="py-[10px] bg-gradient-to-b from-[#FAFAF8] via-white to-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[35px] font-black text-[#1A1A2E] leading-tight tracking-tight mb-4">
                CAVA Gluten Free Menu With Prices <span className="text-[#0A6847]">2026</span>
              </h1>
              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-4">
                Eating gluten free does not mean missing out on fresh, flavorful food. CAVA makes it simple for guests to build a safe and satisfying meal using naturally gluten free ingredients. If you are searching for the CAVA gluten free menu, this guide breaks down every option clearly.
              </p>
              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6">
                Before diving into gluten free choices, it helps to understand the full{' '}
                <Link href="/" className="text-[#0A6847] font-semibold underline underline-offset-2 hover:text-[#085238]">
                  Cava Menu With Prices
                </Link>{' '}
                so you know what else is available. You can also check{' '}
                <Link href="/locations" className="text-[#0A6847] font-semibold underline underline-offset-2 hover:text-[#085238]">
                  Cava Locations
                </Link>{' '}
                to find a nearby restaurant. CAVA gluten free options include bowls, proteins, and toppings that fit most dietary needs easily.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="#safe-items"
                  className="px-8 py-3.5 rounded-full bg-[#0A6847] text-white font-bold text-sm sm:text-base hover:bg-[#085238] transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
                >
                  <span>Explore Safe Items</span>
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
                  src="/images/Cava Gluten Free Menu.webp"
                  alt="CAVA Gluten Free Menu 2026 | Best Food Options"
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

      {/* ════════════════════ SAFE ITEMS & TABLES ════════════════════ */}
      <div id="safe-items" className="max-w-5xl mx-auto px-4 sm:px-6 py-[10px] space-y-[10px] scroll-mt-6">

        {/* 1. Bases */}
        <section className="space-y-[10px]">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E]">
              Gluten-Free Bases
            </h2>
            <span className="text-xs font-semibold text-[#0A6847] uppercase tracking-wider">
              8 Options
            </span>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-600 uppercase">
                  <th className="py-3 px-4 sm:px-6">Base</th>
                  <th className="py-3 px-4 sm:px-6">Details</th>
                  <th className="py-3 px-4 sm:px-6 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {bases.map((item) => (
                  <tr key={item.name} className="hover:bg-gray-50/50">
                    <td className="py-3 px-4 sm:px-6 font-medium text-[#1A1A2E]">
                      {item.name}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-gray-500 text-xs sm:text-sm">
                      {item.notes}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-right">
                      <span className="text-xs font-semibold text-[#0A6847] bg-emerald-50 px-2.5 py-1 rounded">
                        Safe
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 2. Proteins */}
        <section className="space-y-[10px]">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E]">
              Gluten-Free Proteins
            </h2>
            <span className="text-xs font-semibold text-[#0A6847] uppercase tracking-wider">
              7 Options
            </span>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-600 uppercase">
                  <th className="py-3 px-4 sm:px-6">Protein</th>
                  <th className="py-3 px-4 sm:px-6">Details</th>
                  <th className="py-3 px-4 sm:px-6 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {proteins.map((item) => (
                  <tr key={item.name} className="hover:bg-gray-50/50">
                    <td className="py-3 px-4 sm:px-6 font-medium text-[#1A1A2E]">
                      {item.name}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-gray-500 text-xs sm:text-sm">
                      {item.notes}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-right">
                      <span className="text-xs font-semibold text-[#0A6847] bg-emerald-50 px-2.5 py-1 rounded">
                        Safe
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Dips & Spreads */}
        <section className="space-y-[10px]">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E]">
              Gluten-Free Dips &amp; Spreads
            </h2>
            <span className="text-xs font-semibold text-[#0A6847] uppercase tracking-wider">
              6 Options
            </span>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-600 uppercase">
                  <th className="py-3 px-4 sm:px-6">Dip / Spread</th>
                  <th className="py-3 px-4 sm:px-6">Details</th>
                  <th className="py-3 px-4 sm:px-6 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {dips.map((item) => (
                  <tr key={item.name} className="hover:bg-gray-50/50">
                    <td className="py-3 px-4 sm:px-6 font-medium text-[#1A1A2E]">
                      {item.name}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-gray-500 text-xs sm:text-sm">
                      {item.notes}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-right">
                      <span className="text-xs font-semibold text-[#0A6847] bg-emerald-50 px-2.5 py-1 rounded">
                        Safe
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Toppings */}
        <section className="space-y-[10px]">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E]">
              Gluten-Free Toppings
            </h2>
            <span className="text-xs font-semibold text-[#0A6847] uppercase tracking-wider">
              12 Options
            </span>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-600 uppercase">
                  <th className="py-3 px-4 sm:px-6">Topping</th>
                  <th className="py-3 px-4 sm:px-6">Details</th>
                  <th className="py-3 px-4 sm:px-6 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {toppings.map((item) => (
                  <tr key={item.name} className="hover:bg-gray-50/50">
                    <td className="py-3 px-4 sm:px-6 font-medium text-[#1A1A2E]">
                      {item.name}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-gray-500 text-xs sm:text-sm">
                      {item.notes}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-right">
                      <span className="text-xs font-semibold text-[#0A6847] bg-emerald-50 px-2.5 py-1 rounded">
                        Safe
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Dressings */}
        <section className="space-y-[10px]">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E]">
              Gluten-Free Dressings
            </h2>
            <span className="text-xs font-semibold text-[#0A6847] uppercase tracking-wider">
              8 Options
            </span>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-600 uppercase">
                  <th className="py-3 px-4 sm:px-6">Dressing</th>
                  <th className="py-3 px-4 sm:px-6">Details</th>
                  <th className="py-3 px-4 sm:px-6 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {dressings.map((item) => (
                  <tr key={item.name} className="hover:bg-gray-50/50">
                    <td className="py-3 px-4 sm:px-6 font-medium text-[#1A1A2E]">
                      {item.name}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-gray-500 text-xs sm:text-sm">
                      {item.notes}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-right">
                      <span className="text-xs font-semibold text-[#0A6847] bg-emerald-50 px-2.5 py-1 rounded">
                        Safe
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. Unsafe Items */}
        <section className="space-y-[10px]">
          <div className="flex items-baseline justify-between border-b border-red-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E]">
              Items Containing Gluten (Avoid)
            </h2>
            <span className="text-xs font-semibold text-red-700 uppercase tracking-wider">
              Unsafe Items
            </span>
          </div>

          <div className="border border-red-200 rounded-lg overflow-hidden">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-red-50/60 border-b border-red-200 text-xs font-semibold text-red-900 uppercase">
                  <th className="py-3 px-4 sm:px-6">Item</th>
                  <th className="py-3 px-4 sm:px-6">Reason</th>
                  <th className="py-3 px-4 sm:px-6 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-red-100">
                {unsafeItems.map((item) => (
                  <tr key={item.item} className="hover:bg-red-50/30">
                    <td className="py-3 px-4 sm:px-6 font-medium text-[#1A1A2E]">
                      {item.item}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-gray-600 text-xs sm:text-sm">
                      {item.reason}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-right">
                      <span className="text-xs font-semibold text-red-700 bg-red-50 px-2.5 py-1 rounded border border-red-200">
                        Contains Gluten
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Advisory Box */}
        <section className="border border-amber-200 bg-amber-50/40 rounded-xl p-6 sm:p-7 space-y-[10px]">
          <h3 className="text-lg font-bold text-amber-950">
            Cross-Contamination Advisory
          </h3>
          <p className="text-sm sm:text-base text-amber-950 leading-relaxed">
            CAVA operates a shared kitchen and is not certified gluten-free. Fresh pita bread is warmed and prepped near the assembly line. Guests with celiac disease or severe wheat allergies should inform the team before ordering.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-amber-900">
            <li>Notify staff of your allergy so they change gloves and wipe prep surfaces.</li>
            <li>Request clean serving utensils pulled from fresh bins.</li>
            <li>Avoid items positioned immediately adjacent to the warm pita station.</li>
            <li>Always confirm ingredient sources with your local store manager.</li>
          </ul>
        </section>
      </div>

      {/* ════════════════════ SEO ARTICLE CONTENT ════════════════════ */}
      <article className="bg-white py-[10px] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-[10px]">

          {/* CAVA Gluten Free Menu Items and Options */}
          <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-3">
              CAVA Gluten Free Menu Items and Options
            </h2>
            <p className="text-[#4B5563] leading-relaxed text-[15px]">
              CAVA offers several gluten free items across its menu, mainly through customizable bowls. Guests can mix and match bases, proteins, and toppings without worrying about hidden gluten. Most ingredients are naturally free from wheat, making it easy to build a filling meal with confidence.
            </p>
          </section>

          {/* Featured Image */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gray-100">
            <Image
              src="/images/Cava Gluten Free Menu USA.webp"
              alt="CAVA Gluten Free Menu 2026 | Best Food Options"
              width={1672}
              height={941}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Best CAVA Gluten Free Bowls to Try */}
          <section className="bg-[#FAFAF8] border-l-4 border-[#0A6847] rounded-r-2xl p-6 sm:p-7">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-3">
              Best CAVA Gluten Free Bowls to Try
            </h2>
            <p className="text-[#4B5563] leading-relaxed text-[15px]">
              Some of the best gluten free bowls at CAVA combine grilled chicken, rice, and fresh vegetables. Adding hummus or tzatziki brings extra flavor without added gluten. These bowls stay filling and balanced, making them a popular choice among regular CAVA customers who avoid gluten.
            </p>
          </section>

          {/* Gluten Free Category Highlights */}
          <section className="space-y-[10px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* CAVA Gluten Free Bases and Greens */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs hover:border-[#0A6847]/40 transition-colors">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] mb-3">
                  CAVA Gluten Free Bases and Greens
                </h2>
                <p className="text-[#4B5563] leading-relaxed text-[15px]">
                  CAVA offers several gluten free bases, including white rice, brown rice, and mixed greens. These bases form the foundation of most bowls and salads. Choosing a base without pita or grain blends containing wheat keeps your meal safely within gluten free guidelines every single time.
                </p>
              </div>

              {/* CAVA Gluten Free Protein Options */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs hover:border-[#0A6847]/40 transition-colors">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] mb-3">
                  CAVA Gluten Free Protein Options
                </h2>
                <p className="text-[#4B5563] leading-relaxed text-[15px]">
                  Protein choices at CAVA are largely gluten free, including grilled chicken, steak, and falafel in most cases. These proteins pair well with any base or topping combination. Always double check current ingredient details since recipes can shift slightly between locations and menu updates.
                </p>
              </div>

              {/* CAVA Gluten Free Dips and Spreads */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs hover:border-[#0A6847]/40 transition-colors">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] mb-3">
                  CAVA Gluten Free Dips and Spreads
                </h2>
                <p className="text-[#4B5563] leading-relaxed text-[15px]">
                  CAVA offers flavorful dips like hummus, tzatziki, and harissa that are typically gluten free. These spreads add moisture and bold flavor to any bowl. Since recipes can change, checking the latest allergen guide before ordering helps ensure your meal stays completely gluten free.
                </p>
              </div>

              {/* CAVA Gluten Free Toppings and Dressings */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs hover:border-[#0A6847]/40 transition-colors">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] mb-3">
                  CAVA Gluten Free Toppings and Dressings
                </h2>
                <p className="text-[#4B5563] leading-relaxed text-[15px]">
                  Toppings such as cucumbers, tomatoes, onions, and olives are naturally gluten free at CAVA. Most dressings also avoid gluten, though cross contact remains possible during preparation. Guests with strict dietary needs should always confirm ingredient details directly with staff before placing their order.
                </p>
              </div>

            </div>
          </section>

          {/* Build Your Own Gluten Free Bowl at CAVA */}
          <section className="bg-gradient-to-br from-[#f8fdf9] to-[#f0faf4] border border-[#0A6847]/20 rounded-2xl p-6 sm:p-8 space-y-5">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-2">
                Build Your Own Gluten Free Bowl at CAVA
              </h2>
              <p className="text-[#4B5563] leading-relaxed text-[15px]">
                Building a gluten free bowl at CAVA is simple once you understand the basics. Start with a safe base, add a protein, then finish with fresh toppings and dressing. This step by step approach keeps your meal both satisfying and safely gluten free from start to finish.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 bg-white/80 backdrop-blur-xs border border-[#0A6847]/15 rounded-xl p-4 sm:p-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0A6847] text-white text-sm font-bold flex items-center justify-center mt-0.5 shadow-xs">
                  1
                </span>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    Choose a Gluten Free Base
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed">
                    Start your bowl with rice or greens instead of pita bread, which contains gluten. Rice and leafy greens provide a solid, filling foundation. This simple swap keeps your entire meal gluten free while still delivering the same fresh CAVA flavor you already enjoy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/80 backdrop-blur-xs border border-[#0A6847]/15 rounded-xl p-4 sm:p-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0A6847] text-white text-sm font-bold flex items-center justify-center mt-0.5 shadow-xs">
                  2
                </span>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    Add Your Favourite Protein
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed">
                    Next, choose a protein like grilled chicken, steak, or falafel to build flavor and substance. Most proteins at CAVA avoid gluten naturally. Picking a protein you enjoy makes the bowl more satisfying while keeping your meal within safe gluten free boundaries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/80 backdrop-blur-xs border border-[#0A6847]/15 rounded-xl p-4 sm:p-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0A6847] text-white text-sm font-bold flex items-center justify-center mt-0.5 shadow-xs">
                  3
                </span>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    Pick Fresh Toppings and Dressings
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed">
                    Finish your bowl with fresh vegetables, pickled toppings, and a gluten free dressing of your choice. These final touches add crunch, acidity, and bold flavor. Confirming dressing ingredients with staff ensures your finished bowl stays completely safe for gluten free diets.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CAVA Menu Items That Contain Gluten */}
          <section className="bg-red-50/50 border border-red-200/80 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-950 mb-3">
              CAVA Menu Items That Contain Gluten
            </h2>
            <p className="text-red-900 leading-relaxed text-[15px]">
              Not everything at CAVA is gluten free, so awareness matters. Pita bread, pita chips, and certain sauces may contain wheat based ingredients. Checking the allergen guide before ordering helps you avoid these items and build a bowl that fits your dietary requirements safely.
            </p>
          </section>

          {/* Celiac & Cross Contact */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-amber-50/50 border border-amber-200 rounded-2xl p-6 sm:p-7">
              <h2 className="text-xl sm:text-2xl font-bold text-amber-950 mb-3">
                Is CAVA Safe for People With Celiac Disease?
              </h2>
              <p className="text-amber-900 leading-relaxed text-[15px]">
                CAVA offers many gluten free ingredients, but it is not a dedicated gluten free kitchen. People with celiac disease should still exercise caution due to possible cross contact. Speaking with staff about preparation methods helps reduce risk before placing any order at the restaurant.
              </p>
            </div>

            <div className="bg-amber-50/50 border border-amber-200 rounded-2xl p-6 sm:p-7">
              <h2 className="text-xl sm:text-2xl font-bold text-amber-950 mb-3">
                Gluten Cross Contact Risks at CAVA
              </h2>
              <p className="text-amber-900 leading-relaxed text-[15px]">
                Since CAVA prepares food in an open kitchen, cross contact between gluten and gluten free ingredients is possible. Shared utensils and surfaces increase this risk slightly. Guests with severe sensitivities should ask staff about preparation steps to better understand their personal risk level.
              </p>
            </div>
          </section>

          {/* How to Order Gluten Free Food at CAVA */}
          <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-3">
              How to Order Gluten Free Food at CAVA
            </h2>
            <p className="text-[#4B5563] leading-relaxed text-[15px]">
              Ordering gluten free at CAVA starts with choosing a bowl instead of a pita wrap. Select a safe base, protein, and toppings while avoiding items known to contain gluten. Asking staff questions about preparation can also help you order with greater confidence and peace of mind.
            </p>
          </section>

          {/* Nutrition & Allergen Guides */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs hover:border-[#0A6847]/40 transition-colors">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] mb-3">
                CAVA Gluten Free Menu Nutrition and Calories
              </h2>
              <p className="text-[#4B5563] leading-relaxed text-[15px]">
                Nutrition varies depending on which gluten free ingredients you choose at CAVA. Bowls built with lean protein and vegetables tend to stay lower in calories. Checking the official nutrition calculator helps you track calories, protein, and other details for your specific meal combination.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs hover:border-[#0A6847]/40 transition-colors">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] mb-3">
                CAVA Gluten Free Menu Allergen Guide
              </h2>
              <p className="text-[#4B5563] leading-relaxed text-[15px]">
                CAVA provides an allergen guide that lists gluten content for most menu items. This resource helps guests quickly identify which proteins, bases, and toppings are safe. Reviewing this guide before ordering remains one of the easiest ways to avoid accidental gluten exposure.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-gradient-to-r from-[#0A6847] to-[#065F46] rounded-2xl p-6 sm:p-8 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
              Conclusion
            </h2>
            <p className="text-white/90 leading-relaxed text-[15px]">
              CAVA makes gluten free eating simple through customizable bowls built with safe bases, proteins, and toppings. While cross contact risks exist, careful ordering and clear communication with staff help guests enjoy a satisfying meal. Checking the allergen guide regularly ensures every CAVA visit stays both flavorful and safely gluten free.
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

        </div>
      </article>

      {/* ════════════════════ BOTTOM CTA SECTION ════════════════════ */}
      <section className="py-[10px] bg-gradient-to-br from-[#0A6847] via-[#085a3d] to-[#064e34] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-2 text-white">
            Ready to Build Your Gluten-Free Meal?
          </h2>
          <p className="text-emerald-100 text-sm sm:text-base max-w-xl mx-auto mb-[10px] leading-relaxed">
            Check full menu prices and calculate exact calories, protein, and macros for your custom CAVA bowl.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#menu"
              className="px-8 py-3.5 rounded-full bg-white text-[#0A6847] font-bold text-sm sm:text-base hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
            >
              <span>Explore Full Menu</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/calculator"
              className="px-8 py-3.5 rounded-full bg-[#085238] border-2 border-emerald-400/40 text-white font-bold text-sm sm:text-base hover:bg-[#06422d] transition-all inline-flex items-center gap-2 shadow-xs"
            >
              <span>Nutrition Calculator</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
