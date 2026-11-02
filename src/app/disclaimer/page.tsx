import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | CAVA Menu & Prices Independent Guide",
  description:
    "Read the official legal disclaimer for CAVA Menu & Prices. Learn about our independent status, pricing accuracy, dietary limitations, and AdSense disclosure.",
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: "Disclaimer | CAVA Menu & Prices Independent Guide",
    description:
      "Read the official legal disclaimer for CAVA Menu & Prices. Learn about our independent status, pricing accuracy, dietary limitations, and AdSense disclosure.",
    url: "https://cavamenue.us/disclaimer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | CAVA Menu & Prices Independent Guide",
    description:
      "Read the official legal disclaimer for CAVA Menu & Prices. Learn about our independent status, pricing accuracy, dietary limitations, and AdSense disclosure.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cavamenue.us" },
    { "@type": "ListItem", position: 2, name: "Disclaimer", item: "https://cavamenue.us/disclaimer" },
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
                <li className="text-white font-medium">Disclaimer</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight leading-tight">
              Disclaimer
            </h1>
            <p className="text-emerald-100 max-w-2xl leading-relaxed text-base sm:text-lg">
              Please review our independent status, menu pricing policies, and terms of informational use.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Independent Informational Resource</h2>
              <p className="text-gray-600 leading-relaxed">
                CAVA Menu Guide operates as an independent culinary resource for informational purposes.
                This website has no affiliation with CAVA Group Inc or subsidiaries.
                We are not endorsed, sponsored, or certified by official restaurant corporate representatives.
                The trademark CAVA belongs exclusively to its lawful intellectual property trademark holders.
                Reference to the brand name serves purely nominative identification for educational research.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Menu Price Variations and Discrepancies</h2>
              <p className="text-gray-600 leading-relaxed">
                We gather restaurant prices from standard store receipts and publicly posted menus.
                Restaurant prices frequently vary across different regional cities and franchised store locations.
                Published numbers should serve as general estimates rather than fixed commercial guarantees.
                Local branches reserve the right to alter pricing without providing prior notification.
                Always confirm active item prices with store cashiers before placing your order.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Nutritional Data Accuracy and Estimates</h2>
              <p className="text-gray-600 leading-relaxed">
                Nutrition figures displayed on our website are gathered from published corporate guides.
                Actual nutritional content may differ due to portion sizes and handcrafted preparation.
                Slight alterations in recipe ingredients can impact final calorie counts and macronutrients.
                We do not warrant that all nutritional statistics remain error-free constantly.
                Diners should consider our nutritional data as general approximations for meal planning.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">No Medical or Dietary Advice</h2>
              <p className="text-gray-600 leading-relaxed">
                Information provided across this website does not constitute licensed medical dietary guidance.
                You should never use our nutritional calculations to treat serious health conditions.
                Consult qualified medical professionals before making major lifestyle changes or dietary adjustments.
                Individuals with severe metabolic concerns must seek personalized guidance from certified dietitians.
                We disclaim all liability regarding health decisions made from our informational content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Food Allergies and Cross-Contact Risk</h2>
              <p className="text-gray-600 leading-relaxed">
                Our allergen summaries reflect publicly published reports provided by food supply vendors.
                Restaurant kitchens handle common allergens including dairy, sesame, wheat, and soy products.
                Cross-contact can occur during meal assembly despite careful kitchen sanitation and preparation.
                Diners with life-threatening allergies must inform kitchen workers prior to food ordering.
                We cannot guarantee that any restaurant dish is completely free from allergens.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Third-Party Advertising and Sponsors</h2>
              <p className="text-gray-600 leading-relaxed">
                This website displays online advertisements served automatically through the Google AdSense network.
                We do not explicitly endorse products or services shown in third-party advertisements.
                Third-party ad networks may utilize browser cookies to deliver tailored commercial advertising.
                Users can control ad personalization preferences directly through official Google privacy settings.
                Commercial ad revenue helps us maintain free educational access for all visitors.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">External Hyperlinks and Outbound Resources</h2>
              <p className="text-gray-600 leading-relaxed">
                Our articles may include hyperlinks pointing toward external third-party digital web resources.
                We hold no supervisory authority over external website materials, policies, or operations.
                Following outbound links occurs entirely at your own personal discretion and risk.
                We encourage readers to inspect privacy statements published across external web destinations.
                Hyperlink inclusion does not imply official endorsement of external third-party platform content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Limitation of Legal Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                CAVA Menu Guide and its owners assume no liability for platform use.
                We are not responsible for any financial losses resulting from menu inaccuracies.
                Users assume full responsibility for evaluating the accuracy of all published materials.
                Under no circumstances shall our team be liable for indirect punitive damages.
                Your continued browsing of this website signifies full acceptance of these terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Revisions to This Disclaimer Notice</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the legal right to revise this disclaimer statement anytime unannounced.
                Updated terms take immediate effect once posted publicly upon this web page.
                Visitors should periodically inspect this document to remain informed regarding operational guidelines.
                Continued use of this website after revisions constitutes agreement to updated policies.
                We maintain complete transparency regarding our platform standards for every valued visitor.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Legal Inquiries and Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have legal questions regarding this disclaimer, please contact our team.
                Send your official inquiries directly to our administrative email at cavamenusprice@gmail.com today.
                We examine all communications with care and provide timely and clear answers.
                Please allow two full working days for our legal team to respond.
                We appreciate your understanding and support as we maintain this informational resource.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/terms-of-service"
                className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-[#0A6847] text-[#0A6847] font-semibold rounded-lg hover:bg-[#0A6847] hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0A6847] text-white font-semibold rounded-lg hover:bg-[#065f3c] transition-colors"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
