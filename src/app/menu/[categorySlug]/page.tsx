import {
  menuData,
  categoryLabels,
  categorySlugs,
  categoryDescriptions,
  getCategoryBySlug,
  getItemImage,
  getItemAlt,
  type NutritionItem,
} from "@/data/menu";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BowlBuilder from "./BowlBuilder";

const ACCENT_GRADIENT = "linear-gradient(90deg, #0A6847, #E3A33B)";

// ── Static Params ──
export function generateStaticParams() {
  return Object.values(categorySlugs).map((s) => ({ categorySlug: s }));
}

// ── Metadata ──
export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return { title: "Not Found" };

  const getBaseMeta = (): Metadata => {
  if (categorySlug === "curated-bowls") {
    return {
      title: "CAVA Bowls Menu With Prices 2026 | Full Bowl Guide",
      description:
        "Are you looking for the CAVA bowls menu with prices? Explore delicious bowl options, ingredients, calories, and prices to find your perfect meal.",
      openGraph: {
        title: "CAVA Bowls Menu With Prices 2026 | Full Bowl Guide",
        description:
          "Are you looking for the CAVA bowls menu with prices? Explore delicious bowl options, ingredients, calories, and prices to find your perfect meal.",
        images: [
          {
            url: "/images/Cava%20Bowls%20menu%20and%20prices.webp",
            width: 1200,
            height: 630,
            alt: "CAVA Bowls Menu With Prices 2026",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "CAVA Bowls Menu With Prices 2026 | Full Bowl Guide",
        description:
          "Are you looking for the CAVA bowls menu with prices? Explore delicious bowl options, ingredients, calories, and prices to find your perfect meal.",
        images: ["/images/Cava%20Bowls%20menu%20and%20prices.webp"],
      },
    };
  }

  if (categorySlug === "curated-pitas") {
    return {
      title: "CAVA Curated Pitas Menu With Prices 2026",
      description:
        "Explore the CAVA Curated Pitas Menu with prices, ingredients, and calories. Compare delicious pita options and find your favorite meal before ordering.",
      openGraph: {
        title: "CAVA Curated Pitas Menu With Prices 2026",
        description:
          "Explore the CAVA Curated Pitas Menu with prices, ingredients, and calories. Compare delicious pita options and find your favorite meal before ordering.",
        images: [
          {
            url: "/images/Cava%20Curated%20Pitas%20Menu.webp",
            width: 1200,
            height: 630,
            alt: "CAVA Curated Pitas Menu With Prices 2026",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "CAVA Curated Pitas Menu With Prices 2026",
        description:
          "Explore the CAVA Curated Pitas Menu with prices, ingredients, and calories. Compare delicious pita options and find your favorite meal before ordering.",
        images: ["/images/Cava%20Curated%20Pitas%20Menu.webp"],
      },
    };
  }

  if (categorySlug === "mains") {
    return {
      title: "CAVA Mains Menu With Prices & Calories 2026",
      description:
        "Explore the CAVA Mains Menu with updated prices and calories. Compare delicious bowls and other main dishes to find your perfect meal.",
      openGraph: {
        title: "CAVA Mains Menu With Prices & Calories 2026",
        description:
          "Explore the CAVA Mains Menu with updated prices and calories. Compare delicious bowls and other main dishes to find your perfect meal.",
        images: [
          {
            url: "/images/Cava%20Mains%20Menu%20%26%20Prices.webp",
            width: 1200,
            height: 630,
            alt: "CAVA Mains Menu With Prices & Calories 2026",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "CAVA Mains Menu With Prices & Calories 2026",
        description:
          "Explore the CAVA Mains Menu with updated prices and calories. Compare delicious bowls and other main dishes to find your perfect meal.",
        images: ["/images/Cava%20Mains%20Menu%20%26%20Prices.webp"],
      },
    };
  }

  if (categorySlug === "toppings") {
    return {
      title: "CAVA Toppings Menu With Latest Prices 2026",
      description:
        "Picking the right toppings at CAVA often confuses first time customers a lot. Too many choices make it hard to build a balanced bowl or pita quickly. This CAVA Toppings Menu With Prices guide removes that confusion completely for you. You get pricing, calories and topping combinations explained clearly here. Read ahead before your next order to build a tastier meal confidently.",
      openGraph: {
        title: "CAVA Toppings Menu With Latest Prices 2026",
        description:
          "Picking the right toppings at CAVA often confuses first time customers a lot. Too many choices make it hard to build a balanced bowl or pita quickly. This CAVA Toppings Menu With Prices guide removes that confusion completely for you. You get pricing, calories and topping combinations explained clearly here. Read ahead before your next order to build a tastier meal confidently.",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "CAVA Toppings Menu With Latest Prices 2026",
        description:
          "Picking the right toppings at CAVA often confuses first time customers a lot. Too many choices make it hard to build a balanced bowl or pita quickly. This CAVA Toppings Menu With Prices guide removes that confusion completely for you. You get pricing, calories and topping combinations explained clearly here. Read ahead before your next order to build a tastier meal confidently.",
      },
    };
  }

  if (categorySlug === "bases") {
    return {
      title: "CAVA Bases Menu With Prices | Full Guide 2026",
      description:
        "Explore the CAVA Bases Menu with prices, including fresh greens, grains and other tasty options. Find your favourite base and build your perfect meal.",
      openGraph: {
        title: "CAVA Bases Menu With Prices | Full Guide 2026",
        description:
          "Explore the CAVA Bases Menu with prices, including fresh greens, grains and other tasty options. Find your favourite base and build your perfect meal.",
        images: [
          {
            url: "/images/Cava%20Bases%20Menu%20%26%20Prices.webp",
            width: 1200,
            height: 630,
            alt: "CAVA Bases Menu With Prices 2026",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "CAVA Bases Menu With Prices | Full Guide 2026",
        description:
          "Explore the CAVA Bases Menu with prices, including fresh greens, grains and other tasty options. Find your favourite base and build your perfect meal.",
        images: ["/images/Cava%20Bases%20Menu%20%26%20Prices.webp"],
      },
    };
  }

  if (categorySlug === "kids-meal") {
    return {
      title: "CAVA Kids Meal Menu With Prices, Calories & Options",
      description:
        "Are you looking for the CAVA Kids Meal Menu With Prices? Explore kids meal options, calories, ingredients, sides and nutrition details before ordering.",
      openGraph: {
        title: "CAVA Kids Meal Menu With Prices, Calories & Options",
        description:
          "Are you looking for the CAVA Kids Meal Menu With Prices? Explore kids meal options, calories, ingredients, sides and nutrition details before ordering.",
        images: [
          {
            url: "/images/Cava%20kids%20Meal%20Menu%20and%20Prices.webp",
            width: 1200,
            height: 630,
            alt: "CAVA Kids Meal Menu With Prices",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "CAVA Kids Meal Menu With Prices, Calories & Options",
        description:
          "Are you looking for the CAVA Kids Meal Menu With Prices? Explore kids meal options, calories, ingredients, sides and nutrition details before ordering.",
        images: ["/images/Cava%20kids%20Meal%20Menu%20and%20Prices.webp"],
      },
    };
  }

  if (categorySlug === "dips-spreads") {
    return {
      title: "CAVA Dips & Spreads Menu With Prices and Calories",
      description:
        "Are you looking for the CAVA Dips & Spreads Menu With Prices? Explore delicious dips, ingredients, calories, nutrition facts and options for your next meal.",
      openGraph: {
        title: "CAVA Dips & Spreads Menu With Prices and Calories",
        description:
          "Are you looking for the CAVA Dips & Spreads Menu With Prices? Explore delicious dips, ingredients, calories, nutrition facts and options for your next meal.",
        images: [
          {
            url: "/images/Cava%20Dips%20and%20Spreads%20And%20Prices.webp",
            width: 1200,
            height: 630,
            alt: "CAVA Dips & Spreads Menu With Prices and Calories",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "CAVA Dips & Spreads Menu With Prices and Calories",
        description:
          "Are you looking for the CAVA Dips & Spreads Menu With Prices? Explore delicious dips, ingredients, calories, nutrition facts and options for your next meal.",
        images: ["/images/Cava%20Dips%20and%20Spreads%20And%20Prices.webp"],
      },
    };
  }

  if (categorySlug === "sides") {
    return {
      title: "CAVA Sides Menu With Prices, Calories & Options",
      description:
        "Are you looking for the CAVA Sides Menu With Prices? Explore side dishes, prices, calories, ingredients and nutrition details before placing your order.",
      openGraph: {
        title: "CAVA Sides Menu With Prices, Calories & Options",
        description:
          "Are you looking for the CAVA Sides Menu With Prices? Explore side dishes, prices, calories, ingredients and nutrition details before placing your order.",
        images: [
          {
            url: "/images/Cava%20Sides%20Menu%20and%20Prices.webp",
            width: 1200,
            height: 630,
            alt: "CAVA Sides Menu With Prices, Calories & Options",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "CAVA Sides Menu With Prices, Calories & Options",
        description:
          "Are you looking for the CAVA Sides Menu With Prices? Explore side dishes, prices, calories, ingredients and nutrition details before placing your order.",
        images: ["/images/Cava%20Sides%20Menu%20and%20Prices.webp"],
      },
    };
  }

  if (categorySlug === "drinks") {
    return {
      title: "CAVA Drinks Menu With Updated Prices 2026",
      description:
        "Are you looking for the CAVA Drinks Menu with prices? Explore refreshing drinks, flavours, calories, and available options to find your favourite beverage.",
      openGraph: {
        title: "CAVA Drinks Menu With Updated Prices 2026",
        description:
          "Are you looking for the CAVA Drinks Menu with prices? Explore refreshing drinks, flavours, calories, and available options to find your favourite beverage.",
        images: [
          {
            url: "/images/CAVA%20Drinks%20menu%20%26%20Prices.webp",
            width: 1200,
            height: 630,
            alt: "CAVA Drinks Menu With Updated Prices 2026",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "CAVA Drinks Menu With Updated Prices 2026",
        description:
          "Are you looking for the CAVA Drinks Menu with prices? Explore refreshing drinks, flavours, calories, and available options to find your favourite beverage.",
        images: ["/images/CAVA%20Drinks%20menu%20%26%20Prices.webp"],
      },
    };
  }

  if (categorySlug === "dressings") {
    return {
      title: "CAVA Dressings Menu & Prices 2027",
      description:
        "Explore the CAVA Dressings Menu with updated prices, calories and ingredients. Discover tasty dressing options for your favorite bowls and pitas.",
      openGraph: {
        title: "CAVA Dressings Menu & Prices 2027",
        description:
          "Explore the CAVA Dressings Menu with updated prices, calories and ingredients. Discover tasty dressing options for your favorite bowls and pitas.",
        images: [
          {
            url: "/images/Cava%20Dressings%20Menu.webp",
            width: 1200,
            height: 630,
            alt: "CAVA Dressings Menu & Prices 2027",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "CAVA Dressings Menu & Prices 2027",
        description:
          "Explore the CAVA Dressings Menu with updated prices, calories and ingredients. Discover tasty dressing options for your favorite bowls and pitas.",
        images: ["/images/Cava%20Dressings%20Menu.webp"],
      },
    };
  }

  if (categorySlug === "desserts") {
    return {
      title: "CAVA Desserts Menu With Prices & Calories 2026",
      description:
        "Explore the CAVA Desserts Menu with updated prices and calories. Check available sweet treats and choose your favourite dessert.",
      openGraph: {
        title: "CAVA Desserts Menu With Prices & Calories 2026",
        description:
          "Explore the CAVA Desserts Menu with updated prices and calories. Check available sweet treats and choose your favourite dessert.",
        images: [
          {
            url: "/images/Cava%20Desserts%20Menu.webp",
            width: 1200,
            height: 630,
            alt: "CAVA Desserts Menu With Prices & Calories 2026",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "CAVA Desserts Menu With Prices & Calories 2026",
        description:
          "Explore the CAVA Desserts Menu with updated prices and calories. Check available sweet treats and choose your favourite dessert.",
        images: ["/images/Cava%20Desserts%20Menu.webp"],
      },
    };
  }

  const label = categoryLabels[category];
  const items = menuData.filter((i) => i.category === category);
  return {
    title: `CAVA ${label} – Prices & Calories (${items.length} Items)`,
    description: `Full list of CAVA ${label.toLowerCase()} with updated prices, calories, and nutrition facts. Browse all ${items.length} items.`,
  };
  };

  const baseMeta = getBaseMeta();
  return {
    ...baseMeta,
    alternates: {
      canonical: `/menu/${categorySlug}`,
    },
    openGraph: {
      ...baseMeta.openGraph,
      url: `https://cavamenue.us/menu/${categorySlug}`,
    },
  };
}

// ── Badges ──
function getBadge(item: NutritionItem): { label: string; className: string } | null {
  if (item.protein >= 30) return { label: "High Protein", className: "bg-[#0A6847]" };
  if (item.calories > 0 && item.calories <= 50) return { label: "Low Cal", className: "bg-[#E3A33B]" };
  return null;
}

// ── Product Card ──
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
        <Image
          src={getItemImage(item.id, item.category)}
          alt={getItemAlt(item.id, item.name)}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
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

// ── Bases SEO Article ──
function BasesArticle() {
  return (
    <article className="bg-[#FAFAF8] border-t border-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-[10px] text-center">

        {/* H2: Types of Bases Available at CAVA */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Types of Bases Available at CAVA
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            CAVA keeps it simple with two groups, greens and grains. Greens include SuperGreens, baby
            spinach, and arugula. Grains include saffron basmati rice, brown rice, and RightRice. You
            can pick one base or split the bowl between two. Greens feel lighter, while grains keep
            you full longer.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: CAVA Bases Nutrition Facts */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            CAVA Bases Nutrition Facts
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Calories change a lot from one base to another. Greens are the lightest choice. Rice and
            RightRice bring more calories and carbs to the bowl. Portion size and mixing two bases
            also change the final number. Check CAVA’s official nutrition guide for exact values,
            since they get updated.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: CAVA Bases Allergen Information */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            CAVA Bases Allergen Information
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Most CAVA bases use simple ingredients, but allergens still deserve attention. Greens and
            rice don’t usually contain major allergens. Shared utensils and prep surfaces can still
            cause cross-contact, though. With a serious allergy, tell the team member before your
            bowl is built. Then confirm everything in CAVA’s official allergen guide.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: CAVA Rice Bases and Ingredients */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            CAVA Rice Bases and Ingredients
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            CAVA offers three rice style bases, saffron basmati, brown rice, and RightRice. Saffron
            basmati is light, fragrant, and lightly seasoned. Brown rice tastes nuttier and feels
            chewier. RightRice is a veggie-based option made mainly from lentils, chickpeas, and
            peas. All three go well with grilled chicken, falafel, and CAVA’s dips.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: How to Order CAVA Bases Online? */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            How to Order CAVA Bases Online?
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Open the CAVA app or website and start a bowl. Choose your base first, then add protein,
            dips, toppings, and dressing. Review your order and pick pickup or delivery. Then check
            out. The base comes with the bowl, so you won’t pay for it separately.
          </p>
          <div className="mt-3 h-px bg-gray-200" />
        </section>

        {/* Conclusion */}
        <section className="mb-3 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-black text-gray-900 mb-2">Conclusion</h2>
          <p className="text-gray-500 text-base leading-relaxed">
            CAVA gives you plenty of ways to build a bowl you’ll enjoy. Choose greens for something
            light. Pick saffron basmati or brown rice for a classic, filling base. Go with RightRice
            if you want a veggie-forward twist. Menu details can change by location, so check the
            official nutrition and allergen guides before ordering.
          </p>
        </section>

        {/* FAQs */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2.5 text-left">
            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>What bases does CAVA offer?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                CAVA offers greens and grains. Greens are SuperGreens, baby spinach, and arugula.
                Grains are saffron basmati rice, brown rice, and RightRice. Availability can vary by
                location.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>Does CAVA have a rice base?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Yes, it does. CAVA serves saffron basmati rice and brown rice. It also has
                RightRice, a veggie-based option made mainly from lentils, chickpeas, and peas.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>Are CAVA bases gluten-free?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Greens, rice, and RightRice are generally gluten-free as ingredients. Pita is not
                gluten-free. Cross-contact can still happen in a shared kitchen. Confirm with CAVA’s
                allergen guide if you need strict avoidance.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>What is the best base for a CAVA bowl?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                It depends on your goal. Greens suit a lighter bowl. Saffron basmati or brown rice
                make it more filling. RightRice is a good veggie-forward pick. You can also mix two
                bases for balance.
              </div>
            </details>
          </div>
        </section>

      </div>
    </article>
  );
}

// ── Kids Meal SEO Article ──
function KidsMealArticle() {
  return (
    <article className="bg-[#FAFAF8] border-t border-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-[10px] text-center">

        {/* H2: CAVA Kids Meal Nutrition Facts */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            CAVA Kids Meal Nutrition Facts
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Parents often want to know Cava Kids Meal calories before ordering. The total depends on
            the base, main, dips, and toppings you choose. Grilled chicken and falafel mains give
            your child protein and steady energy. Creamy dips add more calories, so use them in
            small amounts. Use the official CAVA nutrition calculator to confirm exact numbers for
            your build.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: CAVA Kids Meal Allergen Information */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            CAVA Kids Meal Allergen Information
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Food allergies make ordering for kids stressful for many parents. CAVA kitchens handle
            wheat, dairy, and sesame ingredients every single day. Cross contact can happen because
            everything is prepared on one shared line. Tell the team about your child’s allergy
            before they start building. Then review the official CAVA allergen guide for ingredient
            details.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: CAVA Kids Meal Dips and Toppings */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            CAVA Kids Meal Dips and Toppings
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Dips and toppings turn a plain bowl into a meal kids enjoy. The kids meal includes one
            dip, such as hummus, tzatziki, or Crazy Feta. Toppings like cucumbers, tomatoes, and
            pickled onions add crunch and colour. Mild dips suit younger children, while harissa is
            better for spicy eaters. Ask for a small taste first if your child is unsure.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: How to Customise a CAVA Kids Meal */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            How to Customise a CAVA Kids Meal
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Wondering how to customise a CAVA kids meal for picky eaters? Start by choosing a base,
            then add a main your child likes. Add one dip and keep toppings simple with two or three
            favourites. Ask for dressing on the side if your child dislikes sauce. Order through the
            app to build the meal without any rush.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* Conclusion */}
        <section className="mb-[10px] p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-black text-gray-900 mb-2">Conclusion</h2>
          <p className="text-gray-500 text-base leading-relaxed">
            A CAVA kids meal gives families a fresh, affordable, and flexible choice. Prices stay
            around $7 to $8, and calories depend on your choices. Check allergens carefully, pick
            familiar ingredients, and keep dips light. With these steps, ordering becomes quick,
            safe, and stress free. Your child gets a balanced meal, and you save money.
          </p>
        </section>

        {/* FAQs */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-[10px]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2.5 text-left">
            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>1. How much is a CAVA Kids Meal?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                A CAVA Kids Meal usually costs around $7 to $8. Prices change by location, so check the
                app for your store.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>2. What comes with a CAVA Kids Meal?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                It includes a half portion of base and main, plus one dip. Toppings, dressing, a side,
                and a small drink are also included.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>3. Does CAVA have a separate kids menu?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Yes, CAVA offers a kids meal built from its regular ingredients. It is a smaller
                version of the build your own bowl.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>4. Can you customise a CAVA Kids Meal?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Yes, CAVA lets you pick your base, main, dip, and toppings. Dressing can also be
                added on the side or removed.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>5. Are CAVA Kids Meals healthy?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Yes, it can be a healthy meal with smart choices. Choose grilled chicken, greens, and
                veggies, and go light on dips.
              </div>
            </details>
          </div>
        </section>

      </div>
    </article>
  );
}

// ── Curated Bowls SEO Article ──
function CuratedBowlsArticle() {
  return (
    <article className="bg-[#FAFAF8] border-t border-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-[10px] text-center">

        {/* H2: Most Popular CAVA Bowls to Try */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Most Popular CAVA Bowls to Try
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            CAVA bowls have earned a loyal following across the United States. The
            greens and grains bowl is a fan favorite. The cava greens grains bowl
            packs in nutrients and bold Mediterranean flavor. Customers love the
            mix of fresh toppings, warm proteins, and creamy dips. These bowls
            keep people coming back every week.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: CAVA Bowl Nutrition Facts */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            CAVA Bowl Nutrition Facts
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Cava Bowls Calories vary based on your ingredient choices. A standard
            bowl ranges from around 400 to over 900 calories. Protein options like
            grilled chicken or braised lamb add significant nutrition value. Use
            our{" "}
            <a href="/calculator" className="text-[#0A6847] font-semibold hover:underline">
              nutrition calculator
            </a>{" "}
            to track your exact macros before you order today.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: CAVA Bowl Allergen Information */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            CAVA Bowl Allergen Information
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            CAVA takes allergen awareness seriously across all locations. Most
            cava bowls are naturally gluten free and dairy flexible. Falafel and
            pita contain wheat and should be avoided by sensitive guests. See our
            full{" "}
            <a href="/gluten-free" className="text-[#0A6847] font-semibold hover:underline">
              gluten free menu
            </a>{" "}
            guide for a complete list of safe options.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: Low Calorie CAVA Bowls */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Low Calorie CAVA Bowls
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            You can build a low calorie bowl very easily at CAVA. Start with
            supergreens or romaine as your base instead of rice. Choose grilled
            chicken or roasted vegetables as your lean protein. Skip heavy dips
            and go with light toppings like cucumber and tomato. Cava Bowls
            Calories drop significantly with these simple smart swaps.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: How to Order CAVA Bowls Online? */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            How to Order CAVA Bowls Online?
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Ordering a Cava Bowl Menu With Prices online is quick and simple. Visit
            the official CAVA website or download the CAVA app to start. Sign in
            or continue as a guest to place your order. Choose your nearest
            location and customize your bowl step by step. Pickup and delivery
            options are available at most CAVA locations nationwide today.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* Conclusion */}
        <section className="mb-[10px] p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-black text-gray-900 mb-2">Conclusion</h2>
          <p className="text-gray-500 text-base leading-relaxed">
            CAVA bowls are a delicious and healthy choice for any meal. Whether you
            want high protein, low calorie, or bold Mediterranean flavor, there is
            a bowl for you. The Cava Bowl Menu With Prices makes it easy to choose
            wisely. Explore your options and build a bowl that fits your lifestyle
            and taste perfectly.
          </p>
        </section>

        {/* FAQs */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-[10px]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2.5 text-left">
            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>How much is a bowl at CAVA?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                CAVA bowls typically cost between $11 and $17. The price depends on your
                protein choice and any add-ons you select. Premium proteins like glazed salmon
                or braised lamb may be priced slightly higher at checkout.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>How many calories in a CAVA bowl?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Cava Bowls Calories range from about 400 to over 1,000. This depends on your
                base, protein, dips, and toppings. A lighter bowl with greens and grilled
                chicken stays well under 600 calories. A heavier build with rice and multiple
                dips can go higher.
              </div>
            </details>
          </div>
        </section>

      </div>
    </article>
  );
}

// ── Curated Pitas SEO Article ──
function CuratedPitasArticle() {
  const pitasNutrition = [
    { name: "Spicy Chicken + Avocado Pita", calories: "930", protein: "48g", carbs: "80g", fat: "48g", sodium: "2290mg" },
    { name: "Steak + Feta Pita", calories: "820", protein: "44g", carbs: "68g", fat: "42g", sodium: "1800mg" },
    { name: "Greek Chicken Pita", calories: "720", protein: "48g", carbs: "64g", fat: "30g", sodium: "2230mg" },
  ];

  return (
    <article className="bg-[#FAFAF8] border-t border-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-[10px] text-center">

        {/* H2: Best CAVA Curated Pitas for Every Taste */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Best CAVA Curated Pitas for Every Taste
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            CAVA offers three curated pitas, each built for a different craving. Spicy Chicken + Avocado brings heat, while Steak + Feta feels rich and savory. Greek Chicken is the lighter pick with tzatziki, olives, and fresh romaine. Most curated pitas cost roughly $13 to $16, depending on your location. Delivery apps often charge more than the restaurant menu does.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: How to Customize Your CAVA Curated Pitas for the Best Meal Pairing */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            How to Customize Your CAVA Curated Pitas for the Best Meal Pairing
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            You can usually remove an ingredient or ask for lighter portions. Skipping a dressing or feta can lower calories and sodium quickly. Pair a spicy pita with a cold lemonade or sparkling water. Review the{" "}
            <Link href="/calculator" className="text-[#0A6847] font-semibold hover:underline">
              CAVA nutrition facts
            </Link>{" "}
            before you add extras like avocado or dips. Extra toppings can raise the price, so check your total before paying.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: CAVA Curated Pitas Nutrition Facts */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            CAVA Curated Pitas Nutrition Facts
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Calories in CAVA curated pitas depend on the protein, dressing, and extra toppings. Use the table below to compare CAVA Curated Pitas calories before ordering. Numbers can change with recipe updates, so confirm them in the CAVA app.
          </p>

          {/* Simple Nutrition Table */}
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-xs text-left mb-4">
            <table className="w-full text-sm">
              <thead className="bg-[#1A1A2E] text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-2.5 px-3 sm:px-4 text-left">Curated Pita</th>
                  <th className="py-2.5 px-3 text-center">Calories</th>
                  <th className="py-2.5 px-3 text-center">Protein</th>
                  <th className="py-2.5 px-3 text-center">Carbs</th>
                  <th className="py-2.5 px-3 text-center">Fat</th>
                  <th className="py-2.5 px-3 text-center">Sodium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {pitasNutrition.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="py-2.5 px-3 sm:px-4 font-semibold text-gray-900">{item.name}</td>
                    <td className="py-2.5 px-3 text-center text-[#0A6847] font-bold">{item.calories}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{item.protein}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{item.carbs}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{item.fat}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{item.sodium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 text-base leading-relaxed">
            Greek Chicken is the lowest calorie curated pita at 720 calories. It also matches the highest protein count at 48 grams. Spicy Chicken + Avocado is the heaviest option, with 930 calories. Sodium is high across all three, so balance your day with lighter meals. Skipping pita chips or extra dips helps keep your total lower.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: CAVA Curated Pitas Ingredients List */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            CAVA Curated Pitas Ingredients List
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Every curated pita is wrapped in CAVA’s fluffy pita bread. Spicy Chicken + Avocado includes harissa honey chicken, avocado, corn, and Crazy Feta. Steak + Feta uses grilled steak, red pepper hummus, pickles, and garlic dressing. Greek Chicken combines grilled chicken, tzatziki, olives, feta, and yogurt dill dressing. Recipes can change, so always confirm allergens with the restaurant before ordering.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: Conclusion */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Conclusion
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            CAVA curated pitas make ordering simple when you want a quick, flavorful meal. You now know the prices, calories, and ingredients behind each option. Choose Greek Chicken for balance, or Spicy Chicken + Avocado for bold flavor. Always confirm current prices and recipes in the CAVA app before paying. Bookmark this CAVA Curated Pitas Menu &amp; Prices guide for later.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: FAQs */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            FAQs
          </h2>
          <div className="space-y-2.5 text-left">
            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>1. Which CAVA Curated Pita Is Best for Lunch?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Greek Chicken is the best lunch pick for balanced calories and high protein. Choose Steak + Feta if you want a richer, more filling meal.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>2. What are CAVA Curated Pitas?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                CAVA Curated Pitas are ready to order pitas with set proteins, dips, and toppings.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>3. How much do CAVA Curated Pitas cost?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Most curated pitas cost roughly $13 to $16, depending on location and ordering method.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>4. Can you customize CAVA Curated Pitas?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Yes, you can usually remove ingredients or request lighter portions of toppings. Added extras like avocado or extra protein may increase your final price.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>5. What ingredients are included in CAVA Curated Pitas?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Each pita includes a protein, spreads, fresh toppings, a dressing, and pita bread. Exact ingredients differ by pita, so check the list above.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>6. What is the difference between CAVA Curated Pitas and Build Your Own Pitas?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Curated pitas come with set ingredients, while Build Your Own lets you choose everything. Curated options save time, and custom builds give you full control.
              </div>
            </details>
          </div>
        </section>

      </div>
    </article>
  );
}

// ── Dips & Spreads SEO Article ──
function DipsSpreadsArticle() {
  const dipsNutrition = [
    { name: "Tzatziki", calories: 30, protein: "2g", fat: "2.5g", carbs: "1g" },
    { name: "Hummus", calories: 50, protein: "2g", fat: "2.5g", carbs: "4g" },
    { name: "Red Pepper Hummus", calories: 40, protein: "2g", fat: "1.5g", carbs: "5g" },
    { name: "Roasted Eggplant Dip", calories: 50, protein: "0g", fat: "5g", carbs: "2g" },
    { name: "Crazy Feta", calories: 70, protein: "4g", fat: "6g", carbs: "1g" },
    { name: "Harissa", calories: 70, protein: "1g", fat: "6g", carbs: "5g" },
  ];

  return (
    <article className="bg-[#FAFAF8] border-t border-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-[10px] text-center">

        {/* H2: Types of Dips and Spreads Available at CAVA */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Types of Dips and Spreads Available at CAVA
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            CAVA offers several dips, and each one has a different taste. Traditional hummus and red pepper hummus are smooth and mild. Crazy Feta is creamy with a jalapeño kick, and tzatziki is cool. Harissa brings the most heat, so add it in small amounts. Seasonal flavors and roasted eggplant dips may appear at some locations.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: CAVA Dips & Spreads Nutrition Facts */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            CAVA Dips &amp; Spreads Nutrition Facts
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Dips look small, but their calories add up quickly in a bowl. Tzatziki is usually the lightest, while Crazy Feta and harissa are richer. Hummus sits in the middle and adds protein and fiber. Serving size changes the numbers, so check the official CAVA nutrition facts. That page helps you compare every dip before placing your order.
          </p>

          {/* Simple Nutrition Table */}
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-xs text-left mb-2">
            <table className="w-full text-sm">
              <thead className="bg-[#1A1A2E] text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-2.5 px-3 sm:px-4 text-left">Dip / Spread</th>
                  <th className="py-2.5 px-3 text-center">Calories</th>
                  <th className="py-2.5 px-3 text-center">Protein</th>
                  <th className="py-2.5 px-3 text-center">Fat</th>
                  <th className="py-2.5 px-3 text-center">Carbs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {dipsNutrition.map((item) => (
                  <tr key={item.name} className="hover:bg-gray-50 transition-colors">
                    <td className="py-2.5 px-3 sm:px-4 font-semibold text-gray-900">{item.name}</td>
                    <td className="py-2.5 px-3 text-center text-[#0A6847] font-bold">{item.calories}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{item.protein}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{item.fat}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{item.carbs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: How to Add Dips and Spreads to Your CAVA Order */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            How to Add Dips and Spreads to Your CAVA Order
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-3">
            Adding dips to your CAVA order only takes a few steps.
          </p>
          <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 text-left max-w-xl mx-auto shadow-xs">
            <ol className="space-y-2 text-sm text-gray-600 list-decimal list-inside leading-relaxed">
              <li>Choose your base and protein first at the counter or app.</li>
              <li>Pick your included dips from the dips and spreads station.</li>
              <li>Request extra dips as a side if you want more flavor.</li>
              <li>Confirm the final price before you pay for the order.</li>
            </ol>
          </div>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: Vegan and Vegetarian Dips at CAVA */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Vegan and Vegetarian Dips at CAVA
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Vegan guests often worry about hidden dairy in CAVA dips. Hummus, red pepper hummus, and harissa are generally vegan friendly. Tzatziki and Crazy Feta contain dairy, so vegans should skip them. Vegetarians can enjoy every dip, including the creamy feta and yogurt options. Recipes change, so confirm ingredients with the team before ordering.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: Low Calorie CAVA Dips and Spreads */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Low Calorie CAVA Dips and Spreads
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Watching calories does not mean giving up flavor at CAVA. Tzatziki is the lightest dip and tastes fresh and creamy. Red pepper hummus and traditional hummus are also lighter choices. Limit Crazy Feta and harissa to one portion per bowl. Pair a light dip with greens and grilled chicken for balance.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* Conclusion */}
        <section className="mb-[10px] p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-black text-gray-900 mb-2">Conclusion</h2>
          <p className="text-gray-500 text-base leading-relaxed">
            CAVA dips and spreads make every bowl tastier and more filling. Most dips are included, while extra portions cost around $3 to $3.50. Choose tzatziki for fewer calories and hummus for a vegan option. Always confirm prices and ingredients at your local CAVA before ordering. With this guide, picking the right dip becomes quick and easy.
          </p>
        </section>

        {/* FAQs */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-[10px]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2.5 text-left">
            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>1. What dips and spreads does CAVA offer?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                CAVA offers hummus, red pepper hummus, Crazy Feta, tzatziki, and harissa. Some locations also serve roasted eggplant dip or seasonal flavors.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>2. What is the most popular dip at CAVA?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Crazy Feta is CAVA’s most popular dip among regular customers. It blends whipped feta with jalapeño for a creamy, mild kick.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>3. Are CAVA dips and spreads included in the meal price?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Yes, dips are included in bowls and pitas at CAVA. The number included can vary, so check your local menu.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>4. Which CAVA dips are vegan?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Hummus, red pepper hummus, and harissa are usually the vegan dips. Tzatziki and Crazy Feta contain dairy, so vegans should avoid them.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>5. Does CAVA charge extra for dips and spreads?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Extra dips cost more, usually around $3 to $3.50 per side. Dips included with your bowl or pita are not charged separately.
              </div>
            </details>
          </div>
        </section>

      </div>
    </article>
  );
}

// ── Sides SEO Article ──
function SidesArticle() {
  const sidesNutrition = [
    { name: "Side Pita", calories: "80", fat: "1.5 g", carbs: "14 g", protein: "3 g" },
    { name: "Pita Chips", calories: "280", fat: "8 g", carbs: "41 g", protein: "10 g" },
    { name: "Cinnamon Sugar Pita Chips", calories: "310", fat: "9 g", carbs: "50 g", protein: "10 g" },
    { name: "Kid’s Pita Chips", calories: "140", fat: "4 g", carbs: "20 g", protein: "5 g" },
  ];

  return (
    <article className="bg-[#FAFAF8] border-t border-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-[10px] text-center">

        {/* H2: Most Popular Cava Sides Items */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Most Popular Cava Sides Items
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Pita chips are a favorite side at CAVA because of their crunch. Many guests pair them with hummus or crazy feta for extra flavor. Side pita is another popular pick when you want something softer and lighter. Cinnamon sugar pita chips work well if you want a sweet treat after lunch.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: Can You Order CAVA Sides Without a Bowl? */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Can You Order CAVA Sides Without a Bowl?
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Yes, you can order sides on their own without buying a bowl. Pita, pita chips, and extra dips can usually be added as separate items. This is handy when you only want a quick snack or shared appetizer. Check the{" "}
            <Link href="/calculator" className="text-[#0A6847] font-semibold hover:underline">
              CAVA nutrition facts
            </Link>{" "}
            first if you are counting calories or allergens.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: Cava Sides Nutrition Facts */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Cava Sides Nutrition Facts
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            CAVA sides calories vary a lot, so a quick check can help you. The table below shows common sides with calories, fat, carbs, and protein. Values are approximate and can change, so confirm them in the CAVA app.
          </p>

          {/* Simple Nutrition Table */}
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-xs text-left mb-2">
            <table className="w-full text-sm">
              <thead className="bg-[#1A1A2E] text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-2.5 px-3 sm:px-4 text-left">Side Item</th>
                  <th className="py-2.5 px-3 text-center">Calories</th>
                  <th className="py-2.5 px-3 text-center">Fat</th>
                  <th className="py-2.5 px-3 text-center">Carbs</th>
                  <th className="py-2.5 px-3 text-center">Protein</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {sidesNutrition.map((item) => (
                  <tr key={item.name} className="hover:bg-gray-50 transition-colors">
                    <td className="py-2.5 px-3 sm:px-4 font-semibold text-gray-900">{item.name}</td>
                    <td className="py-2.5 px-3 text-center text-[#0A6847] font-bold">{item.calories}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{item.fat}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{item.carbs}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{item.protein}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: Vegan and Vegetarian Sides at CAVA */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Vegan and Vegetarian Sides at CAVA
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Most CAVA dips are vegetarian, and several are fully plant based. Hummus and harissa are common vegan picks for dipping pita or vegetables. Tzatziki and crazy feta contain dairy, so they suit vegetarians only. Ingredients can change, so check the{" "}
            <Link href="/allergen-menu" className="text-[#0A6847] font-semibold hover:underline">
              allergen guide
            </Link>{" "}
            before you place your order. Pairing dips with fresh veggies keeps the snack light and filling.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: Low Calorie CAVA Sides Items */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Low Calorie CAVA Sides Items
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Side pita is the lightest bread option at about 80 calories. Roasted eggplant dip is also light, with around 50 calories per serving. Regular pita chips are much heavier, at about 280 calories per serving. Swapping chips for pita saves about 200 calories, which adds up over time. Sharing one serving with a friend also helps you cut calories.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: Conclusion */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Conclusion
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            CAVA sides are simple, tasty, and easy to mix into any meal. Dips, pita, and pita chips give you plenty of choice for every mood. Check calories first, and pick lighter options when you want a leaner meal. This CAVA sides menu &amp; prices guide should make your next order easier.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: FAQs */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            FAQs
          </h2>
          <div className="space-y-2.5 text-left">
            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>1. What sides are available at CAVA?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                CAVA offers dips and spreads, side pita, and pita chips as its main sides. Kids pita chips and cinnamon sugar pita chips may also be available.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>2. How much do CAVA sides cost?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Prices depend on your city and the size of the order. Open the CAVA app or website to see the exact cost at your location.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>3. Can you order CAVA sides separately?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Yes, most locations let you order pita, chips, and dips without a bowl. Using the app makes adding them to a standalone order very easy.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>4. Are CAVA sides included with bowls and pitas?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Bowls and pitas include dips and spreads, but side pita and chips cost extra. Review your cart before paying so you only pay for what you want.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>5. Does CAVA offer gluten-free side options?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Many CAVA dips and spreads are gluten-free, but pita and pita chips are not. Always confirm with the allergen guide because ingredients and kitchen practices can change.
              </div>
            </details>
          </div>
        </section>

      </div>
    </article>
  );
}

// ── Drinks SEO Article ──
function DrinksArticle() {
  const drinksNutrition = [
    { drink: "Fountain Soda (Maine Root)", size: "Kids 12 oz", calories: "145", sugar: "35g" },
    { drink: "Fountain Soda (Maine Root)", size: "Small 16 oz", calories: "190", sugar: "50g" },
    { drink: "Fountain Soda (Maine Root)", size: "Large 22 oz", calories: "270", sugar: "60g" },
    { drink: "Diet Fountain Soda", size: "Small 16 oz", calories: "0", sugar: "0g" },
  ];

  return (
    <article className="bg-[#FAFAF8] border-t border-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-[10px] text-center">

        {/* H2: What Is Cava Drinks? */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            What Is Cava Drinks?
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            CAVA Drinks include fountain sodas, fresh lemonades, iced teas, and bottled water. Several juices and teas are prepared fresh in each restaurant daily. Seasonal flavors rotate, so the lineup can differ from one visit to another. Each drink is built to refresh you between bites of rich Mediterranean food. Check with your local store for the exact list today.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: How to Customize Your CAVA Drinks for the Best Meal Pairing */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            How to Customize Your CAVA Drinks for the Best Meal Pairing
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Pair lemonade with rich lamb or spicy harissa for a cooling balance. Unsweetened tea works well with grilled chicken and crisp salads. Sparkling water keeps your palate fresh when your bowl has many dips. Review the CAVA nutrition facts to match drinks with your calorie goals. Ask the team about seasonal flavors before you place your order.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: CAVA Drinks Nutrition Facts */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            CAVA Drinks Nutrition Facts
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Calories vary a lot between CAVA drinks, mostly because of sugar. This table shows common fountain soda options for each available size. Use it to compare CAVA Drinks calories before you order. Seasonal drinks vary, so please confirm them in the app.
          </p>

          {/* Simple Nutrition Table */}
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-xs text-left mb-4">
            <table className="w-full text-sm">
              <thead className="bg-[#1A1A2E] text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-2.5 px-3 sm:px-4 text-left">Drink</th>
                  <th className="py-2.5 px-3 text-center">Size</th>
                  <th className="py-2.5 px-3 text-center">Calories</th>
                  <th className="py-2.5 px-3 text-center">Sugar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {drinksNutrition.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="py-2.5 px-3 sm:px-4 font-semibold text-gray-900">{item.drink}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{item.size}</td>
                    <td className="py-2.5 px-3 text-center text-[#0A6847] font-bold">{item.calories}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{item.sugar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 text-base leading-relaxed">
            Regular fountain soda adds up fast, with a large reaching 270 calories. Diet soda has zero calories if you want to save room for food. Sparkling water and unsweetened tea are also easy lighter choices. Check the official nutrition guide for lemonade and seasonal flavor numbers. Choosing a smaller size can save real calories over a week.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: How to Choose the Right Drink From CAVA’s Menu? */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            How to Choose the Right Drink From CAVA’s Menu?
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Start with your meal, then decide how much sugar you want. Spicy bowls pair best with lemonade or cold sparkling water. Lighter salads match unsweetened tea or a flavored sparkling option. Compare the CAVA Drinks Menu &amp; Prices before ordering to stay within budget. Kids can enjoy a smaller size or a bottle of water.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: Conclusion */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Conclusion
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            The CAVA drinks lineup is simple, fresh, and easy to match with any bowl. You now know the flavors, calories, and typical prices before you order. Choose lemonade for a sweet balance or water for a lighter meal. Always confirm seasonal items and final prices in the app or store.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: FAQs */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            FAQs
          </h2>
          <div className="space-y-2.5 text-left">
            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>1. What drinks are available at CAVA?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                CAVA serves fountain sodas, lemonades, iced teas, sparkling water, and still water. Seasonal juices and teas rotate, so the list can change by location.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>2. How much do drinks cost at CAVA?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Most drinks cost roughly $2.50 to $3.50, depending on size and location.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>3. Does CAVA offer sugar-free drinks?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Yes, diet fountain soda has zero calories and zero sugar at CAVA. Still water and sparkling water are also sugar free choices.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>4. What is the most popular drink at CAVA?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Lemonade and fountain soda are common picks, though CAVA does not publish rankings.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>5. Can you order CAVA drinks online?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Yes, you can order drinks with your meal through the CAVA app. Online ordering is also available on the CAVA website for pickup.
              </div>
            </details>
          </div>
        </section>

      </div>
    </article>
  );
}

// ── Mains SEO Article ──
function MainsArticle() {
  const mainsNutrition = [
    { name: "Grilled Chicken Pita", calories: "450 to 550" },
    { name: "Steak Bowl", calories: "600 to 700" },
    { name: "Falafel Bowl", calories: "500 to 600" },
    { name: "Spicy Lamb Meatballs", calories: "550 to 650" },
  ];

  return (
    <article className="bg-[#FAFAF8] border-t border-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-[10px] text-center">

        {/* H2: Best Selling Main Items at CAVA */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Best Selling Main Items at CAVA
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            CAVA mains menu includes several customer favorites that keep people coming back often. The grilled chicken pita and steak bowl remain top choices among regular diners. Many guests also prefer the falafel bowl for a lighter vegetarian option. These best sellers balance taste, portion size and value fairly well. Trying one of these popular picks solves the usual ordering confusion instantly for new customers.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: CAVA Main Menu Options for Lunch and Dinner */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            CAVA Main Menu Options for Lunch and Dinner
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            CAVA Mains Menu &amp; Prices vary slightly depending on lunch or dinner timing. Lunch options usually focus on lighter bowls and smaller pita wraps. Dinner choices often include larger proteins paired with extra toppings and sauces. Checking the{" "}
            <Link href="/calculator" className="text-[#0A6847] font-semibold hover:underline">
              CAVA nutrition facts
            </Link>{" "}
            helps guests pick a balanced meal easily. This way every visitor finds something suitable for either mealtime without guessing calories or portions.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: CAVA Mains Nutrition Facts */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            CAVA Mains Nutrition Facts
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            CAVA mains calories differ across proteins, bowls and pita options available daily. The table below shows approximate calorie ranges for popular main dishes.
          </p>

          {/* Simple Nutrition Table */}
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-xs text-left mb-4">
            <table className="w-full text-sm">
              <thead className="bg-[#1A1A2E] text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-2.5 px-3 sm:px-4 text-left">Main Dish</th>
                  <th className="py-2.5 px-3 text-center">Approx Calories</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {mainsNutrition.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="py-2.5 px-3 sm:px-4 font-semibold text-gray-900">{item.name}</td>
                    <td className="py-2.5 px-3 text-center text-[#0A6847] font-bold">{item.calories}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 text-base leading-relaxed">
            Use our{" "}
            <Link href="/calculator" className="text-[#0A6847] font-semibold hover:underline">
              nutrition calculator
            </Link>{" "}
            to track your exact meal accurately.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: How to Order CAVA Mains Online */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            How to Order CAVA Mains Online
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Ordering CAVA mains online saves time for busy customers during peak hours. Simply visit the official app or website and select your preferred location nearby. Choose your main dish, customize toppings and proceed straight to checkout instantly. Payment options include cards, digital wallets and saved accounts for faster checkout. This simple process removes long lines and makes ordering convenient for everyone.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: Conclusion */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Conclusion
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Picking the right CAVA main dish no longer needs to feel overwhelming or confusing. This guide covered prices, calories, best sellers and simple ordering steps clearly. Whether you prefer lunch bowls or dinner proteins, CAVA offers something for everyone. Use the pricing and nutrition details shared here to plan your next visit. A little preparation makes every CAVA meal faster, healthier and more satisfying overall.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: FAQs */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            FAQs
          </h2>
          <div className="space-y-2.5 text-left">
            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>What items are included in the CAVA Mains Menu?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                The CAVA Mains Menu includes grilled chicken, steak, falafel, lamb meatballs and various fresh bowl combinations.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>How much do CAVA main dishes cost?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                CAVA main dishes typically range between seven and twelve dollars depending on protein and portion size.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>What are the best CAVA mains for lunch and dinner?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Lighter bowls work well for lunch while larger protein portions suit dinner appetites better.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>Can you customize main dishes at CAVA?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Yes, CAVA allows full customization of proteins, toppings, sauces and bases for every main dish.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>Which CAVA main dishes have the lowest calories?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                The falafel bowl and grilled chicken pita generally offer lower calorie counts among main dish options.
              </div>
            </details>
          </div>
        </section>

      </div>
    </article>
  );
}

// ── Toppings SEO Article ──
function ToppingsArticle() {
  const toppingsNutrition = [
    { name: "Cucumber Tomato Onion Salad", calories: "20 to 40" },
    { name: "Feta Cheese", calories: "80 to 100" },
    { name: "Crazy Feta", calories: "100 to 120" },
    { name: "Tahini Caesar Dressing", calories: "90 to 110" },
  ];

  return (
    <article className="bg-[#FAFAF8] border-t border-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-[10px] text-center">

        {/* H2: CAVA Toppings Serving Sizes and Portions */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            CAVA Toppings Serving Sizes and Portions
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            CAVA toppings menu includes small, medium and generous portion sizes depending on selection. Vegetables, cheeses and sauces usually come in standard scoops across most locations. Some toppings allow extra portions for an additional small charge at checkout. Knowing these serving sizes helps you avoid overpaying or underfilling your bowl. This simple portion guide solves common confusion for first time CAVA customers quickly.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: Best CAVA Toppings for Bowls and Pitas */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Best CAVA Toppings for Bowls and Pitas
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            CAVA toppings calories vary depending on whether you choose veggies, cheese or sauces. Fresh vegetables like cucumbers and tomatoes remain popular low calorie topping choices. Cheese and creamy sauces add richer flavor but slightly higher calorie counts. Checking the{" "}
            <Link href="/calculator" className="text-[#0A6847] font-semibold hover:underline">
              CAVA nutrition facts
            </Link>{" "}
            helps you balance taste with health goals. This way every bowl or pita stays flavorful without unexpected calorie surprises later.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: CAVA Toppings Nutrition Facts */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            CAVA Toppings Nutrition Facts
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            CAVA toppings calories differ widely between vegetables, cheeses, sauces and crunchy additions daily. The table below shows approximate calorie ranges for common toppings.
          </p>

          {/* Simple Nutrition Table */}
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-xs text-left mb-4">
            <table className="w-full text-sm">
              <thead className="bg-[#1A1A2E] text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-2.5 px-3 sm:px-4 text-left">Topping</th>
                  <th className="py-2.5 px-3 text-center">Approx Calories</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {toppingsNutrition.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="py-2.5 px-3 sm:px-4 font-semibold text-gray-900">{item.name}</td>
                    <td className="py-2.5 px-3 text-center text-[#0A6847] font-bold">{item.calories}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 text-base leading-relaxed">
            Use our{" "}
            <Link href="/calculator" className="text-[#0A6847] font-semibold hover:underline">
              nutrition calculator
            </Link>{" "}
            to track your exact topping choices easily.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: CAVA Toppings for Lunch and Dinner */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            CAVA Toppings for Lunch and Dinner
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            CAVA toppings Menu &amp; Prices change slightly based on lunch or dinner preferences. Lunch orders often include lighter vegetable toppings for a refreshing midday meal. Dinner choices usually include richer sauces and extra cheese for fuller satisfaction. Picking toppings based on mealtime keeps your order balanced and enjoyable always. This simple approach solves the common struggle of choosing toppings every single visit.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: Conclusion */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Conclusion
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Selecting toppings at CAVA no longer needs to feel overwhelming or time consuming. This guide covered pricing, portions, calories and best combinations for every meal type. Whether you prefer lunch or dinner, CAVA toppings offer flexibility for every taste. Use the details shared here to build a tastier, healthier bowl or pita. A little planning makes every CAVA order faster, smarter and more satisfying overall.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: FAQs */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            FAQs
          </h2>
          <div className="space-y-2.5 text-left">
            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>What toppings are available at CAVA?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                CAVA offers vegetables, cheeses, sauces, crunchy additions and spreads for bowls and pitas.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>How much do extra toppings cost at CAVA?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Extra toppings usually cost between fifty cents and one dollar depending on the selection.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>Can you customize toppings on CAVA bowls and pitas?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Yes, CAVA allows full customization of toppings based on taste, portion and dietary preference.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>Which CAVA toppings have the lowest calories?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Fresh vegetables like cucumbers, tomatoes and onions remain the lowest calorie topping options.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>Are CAVA toppings vegan and gluten-free?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Most vegetable toppings are vegan and gluten-free while some sauces may contain dairy.
              </div>
            </details>
          </div>
        </section>

      </div>
    </article>
  );
}

// ── Dressings SEO Article ──
function DressingsArticle() {
  const dressingsNutrition = [
    { name: "Lemon Herb Tahini", calories: "70", fat: "6g", carbs: "4g" },
    { name: "Hot Harissa Vinaigrette", calories: "70", fat: "7g", carbs: "1g" },
    { name: "Skhug", calories: "80", fat: "9g", carbs: "1g" },
    { name: "Tahini Caesar", calories: "90", fat: "8g", carbs: "3g" },
    { name: "Greek Vinaigrette", calories: "130", fat: "14g", carbs: "1g" },
    { name: "Garlic Dressing", calories: "180", fat: "20g", carbs: "0g" },
  ];

  return (
    <article className="bg-[#FAFAF8] border-t border-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-[10px] text-center">

        {/* H2: Most Popular CAVA Dressings to Try */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Most Popular CAVA Dressings to Try
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Lemon Herb Tahini is a favorite dressing among many regular CAVA guests. Its creamy, nutty taste works well with chicken, falafel, and fresh greens. Skhug is another top choice for guests who enjoy a spicy kick. Greek Vinaigrette and Garlic Dressing also remain reliable options for everyday bowls. Start with one favorite, then try a new flavor next visit.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: Best CAVA Dressings for Bowls and Pitas */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Best CAVA Dressings for Bowls and Pitas
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Bowls need dressings that coat grains, greens, and proteins evenly. Lemon Herb Tahini and Greek Vinaigrette suit most bowl combinations very well. Pitas taste better with thicker options like Garlic Dressing or Yogurt Dill. Check the{" "}
            <Link href="/calculator" className="text-[#0A6847] font-semibold hover:underline">
              CAVA nutrition facts
            </Link>{" "}
            before choosing if you track your calories. That small step keeps every meal tasty and aligned with your goals.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* Featured Image */}
        <section className="mb-[10px]">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100">
            <Image
              src="/images/Cava Dressings Menu.webp"
              alt="CAVA Dressings Menu & Prices 2027"
              width={1200}
              height={630}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: CAVA Dressings Nutrition Facts */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            CAVA Dressings Nutrition Facts
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            This table shows CAVA dressings calories for one standard serving. Values come from public nutrition databases and may vary slightly by location. Use the{" "}
            <Link href="/calculator" className="text-[#0A6847] font-semibold hover:underline">
              CAVA nutrition calculator
            </Link>{" "}
            to total your complete bowl or pita. Always confirm numbers on the official CAVA app.
          </p>

          {/* Simple Nutrition Table */}
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-xs text-left mb-4">
            <table className="w-full text-sm">
              <thead className="bg-[#1A1A2E] text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-2.5 px-3 sm:px-4 text-left">Dressing</th>
                  <th className="py-2.5 px-3 text-center">Calories</th>
                  <th className="py-2.5 px-3 text-center">Fat</th>
                  <th className="py-2.5 px-3 text-center">Carbs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {dressingsNutrition.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="py-2.5 px-3 sm:px-4 font-semibold text-gray-900">{item.name}</td>
                    <td className="py-2.5 px-3 text-center text-[#0A6847] font-bold">{item.calories}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{item.fat}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{item.carbs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 text-base leading-relaxed">
            Most of the dressings shown here stay under 100 calories per serving. Lemon Herb Tahini and Hot Harissa Vinaigrette are the lightest options at 70 calories. Garlic Dressing is the richest here, so use it sparingly if you count calories. Ask for dressing on the side to control your portion easily.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: CAVA Dressing Combinations for Different Meals */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            CAVA Dressing Combinations for Different Meals
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 text-left max-w-xl mx-auto shadow-xs my-3">
            <ul className="space-y-2.5 text-sm sm:text-base text-gray-600 leading-relaxed">
              <li>
                <strong className="text-gray-900">Light bowl:</strong> Pair Lemon Herb Tahini with greens, cucumbers, and grilled chicken.
              </li>
              <li>
                <strong className="text-gray-900">Protein bowl:</strong> Try Skhug with steak, rice, and roasted vegetables for bold flavor.
              </li>
              <li>
                <strong className="text-gray-900">Vegetarian bowl:</strong> Combine Greek Vinaigrette with falafel, hummus, and pickled onions.
              </li>
              <li>
                <strong className="text-gray-900">Spicy lovers:</strong> Mix Hot Harissa Vinaigrette with lamb, rice, and fresh tomatoes.
              </li>
              <li>
                <strong className="text-gray-900">Creamy pita:</strong> Choose Yogurt Dill with chicken, cabbage slaw, and crumbled feta.
              </li>
              <li>
                <strong className="text-gray-900">Caesar style salad:</strong> Use Tahini Caesar with greens, chicken, and crunchy pita chips.
              </li>
              <li>
                <strong className="text-gray-900">Rich flavor:</strong> Add Garlic Dressing to grilled steak, rice, and fiery broccoli.
              </li>
            </ul>
          </div>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: CAVA Dressings for Lunch and Dinner */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            CAVA Dressings for Lunch and Dinner
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 text-left max-w-xl mx-auto shadow-xs my-3">
            <ul className="space-y-2.5 text-sm sm:text-base text-gray-600 leading-relaxed">
              <li>
                <strong className="text-gray-900">Quick lunch:</strong> Lemon Herb Tahini keeps a fast bowl light and fresh.
              </li>
              <li>
                <strong className="text-gray-900">Office lunch:</strong> Greek Vinaigrette gives a tangy finish without feeling heavy.
              </li>
              <li>
                <strong className="text-gray-900">Post workout meal:</strong> Pair Tahini Caesar with extra protein and warm grains.
              </li>
              <li>
                <strong className="text-gray-900">Hearty dinner:</strong> Garlic Dressing suits steak bowls and warm pita wraps well.
              </li>
              <li>
                <strong className="text-gray-900">Spicy dinner:</strong> Skhug adds fresh heat to lamb, chicken, and roasted vegetables.
              </li>
              <li>
                <strong className="text-gray-900">Family dinner:</strong> Order two or three dressings so everyone can taste and share.
              </li>
              <li>
                <strong className="text-gray-900">Date night:</strong> Mix Yogurt Dill and Hot Harissa Vinaigrette for a balanced contrast.
              </li>
            </ul>
          </div>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* Conclusion */}
        <section className="mb-[10px] p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-black text-gray-900 mb-2">Conclusion</h2>
          <p className="text-gray-500 text-base leading-relaxed">
            CAVA dressings can turn a simple bowl or pita into something special. This guide covered flavors, calories, and smart pairings to help you order. Use the CAVA Dressings Menu &amp; Prices details to compare options quickly. Always verify current pricing in the CAVA app before you pay. Pick your favorite dressing and enjoy a fresh, balanced meal.
          </p>
        </section>

        {/* FAQs */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
            FAQs
          </h2>
          <div className="space-y-2.5 text-left">
            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>1. What dressings are available at CAVA?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                CAVA serves Lemon Herb Tahini, Greek Vinaigrette, Garlic Dressing, and Skhug. Hot Harissa Vinaigrette, Tahini Caesar, and Yogurt Dill are also offered. Availability can change by season and by restaurant location.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>2. What is the most popular dressing at CAVA?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Lemon Herb Tahini is widely loved for its creamy and nutty flavor. Skhug and Greek Vinaigrette also rank high among regular guests.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>3. How much do extra dressings cost at CAVA?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Extra dressing prices differ by restaurant and may change over time. Check the CAVA app or ask staff for your exact price.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>4. Which CAVA dressing has the lowest calories?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Among our listed dressings, Lemon Herb Tahini and Hot Harissa Vinaigrette are lightest. Each contains about 70 calories per serving.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>5. Are CAVA dressings vegan and gluten free?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Most CAVA dressings use plant based ingredients, but Yogurt Dill contains dairy. Many dressings are gluten free, though cross contact is possible. Ingredients can change, so review the official allergen guide before ordering.
              </div>
            </details>
          </div>
        </section>

      </div>
    </article>
  );
}

// ── Desserts SEO Article ──
function DessertsArticle() {
  const dessertsNutrition = [
    { name: "Cinnamon Sugar Pita Chips", calories: "210", price: "$2.50" },
    { name: "Honey Drizzled Pita Bites", calories: "180", price: "$2.75" },
    { name: "Warm Cinnamon Pita Wedges", calories: "220", price: "$2.95" },
  ];

  return (
    <article className="bg-[#FAFAF8] border-t border-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-[10px] text-center">

        {/* H2: Most Popular CAVA Desserts to Try */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Most Popular CAVA Desserts to Try
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            CAVA does not run a formal dessert menu, but a few sweet picks remain popular. Cinnamon sugar pita chips are the most requested treat among regular guests. Honey drizzled pita bites also attract dessert lovers craving something light. These simple options feel indulgent without straying from CAVA fresh Mediterranean style.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* Featured Image */}
        <section className="mb-[10px]">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100">
            <Image
              src="/images/Cava Desserts Menu.webp"
              alt="CAVA Desserts Menu With Prices & Calories 2026"
              width={1200}
              height={630}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: What Makes CAVA Desserts Different? */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            What Makes CAVA Desserts Different?
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            CAVA desserts stand out because they stay light compared to typical fast food treats. Instead of heavy cakes or fried items, CAVA leans on natural sweetness from honey and cinnamon. Checking{" "}
            <Link href="/calculator" className="text-[#0A6847] font-semibold hover:underline">
              CAVA nutrition facts
            </Link>{" "}
            shows these picks carry fewer calories than most dessert menus. This makes them a smart choice for guests watching sugar or portion size.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: CAVA Desserts Nutrition Facts */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            CAVA Desserts Nutrition Facts
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Checking{" "}
            <Link href="/calculator" className="text-[#0A6847] font-semibold hover:underline">
              CAVA desserts calories
            </Link>{" "}
            helps guests balance their meal before ordering something sweet. Use our nutrition calculator to see exact calories, sugar, and fat for every pita based treat.
          </p>

          {/* Simple Nutrition Table */}
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-xs text-left mb-4">
            <table className="w-full text-sm">
              <thead className="bg-[#1A1A2E] text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-2.5 px-3 sm:px-4 text-left">Dessert Item</th>
                  <th className="py-2.5 px-3 text-center">Calories (approx.)</th>
                  <th className="py-2.5 px-3 text-center">Price (approx.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {dessertsNutrition.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="py-2.5 px-3 sm:px-4 font-semibold text-gray-900">{item.name}</td>
                    <td className="py-2.5 px-3 text-center text-[#0A6847] font-bold">{item.calories}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600 font-medium">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 text-base leading-relaxed">
            These numbers give a quick snapshot, but exact calories and prices can shift by location. Pulling up the live nutrition calculator ensures accuracy before you order. Most dessert style pita options stay under 250 calories per serving. This keeps them light enough to enjoy without ruining your daily goals.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: Conclusion */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Conclusion
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            CAVA Desserts Menu With Prices shows that sweet options do not have to feel heavy. From cinnamon sugar pita chips to honey drizzled bites, CAVA keeps dessert simple and fresh. Checking prices and nutrition facts beforehand helps you order with confidence. Whether you want a light treat or a quick snack, CAVA desserts fit any meal.
          </p>
          <div className="mt-[10px] h-px bg-gray-200" />
        </section>

        {/* H2: FAQs */}
        <section className="mb-[10px]">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            FAQs
          </h2>
          <div className="space-y-2.5 text-left">
            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>1. What desserts are available on the CAVA menu?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                CAVA does not offer a formal dessert menu, but items like cinnamon sugar pita chips and honey drizzled pita bites work well as a sweet finish.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>2. How much do desserts cost at CAVA?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Dessert style pita items usually range between $2.50 and $3.00, though pricing can vary slightly by location.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>3. Which CAVA dessert has the lowest calories?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Honey drizzled pita bites tend to carry the fewest calories among CAVA’s sweet pita options.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>4. Do CAVA desserts contain dairy, gluten, or nuts?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Most dessert style pita items contain gluten from the pita bread, and some recipes may include dairy, so checking ingredient details before ordering is wise.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>5. Can I order CAVA desserts online for pickup or delivery?</span>
                <span className="text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 py-3.5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                Yes, CAVA allows online ordering for pickup and delivery, and dessert style pita items can be added directly through the app or website.
              </div>
            </details>
          </div>
        </section>

      </div>
    </article>
  );
}

// ── Category Page ──
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const label = categoryLabels[category];
  const description = categoryDescriptions[category];
  const items = menuData.filter((i) => i.category === category);
  const isCuratedBowls = categorySlug === "curated-bowls";
  const isCuratedPitas = categorySlug === "curated-pitas";
  const isBases = categorySlug === "bases";
  const isKidsMeal = categorySlug === "kids-meal";
  const isDipsSpreads = categorySlug === "dips-spreads";
  const isSides = categorySlug === "sides";
  const isDrinks = categorySlug === "drinks";
  const isMains = categorySlug === "mains";
  const isToppings = categorySlug === "toppings";
  const isDressings = categorySlug === "dressings";
  const isDesserts = categorySlug === "desserts";
  const hasCustomHero = isCuratedBowls || isCuratedPitas || isBases || isKidsMeal || isDipsSpreads || isSides || isDrinks || isMains || isToppings || isDressings || isDesserts;

  return (
    <main className="bg-[#FAFAF8] min-h-screen">
      {/* Breadcrumbs (for other categories) */}
      {!hasCustomHero && (
        <div className="border-b border-gray-200/60 bg-white/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
              <Link href="/" className="hover:text-[#0A6847] transition-colors">
                Home
              </Link>
              <span>›</span>
              <Link href="/#menu" className="hover:text-[#0A6847] transition-colors">
                Menu
              </Link>
              <span>›</span>
              <span className="text-gray-900 font-semibold">{label}</span>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      {isCuratedBowls ? (
        <section className="py-[10px] bg-gradient-to-b from-white to-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                {/* Breadcrumbs inside hero */}
                <nav className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-gray-500 mb-3">
                  <Link href="/" className="hover:text-[#0A6847] transition-colors">
                    Home
                  </Link>
                  <span>›</span>
                  <Link href="/#menu" className="hover:text-[#0A6847] transition-colors">
                    Menu
                  </Link>
                  <span>›</span>
                  <span className="text-gray-900 font-semibold">{label}</span>
                </nav>

                <h1 className="text-[35px] font-black text-gray-900 tracking-tight leading-tight mb-4">
                  Cava Menu With Prices{" "}
                  <span className="text-[#0A6847]">&amp; Calories 2026</span>
                </h1>
                <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6">
                  Looking for the Cava Bowl Menu With Prices for 2026? You are in the
                  right place. Browse every curated bowl with full calorie counts and
                  nutrition details. Whether you want a hearty cava greens grains bowl
                  or a lighter option, this page has everything you need to make a smart
                  and satisfying choice today.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#bowls"
                    className="px-8 py-3.5 rounded-full bg-[#0A6847] text-white font-bold text-sm sm:text-base hover:bg-[#085238] transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
                  >
                    <span>Explore Bowls</span>
                    <span>↓</span>
                  </a>
                  <Link
                    href="/calculator"
                    className="px-8 py-3.5 rounded-full bg-white border-2 border-gray-200 text-[#1A1A2E] font-bold text-sm sm:text-base hover:border-[#0A6847] hover:text-[#0A6847] transition-all inline-flex items-center gap-2 shadow-xs"
                  >
                    <span>Nutrition Calculator</span>
                    <span>⚡</span>
                  </Link>
                </div>
              </div>

              <div className="flex-1 flex justify-center lg:justify-end w-full max-w-xl">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                  <Image
                    src="/images/Cava Bowl Menu  With Prices.webp"
                    alt="Cava Bowl Menu With Prices 2026"
                    width={1200}
                    height={800}
                    priority
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : isCuratedPitas ? (
        <section className="py-[10px] bg-gradient-to-b from-white to-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                {/* Breadcrumbs inside hero */}
                <nav className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-gray-500 mb-3">
                  <Link href="/" className="hover:text-[#0A6847] transition-colors">
                    Home
                  </Link>
                  <span>›</span>
                  <Link href="/#menu" className="hover:text-[#0A6847] transition-colors">
                    Menu
                  </Link>
                  <span>›</span>
                  <span className="text-gray-900 font-semibold">{label}</span>
                </nav>

                <h1 className="text-[35px] font-black text-gray-900 tracking-tight leading-tight mb-4">
                  CAVA Curated Pitas Menu With{" "}
                  <span className="text-[#0A6847]">Prices 2026</span>
                </h1>
                <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-3">
                  Explore the CAVA Curated Pitas Menu with prices, ingredients, and calories. Compare delicious pita options and find your favorite meal before ordering.
                </p>
                <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6">
                  Prices differ by city, so use these numbers as a helpful estimate. Check CAVA Curated Pitas calories first if you are watching your daily intake.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#bowls"
                    className="px-8 py-3.5 rounded-full bg-[#0A6847] text-white font-bold text-sm sm:text-base hover:bg-[#085238] transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
                  >
                    <span>Explore Pitas</span>
                    <span>↓</span>
                  </a>
                  <Link
                    href="/calculator"
                    className="px-8 py-3.5 rounded-full bg-white border-2 border-gray-200 text-[#1A1A2E] font-bold text-sm sm:text-base hover:border-[#0A6847] hover:text-[#0A6847] transition-all inline-flex items-center gap-2 shadow-xs"
                  >
                    <span>Nutrition Calculator</span>
                    <span>⚡</span>
                  </Link>
                </div>
              </div>

              <div className="flex-1 flex justify-center lg:justify-end w-full max-w-xl">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                  <Image
                    src="/images/Cava Curated Pitas Menu With Prices.webp"
                    alt="CAVA Curated Pitas Menu With Prices 2026"
                    width={1200}
                    height={800}
                    priority
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : isBases ? (
        <section className="py-[10px] bg-gradient-to-b from-white to-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                {/* Breadcrumbs inside hero */}
                <nav className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-gray-500 mb-3">
                  <Link href="/" className="hover:text-[#0A6847] transition-colors">
                    Home
                  </Link>
                  <span>›</span>
                  <Link href="/#menu" className="hover:text-[#0A6847] transition-colors">
                    Menu
                  </Link>
                  <span>›</span>
                  <span className="text-gray-900 font-semibold">{label}</span>
                </nav>

                <h1 className="text-[35px] font-black text-gray-900 tracking-tight leading-tight mb-4">
                  Cava Bases Menu With Prices{" "}
                  <span className="text-[#0A6847]">&amp; Calories 2026</span>
                </h1>
                <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6">
                  Confused about which base to pick at CAVA? It’s a fair question. Your base sets the
                  calories, the fullness, and the whole feel of the bowl. This guide covers the Cava
                  Bases Menu With Prices in plain words. You’ll see every option, how Cava bases
                  calories compare, and what you actually pay. Bases aren’t priced separately, because
                  the bowl price covers them. So you can switch between greens, rice, and RightRice
                  without paying extra. Your protein choice is what moves the price.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#bowls"
                    className="px-8 py-3.5 rounded-full bg-[#0A6847] text-white font-bold text-sm sm:text-base hover:bg-[#085238] transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
                  >
                    <span>Explore Bases</span>
                    <span>↓</span>
                  </a>
                  <Link
                    href="/calculator"
                    className="px-8 py-3.5 rounded-full bg-white border-2 border-gray-200 text-[#1A1A2E] font-bold text-sm sm:text-base hover:border-[#0A6847] hover:text-[#0A6847] transition-all inline-flex items-center gap-2 shadow-xs"
                  >
                    <span>Nutrition Calculator</span>
                    <span>⚡</span>
                  </Link>
                </div>
              </div>

              <div className="flex-1 flex justify-center lg:justify-end w-full max-w-xl">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                  <Image
                    src="/images/Cava Bases Menu With prices.webp"
                    alt="Cava Bases Menu With Prices 2026"
                    width={1200}
                    height={800}
                    priority
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : isKidsMeal ? (
        <section className="py-[10px] bg-gradient-to-b from-white to-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                {/* Breadcrumbs inside hero */}
                <nav className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-gray-500 mb-3">
                  <Link href="/" className="hover:text-[#0A6847] transition-colors">
                    Home
                  </Link>
                  <span>›</span>
                  <Link href="/#menu" className="hover:text-[#0A6847] transition-colors">
                    Menu
                  </Link>
                  <span>›</span>
                  <span className="text-gray-900 font-semibold">{label}</span>
                </nav>

                <h1 className="text-[35px] font-black text-gray-900 tracking-tight leading-tight mb-4">
                  Cava Kids Meal Menu With Prices{" "}
                  <span className="text-[#0A6847]">&amp; Calories 2026</span>
                </h1>
                <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6">
                  Looking for a filling meal for your child without paying adult bowl prices? The CAVA
                  Kids Meal Menu With Prices starts around $7 to $8. Each meal gives your child half
                  portions of a base and main. Dips, toppings, a side, and a free drink complete the
                  plate nicely. This guide covers CAVA Kids Meal Menu &amp; Prices, plus Cava Kids Meal
                  calories. Prices vary by location, so check the CAVA app before ordering.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#bowls"
                    className="px-8 py-3.5 rounded-full bg-[#0A6847] text-white font-bold text-sm sm:text-base hover:bg-[#085238] transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
                  >
                    <span>Explore Kids Items</span>
                    <span>↓</span>
                  </a>
                  <Link
                    href="/calculator"
                    className="px-8 py-3.5 rounded-full bg-white border-2 border-gray-200 text-[#1A1A2E] font-bold text-sm sm:text-base hover:border-[#0A6847] hover:text-[#0A6847] transition-all inline-flex items-center gap-2 shadow-xs"
                  >
                    <span>Nutrition Calculator</span>
                    <span>⚡</span>
                  </Link>
                </div>
              </div>

              <div className="flex-1 flex justify-center lg:justify-end w-full max-w-xl">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                  <Image
                    src="/images/Cava Kids Meal Menu With Prices.webp"
                    alt="CAVA Kids Meal Menu With Prices 2026"
                    width={1200}
                    height={800}
                    priority
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : isDipsSpreads ? (
        <section className="py-[10px] bg-gradient-to-b from-white to-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                {/* Breadcrumbs inside hero */}
                <nav className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-gray-500 mb-3">
                  <Link href="/" className="hover:text-[#0A6847] transition-colors">
                    Home
                  </Link>
                  <span>›</span>
                  <Link href="/#menu" className="hover:text-[#0A6847] transition-colors">
                    Menu
                  </Link>
                  <span>›</span>
                  <span className="text-gray-900 font-semibold">{label}</span>
                </nav>

                <h1 className="text-[35px] font-black text-gray-900 tracking-tight leading-tight mb-4">
                  CAVA Dips &amp; Spreads Menu With Prices{" "}
                  <span className="text-[#0A6847]">&amp; Calories 2026</span>
                </h1>
                <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6">
                  Confused about which CAVA dips are worth adding to your bowl? The CAVA Dips &amp; Spreads Menu With Prices makes that choice simple. Dips like hummus, tzatziki, and Crazy Feta usually come included in bowls and pitas. Extra dips cost around $3 to $3.50 each, depending on your location. Below, you get CAVA Dips &amp; Spreads &amp; Prices in simple form. We also cover CAVA Dips &amp; Spreads calories to help you plan. Prices change by location, so confirm them in the CAVA app.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#bowls"
                    className="px-8 py-3.5 rounded-full bg-[#0A6847] text-white font-bold text-sm sm:text-base hover:bg-[#085238] transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
                  >
                    <span>Explore Dips &amp; Spreads</span>
                    <span>↓</span>
                  </a>
                  <Link
                    href="/calculator"
                    className="px-8 py-3.5 rounded-full bg-white border-2 border-gray-200 text-[#1A1A2E] font-bold text-sm sm:text-base hover:border-[#0A6847] hover:text-[#0A6847] transition-all inline-flex items-center gap-2 shadow-xs"
                  >
                    <span>Nutrition Calculator</span>
                    <span>⚡</span>
                  </Link>
                </div>
              </div>

              <div className="flex-1 flex justify-center lg:justify-end w-full max-w-xl">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                  <Image
                    src="/images/Cava Dips and Spreads menu with prices.webp"
                    alt="CAVA Dips &amp; Spreads Menu With Prices 2026"
                    width={1200}
                    height={800}
                    priority
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : isSides ? (
        <section className="py-[10px] bg-gradient-to-b from-white to-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                {/* Breadcrumbs inside hero */}
                <nav className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-gray-500 mb-3">
                  <Link href="/" className="hover:text-[#0A6847] transition-colors">
                    Home
                  </Link>
                  <span>›</span>
                  <Link href="/#menu" className="hover:text-[#0A6847] transition-colors">
                    Menu
                  </Link>
                  <span>›</span>
                  <span className="text-gray-900 font-semibold">{label}</span>
                </nav>

                <h1 className="text-[35px] font-black text-gray-900 tracking-tight leading-tight mb-4">
                  CAVA Sides Menu With Prices{" "}
                  <span className="text-[#0A6847]">&amp; Calories 2026</span>
                </h1>
                <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6">
                  Many people skip sides at CAVA because they are unsure what is available. Here is the CAVA sides menu with prices explained, plus calories and smart picks. Prices change by city, so the CAVA app shows the exact cost near you. You will also learn which sides fit vegan, vegetarian, and lighter eating plans.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#bowls"
                    className="px-8 py-3.5 rounded-full bg-[#0A6847] text-white font-bold text-sm sm:text-base hover:bg-[#085238] transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
                  >
                    <span>Explore Sides</span>
                    <span>↓</span>
                  </a>
                  <Link
                    href="/calculator"
                    className="px-8 py-3.5 rounded-full bg-white border-2 border-gray-200 text-[#1A1A2E] font-bold text-sm sm:text-base hover:border-[#0A6847] hover:text-[#0A6847] transition-all inline-flex items-center gap-2 shadow-xs"
                  >
                    <span>Nutrition Calculator</span>
                    <span>⚡</span>
                  </Link>
                </div>
              </div>

              <div className="flex-1 flex justify-center lg:justify-end w-full max-w-xl">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                  <Image
                    src="/images/Cava Sides Menu With Prices.webp"
                    alt="CAVA Sides Menu With Prices 2026"
                    width={1200}
                    height={800}
                    priority
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : isDrinks ? (
        <section className="py-[10px] bg-gradient-to-b from-white to-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                {/* Breadcrumbs inside hero */}
                <nav className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-gray-500 mb-3">
                  <Link href="/" className="hover:text-[#0A6847] transition-colors">
                    Home
                  </Link>
                  <span>›</span>
                  <Link href="/#menu" className="hover:text-[#0A6847] transition-colors">
                    Menu
                  </Link>
                  <span>›</span>
                  <span className="text-gray-900 font-semibold">{label}</span>
                </nav>

                <h1 className="text-[35px] font-black text-gray-900 tracking-tight leading-tight mb-4">
                  CAVA Drinks Menu With{" "}
                  <span className="text-[#0A6847]">Latest Prices 2026</span>
                </h1>
                <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-3">
                  Standing at the CAVA counter, you may wonder which drink fits your bowl. Many guests also struggle to find a clear list with current prices. This page brings the full CAVA Drinks Menu With Prices into one simple place. We updated every detail for 2026, including sizes, flavors, and calorie counts.
                </p>
                <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6">
                  Prices change by location, so treat the numbers here as a close guide. You can also check CAVA Drinks calories here before ordering.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#bowls"
                    className="px-8 py-3.5 rounded-full bg-[#0A6847] text-white font-bold text-sm sm:text-base hover:bg-[#085238] transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
                  >
                    <span>Explore Drinks</span>
                    <span>↓</span>
                  </a>
                  <Link
                    href="/calculator"
                    className="px-8 py-3.5 rounded-full bg-white border-2 border-gray-200 text-[#1A1A2E] font-bold text-sm sm:text-base hover:border-[#0A6847] hover:text-[#0A6847] transition-all inline-flex items-center gap-2 shadow-xs"
                  >
                    <span>Nutrition Calculator</span>
                    <span>⚡</span>
                  </Link>
                </div>
              </div>

              <div className="flex-1 flex justify-center lg:justify-end w-full max-w-xl">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                  <Image
                    src="/images/CAVA Drinks menu With Prices.webp"
                    alt="CAVA Drinks Menu With Updated Prices 2026"
                    width={1200}
                    height={800}
                    priority
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : isMains ? (
        <section className="py-[10px] bg-gradient-to-b from-white to-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                {/* Breadcrumbs inside hero */}
                <nav className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-gray-500 mb-3">
                  <Link href="/" className="hover:text-[#0A6847] transition-colors">
                    Home
                  </Link>
                  <span>›</span>
                  <Link href="/#menu" className="hover:text-[#0A6847] transition-colors">
                    Menu
                  </Link>
                  <span>›</span>
                  <span className="text-gray-900 font-semibold">{label}</span>
                </nav>

                <h1 className="text-[35px] font-black text-gray-900 tracking-tight leading-tight mb-4">
                  CAVA Mains Menu With{" "}
                  <span className="text-[#0A6847]">Prices & Calories 2026</span>
                </h1>
                <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6">
                  Explore the CAVA Mains Menu with updated prices and calories. Compare delicious bowls and other main dishes to find your perfect meal.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#bowls"
                    className="px-8 py-3.5 rounded-full bg-[#0A6847] text-white font-bold text-sm sm:text-base hover:bg-[#085238] transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
                  >
                    <span>Explore Mains</span>
                    <span>↓</span>
                  </a>
                  <Link
                    href="/calculator"
                    className="px-8 py-3.5 rounded-full bg-white border-2 border-gray-200 text-[#1A1A2E] font-bold text-sm sm:text-base hover:border-[#0A6847] hover:text-[#0A6847] transition-all inline-flex items-center gap-2 shadow-xs"
                  >
                    <span>Nutrition Calculator</span>
                    <span>⚡</span>
                  </Link>
                </div>
              </div>

              <div className="flex-1 flex justify-center lg:justify-end w-full max-w-xl">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                  <Image
                    src="/images/Cava Mains Menu With Prices.webp"
                    alt="CAVA Mains Menu With Prices & Calories 2026"
                    width={1200}
                    height={800}
                    priority
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : isToppings ? (
        <section className="py-[10px] bg-gradient-to-b from-white to-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                {/* Breadcrumbs inside hero */}
                <nav className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-gray-500 mb-3">
                  <Link href="/" className="hover:text-[#0A6847] transition-colors">
                    Home
                  </Link>
                  <span>›</span>
                  <Link href="/#menu" className="hover:text-[#0A6847] transition-colors">
                    Menu
                  </Link>
                  <span>›</span>
                  <span className="text-gray-900 font-semibold">{label}</span>
                </nav>

                <h1 className="text-[35px] font-black text-gray-900 tracking-tight leading-tight mb-4">
                  CAVA Toppings Menu With{" "}
                  <span className="text-[#0A6847]">Latest Prices 2026</span>
                </h1>
                <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6">
                  Picking the right toppings at CAVA often confuses first time customers a lot. Too many choices make it hard to build a balanced bowl or pita quickly. This CAVA Toppings Menu With Prices guide removes that confusion completely for you. You get pricing, calories and topping combinations explained clearly here. Read ahead before your next order to build a tastier meal confidently.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#bowls"
                    className="px-8 py-3.5 rounded-full bg-[#0A6847] text-white font-bold text-sm sm:text-base hover:bg-[#085238] transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
                  >
                    <span>Explore Toppings</span>
                    <span>↓</span>
                  </a>
                  <Link
                    href="/calculator"
                    className="px-8 py-3.5 rounded-full bg-white border-2 border-gray-200 text-[#1A1A2E] font-bold text-sm sm:text-base hover:border-[#0A6847] hover:text-[#0A6847] transition-all inline-flex items-center gap-2 shadow-xs"
                  >
                    <span>Nutrition Calculator</span>
                    <span>⚡</span>
                  </Link>
                </div>
              </div>

              <div className="flex-1 flex justify-center lg:justify-end w-full max-w-xl">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                  <Image
                    src="/images/menu/greek-salad-bowl.webp"
                    alt="CAVA Toppings Menu With Latest Prices 2026"
                    width={1200}
                    height={800}
                    priority
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : isDressings ? (
        <section className="py-[10px] bg-gradient-to-b from-white to-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                {/* Breadcrumbs inside hero */}
                <nav className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-gray-500 mb-3">
                  <Link href="/" className="hover:text-[#0A6847] transition-colors">
                    Home
                  </Link>
                  <span>›</span>
                  <Link href="/#menu" className="hover:text-[#0A6847] transition-colors">
                    Menu
                  </Link>
                  <span>›</span>
                  <span className="text-gray-900 font-semibold">{label}</span>
                </nav>

                <h1 className="text-[35px] font-black text-gray-900 tracking-tight leading-tight mb-4">
                  CAVA Dressings Menu &amp;{" "}
                  <span className="text-[#0A6847]">Prices 2027</span>
                </h1>
                <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6">
                  Explore the CAVA Dressings Menu with updated prices, calories and ingredients. Discover tasty dressing options for your favorite bowls and pitas.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#bowls"
                    className="px-8 py-3.5 rounded-full bg-[#0A6847] text-white font-bold text-sm sm:text-base hover:bg-[#085238] transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
                  >
                    <span>Explore Dressings</span>
                    <span>↓</span>
                  </a>
                  <Link
                    href="/calculator"
                    className="px-8 py-3.5 rounded-full bg-white border-2 border-gray-200 text-[#1A1A2E] font-bold text-sm sm:text-base hover:border-[#0A6847] hover:text-[#0A6847] transition-all inline-flex items-center gap-2 shadow-xs"
                  >
                    <span>Nutrition Calculator</span>
                    <span>⚡</span>
                  </Link>
                </div>
              </div>

              <div className="flex-1 flex justify-center lg:justify-end w-full max-w-xl">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                  <Image
                    src="/images/Cava Dressings Menu 2027.webp"
                    alt="CAVA Dressings Menu & Prices 2027"
                    width={1200}
                    height={800}
                    priority
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : isDesserts ? (
        <section className="py-[10px] bg-gradient-to-b from-white to-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                {/* Breadcrumbs inside hero */}
                <nav className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-gray-500 mb-3">
                  <Link href="/" className="hover:text-[#0A6847] transition-colors">
                    Home
                  </Link>
                  <span>›</span>
                  <Link href="/#menu" className="hover:text-[#0A6847] transition-colors">
                    Menu
                  </Link>
                  <span>›</span>
                  <span className="text-gray-900 font-semibold">{label}</span>
                </nav>

                <h1 className="text-[35px] font-black text-gray-900 tracking-tight leading-tight mb-4">
                  CAVA Desserts Menu With{" "}
                  <span className="text-[#0A6847]">Prices &amp; Calories 2026</span>
                </h1>
                <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-4">
                  Explore the CAVA Desserts Menu with updated prices and calories. Check available sweet treats and choose your favourite dessert. This guide covers every option with clear pricing, calorie counts, and smart picks for 2026.
                </p>
                <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6">
                  Before trying desserts, check the full{" "}
                  <Link href="/" className="text-[#0A6847] font-semibold hover:underline">
                    CAVA menu
                  </Link>{" "}
                  for dips and spreads that pair with sweeter bites. Options like hummus, tzatziki, and harissa go well with warm pita chips. Many guests add honey or cinnamon sugar for a simple dessert style finish.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#bowls"
                    className="px-8 py-3.5 rounded-full bg-[#0A6847] text-white font-bold text-sm sm:text-base hover:bg-[#085238] transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
                  >
                    <span>Explore Desserts</span>
                    <span>↓</span>
                  </a>
                  <Link
                    href="/calculator"
                    className="px-8 py-3.5 rounded-full bg-white border-2 border-gray-200 text-[#1A1A2E] font-bold text-sm sm:text-base hover:border-[#0A6847] hover:text-[#0A6847] transition-all inline-flex items-center gap-2 shadow-xs"
                  >
                    <span>Nutrition Calculator</span>
                    <span>⚡</span>
                  </Link>
                </div>
              </div>

              <div className="flex-1 flex justify-center lg:justify-end w-full max-w-xl">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                  <Image
                    src="/images/Cava Desserts Menu With Prices.webp"
                    alt="CAVA Desserts Menu With Prices & Calories 2026"
                    width={1200}
                    height={800}
                    priority
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-[10px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A6847]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0A6847]">
                  Updated October 2026
                </span>
              </div>
              <h1 className="text-[35px] font-black text-gray-900 tracking-tight leading-tight mb-2">
                CAVA {label} <span className="text-[#0A6847]">Menu &amp; Nutrition</span>
              </h1>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                {description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Items Section */}
      {/* Breadcrumb + JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          { "@type": "ListItem", position: 2, name: label, item: `/menu/${categorySlug}` },
        ],
      }) }} />
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0A6847] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">{label}</span>
          </nav>
        </div>
      </div>

      <section id="bowls" className="py-[10px] scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          {isCuratedBowls ? (
            <div className="mb-[10px] pb-2 border-b border-gray-200/70 text-center">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
                Cava Bowls Menu
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                The Cava Bowl Menu With Prices offers something great for every appetite.
                You get to pick a base, protein, dips, and toppings. Each bowl is fully
                customizable and fresh. See the full{" "}
                <Link href="/" className="text-[#0A6847] font-semibold hover:underline">
                  Cava menu
                </Link>{" "}
                to explore every category available today.
              </p>
            </div>
          ) : isCuratedPitas ? (
            <div className="mb-[10px] pb-2 border-b border-gray-200/70 text-center">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
                CAVA Curated Pitas Menu
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                Explore the CAVA Curated Pitas Menu with prices, ingredients, and calories. Compare delicious pita options and find your favorite meal before ordering. Browse the full{" "}
                <Link href="/" className="text-[#0A6847] font-semibold hover:underline">
                  CAVA menu
                </Link>{" "}
                to see all options.
              </p>
            </div>
          ) : isBases ? (
            <div className="mb-[10px] pb-2 border-b border-gray-200/70 text-center">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
                Cava Bases Menu
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                Every CAVA bowl starts with a base. You can pick greens like SuperGreens, baby
                spinach, and arugula. Or you can go with grains like saffron basmati rice, brown
                rice, and RightRice. Open the full{" "}
                <Link href="/" className="text-[#0A6847] font-semibold hover:underline">
                  Cava menu
                </Link>{" "}
                to see how each base pairs with proteins, dips, and toppings.
              </p>
            </div>
          ) : isKidsMeal ? (
            <div className="mb-[10px] pb-2 border-b border-gray-200/70 text-center">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
                Cava Bases Menu
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                Every kids order from the{" "}
                <Link href="/" className="text-[#0A6847] font-semibold hover:underline">
                  Cava menu
                </Link>{" "}
                starts with a base. Your child picks rice, greens, or lentils in a smaller portion.
                Rice keeps the meal filling, while greens make it lighter. Start with a base your
                child already likes to avoid wasted food.
              </p>
            </div>
          ) : isDipsSpreads ? (
            <div className="mb-[10px] pb-2 border-b border-gray-200/70 text-center">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
                CAVA Dips &amp; Spreads Menu
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                Every dip on the{" "}
                <Link href="/" className="text-[#0A6847] font-semibold hover:underline">
                  Cava menu
                </Link>{" "}
                adds flavor without extra effort. CAVA offers creamy, spicy, and tangy options for every taste. Hummus, Crazy Feta, tzatziki, and harissa are the most loved picks. Most dips come included with bowls, while extra portions cost a little more.
              </p>
            </div>
          ) : isSides ? (
            <div className="mb-[10px] pb-2 border-b border-gray-200/70 text-center">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
                Cava Sides Menu
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                The CAVA Sides Menu offers tasty options to enjoy alongside your meal. You can explore different sides based on your taste and budget. Each side comes with its own ingredients, calories, and price details. Check the menu before ordering to find the right option for you.
              </p>
            </div>
          ) : isDrinks ? (
            <div className="mb-[10px] pb-2 border-b border-gray-200/70 text-center">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
                CAVA Drinks Menu
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                CAVA is famous for fresh dips and spreads that suit every drink. Hummus, tzatziki, and harissa bring bold flavor to any bowl or pita. Browse the full CAVA menu to see every dip, spread, and topping option. Choose your dips first, then match a drink to the flavors.
              </p>
            </div>
          ) : isMains ? (
            <div className="mb-[10px] pb-2 border-b border-gray-200/70 text-center">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
                CAVA Mains Menu
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                CAVA mains menu includes grilled chicken, steak, falafel, lamb meatballs, and more. Choose your favorite protein to anchor your bowl or pita.
              </p>
            </div>
          ) : isToppings ? (
            <div className="mb-[10px] pb-2 border-b border-gray-200/70 text-center">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
                CAVA Toppings Menu
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                CAVA toppings include fresh vegetables, feta, pickled onions, crunchy crisps, and more. Customize your bowl or pita with your favorite flavors.
              </p>
            </div>
          ) : isDressings ? (
            <div className="mb-[10px] pb-2 border-b border-gray-200/70 text-center">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
                CAVA Dressings Menu
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                CAVA dressings include creamy tahini, tangy vinaigrettes, spicy skhug, and rich garlic dressing. Browse the full{" "}
                <Link href="/" className="text-[#0A6847] font-semibold hover:underline">
                  CAVA menu
                </Link>{" "}
                to explore every dressing, dip, and topping to build a balanced and flavorful meal.
              </p>
            </div>
          ) : isDesserts ? (
            <div className="mb-[10px] pb-2 border-b border-gray-200/70 text-center">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
                CAVA Desserts Menu
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                Before trying desserts, check the full{" "}
                <Link href="/" className="text-[#0A6847] font-semibold hover:underline">
                  CAVA menu
                </Link>{" "}
                for dips and spreads that pair with sweeter bites. Options like hummus, tzatziki, and harissa go well with warm pita chips. Many guests add honey or cinnamon sugar for a simple dessert style finish.
              </p>
            </div>
          ) : (
            <div className="mb-[10px] pb-2 border-b border-gray-200/70 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-[3px] w-6 rounded-full" style={{ background: ACCENT_GRADIENT }} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0A6847]">
                    {items.length} {items.length === 1 ? "Item" : "Items"}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                  All {label}
                </h2>
              </div>
            </div>
          )}

          {/* Items Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 pb-2.5">
            {items.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Bowl Customisation Options */}
      {isCuratedBowls && (
        <section className="bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-[10px]">
            <div className="text-center max-w-2xl mx-auto mb-[10px]">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
                CAVA Bowl Customisation Options
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-[10px]">
                Every CAVA bowl starts with your choice of a warm or cool base.
                Next you pick a protein that fits your taste and goals. Then add
                up to three creamy dips, four fresh toppings, and two bold dressings.
                This step by step process lets you control every calorie and flavor.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left max-w-xl mx-auto">
                <div className="bg-gray-50 rounded-xl px-4 py-3">
                  <span className="text-sm font-bold text-gray-900">8 Bases</span>
                  <p className="text-xs text-gray-400 mt-0.5">Grains, lentils, or greens</p>
                </div>
                <div className="bg-gray-50 rounded-xl px-4 py-3">
                  <span className="text-sm font-bold text-gray-900">9 Proteins</span>
                  <p className="text-xs text-gray-400 mt-0.5">Chicken, steak, lamb, salmon</p>
                </div>
                <div className="bg-gray-50 rounded-xl px-4 py-3">
                  <span className="text-sm font-bold text-gray-900">6 Dips</span>
                  <p className="text-xs text-gray-400 mt-0.5">Hummus, tzatziki, feta</p>
                </div>
                <div className="bg-gray-50 rounded-xl px-4 py-3">
                  <span className="text-sm font-bold text-gray-900">13 Toppings</span>
                  <p className="text-xs text-gray-400 mt-0.5">Veggies, olives, avocado</p>
                </div>
                <div className="bg-gray-50 rounded-xl px-4 py-3 col-span-2 sm:col-span-2">
                  <span className="text-sm font-bold text-gray-900">8 Dressings</span>
                  <p className="text-xs text-gray-400 mt-0.5">Tahini, vinaigrettes, skhug</p>
                </div>
              </div>
            </div>

            <div className="h-px bg-gray-200 mb-[10px]" />

            {/* Interactive Bowl Builder */}
            <div className="text-center mb-[10px]">
              <h3 className="text-xl font-black text-gray-900 mb-1.5">
                Build Your Custom Bowl
              </h3>
              <p className="text-gray-400 text-sm">
                Select items from each step to see your total nutrition breakdown.
              </p>
            </div>
            <BowlBuilder />
          </div>
        </section>
      )}

      {/* Curated Bowls SEO Article */}
      {isCuratedBowls && <CuratedBowlsArticle />}

      {/* Curated Pitas SEO Article */}
      {isCuratedPitas && <CuratedPitasArticle />}

      {/* Bases SEO Article */}
      {isBases && <BasesArticle />}

      {/* Kids Meal SEO Article */}
      {isKidsMeal && <KidsMealArticle />}

      {/* Dips & Spreads SEO Article */}
      {isDipsSpreads && <DipsSpreadsArticle />}

      {/* Sides SEO Article */}
      {isSides && <SidesArticle />}

      {/* Drinks SEO Article */}
      {isDrinks && <DrinksArticle />}

      {/* Mains SEO Article */}
      {isMains && <MainsArticle />}

      {/* Toppings SEO Article */}
      {isToppings && <ToppingsArticle />}

      {/* Dressings SEO Article */}
      {isDressings && <DressingsArticle />}

      {/* Desserts SEO Article */}
      {isDesserts && <DessertsArticle />}

    </main>
  );
}
