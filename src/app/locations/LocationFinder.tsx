'use client';

import { useState, useMemo } from 'react';

export interface CavaLocation {
  state: string;
  city: string;
  address: string;
  phone: string;
}

export const locationData: CavaLocation[] = [
  // Alabama
  { state: 'Alabama', city: 'Birmingham', address: '2900 Cahaba Village Plaza, Birmingham, AL 35243', phone: '(205) 555-2900' },
  { state: 'Alabama', city: 'Huntsville', address: '4800 Whitesburg Dr, Huntsville, AL 35802', phone: '(256) 555-4800' },
  // California  
  { state: 'California', city: 'Los Angeles', address: '6333 W 3rd St, Los Angeles, CA 90036', phone: '(323) 555-6333' },
  { state: 'California', city: 'Irvine', address: '3987 Barranca Pkwy, Irvine, CA 92606', phone: '(949) 555-3987' },
  { state: 'California', city: 'San Diego', address: '4545 La Jolla Village Dr, San Diego, CA 92122', phone: '(858) 555-4545' },
  // Colorado
  { state: 'Colorado', city: 'Denver', address: '1600 California St, Denver, CO 80202', phone: '(303) 555-1600' },
  // Connecticut
  { state: 'Connecticut', city: 'Westport', address: '1860 Post Rd E, Westport, CT 06880', phone: '(203) 555-1860' },
  // Delaware
  { state: 'Delaware', city: 'Wilmington', address: '4737 Concord Pike, Wilmington, DE 19803', phone: '(302) 555-4737' },
  // Florida
  { state: 'Florida', city: 'Miami', address: '1200 Brickell Ave, Miami, FL 33131', phone: '(305) 555-1200' },
  { state: 'Florida', city: 'Orlando', address: '4200 Conroy Rd, Orlando, FL 32839', phone: '(407) 555-4200' },
  { state: 'Florida', city: 'Tampa', address: '2223 N Westshore Blvd, Tampa, FL 33607', phone: '(813) 555-2223' },
  { state: 'Florida', city: 'Jacksonville', address: '4855 Town Center Pkwy, Jacksonville, FL 32246', phone: '(904) 555-4855' },
  // Georgia
  { state: 'Georgia', city: 'Atlanta', address: '3393 Peachtree Rd NE, Atlanta, GA 30326', phone: '(404) 555-3393' },
  { state: 'Georgia', city: 'Roswell', address: '10800 Alpharetta Hwy, Roswell, GA 30076', phone: '(770) 555-1080' },
  // Illinois
  { state: 'Illinois', city: 'Chicago', address: '30 S Michigan Ave, Chicago, IL 60603', phone: '(312) 555-3000' },
  { state: 'Illinois', city: 'Naperville', address: '2815 Showplace Dr, Naperville, IL 60564', phone: '(630) 555-2815' },
  // Indiana
  { state: 'Indiana', city: 'Indianapolis', address: '49 W Maryland St, Indianapolis, IN 46204', phone: '(317) 555-4900' },
  // Kansas
  { state: 'Kansas', city: 'Overland Park', address: '11551 Ash St, Overland Park, KS 66211', phone: '(913) 555-1155' },
  // Kentucky
  { state: 'Kentucky', city: 'Louisville', address: '4600 Shelbyville Rd, Louisville, KY 40207', phone: '(502) 555-4600' },
  // Maryland
  { state: 'Maryland', city: 'Bethesda', address: '7263 Woodmont Ave, Bethesda, MD 20814', phone: '(301) 555-7263' },
  { state: 'Maryland', city: 'Rockville', address: '12266 Rockville Pike, Rockville, MD 20852', phone: '(301) 555-1226' },
  { state: 'Maryland', city: 'Columbia', address: '10300 Little Patuxent Pkwy, Columbia, MD 21044', phone: '(410) 555-1030' },
  { state: 'Maryland', city: 'Towson', address: '825 Dulaney Valley Rd, Towson, MD 21204', phone: '(410) 555-0825' },
  // Massachusetts
  { state: 'Massachusetts', city: 'Boston', address: '177 Huntington Ave, Boston, MA 02115', phone: '(617) 555-1770' },
  // Michigan
  { state: 'Michigan', city: 'Troy', address: '3050 W Big Beaver Rd, Troy, MI 48084', phone: '(248) 555-3050' },
  // Missouri
  { state: 'Missouri', city: 'Kansas City', address: '4747 Broadway Blvd, Kansas City, MO 64112', phone: '(816) 555-4747' },
  // New Jersey
  { state: 'New Jersey', city: 'Hoboken', address: '92 River St, Hoboken, NJ 07030', phone: '(201) 555-0092' },
  { state: 'New Jersey', city: 'Princeton', address: '3545 US 1, Princeton, NJ 08540', phone: '(609) 555-3545' },
  // New York
  { state: 'New York', city: 'New York City', address: '1627 Broadway, New York, NY 10019', phone: '(212) 555-1627' },
  { state: 'New York', city: 'Brooklyn', address: '445 Albee Square W, Brooklyn, NY 11201', phone: '(718) 555-4450' },
  { state: 'New York', city: 'Garden City', address: '630 Old Country Rd, Garden City, NY 11530', phone: '(516) 555-0630' },
  // North Carolina
  { state: 'North Carolina', city: 'Charlotte', address: '6801 Morrison Blvd, Charlotte, NC 28211', phone: '(704) 555-6801' },
  { state: 'North Carolina', city: 'Raleigh', address: '4325 Glenwood Ave, Raleigh, NC 27612', phone: '(919) 555-4325' },
  // Ohio
  { state: 'Ohio', city: 'Columbus', address: '1379 Grandview Ave, Columbus, OH 43212', phone: '(614) 555-1379' },
  // Oklahoma
  { state: 'Oklahoma', city: 'Oklahoma City', address: '13920 N Pennsylvania Ave, Oklahoma City, OK 73134', phone: '(405) 555-1392' },
  // Pennsylvania
  { state: 'Pennsylvania', city: 'Philadelphia', address: '1713 Walnut St, Philadelphia, PA 19103', phone: '(215) 555-1713' },
  { state: 'Pennsylvania', city: 'King of Prussia', address: '160 N Gulph Rd, King of Prussia, PA 19406', phone: '(610) 555-0160' },
  // South Carolina
  { state: 'South Carolina', city: 'Greenville', address: '700 Haywood Rd, Greenville, SC 29607', phone: '(864) 555-0700' },
  // Tennessee
  { state: 'Tennessee', city: 'Nashville', address: '2021 Broadway, Nashville, TN 37203', phone: '(615) 555-2021' },
  // Texas
  { state: 'Texas', city: 'Austin', address: '10710 Research Blvd, Austin, TX 78759', phone: '(512) 555-1071' },
  { state: 'Texas', city: 'Dallas', address: '8255 Park Ln, Dallas, TX 75231', phone: '(214) 555-8255' },
  { state: 'Texas', city: 'Houston', address: '5015 Westheimer Rd, Houston, TX 77056', phone: '(713) 555-5015' },
  { state: 'Texas', city: 'San Antonio', address: '999 E Basse Rd, San Antonio, TX 78209', phone: '(210) 555-0999' },
  // Virginia
  { state: 'Virginia', city: 'Arlington', address: '3100 Clarendon Blvd, Arlington, VA 22201', phone: '(703) 555-3100' },
  { state: 'Virginia', city: 'Alexandria', address: '3690 King St, Alexandria, VA 22302', phone: '(703) 555-3690' },
  { state: 'Virginia', city: 'Tysons', address: '8500 Leesburg Pike, Tysons, VA 22182', phone: '(703) 555-8500' },
  { state: 'Virginia', city: 'Richmond', address: '11500 Midlothian Tpke, Richmond, VA 23235', phone: '(804) 555-1150' },
  // Washington DC
  { state: 'Washington DC', city: 'Washington', address: '707 H St NW, Washington, DC 20001', phone: '(202) 555-0707' },
  { state: 'Washington DC', city: 'Georgetown', address: '3207 M St NW, Washington, DC 20007', phone: '(202) 555-3207' },
];

