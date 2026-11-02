"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  menuData,
  categoryLabels,
  categoryOrder,
  categorySlugs,
  categoryDescriptions,
  getItemImage,
  getItemAlt,
  type NutritionItem,
} from "@/data/menu";

const ACCENT_GRADIENT = "linear-gradient(90deg, #0A6847, #E3A33B)";
const FALLBACK_IMAGE = "/images/menu/harissa-avocado-bowl.webp";

/* ───────────────────────── Image with fallback ───────────────────────── */
function MenuImage({ id, alt }: { id: string; alt: string }) {
  const [src, setSrc] = useState(getItemImage(id));
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      className="object-cover group-hover:scale-105 transition-transform duration-500"
      onError={() => src !== FALLBACK_IMAGE && setSrc(FALLBACK_IMAGE)}
    />
  );
}

/* ───────────────────────────── Product card ──────────────────────────── */
function getBadge(item: NutritionItem): { label: string; className: string } | null {
  if (item.protein >= 30) return { label: "High Protein", className: "bg-[#0A6847]" };
  if (item.calories > 0 && item.calories <= 50) return { label: "Low Cal", className: "bg-[#E3A33B]" };
  return null;
}

function ProductCard({ item }: { item: NutritionItem }) {
  const slug = categorySlugs[item.category];
  const badge = getBadge(item);
  const macros = [
    { label: "Cal", value: `${item.calories}` },
    { label: "Protein", value: `${item.protein}g` },
    { label: "Carbs", value: `${item.carbs}g` },
    { label: "Fat", value: `${item.fat}g` },
  ];

  return (
    <Link
      href={`/menu/${slug}/${item.id}`}
      className="group bg-white rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col h-full relative overflow-hidden border border-black/[0.07] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
    >
      {/* Image */}
      <div className="aspect-[4/3] w-full rounded-lg md:rounded-xl mb-3 overflow-hidden relative bg-gray-50">
        <MenuImage id={item.id} alt={getItemAlt(item.id, item.name)} />
        {badge && (
          <span
            className={`absolute top-2 right-2 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider z-10 ${badge.className}`}
          >
            {badge.label}
          </span>
        )}
      </div>

      {/* Name + price */}
      <h3 className="font-bold text-sm md:text-base text-gray-900 group-hover:text-[#0A6847] transition-colors leading-tight mb-1">
        {item.name}
      </h3>
      <p className="text-[11px] md:text-xs text-gray-400 mb-3 flex-grow">
        {item.price || "Price varies"}
      </p>

      {/* Nutrition strip */}
      <div className="border-t border-gray-100 pt-2.5 mt-auto">
        <div className="grid grid-cols-4 gap-0.5 text-center">
          {macros.map((m) => (
            <div key={m.label} className="flex flex-col">
              <span className="text-[8px] md:text-[9px] text-gray-400 uppercase font-bold tracking-wider">
                {m.label}
              </span>
              <span className="text-[11px] md:text-xs font-bold text-gray-900 tabular-nums">{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}

/* ─────────────── SEO headings + paras for each category ─────────────── */
const seoContent: Record<string, { heading: string; para: string }> = {
  "curated-bowl": {
    heading: "Cava Curated Bowls Menu With Prices",
    para: `The <a href="/menu/curated-bowls" class="text-[#0A6847] font-semibold hover:underline">Cava Bowl Menu</a> gives you full freedom to build your perfect meal. Start with a grain or green base. Add a lean protein like grilled chicken or falafel. Top it with fresh dips, toppings, and your favorite dressing. Each bowl is filling, nutritious, and made fresh in front of you. CAVA bowls are one of the most popular choices on the entire menu today.`,
  },
  "curated-pita": {
    heading: "Cava Curated Pitas Menu With Prices",
    para: `The <a href="/menu/curated-pitas" class="text-[#0A6847] font-semibold hover:underline">Cava Curated Pitas Menu</a> features warm, handcrafted pita wraps with bold Mediterranean flavor. Each pita is filled with premium proteins, signature dips, and fresh vegetables. Popular options include Spicy Lamb Meatball, Garlic Chicken Veggie, and Crispy Falafel pitas. The Cava Curated Pitas Menu is perfect for anyone who wants a handheld meal packed with taste and real nutrition.`,
  },
  "base": {
    heading: "Cava Bases Menu With Prices",
    para: `The <a href="/menu/bases" class="text-[#0A6847] font-semibold hover:underline">Cava Bases Menu</a> is where every custom bowl begins. You can choose from SuperGreens, Baby Spinach, Romaine, Brown Rice, Saffron Basmati Rice, or Black Lentils. The Cava Bases Menu gives you both light and hearty options to match your nutrition goals. Greens are low in calories while grains add energy and fiber to keep you full for longer.`,
  },
  "main": {
    heading: "Cava Mains Menu With Prices",
    para: `The <a href="/menu/mains" class="text-[#0A6847] font-semibold hover:underline">Cava Mains Menu</a> includes all the proteins that make your bowl or pita satisfying. Choose from Grilled Chicken, Harissa Honey Chicken, Grilled Steak, Braised Lamb, and Roasted Vegetables. The Cava Mains Menu also offers plant-based options like Crispy Falafel for vegetarian diners. Each main is seasoned with Mediterranean spices and cooked fresh throughout the entire day.`,
  },
  "kids": {
    heading: "Cava Kids Meal Menu With Prices",
    para: `The <a href="/menu/kids-meal" class="text-[#0A6847] font-semibold hover:underline">Cava Kids Meal Menu</a> makes it easy to feed young ones something healthy and delicious. It features smaller, kid-friendly portions with familiar Mediterranean ingredients. The Cava Kids Meal Menu includes options that are mild in flavor and balanced in nutrition. Parents love that kids can enjoy real food with no artificial ingredients or unnecessary additives added.`,
  },
  "topping": {
    heading: "Cava Toppings Menu With Prices",
    para: `The <a href="/menu/toppings" class="text-[#0A6847] font-semibold hover:underline">Cava Toppings Menu</a> adds crunch, freshness, and color to every bowl. You can choose from Persian cucumber, tomato and onion salad, cabbage slaw, pickled onions, kalamata olives, and more. The Cava Toppings Menu items are included at no extra charge. They add fiber, vitamins, and variety to your meal without raising the calorie count significantly.`,
  },
  "dip": {
    heading: "Cava Dips & Spreads Menu With Prices",
    para: `The <a href="/menu/dips-spreads" class="text-[#0A6847] font-semibold hover:underline">Cava Dips &amp; Spreads Menu</a> brings rich Mediterranean flavor to every bite. Options include Traditional Hummus, Crazy Feta, Tzatziki, Roasted Eggplant, and spicy Harissa. The Cava Dips &amp; Spreads Menu allows up to three complimentary scoops per bowl. Each dip is made with clean ingredients and adds healthy fats, protein, or bold taste to your meal.`,
  },
  "dressing": {
    heading: "Cava Dressings Menu With Prices",
    para: `The <a href="/menu/dressings" class="text-[#0A6847] font-semibold hover:underline">Cava Dressings Menu</a> finishes your bowl with the perfect flavor. Choose from options like Lemon Herb Tahini, Garlic Dressing, Yogurt Dill, or Hot Harissa Vinaigrette. The Cava Dressings Menu includes both light and bold options to suit every taste. Each dressing is crafted to complement Mediterranean ingredients without overpowering the natural flavors of your bowl.`,
  },
  "side": {
    heading: "Cava Sides Menu With Prices",
    para: `The <a href="/menu/sides" class="text-[#0A6847] font-semibold hover:underline">Cava Sides Menu</a> lets you add something extra to round out your meal. Pita bread, pita chips, and seasonal sides are available to complement your main order. The Cava Sides Menu is great for sharing or satisfying a bigger appetite. Sides are priced affordably and pair well with any bowl or pita on the main CAVA menu.`,
  },
  "dessert": {
    heading: "Cava Desserts Menu With Prices",
    para: `The <a href="/menu/desserts" class="text-[#0A6847] font-semibold hover:underline">Cava Desserts Menu</a> offers a sweet finish to your healthy Mediterranean meal. Greyston Bakery brownies and blondies are the signature dessert items. The Cava Desserts Menu keeps things simple and satisfying without overloading your meal. Each dessert item is baked by a purpose-driven bakery that supports community employment and social values in every batch.`,
  },
  "drink": {
    heading: "Cava Drinks Menu With Prices",
    para: `The <a href="/menu/drinks" class="text-[#0A6847] font-semibold hover:underline">Cava Drinks Menu</a> keeps you refreshed with clean, flavorful beverages. Options include Classic Lemonade, Blueberry Lavender Lemonade, and Spindrift sparkling water. The Cava Drinks Menu also offers fountain drinks and bottled water for simple hydration. Every drink option pairs well with the bold Mediterranean flavors of your food order at CAVA.`,
  },
};

/* ───────────────────────────── Main browser ──────────────────────────── */
export default function MenuBrowser() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>(categoryOrder[0]);
  const tabRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const tabContainerRef = useRef<HTMLDivElement>(null);

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categoryOrder
      .map((cat) => ({
        cat,
        items: menuData.filter(
          (i) =>
            i.category === cat &&
            (!q || i.name.toLowerCase().includes(q) || categoryLabels[cat].toLowerCase().includes(q))
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [query]);

  // Scroll-spy: highlight the tab of the section currently in view
  useEffect(() => {
    const sections = grouped
      .map((g) => document.getElementById(categorySlugs[g.cat]))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          const cat = visible[0].target.getAttribute("data-cat");
          if (cat) setActive(cat);
        }
      },
      { rootMargin: "-170px 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [grouped]);

  // Keep the active tab visible inside the horizontal tab bar
  useEffect(() => {
    const tab = tabRefs.current[active];
    const container = tabContainerRef.current;
    if (tab && container) {
      const left = tab.offsetLeft - container.clientWidth / 2 + tab.clientWidth / 2;
      container.scrollTo({ left, behavior: "smooth" });
    }
  }, [active]);

  return (
    <>
      {/* Search */}
      <div className="relative w-full max-w-3xl mx-auto">
        <div className="relative flex items-center bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden focus-within:border-[#0A6847] focus-within:ring-4 focus-within:ring-[#0A6847]/10 transition-all">
          <div className="pl-5 pr-3 text-gray-400">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search bowls, pitas, dips, drinks..."
            className="w-full py-4 pr-4 text-base bg-transparent outline-none text-gray-900 placeholder-gray-400 font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="mr-4 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-gray-700"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Sticky category tabs */}
      <div
        className="sticky top-20 z-40 border-b border-gray-200/60 mt-2.5 -mx-4 sm:-mx-6 lg:-mx-8"
        style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
      >
        <div
          ref={tabContainerRef}
          className="flex overflow-x-auto px-4 sm:px-6 lg:px-8 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {grouped.map(({ cat }) => {
            const isActive = active === cat;
            return (
              <a
                key={cat}
                ref={(el) => {
                  tabRefs.current[cat] = el;
                }}
                href={`#${categorySlugs[cat]}`}
                className={`relative px-4 sm:px-5 py-3.5 whitespace-nowrap text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.06em] transition-colors duration-300 ${
                  isActive ? "text-[#0A6847]" : "text-black/40 hover:text-black/70"
                }`}
              >
                {categoryLabels[cat]}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-[2.5px] rounded-full"
                    style={{ background: ACCENT_GRADIENT }}
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>

      {/* Category sections */}
      <div className="pt-2.5">
        {grouped.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg font-semibold text-gray-900 mb-1">No items found</p>
            <p className="text-gray-500 text-sm">Try a different search term.</p>
          </div>
        )}

        {grouped.map(({ cat, items }) => {
          const slug = categorySlugs[cat];
          return (
            <section key={cat} id={slug} data-cat={cat} className="mb-[10px] scroll-mt-28">
              {/* Category header */}
              <div className="mb-[10px] pb-2 border-b border-gray-200/70">
                <div className="text-center mb-2">
                  <div className="inline-flex items-center gap-2.5 mb-2">
                    <div className="h-[3px] w-7 rounded-full" style={{ background: ACCENT_GRADIENT }} />
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0A6847]">
                      {items.length} {items.length === 1 ? "Item" : "Items"}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                    {seoContent[cat]?.heading ?? categoryLabels[cat]}
                  </h2>
                </div>
                <div className="flex justify-center">
                  <Link
                    href={`/menu/${slug}`}
                    className="group/btn inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-[#0A6847] bg-emerald-50/80 border border-emerald-200/60 hover:bg-[#0A6847] hover:text-white hover:border-[#0A6847] transition-all duration-200"
                  >
                    View All
                    <svg
                      className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* SEO paragraph */}
              {seoContent[cat]?.para && (
                <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed max-w-4xl mx-auto text-center mb-3"
                  dangerouslySetInnerHTML={{ __html: seoContent[cat].para }}
                />
              )}

              {/* Items grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
                {items.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
