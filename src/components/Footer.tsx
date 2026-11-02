import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          {/* Brand Column */}
          <div className="flex flex-col md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-extrabold text-white tracking-tight">CAVA</span>
              <span className="bg-[#0A6847] text-white text-xs font-black px-2 py-0.5 rounded tracking-wider uppercase">
                MENU
              </span>
            </div>
            <span className="text-emerald-400 font-medium text-sm mt-2 tracking-wide uppercase">Menu, Prices &amp; Nutrition 2025</span>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              Explore the complete CAVA menu with latest prices, calories, and build custom Mediterranean bowls with our nutrition calculator.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col">
            <h3 className="text-white font-medium mb-3 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#menu" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
                  Full Menu &amp; Prices
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-white hover:text-yellow-400 transition-colors text-sm">
                  Nutrition Calculator
                </Link>
              </li>
              <li>
                <Link href="/allergen-menu" className="text-white hover:text-yellow-400 transition-colors text-sm">
                  Allergen Menu
                </Link>
              </li>
              <li>
                <Link href="/gluten-free" className="text-white hover:text-yellow-400 transition-colors text-sm">
                  Gluten-Free Guide
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-white hover:text-yellow-400 transition-colors text-sm">
                  CAVA Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col">
            <h3 className="text-white font-medium mb-3 uppercase tracking-wider text-sm">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white hover:text-yellow-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-yellow-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-white hover:text-yellow-400 transition-colors text-sm">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-white hover:text-yellow-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-white hover:text-yellow-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclaimer Column */}
          <div className="flex flex-col">
            <h3 className="text-white font-medium mb-3 uppercase tracking-wider text-sm">Disclaimer &amp; Contact</h3>
            <p className="text-sm leading-relaxed mb-3 text-white/80">
              This is an independent guide created for informational and educational use. It is not affiliated with, endorsed by, or sponsored by CAVA Group Inc.
            </p>
            <div className="text-sm">
              <span className="text-white/60 block text-xs uppercase font-semibold mb-1">Support Email:</span>
              <a
                href="mailto:cavamenusprice@gmail.com"
                className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
              >
                cavamenusprice@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-gray-700 text-sm flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-white">© {new Date().getFullYear()} CAVA Menu &amp; Prices. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/disclaimer" className="text-white hover:text-yellow-400 transition-colors">Disclaimer</Link>
            <Link href="/terms-of-service" className="text-white hover:text-yellow-400 transition-colors">Terms of Service</Link>
            <Link href="/privacy-policy" className="text-white hover:text-yellow-400 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="text-white hover:text-yellow-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
