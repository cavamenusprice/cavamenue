import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About CAVA Menu & Prices | Your Complete CAVA Guide",
  description:
    "Discover CAVA Menu & Prices — an independent guide providing verified CAVA menu prices, calorie counts, healthy bowl options, and a nutrition calculator.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About CAVA Menu & Prices | Your Complete CAVA Guide",
    description:
      "Discover CAVA Menu & Prices — an independent guide providing verified CAVA menu prices, calorie counts, healthy bowl options, and a nutrition calculator.",
    url: "https://cavamenue.us/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About CAVA Menu & Prices | Your Complete CAVA Guide",
    description:
      "Discover CAVA Menu & Prices — an independent guide providing verified CAVA menu prices, calorie counts, healthy bowl options, and a nutrition calculator.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cavamenue.us" },
    { "@type": "ListItem", position: 2, name: "About CAVA Menu & Prices", item: "https://cavamenue.us/about" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0A6847] to-[#065f3c] text-white py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-emerald-200 text-sm">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-emerald-400">›</li>
                <li className="text-white font-medium">About CAVA Menu & Prices</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight leading-tight">
              About CAVA Menu & Prices
            </h1>
            <p className="text-emerald-100 max-w-2xl leading-relaxed text-base sm:text-lg">
              Your trusted independent guide to CAVA menu prices, calories, and Mediterranean meals.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">What Is CAVA Menu Guide?</h2>
              <p className="text-gray-600 leading-relaxed">
                CAVA Menu Guide offers complete pricing information across all tasty Mediterranean selections.
                We track delicious grain bowls, fresh pita wraps, and healthy green salads.
                Diners can discover updated item prices before placing their next restaurant order.
                Our detailed guide helps everyone choose satisfying meals that match personal budgets.
                We maintain clear lists covering every seasonal recipe across nationwide CAVA locations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Our Core Mission and Purpose</h2>
              <p className="text-gray-600 leading-relaxed">
                We aim to deliver transparent price details for every hungry Mediterranean diner.
                Ordering fast food becomes easier when customers know the exact price structure.
                We assemble official menu prices to eliminate guessing during busy store visits.
                Every visitor can quickly evaluate portion values before visiting their local restaurant.
                Our platform simplifies healthy eating choices with clear tables and trustworthy figures.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Complete CAVA Menu and Pricing</h2>
              <p className="text-gray-600 leading-relaxed">
                Our comprehensive menu catalog lists all flavorful Mediterranean dishes offered by CAVA.
                You will discover current prices for specialty bowls, pitas, and kid meals.
                We also monitor changing prices for flavorful braised lamb and grilled chicken.
                Customers can browse custom toppings, dressings, savory dips, and warm side pita.
                Each menu item features recent pricing data collected from standard restaurant registers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Nutrition Facts and Calorie Counts</h2>
              <p className="text-gray-600 leading-relaxed">
                In addition to clear prices, we publish verified nutritional facts for items.
                You can track vital macros including protein, carbohydrates, fats, and sodium levels.
                Healthy dining requires accurate calorie information to help you meet dietary goals.
                We display nutritional statistics for popular dressings, roasted meats, and leafy greens.
                Our structured nutritional tables allow guests to calculate daily intake very effortlessly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Interactive Custom Meal Calculator</h2>
              <p className="text-gray-600 leading-relaxed">
                Our built-in digital calculator lets you assemble custom Mediterranean bowls with ease.
                Select your preferred base greens, delicious grains, savory dips, and protein choices.
                The smart tool automatically sums total calories and macronutrients in real time.
                Fitness enthusiasts use our interactive planner to optimize their daily meal plans.
                Planning nutritious meals before visiting CAVA has never been faster or simpler.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">How We Gather Menu Data</h2>
              <p className="text-gray-600 leading-relaxed">
                We collect menu pricing directly from publicly available restaurant boards and receipts.
                Our research team routinely audits local branches to identify recent pricing adjustments.
                We cross-reference nutritional values with officially published dietary disclosures from food providers.
                Regular data updates ensure our readers receive reliable figures on every visit.
                We promptly revise published figures whenever menu revisions occur across regional stores.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Allergen Awareness and Special Diets</h2>
              <p className="text-gray-600 leading-relaxed">
                We understand dining with food allergies demands extreme caution and reliable information.
                Our detailed allergen tables clearly highlight dairy, gluten, soy, and sesame ingredients.
                Gluten-free eaters can safely explore satisfying alternatives without worrying about dietary setbacks.
                Vegetarians and vegans can quickly locate nourishing plant-based dips and savory falafel.
                We help diners make safe meal selections suited to their personal lifestyle.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Independent Status and Trademark Notice</h2>
              <p className="text-gray-600 leading-relaxed">
                CAVA Menu Guide operates as an entirely independent culinary informational web portal.
                We are not affiliated with, sponsored by, or endorsed by CAVA Group.
                All registered brand names and restaurant logos belong to their respective owners.
                We reference CAVA solely to describe public menu options for consumer education.
                Our editorial opinions remain completely autonomous and free from any commercial influence.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Dedicated to Reader Accuracy</h2>
              <p className="text-gray-600 leading-relaxed">
                We take pride in delivering honest culinary content that respects reader trust.
                Our team verifies price changes as local restaurant markets adjust their menus.
                We encourage our readers to report local pricing variances or recipe adjustments.
                Consumer feedback enables us to keep this directory dependable for fellow diners.
                Maintaining high informational standards remains our top priority on this educational portal.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">How to Connect With Us</h2>
              <p className="text-gray-600 leading-relaxed">
                We invite readers to send questions or suggestions to our team anytime.
                You can write directly to our official support inbox at cavamenusprice@gmail.com today.
                Our editorial staff reviews all incoming correspondence regarding menu pricing and corrections.
                We strive to answer every user message within a few working days.
                Thank you for trusting our guide to explore delicious Mediterranean restaurant menus.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/#menu"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0A6847] text-white font-semibold rounded-lg hover:bg-[#065f3c] transition-colors"
              >
                Browse Full Menu &amp; Prices
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-[#0A6847] text-[#0A6847] font-semibold rounded-lg hover:bg-[#0A6847] hover:text-white transition-colors"
              >
                Try Nutrition Calculator
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
