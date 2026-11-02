import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | CAVA Menu & Prices Support",
  description:
    "Contact the CAVA Menu & Prices editorial team at cavamenusprice@gmail.com for menu updates, price corrections, feedback, and advertising inquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | CAVA Menu & Prices Support",
    description:
      "Contact the CAVA Menu & Prices editorial team at cavamenusprice@gmail.com for menu updates, price corrections, feedback, and advertising inquiries.",
    url: "https://cavamenue.us/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | CAVA Menu & Prices Support",
    description:
      "Contact the CAVA Menu & Prices editorial team at cavamenusprice@gmail.com for menu updates, price corrections, feedback, and advertising inquiries.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cavamenue.us" },
    { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://cavamenue.us/contact" },
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
                <li className="text-white font-medium">Contact Us</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight leading-tight">
              Contact Us
            </h1>
            <p className="text-emerald-100 max-w-2xl leading-relaxed text-base sm:text-lg">
              Get in touch with our CAVA Menu & Prices editorial team for updates, questions, and support.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">How to Reach Our Team</h2>
              <p className="text-gray-600 leading-relaxed">
                You can contact our editorial staff directly by sending an electronic mail.
                Our official contact address for readers is always cavamenusprice@gmail.com for fast support.
                We monitor incoming messages every day to assist our valued website visitors.
                Please ensure your message includes a clear subject line explaining your inquiry.
                Direct emails help us address your questions without unnecessary delays or confusion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Reporting Menu Price Corrections</h2>
              <p className="text-gray-600 leading-relaxed">
                CAVA restaurant pricing can vary slightly across different regional markets and locations.
                If you observe different prices at your local store, please inform us.
                Send us the store city along with the updated price you paid.
                Photo receipts help our team verify numbers and revise online pricing quickly.
                Your local contributions ensure other diners discover trustworthy menu price facts daily.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Questions About Nutritional Values</h2>
              <p className="text-gray-600 leading-relaxed">
                Many diners consult our portal to track macronutrients for healthy Mediterranean meals.
                If you have questions about calorie counts or ingredients, message our editors.
                We can clarify which data tables reflect official restaurant nutrition disclosure guides.
                Please note we cannot provide medical guidance regarding individual dietary health conditions.
                We happily direct readers toward official food sources for extreme health sensitivities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Allergen Information Inquiries</h2>
              <p className="text-gray-600 leading-relaxed">
                Dining with food allergies requires dependable data to ensure safe meal selections.
                Contact us if you need clarification regarding gluten, dairy, or sesame allergens.
                We cross-reference ingredient reports to assist customers facing restricted dietary lifestyle plans.
                Always inform restaurant prep staff about severe food allergies before ordering meals.
                We share helpful insights while encouraging direct communication with store kitchen workers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Suggestions for New Features</h2>
              <p className="text-gray-600 leading-relaxed">
                We continually upgrade our online tools to benefit every frequent Mediterranean diner.
                Tell us if you want additional meal filters or customizable bowl calculators.
                We welcome innovative ideas that make exploring restaurant menus faster and easier.
                Reader recommendations often inspire new tools that improve user browsing experiences substantially.
                Share your personal suggestions by emailing our development team at any hour.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Advertising and Partnership Inquiries</h2>
              <p className="text-gray-600 leading-relaxed">
                We welcome relevant advertising inquiries from reputable brands within the culinary sphere.
                Please email your business proposal directly to cavamenusprice@gmail.com for prompt review.
                Include your company background, marketing objectives, and preferred promotional campaign schedule details.
                We partner exclusively with organizations that provide genuine value to our visitors.
                Our advertising team will respond promptly with our current site media specifications.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Technical Support and Website Feedback</h2>
              <p className="text-gray-600 leading-relaxed">
                If you experience broken links or display glitches, please report them immediately.
                Mention your web browser name and device type to help diagnose issues.
                Our web engineers investigate technical errors promptly to restore smooth visitor access.
                We want every visitor to enjoy seamless navigation across our menu pages.
                Your technical error reports help us maintain a fast, reliable web resource.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Response Time and Communication Policies</h2>
              <p className="text-gray-600 leading-relaxed">
                Our editorial team strives to review incoming inquiries within two business days.
                High email volumes during promotional holidays may cause brief processing response delays.
                Please avoid sending repeated duplicate messages while waiting for our team reply.
                We review every genuine inquiry carefully and craft personalized, helpful email responses.
                We value polite discourse and treat every reader message with sincere respect.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Unaffiliated Restaurant Support Notice</h2>
              <p className="text-gray-600 leading-relaxed">
                Please remember that our team does not operate official CAVA restaurant locations.
                We cannot resolve misplaced online food delivery orders or store gift cards.
                Inquiries regarding restaurant employee jobs or refunds must go to official channels.
                Please contact your local restaurant branch directly for immediate order assistance issues.
                We exclusively handle inquiries regarding content published on this informational menu guide.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Our Commitment to User Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                We treat all personal contact correspondence with strict privacy and professional discretion.
                Your email address remains confidential and will never be sold to marketers.
                We use your submitted details exclusively to answer your specific menu inquiry.
                Contact messages are archived securely according to standard internet data protection standards.
                Feel completely confident reaching out to us at cavamenusprice@gmail.com whenever you wish.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="mt-6 bg-[#f0faf5] border border-[#0A6847]/20 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase font-bold tracking-wider text-[#0A6847] mb-1">Direct Email Address</p>
                <a
                  href="mailto:cavamenusprice@gmail.com"
                  className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E] hover:text-[#0A6847] transition-colors"
                >
                  cavamenusprice@gmail.com
                </a>
                <p className="text-sm text-gray-500 mt-1">We typically answer all reader inquiries within two business days.</p>
              </div>
              <a
                href="mailto:cavamenusprice@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A6847] text-white font-semibold rounded-lg hover:bg-[#065f3c] transition-colors whitespace-nowrap"
              >
                Send Message
              </a>
            </div>

            <div className="pt-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-[#0A6847] text-[#0A6847] font-semibold rounded-lg hover:bg-[#0A6847] hover:text-white transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
