import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | CAVA Menu & Prices Platform",
  description:
    "Read the Terms of Service for CAVA Menu & Prices. Review user conduct rules, intellectual property policies, content limitations, and legal regulations.",
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | CAVA Menu & Prices Platform",
    description:
      "Read the Terms of Service for CAVA Menu & Prices. Review user conduct rules, intellectual property policies, content limitations, and legal regulations.",
    url: "https://cavamenue.us/terms-of-service",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | CAVA Menu & Prices Platform",
    description:
      "Read the Terms of Service for CAVA Menu & Prices. Review user conduct rules, intellectual property policies, content limitations, and legal regulations.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cavamenue.us" },
    { "@type": "ListItem", position: 2, name: "Terms of Service", item: "https://cavamenue.us/terms-of-service" },
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
                <li className="text-white font-medium">Terms of Service</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight leading-tight">
              Terms of Service
            </h1>
            <p className="text-emerald-100 max-w-2xl leading-relaxed text-base sm:text-lg">
              Regulations and terms governing the use of the CAVA Menu & Prices website and tools.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Agreement to Digital Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                Accessing this website indicates your unconditional acceptance of these binding service terms.
                If you disagree with any stated conditions, please discontinue using this portal.
                These terms govern all browsing activity across every page of our platform.
                We may update these regulations periodically to reflect operational and legal adjustments.
                Your ongoing usage confirms active acceptance of our latest published service terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Permitted Use of Content</h2>
              <p className="text-gray-600 leading-relaxed">
                This website provides CAVA menu details solely for individual, personal, noncommercial reference.
                You may read, bookmark, and review our nutritional tables for meal planning.
                Commercial reproduction or digital distribution of our original materials is strictly prohibited.
                You must not republish our compiled pricing databases onto competing commercial portals.
                Personal informational browsing remains the only authorized purpose for using our site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Intellectual Property and Ownership</h2>
              <p className="text-gray-600 leading-relaxed">
                All custom layout designs, graphics, and written content belong to this platform.
                These proprietary assets remain protected under international copyright and intellectual property statutes.
                The CAVA trademark and associated restaurant branding belong to CAVA Group Inc.
                We do not claim ownership of official restaurant trademarks referenced on pages.
                Any unauthorized copying of our unique written content will face legal action.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">User Conduct and Site Security</h2>
              <p className="text-gray-600 leading-relaxed">
                Visitors must utilize this website lawfully and respect our established digital guidelines.
                You must not disrupt our server infrastructure through malicious software or attacks.
                Automated web scraping, data extraction, and robot harvesting are forbidden without authorization.
                We actively monitor network activity to protect platform security for legitimate diners.
                Violating these security standards may result in immediate access termination and blocking.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Accuracy of Menu Data</h2>
              <p className="text-gray-600 leading-relaxed">
                We make sincere efforts to publish accurate CAVA pricing and nutritional data.
                However, restaurant menus, prices, and food formulas may change without warning.
                We cannot warrant absolute completeness or ongoing perfection across all our tables.
                Diners must verify prices and allergens directly with local restaurant counter personnel.
                We disclaim all warranties regarding information accuracy, reliability, or completeness of content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Advertising and Third-Party Links</h2>
              <p className="text-gray-600 leading-relaxed">
                Our web pages contain contextual advertisements supplied by Google AdSense advertising partners.
                We do not endorse or control goods offered within external commercial promotions.
                Any transactions conducted with outside merchants occur entirely at your own risk.
                We are not responsible for damages resulting from dealings with third-party advertisers.
                Review the respective privacy policies of any merchant before concluding digital transactions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Disclaimer of Legal Warranties</h2>
              <p className="text-gray-600 leading-relaxed">
                This informational web platform is provided strictly upon an as-is basis.
                We disclaim all implied warranties including merchantability, fitness, and non-infringement of rights.
                We do not guarantee uninterrupted server uptime or completely bug-free digital services.
                Technical downtime may occur periodically during mandatory server maintenance and database upgrades.
                You assume complete responsibility for your digital browsing experience on this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Limitation of Digital Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                In no event shall our website administrators be liable for damages.
                This includes direct, indirect, incidental, consequential, or punitive damages arising from use.
                We are not liable for losses resulting from reliance on published prices.
                Some legal jurisdictions do not permit complete liability waivers for consumer contracts.
                In such jurisdictions, our legal liability remains limited to the minimum extent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Governing Law and Disputes</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service shall be governed under United States legal statutes.
                Any legal dispute concerning platform usage must be resolved in competent courts.
                If any individual clause is ruled unenforceable, remaining conditions remain effective.
                Failure to enforce any provision does not constitute a waiver of rights.
                Both parties agree to resolve disputes amicably before filing formal legal litigation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Inquiries Regarding Service Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have inquiries about these Terms of Service, contact our team.
                You can reach our administrative desk by emailing us at cavamenusprice@gmail.com directly.
                We examine all legitimate correspondence and provide comprehensive answers within two days.
                We value clear communication and appreciate your cooperation with our service guidelines.
                Thank you for visiting our comprehensive CAVA menu and price information platform.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/disclaimer"
                className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-[#0A6847] text-[#0A6847] font-semibold rounded-lg hover:bg-[#0A6847] hover:text-white transition-colors"
              >
                Read Disclaimer
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0A6847] text-white font-semibold rounded-lg hover:bg-[#065f3c] transition-colors"
              >
                Contact Our Desk
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
