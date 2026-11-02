import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cava Nutrition Calculator 2026 | Calories & Macros',
  description: 'Calculate CAVA calories, protein, carbs, fat, and sodium for every bowl, pita, and salad. Free live nutrition calculator with full official CAVA data.',
  alternates: {
    canonical: '/calculator',
  },
  openGraph: {
    title: 'Cava Nutrition Calculator 2026 | Calories & Macros',
    description: 'Calculate CAVA calories, protein, carbs, fat, and sodium for every bowl, pita, and salad. Free live nutrition calculator with full official CAVA data.',
    url: 'https://cavamenue.us/calculator',
    images: [
      {
        url: '/images/Cava Nutrition Calculator.webp',
        width: 1200,
        height: 630,
        alt: 'CAVA Nutrition Calculator 2026',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cava Nutrition Calculator 2026 | Calories & Macros',
    description: 'Calculate CAVA calories, protein, carbs, fat, and sodium for every bowl, pita, and salad.',
    images: ['/images/Cava Nutrition Calculator.webp'],
  },
};

import Image from 'next/image';
import Link from 'next/link';
import Calculator from '@/components/Calculator';

export default function CalculatorPage() {
  return (
    <main className="min-h-screen font-sans text-[#1A1A2E]">

      {/* HERO SECTION */}
      <section className="py-[10px] bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[35px] font-bold text-[#1A1A2E] leading-tight tracking-tight mb-4">
                Cava Nutrition Calculator 2026
              </h1>

              <p className="text-lg text-[#4B5563] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                You enjoy CAVA but have no idea how many calories are in your bowl. That is the exact problem this calculator was built to solve. Pick every ingredient you plan to order. See the full calorie, protein, carb, fat, and sodium breakdown right away. No guessing, no surprises. Just clear numbers to help you order smarter.
              </p>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end w-full max-w-xl">
              <Image
                src="/images/Cava Nutrition Calculator.webp"
                alt="Cava Nutrition Calculator – Mediterranean bowl with grilled chicken, hummus, and fresh vegetables"
                width={1704}
                height={923}
                priority
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section id="calculator" className="bg-[#F8FAFB] min-h-screen py-[10px] scroll-mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Calculator />
        </div>
      </section>

      {/* ARTICLE SECTIONS */}
      <article className="bg-white py-[10px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-[10px]">

          {/* Overview Of Cava Calorie Calculator */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-[10px] text-center">
              Overview Of Cava Calorie Calculator
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 border-l-4 border-[#0A6847] rounded-r-lg p-5">
                <p className="text-[#4B5563] leading-relaxed text-[15px]">
                  The Cava Calorie Calculator lets you build your bowl item by item and see the full nutrition breakdown in real time. You pick your base, protein, dips, toppings, and dressing. The tool adds up calories, protein, carbs, fat, and sodium for every item. All numbers update live without any delay.
                </p>
              </div>
              <div className="bg-gray-50 border-l-4 border-[#10B981] rounded-r-lg p-5">
                <p className="text-[#4B5563] leading-relaxed text-[15px]">
                  This tool is built for anyone who wants full transparency about what they eat. It covers the complete <Link href="/#menu" className="text-[#0A6847] font-semibold underline underline-offset-2 hover:text-[#10B981] transition-colors">Cava Menu</Link>, from greens and grains to spreads and sauces. There is no guessing or vague estimating involved. Every number comes from official CAVA nutrition data so your totals stay accurate and clear.
                </p>
              </div>
            </div>
          </section>

          {/* How to Use Our Cava Calculator 2026 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-[10px] text-center">
              How to Use Our Cava Calculator 2026
            </h2>
            <div className="bg-gradient-to-br from-[#f8fdf9] to-[#f0faf4] border border-[#0A6847]/10 rounded-xl p-5 sm:p-6">
              <ol className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#0A6847] text-white text-xs font-bold flex items-center justify-center mt-0.5">1</span>
                  <p className="text-[#4B5563] text-[15px] leading-relaxed">Choose your base such as greens, grains, or pita from the menu panel on the left side.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#0A6847] text-white text-xs font-bold flex items-center justify-center mt-0.5">2</span>
                  <p className="text-[#4B5563] text-[15px] leading-relaxed">Select your protein by clicking any item card. A green checkmark confirms it has been added to your bowl.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#0A6847] text-white text-xs font-bold flex items-center justify-center mt-0.5">3</span>
                  <p className="text-[#4B5563] text-[15px] leading-relaxed">Add dips, toppings, and dressings. Use the category filter buttons to find what you want faster.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#0A6847] text-white text-xs font-bold flex items-center justify-center mt-0.5">4</span>
                  <p className="text-[#4B5563] text-[15px] leading-relaxed">Adjust quantities using the plus and minus buttons on the right-side bowl summary panel.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#0A6847] text-white text-xs font-bold flex items-center justify-center mt-0.5">5</span>
                  <p className="text-[#4B5563] text-[15px] leading-relaxed">Check your live totals for calories, protein, carbs, fat, and sodium as they update in real time.</p>
                </li>
              </ol>
            </div>
          </section>

          {/* What's in Your CAVA Bowl? */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-[10px] text-center">
              What&apos;s in Your CAVA Bowl?
            </h2>
            <p className="text-[#4B5563] leading-relaxed text-[15px] mb-4">
              A CAVA bowl is built in layers. Every layer is your choice, so you control what nutrition you get.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-[#0A6847]/30 transition-colors">
                <h3 className="text-sm font-bold text-[#0A6847] uppercase tracking-wide mb-1.5">Base</h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">SuperGreens, Arugula, Brown Rice, Basmati Rice, or Pita Bread. Your choice sets the calorie range.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-[#0A6847]/30 transition-colors">
                <h3 className="text-sm font-bold text-[#0A6847] uppercase tracking-wide mb-1.5">Protein</h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">Grilled Chicken, Braised Lamb, Falafel, Salmon, or Roasted Vegetables for lean or hearty options.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-[#0A6847]/30 transition-colors">
                <h3 className="text-sm font-bold text-[#0A6847] uppercase tracking-wide mb-1.5">Dips and Spreads</h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">Hummus, Tzatziki, Harissa, Eggplant, or Roasted Red Pepper for rich Mediterranean flavor.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-[#0A6847]/30 transition-colors">
                <h3 className="text-sm font-bold text-[#0A6847] uppercase tracking-wide mb-1.5">Toppings</h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">Fresh tomatoes, cucumbers, cabbage slaw, olives, pickled onions, and more for crunch and nutrients.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-[#0A6847]/30 transition-colors">
                <h3 className="text-sm font-bold text-[#0A6847] uppercase tracking-wide mb-1.5">Dressings</h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">Lemon Herb Tahini, Garlic Dressing, or Yogurt Dill. Each option carries a different calorie level.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-[#0A6847]/30 transition-colors">
                <h3 className="text-sm font-bold text-[#0A6847] uppercase tracking-wide mb-1.5">Extras</h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">Pita Crisps, Feta Cheese, Avocado, or Hot Sauce to finish your bowl and complete the taste.</p>
              </div>
            </div>
          </section>

          {/* Is CAVA a Healthy Meal Choice? */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-[10px] text-center">
              Is CAVA a Healthy Meal Choice?
            </h2>
            <div className="bg-[#f8fdf9] border border-[#0A6847]/10 rounded-xl p-5">
              <p className="text-[#4B5563] leading-relaxed text-[15px]">
                Yes, CAVA is one of the healthiest fast-casual options available today. Its Mediterranean menu is rich in lean protein, fiber, and healthy fats. A well-built bowl with greens, grilled chicken, and tzatziki stays between 350 and 450 calories with over 30 grams of protein. Choosing the right ingredients makes every meal both satisfying and nutritious.
              </p>
            </div>
          </section>

          {/* Is Cava Nutrition Calculator Accurate? */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-[10px] text-center">
              Is Cava Nutrition Calculator Accurate?
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-[#4B5563] leading-relaxed text-[15px]">
                Our calculator uses data from CAVA&apos;s official Nutrition and Allergen Guide, making it reliable for meal planning. The figures reflect standard serving sizes listed by CAVA. Small variations may occur due to handmade portioning at the restaurant. For calorie tracking or macro planning, these numbers give you a consistent and trustworthy baseline to work from.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-[10px] text-center">
              Conclusion
            </h2>
            <div className="bg-gradient-to-r from-[#0A6847] to-[#065F46] rounded-xl p-6">
              <p className="text-white/90 leading-relaxed text-[15px]">
                The Cava Nutrition Calculator removes all guesswork from eating at CAVA. You build your bowl, watch the numbers update live, and choose ingredients that match your health goals. Whether you are cutting calories or hitting a protein target, this tool gives you clear visibility before you order. Start building your bowl today.
              </p>
            </div>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-[10px] text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">

              <details className="group bg-gray-50 rounded-lg border border-gray-200 overflow-hidden" open>
                <summary className="flex items-center justify-between cursor-pointer p-4 sm:p-5 text-[#1A1A2E] font-semibold text-[15px] select-none hover:bg-gray-100 transition-colors">
                  <span>How many calories are in a typical CAVA bowl?</span>
                  <span className="ml-4 flex-shrink-0 text-[#0A6847] text-xs font-bold group-open:rotate-180 transition-transform duration-200">▼</span>
                </summary>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="text-[#4B5563] leading-relaxed text-sm">
                    A typical CAVA bowl ranges from 350 to 800 calories depending on the ingredients you select. A lighter bowl with SuperGreens, grilled chicken, tzatziki, and fresh vegetables sits around 350 to 450 calories. Adding rice, extra dips, and heavier dressings pushes the total toward 700 to 800 calories.
                  </p>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-4 sm:p-5 text-[#1A1A2E] font-semibold text-[15px] select-none hover:bg-gray-100 transition-colors">
                  <span>Which CAVA protein has the most protein per serving?</span>
                  <span className="ml-4 flex-shrink-0 text-[#0A6847] text-xs font-bold group-open:rotate-180 transition-transform duration-200">▼</span>
                </summary>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="text-[#4B5563] leading-relaxed text-sm">
                    Grilled Chicken offers 28 grams of protein per serving with a relatively low calorie count. Braised Lamb follows at around 24 grams per serving. If you want the best protein-to-calorie ratio at CAVA, Grilled Chicken is the most efficient choice on the menu.
                  </p>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-4 sm:p-5 text-[#1A1A2E] font-semibold text-[15px] select-none hover:bg-gray-100 transition-colors">
                  <span>Can I use this calculator for meal prep planning?</span>
                  <span className="ml-4 flex-shrink-0 text-[#0A6847] text-xs font-bold group-open:rotate-180 transition-transform duration-200">▼</span>
                </summary>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="text-[#4B5563] leading-relaxed text-sm">
                    Yes. You can use the Cava Nutrition Calculator to plan your bowl combination before visiting the restaurant. It shows a full macro breakdown so you can meet your daily calorie, protein, carb, and fat targets with precision, making it a helpful tool for serious meal planners.
                  </p>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-4 sm:p-5 text-[#1A1A2E] font-semibold text-[15px] select-none hover:bg-gray-100 transition-colors">
                  <span>Is CAVA food good for weight loss?</span>
                  <span className="ml-4 flex-shrink-0 text-[#0A6847] text-xs font-bold group-open:rotate-180 transition-transform duration-200">▼</span>
                </summary>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="text-[#4B5563] leading-relaxed text-sm">
                    CAVA can support weight loss when you make smart ingredient choices. A greens base, lean protein like grilled chicken, and a lighter dressing keeps the meal low in calories and high in nutrients. The Cava Nutrition Calculator helps you find the right combination that fits within your calorie budget.
                  </p>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-4 sm:p-5 text-[#1A1A2E] font-semibold text-[15px] select-none hover:bg-gray-100 transition-colors">
                  <span>Is this calculator officially affiliated with CAVA restaurant?</span>
                  <span className="ml-4 flex-shrink-0 text-[#0A6847] text-xs font-bold group-open:rotate-180 transition-transform duration-200">▼</span>
                </summary>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="text-[#4B5563] leading-relaxed text-sm">
                    No, this is an independent tool and is not affiliated with CAVA restaurant or its parent company. All nutrition data is sourced from CAVA&apos;s publicly available Nutrition and Allergen Guide. For the most current nutritional information, you can visit the official CAVA website at cava.com.
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
