import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | CAVA Menu & Prices Independent Guide",
  description:
    "Read the Privacy Policy for CAVA Menu & Prices. Learn how we collect, use, and protect your data, manage cookies, and handle Google AdSense advertising.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | CAVA Menu & Prices Independent Guide",
    description:
      "Read the Privacy Policy for CAVA Menu & Prices. Learn how we collect, use, and protect your data, manage cookies, and handle Google AdSense advertising.",
    url: "https://cavamenue.us/privacy-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | CAVA Menu & Prices Independent Guide",
    description:
      "Read the Privacy Policy for CAVA Menu & Prices. Learn how we collect, use, and protect your data, manage cookies, and handle Google AdSense advertising.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cavamenue.us" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://cavamenue.us/privacy-policy" },
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
                <li className="text-white font-medium">Privacy Policy</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight leading-tight">
              Privacy Policy
            </h1>
            <p className="text-emerald-100 max-w-2xl leading-relaxed text-base sm:text-lg">
              Learn how we collect, use, and protect information when you visit our CAVA nutrition guide.
            </p>
            <p className="text-emerald-200 text-sm mt-3">Last updated: November 2, 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

            {/* 1 */}
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed">
                We collect basic usage information when you browse our online platform.
                This includes pages viewed, device type, browser model, and location.
                No personal identity records are collected without your direct informed consent.
                Collected details assist our research team in improving culinary reading experiences.
                We never share private visitor records with unauthorized commercial third parties.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed">
                Collected browsing details are utilized strictly to enhance overall site performance.
                We analyze incoming traffic patterns to serve accurate restaurant menu information.
                Visitor navigation data helps us update our helpful{" "}
                <Link href="/menu/bases" className="text-[#0A6847] font-semibold hover:underline">
                  CAVA menu
                </Link>{" "}
                pages.
                We evaluate server statistics to resolve errors and boost page speed.
                Personal records are never repurposed for unwanted commercial marketing email campaigns.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website uses browser cookies to improve your digital browsing session.
                Cookies store small configuration files in your web browser for recognition.
                Third-party networks like Google AdSense also place cookies on devices.
                You maintain full control to deactivate cookies via personal browser settings.
                Disabling cookies may reduce functionality across our interactive{" "}
                <Link href="/calculator" className="text-[#0A6847] font-semibold hover:underline">
                  nutrition calculator
                </Link>
                .
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Google AdSense and Advertising</h2>
              <p className="text-gray-600 leading-relaxed">
                Our culinary resource website proudly participates in the Google AdSense network.
                Google utilizes automated cookies to show relevant advertisements based on activity.
                These commercial promotions help us maintain a free public nutrition guide.
                Google advertising procedures strictly follow their officially published consumer privacy regulations.
                You can easily adjust personalized advertising through official{" "}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A6847] font-semibold hover:underline"
                >
                  Google Ads Settings
                </a>
                .
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Google Analytics and Usage Data</h2>
              <p className="text-gray-600 leading-relaxed">
                We employ Google Analytics tools to monitor total traffic and popularity.
                Reports outline average visit duration, bounce rates, and popular recipe pages.
                This research helps us optimize our{" "}
                <Link href="/allergen-menu" className="text-[#0A6847] font-semibold hover:underline">
                  allergen menu
                </Link>{" "}
                directory.
                You can also consult our{" "}
                <Link href="/gluten-free" className="text-[#0A6847] font-semibold hover:underline">
                  gluten-free guide
                </Link>{" "}
                for special meals.
                All collected metrics remain entirely anonymized without tracking individual user identities.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Third-Party Links and Services</h2>
              <p className="text-gray-600 leading-relaxed">
                Our articles may provide links to helpful third-party culinary web destinations.
                We possess no control over external platforms, privacy terms, or policies.
                Selecting outgoing links means you depart from our protected website environment.
                We advise reviewing privacy statements posted on every linked outside resource.
                You can discover convenient local branches by inspecting our{" "}
                <Link href="/locations" className="text-[#0A6847] font-semibold hover:underline">
                  CAVA locations
                </Link>
                .
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Children&apos;s Online Privacy Protection</h2>
              <p className="text-gray-600 leading-relaxed">
                This website is not directed toward children under thirteen years old.
                We do not knowingly collect personal details from minors without authorization.
                If an underage visitor submitted records, guardians should contact us immediately.
                Our technical team will promptly remove minor data from active databases.
                Our nutritional articles serve as general adult informational guidance for dining.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Data Security and Protection</h2>
              <p className="text-gray-600 leading-relaxed">
                We employ industry security precautions to safeguard collected non-personal visitor data.
                Our web server uses HTTPS protocol encryption during all data transit.
                No digital transmission channel over the internet is completely infallible continuously.
                We routinely re-examine internal website security safeguards against modern online risks.
                Visitors may message our administrators through our{" "}
                <Link href="/contact" className="text-[#0A6847] font-semibold hover:underline">
                  contact page
                </Link>{" "}
                for inquiries.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Your Privacy Rights and Choices</h2>
              <p className="text-gray-600 leading-relaxed">
                Every website visitor maintains legal rights to access stored browsing records.
                You may also request complete removal of any submitted personal information.
                California residents receive specialized privacy protections under the formal CCPA regulations.
                European citizens can exercise their data portability privileges under GDPR statutes.
                Submit all formal privacy inquiries directly through our online{" "}
                <Link href="/contact" className="text-[#0A6847] font-semibold hover:underline">
                  contact us
                </Link>
                .
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Updates to This Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to revise this Privacy Policy document anytime.
                All policy adjustments will be denoted by an updated date prominently.
                Continued utilization of this website signifies your agreement to updated standards.
                We recommend visiting this page periodically to remain informed about practices.
                Archived policy revisions remain accessible to interested visitors upon written request.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Contact Us About Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions about privacy, please contact our support team.
                You may send questions directly to our team at{" "}
                <a
                  href="mailto:cavamenusprice@gmail.com"
                  className="text-[#0A6847] font-semibold hover:underline"
                >
                  cavamenusprice@gmail.com
                </a>
                .
                Our representatives answer every genuine reader inquiry within two business days.
                You can also read our informative{" "}
                <Link href="/about" className="text-[#0A6847] font-semibold hover:underline">
                  about page
                </Link>{" "}
                to learn more.
                We remain committed to straightforward and ethical user data privacy standards.
              </p>
            </div>

            {/* CTA Links */}
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/disclaimer"
                className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-[#0A6847] text-[#0A6847] font-semibold rounded-lg hover:bg-[#0A6847] hover:text-white transition-colors"
              >
                Read Disclaimer
              </Link>
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