export default function LocationFinder() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('All');

  // Extract unique sorted list of states
  const states = useMemo(() => {
    const unique = Array.from(new Set(locationData.map((item) => item.state)));
    return unique.sort((a, b) => a.localeCompare(b));
  }, []);

  // Filter locations by search query and selected state
  const filteredLocations = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return locationData.filter((location) => {
      // State filter check
      if (selectedState !== 'All' && location.state !== selectedState) {
        return false;
      }

      // Search query check (city, state, or address)
      if (q) {
        const matchesCity = location.city.toLowerCase().includes(q);
        const matchesState = location.state.toLowerCase().includes(q);
        const matchesAddress = location.address.toLowerCase().includes(q);
        return matchesCity || matchesState || matchesAddress;
      }

      return true;
    });
  }, [searchQuery, selectedState]);

  const handleClear = () => {
    setSearchQuery('');
    setSelectedState('All');
  };

  return (
    <div className="space-y-[10px]">
      {/* Search Input Bar */}
      <div className="bg-white rounded-2xl border border-gray-200/80 p-4 sm:p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, state, or address..."
              aria-label="Search CAVA locations"
              className="w-full h-12 pl-4 pr-10 text-sm sm:text-base text-[#1A1A2E] bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A6847] focus:bg-white transition-all placeholder:text-gray-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search input"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 flex items-center justify-center text-xs transition-colors"
              >
                ✕
              </button>
            )}
          </div>

          {(searchQuery || selectedState !== 'All') && (
            <button
              type="button"
              onClick={handleClear}
              className="h-12 px-5 text-sm font-semibold text-gray-600 hover:text-[#0A6847] border border-gray-200 rounded-xl hover:border-[#0A6847] bg-white transition-all flex items-center justify-center"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* State Filter Pills */}
        <div className="mt-[10px] pt-[10px] border-t border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Filter by State
            </span>
            <span className="text-xs text-gray-400 font-medium">
              {states.length} States
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            <button
              type="button"
              onClick={() => setSelectedState('All')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedState === 'All'
                  ? 'bg-[#0A6847] text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All States
            </button>
            {states.map((state) => {
              const isSelected = selectedState === state;
              return (
                <button
                  key={state}
                  type="button"
                  onClick={() => setSelectedState(state)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#0A6847] text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {state}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Result Count Status */}
      <div className="flex items-center justify-between text-sm text-gray-500 px-1">
        <span>
          Showing <strong className="text-[#1A1A2E]">{filteredLocations.length}</strong>{' '}
          {filteredLocations.length === 1 ? 'location' : 'locations'}
          {selectedState !== 'All' && ` in ${selectedState}`}
        </span>
        {searchQuery && (
          <span className="text-xs text-gray-400">
            Filtered by &ldquo;{searchQuery}&rdquo;
          </span>
        )}
      </div>

      {/* Grid of Location Cards */}
      {filteredLocations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((location) => {
            const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              location.address
            )}`;
            const phoneDigits = location.phone.replace(/[^0-9]/g, '');

            return (
              <div
                key={location.address}
                className="bg-white rounded-xl border border-gray-200/90 shadow-sm p-6 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-bold text-lg text-[#1A1A2E]">
                      {location.city}
                    </h3>
                    <span className="bg-[#0A6847] text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                      {location.state}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-3">
                    {location.address}
                  </p>

                  <a
                    href={`tel:${phoneDigits}`}
                    className="text-gray-500 text-sm hover:text-[#0A6847] transition-colors inline-block mb-4"
                  >
                    {location.phone}
                  </a>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A6847] font-semibold text-sm hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>Get Directions</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center space-y-4">
          <p className="text-base font-semibold text-[#1A1A2E]">
            No locations found matching your search.
          </p>
          <p className="text-sm text-gray-500">
            Try adjusting your search terms or select another state.
          </p>
          <button
            type="button"
            onClick={handleClear}
            className="px-6 py-2.5 rounded-full bg-[#0A6847] text-white text-sm font-semibold hover:bg-[#085238] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
