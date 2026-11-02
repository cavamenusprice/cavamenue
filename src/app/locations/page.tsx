import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import LocationFinder from './LocationFinder';

export const metadata: Metadata = {
  title: 'CAVA Locations | Find a Restaurant Near You',
  description:
    'Find the nearest CAVA restaurant. Explore locations across the USA with opening hours, addresses, directions and store details.',
  alternates: {
    canonical: '/locations',
  },
  openGraph: {
    title: 'CAVA Locations | Find a Restaurant Near You',
    description:
      'Find the nearest CAVA restaurant. Explore locations across the USA with opening hours, addresses, directions and store details.',
    url: 'https://cavamenue.us/locations',
    images: [
      {
        url: '/images/Cava Locations Near Me.webp',
        width: 1672,
        height: 941,
        alt: 'CAVA Locations | Find a Restaurant Near You',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CAVA Locations | Find a Restaurant Near You',
    description:
      'Find the nearest CAVA restaurant. Explore locations across the USA with opening hours, addresses, directions and store details.',
    images: ['/images/Cava Locations Near Me.webp'],
  },
};

export default function LocationsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: '/locations' },
    ],
  };

  return (
    <main className="min-h-screen font-sans text-[#1A1A2E] bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-100 py-3 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-[#0A6847] transition-colors">Home</Link>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-[#0A6847] font-medium">Locations</li>
          </ol>
        </div>
      </nav>

      {/* ════════════════════ HERO SECTION ════════════════════ */}
      <section className="py-[10px] bg-gradient-to-b from-[#FAFAF8] via-white to-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[35px] font-black text-[#1A1A2E] leading-tight tracking-tight mb-4">
                CAVA Locations Near Me –{' '}
                <span className="text-[#0A6847]">Find Your Nearest Restaurant</span>
              </h1>
              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-4">
                Craving fresh Mediterranean flavors tonight? If you are searching for CAVA near me, you are not alone. This fast casual chain has grown fast across the country, and new fans want to know where the closest spot sits. Finding CAVA locations has never been easier with a few simple tools.
              </p>
              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6">
                Whether you live in a big city or a smaller town, chances are a CAVA spot is closer than you think. This guide walks you through every way to track down CAVA locations, check hours, and plan your next bowl or pita run without any guesswork.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="#location-finder"
                  className="px-8 py-3.5 rounded-full bg-[#0A6847] text-white font-bold text-sm sm:text-base hover:bg-[#085238] transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
                >
                  <span>Find Locations</span>
                  <span>↓</span>
                </a>
                <Link
                  href="/#menu"
                  className="px-8 py-3.5 rounded-full bg-white border-2 border-gray-200 text-[#1A1A2E] font-bold text-sm sm:text-base hover:border-[#0A6847] hover:text-[#0A6847] transition-all inline-flex items-center gap-2 shadow-xs"
                >
                  <span>View Menu</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end w-full max-w-xl">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                <Image
                  src="/images/Cava Locations Near Me.webp"
                  alt="CAVA Locations Near Me – Find Your Nearest Restaurant"
                  width={1672}
                  height={941}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-[10px]">
            <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-xs text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#0A6847]">50</div>
              <div className="text-xs sm:text-sm font-semibold text-gray-600 mt-1">Total Locations</div>
            </div>
            <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-xs text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#0A6847]">25+</div>
              <div className="text-xs sm:text-sm font-semibold text-gray-600 mt-1">States Covered</div>
            </div>
            <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-xs text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#0A6847]">Coast to Coast</div>
              <div className="text-xs sm:text-sm font-semibold text-gray-600 mt-1">Growing Nationwide</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ FIND CAVA RESTAURANTS NEAR YOU ════════════════════ */}
      <section className="py-[10px] bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Find CAVA Restaurants Near You
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Looking for CAVA near me usually starts with a quick search on your phone. Type the brand name into Google or Maps and nearby CAVA locations will pop up instantly. You can filter by distance, check reviews, and see photos before you even leave your house. It takes seconds.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </div>
      </section>

      {/* ════════════════════ LOCATION FINDER TOOL ════════════════════ */}
      <section id="location-finder" className="py-[10px] bg-[#FAFAF8] scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LocationFinder />
        </div>
      </section>

      {/* ════════════════════ CAVA LOCATIONS BY STATE ════════════════════ */}
      <section className="py-[10px] bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            CAVA Locations by State
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto mb-6">
            CAVA has expanded well beyond its East Coast roots. Today you can find CAVA locations across dozens of states, from busy downtown blocks to suburban shopping centers. Growth has been steady every year. New stores keep opening in fresh markets, so even if your state did not have one last year, it might now.
          </p>

          {/* Featured Image */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gray-100 mb-6">
            <Image
              src="/images/Cava Locations 2027.webp"
              alt="CAVA Locations Across the United States 2026 - 2027"
              width={1672}
              height={941}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-[10px] h-px bg-gray-200" />
        </div>
      </section>

      {/* ════════════════════ MOST POPULAR + STATE CARDS ════════════════════ */}
      <section className="py-[10px] bg-[#FAFAF8] border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
              Most Popular CAVA Locations
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
              Some CAVA locations see heavier traffic than others, usually because of foot traffic, lunch crowds, or nearby offices. These busy spots often inspired new openings nearby. Here is a quick look at where CAVA has built a strong presence across a few key states.
            </p>
          </div>

          {/* Top 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {[
              {
                state: 'New York',
                text: 'New York hosts some of the busiest CAVA locations in the country. From Manhattan lunch spots to Brooklyn neighborhoods, CAVA has found a loyal following. Office workers love the quick service, while weekend visitors enjoy the fresh bowls. More openings continue to roll out across the state.',
              },
              {
                state: 'California',
                text: 'California has embraced CAVA with open arms, especially in cities that already love Mediterranean food. Los Angeles and San Diego both host several locations. The fresh ingredients and customizable bowls fit well with the health focused crowd that California is known for having.',
              },
              {
                state: 'Texas',
                text: 'Texas has seen rapid CAVA growth, with locations popping up in Austin, Dallas, and Houston. Fast casual dining fits well into busy Texas lifestyles. Many locations sit near shopping centers and business districts, making lunch runs simple for workers and shoppers alike throughout the week.',
              },
            ].map((loc) => (
              <div
                key={loc.state}
                className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-xs hover:shadow-md transition-shadow border-l-4 border-l-[#0A6847]"
              >
                <h3 className="text-lg font-black text-gray-900 mb-2">
                  CAVA Locations in {loc.state}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{loc.text}</p>
              </div>
            ))}
          </div>

          {/* Bottom 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {[
              {
                state: 'Florida',
                text: 'Florida residents have plenty of CAVA locations to choose from, especially in Miami, Orlando, and Tampa. Warm weather and a love for fresh food make CAVA a natural fit here. Tourists visiting the state often discover CAVA for the first time and quickly become regulars.',
              },
              {
                state: 'Washington, DC',
                text: 'Washington, DC holds a special place in CAVA history since the brand got its start nearby. The city still has a strong concentration of locations today. Government workers and students both rely on CAVA for quick, healthy meals during busy weekdays and weekend outings alike.',
              },
            ].map((loc) => (
              <div
                key={loc.state}
                className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-xs hover:shadow-md transition-shadow border-l-4 border-l-[#E3A33B]"
              >
                <h3 className="text-lg font-black text-gray-900 mb-2">
                  CAVA Locations in {loc.state}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{loc.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ HOURS & AVAILABILITY ════════════════════ */}
      <section className="py-[10px] bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A6847]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0A6847]">
                Hours &amp; Availability
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
              CAVA Locations Open 24 Hours
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
              Most CAVA locations do not stay open 24 hours, since the brand focuses on lunch and dinner service hours. A small number of locations in busy city centers may offer extended hours. Checking the official app or website before visiting late at night helps confirm current availability near you.
            </p>
          </div>

          {/* Hours Stats Table */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xs">
              <table className="w-full text-sm">
                <thead className="bg-[#1A1A2E] text-white text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4 sm:px-6 text-left">Schedule Type</th>
                    <th className="py-3 px-4 text-center">Typical Hours</th>
                    <th className="py-3 px-4 text-center">Availability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-gray-900">Weekday (Mon–Fri)</td>
                    <td className="py-3 px-4 text-center text-gray-600">10:45 AM – 10:00 PM</td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-block bg-emerald-50 text-[#0A6847] text-xs font-bold px-2.5 py-0.5 rounded-full">All Locations</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-gray-900">Weekend (Sat–Sun)</td>
                    <td className="py-3 px-4 text-center text-gray-600">10:45 AM – 10:00 PM</td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-block bg-emerald-50 text-[#0A6847] text-xs font-bold px-2.5 py-0.5 rounded-full">Most Locations</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-gray-900">Extended / Late Night</td>
                    <td className="py-3 px-4 text-center text-gray-600">Until 11:00 PM+</td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-block bg-amber-50 text-amber-700 text-xs font-bold px-2.5 py-0.5 rounded-full">Select City Locations</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-gray-900">24 Hour Service</td>
                    <td className="py-3 px-4 text-center text-gray-600">Not Standard</td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold px-2.5 py-0.5 rounded-full">Very Rare</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-gray-900">Major Holidays</td>
                    <td className="py-3 px-4 text-center text-gray-600">Reduced / Closed</td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-block bg-red-50 text-red-600 text-xs font-bold px-2.5 py-0.5 rounded-full">Varies by Location</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 text-center mt-2">
              Hours shown are approximate and may vary by location. Always confirm via the CAVA app or website.
            </p>
          </div>

          {/* Hours Detail Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-gray-200/80 p-6 bg-gradient-to-br from-[#FAFAF8] to-white shadow-xs">
              <h3 className="text-base font-black text-gray-900 mb-2">
                CAVA Locations Open Late at Night
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Some CAVA locations extend their hours into the late evening, especially in busy downtown areas and college towns. Closing times can vary by city and demand. If you are craving a late night bowl, checking the specific location page first saves you a wasted trip.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200/80 p-6 bg-gradient-to-br from-[#FAFAF8] to-white shadow-xs">
              <h3 className="text-base font-black text-gray-900 mb-2">
                CAVA Locations Open on Weekends
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                CAVA remains open throughout the weekend at nearly every location nationwide. Saturday and Sunday hours are usually similar to weekday hours, though some spots may open slightly later. Weekend crowds tend to be heavier during lunch, so planning ahead can help you skip longer wait times.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200/80 p-6 bg-gradient-to-br from-[#FAFAF8] to-white shadow-xs">
              <h3 className="text-base font-black text-gray-900 mb-2">
                CAVA Locations Open on Holidays
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Holiday hours at CAVA can shift depending on the specific day and location. Some restaurants close entirely on major holidays, while others operate with reduced hours. Checking the CAVA app or calling ahead is the safest way to confirm whether your nearby location is open.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ AMENITIES & FEATURES ════════════════════ */}
      <section className="py-[10px] bg-[#FAFAF8] border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
              CAVA Location Amenities &amp; Features
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
              Every CAVA location offers a slightly different experience depending on the area. Here is what you might find at your nearest restaurant.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              ['Outdoor Seating', 'Many CAVA locations offer outdoor seating, giving guests a chance to enjoy fresh air while eating their meal. This feature is especially common in suburban locations with extra patio space. Outdoor seating availability can vary, so checking photos or reviews online helps set expectations beforehand.'],
              ['Dine-In Options', 'Dine in service remains available at most CAVA locations, giving guests a comfortable space to sit and enjoy their meal. Seating areas are typically clean and casual, fitting the fast casual style of the brand. Smaller locations may have limited seating during busy lunch hours.'],
              ['Pickup and Delivery', 'Many CAVA locations support both pickup and delivery, making it simple to enjoy a meal without visiting in person. Orders can be placed through the CAVA app, website, or popular delivery partners. Availability depends on your specific location, so confirming beforehand helps avoid any confusion.'],
              ['Free Parking', 'Parking availability at CAVA varies by location, with many suburban spots offering free parking directly on site. Urban locations may rely on street parking or nearby lots instead. Checking location details or reviews ahead of time can help you plan your visit more easily.'],
              ['Near Shopping Malls', 'CAVA often places locations near shopping malls, giving shoppers an easy spot to grab a fresh meal during a break. These locations tend to see steady traffic throughout the day. Mall based CAVA spots are convenient for combining errands with a quick, healthy lunch option.'],
              ['Near Airports', 'While airport locations are less common, CAVA has started appearing in select travel hubs with high foot traffic. These spots give travelers a healthier option before a flight. Checking the official location finder before your trip confirms whether your departure airport currently has a CAVA.'],
            ].map(([title, text]) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <h3 className="text-base font-black text-gray-900 mb-2">
                  CAVA Locations With {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ POPULAR / NEW / CATERING / LUNCH / ONLINE ════════════════════ */}
      <article className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A6847]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0A6847]">
                Explore More
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
              Everything About CAVA Locations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
                color: 'from-amber-500 to-orange-500',
                bgLight: 'bg-amber-50',
                title: 'Most Popular CAVA Locations in the USA',
                text: 'Certain CAVA locations stand out due to heavy foot traffic and strong customer demand. Busy cities like New York, Los Angeles, and Washington DC often host some of the most visited restaurants. These popular spots helped shape CAVA\u0027s growing reputation across the country.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                ),
                color: 'from-emerald-500 to-teal-500',
                bgLight: 'bg-emerald-50',
                title: 'New CAVA Locations Opening in 2026',
                text: 'CAVA continues expanding steadily, with new locations planned across several states in 2026. Growth often targets fast growing suburbs and cities that previously lacked a nearby option. Following official announcements is the best way to learn when a new CAVA opens close to you.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                color: 'from-purple-500 to-indigo-500',
                bgLight: 'bg-purple-50',
                title: 'CAVA Locations With Catering Services',
                text: 'Many CAVA locations offer catering services for events, meetings, and gatherings of various sizes. Catering menus often include bowls, pitas, and shareable sides that fit different group needs. Ordering ahead through the website ensures your catering order is ready exactly when you need it.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                color: 'from-sky-500 to-blue-500',
                bgLight: 'bg-sky-50',
                title: 'CAVA Locations Open for Lunch and Dinner',
                text: 'CAVA restaurants typically serve both lunch and dinner, making them a flexible choice throughout the day. Midday hours tend to bring the busiest crowds, while evenings offer a slightly calmer dining experience. Checking specific hours ensures you arrive during your preferred mealtime window.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                color: 'from-rose-500 to-pink-500',
                bgLight: 'bg-rose-50',
                title: 'CAVA Locations With Online Ordering',
                text: 'Online ordering is available at most CAVA locations through the official app and website. This option lets guests customize their meal and skip the line entirely. Online ordering has become a popular choice for busy customers who want a fast, convenient CAVA experience.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl border border-gray-200/80 p-6 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${item.bgLight} text-gray-700 mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${item.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* ════════════════════ HOW TO FIND ════════════════════ */}
      <section className="py-[10px] bg-[#FAFAF8] border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
              How to Find Your Nearest CAVA Location
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
              Finding a nearby CAVA spot takes just a few steps. Whether you prefer apps, websites, or a quick map search, there are several reliable ways to locate the closest restaurant. Each method gives you accurate hours, addresses, and directions in under a minute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="relative bg-white rounded-2xl border border-gray-200/80 p-6 pt-8 shadow-xs hover:shadow-md transition-shadow">
              <div className="absolute -top-3 left-6 bg-[#0A6847] text-white text-xs font-black px-3 py-1 rounded-full">
                Method 1
              </div>
              <h3 className="text-base font-black text-gray-900 mb-2">
                Search by City or ZIP Code
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                One of the fastest ways to find CAVA near me is searching by city name or ZIP code. Most location finder tools let you type this information directly into a search bar. Results show the closest restaurants first, along with distance and estimated drive time instantly.
              </p>
            </div>

            <div className="relative bg-white rounded-2xl border border-gray-200/80 p-6 pt-8 shadow-xs hover:shadow-md transition-shadow">
              <div className="absolute -top-3 left-6 bg-[#0A6847] text-white text-xs font-black px-3 py-1 rounded-full">
                Method 2
              </div>
              <h3 className="text-base font-black text-gray-900 mb-2">
                Use the Official CAVA Location Finder
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                CAVA offers its own location finder tool directly on the brand website. This tool lets you search by address or allow location access for instant results. It also shows menu availability and delivery options for each specific restaurant, which is helpful before you decide where to go.
              </p>
            </div>

            <div className="relative bg-white rounded-2xl border border-gray-200/80 p-6 pt-8 shadow-xs hover:shadow-md transition-shadow">
              <div className="absolute -top-3 left-6 bg-[#0A6847] text-white text-xs font-black px-3 py-1 rounded-full">
                Method 3
              </div>
              <h3 className="text-base font-black text-gray-900 mb-2">
                Find CAVA on Google Maps
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Google Maps remains one of the simplest ways to spot CAVA locations nearby. Just search the brand name and your current area will populate with pins. You can view ratings, photos, busy hours, and even call the restaurant directly from the map listing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ HOURS / PICKUP / TIPS / NEW ════════════════════ */}
      <article className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-600">
                Quick Guide
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
              Essential CAVA Location Info
            </h2>
          </div>

          <div className="space-y-5">
            {[
              {
                num: '01',
                accent: 'border-l-[#0A6847]',
                badge: 'bg-emerald-50 text-[#0A6847]',
                title: 'CAVA Restaurant Opening and Closing Hours',
                text: 'Most CAVA locations open around late morning and stay open through the evening, covering both lunch and dinner crowds. Hours can shift slightly based on location and local demand. Checking hours online before visiting saves time and avoids any disappointment from arriving too early or late.',
              },
              {
                num: '02',
                accent: 'border-l-[#E3A33B]',
                badge: 'bg-amber-50 text-amber-700',
                title: 'CAVA Pickup and Delivery Options',
                text: 'CAVA makes it simple to order ahead through its app or website for quick pickup. Many locations also partner with popular delivery services, so you can enjoy a fresh bowl without leaving home. Delivery availability depends on your specific location, so checking ahead is always smart.',
              },
              {
                num: '03',
                accent: 'border-l-sky-500',
                badge: 'bg-sky-50 text-sky-700',
                title: 'What to Know Before Visiting CAVA',
                text: 'Before heading to CAVA, it helps to know the menu is fully customizable, letting you build bowls or pitas exactly how you like them. Portion sizes are generous, and most locations move quickly even during busy hours. Bringing a little patience during peak lunch times always helps.',
              },
              {
                num: '04',
                accent: 'border-l-purple-500',
                badge: 'bg-purple-50 text-purple-700',
                title: 'New CAVA Restaurant Locations',
                text: 'CAVA continues opening new locations in both familiar and brand new markets. Expansion plans often target growing suburbs and mid sized cities that previously lacked a location. Keeping an eye on official announcements is the best way to learn when a new spot lands near you.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`group flex items-start gap-5 bg-gradient-to-r from-[#FAFAF8] to-white rounded-2xl border border-gray-200/80 border-l-4 ${item.accent} p-6 shadow-xs hover:shadow-md transition-all`}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${item.badge} flex items-center justify-center font-black text-lg`}>
                  {item.num}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-black text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* ════════════════════ CONCLUSION ════════════════════ */}
      <section className="py-[10px] bg-[#FAFAF8] border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm text-center">
            <h2 className="text-xl font-black text-gray-900 mb-2">Conclusion</h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Finding CAVA locations near you has never been simpler, thanks to location finders, map tools, and the official app. From New York to California, CAVA keeps expanding into new communities nationwide. Whether you want pickup, delivery, or a quick dine in visit, checking hours and location details ahead of time makes every CAVA trip smooth and satisfying.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════ FAQs ════════════════════ */}
      <section className="py-[10px] bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-[10px] text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2.5 text-left">
            {[
              ['How many CAVA locations are there in the USA?', 'CAVA operates hundreds of locations across the United States, with numbers growing steadily each year. New restaurants open regularly in both established and emerging markets, making it easier than ever to find a nearby location no matter where you live.'],
              ['Which states have CAVA restaurants?', 'CAVA restaurants can be found in many states, including New York, California, Texas, Florida, and the Washington DC area. The brand continues expanding into new regions, so checking the official location finder is the best way to confirm availability near you.'],
              ['How can I find a CAVA near me?', 'The easiest way to find CAVA near me is through Google Maps, the CAVA website, or the CAVA app. Simply enter your city or ZIP code and nearby locations will appear instantly with directions, hours, and menu details included.'],
              ['Are CAVA restaurants open on weekends?', 'Yes, most CAVA locations stay open throughout the weekend, serving both lunch and dinner crowds. Specific hours can vary slightly by location, so it is always smart to check the exact restaurant page before planning your visit.'],
              ['Does every CAVA location offer delivery?', 'Not every CAVA location offers delivery, since availability depends on local delivery partners and demand. Checking the CAVA app or a delivery service directly will confirm whether your nearest location supports delivery before you place an order.'],
              ['Can I order CAVA online for pickup?', 'Yes, CAVA allows online ordering for pickup through its official app and website. This lets you skip the line, customize your order exactly how you want it, and grab your meal quickly once you arrive at the restaurant.'],
              ['Is CAVA healthy?', 'CAVA is generally considered a healthy option since meals are built around fresh vegetables, lean proteins, and customizable ingredients. Diners can easily control portion sizes and swap items to match personal dietary goals, making it a flexible choice.'],
            ].map(([q, a]) => (
              <details key={q} className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                  <span>{q}</span>
                  <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform flex-shrink-0 ml-4">+</span>
                </summary>
                <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ CTA SECTION ════════════════════ */}
      <section className="py-[10px] bg-gradient-to-br from-[#0A6847] via-[#085a3d] to-[#064e34] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-2 text-white">
            Ready to Order Fresh Mediterranean?
          </h2>
          <p className="text-emerald-100 text-sm sm:text-base max-w-xl mx-auto mb-[10px] leading-relaxed">
            Explore the full menu with current prices. Calculate nutrition numbers for your custom bowl.
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
