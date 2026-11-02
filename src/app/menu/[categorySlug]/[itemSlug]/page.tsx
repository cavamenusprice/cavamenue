import {
  menuData,
  categoryLabels,
  categorySlugs,
  getCategoryBySlug,
  getItemBySlug,
  getItemImage,
  getItemAlt,
  type NutritionItem,
} from "@/data/menu";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";

// ── Types ──
interface ProductContent {
  intro: string;
  priceCalories: string;
  whatMakesSpecial: string;
  nutritionFacts: string;
  whatsInside: string;
  tasteLike: string;
  customize: string;
  pairsWell: string;
  healthyChoice: string;
  howToOrder: string;
  vsAlternatives: string;
  whoShouldTry: string;
  worthTrying: string;
  faqs: { q: string; a: string }[];
}

// ── Load generated content if it exists ──
function loadContent(categorySlug: string, itemSlug: string): ProductContent | null {
  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "data",
      "product-content",
      categorySlug,
      itemSlug,
      "content.json"
    );
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw) as ProductContent;
  } catch {
    return null;
  }
}

// ── Static Params ──
export function generateStaticParams() {
  const params: { categorySlug: string; itemSlug: string }[] = [];
  for (const item of menuData) {
    params.push({
      categorySlug: categorySlugs[item.category],
      itemSlug: item.id,
    });
  }
  return params;
}

// ── Metadata ──
export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string; itemSlug: string }>;
}): Promise<Metadata> {
  const { itemSlug, categorySlug } = await params;
  const item = getItemBySlug(itemSlug);
  if (!item) return { title: "Not Found" };

  const content = loadContent(categorySlug, itemSlug);
  const image = getItemImage(item.id, item.category);
  const catLabel = categoryLabels[item.category];
  const pageUrl = `https://cavamenue.us/menu/${categorySlug}/${item.id}`;

  return {
    title: `CAVA ${item.name} Nutrition, Calories and Ingredients`,
    description:
      content?.intro
        ? content.intro.slice(0, 155).replace(/\[.*?\]\(.*?\)/g, "").trim() + "…"
        : `Explore CAVA ${item.name} with calories, nutrition facts, ingredients, allergens, and customization options before placing your order.`,
    alternates: {
      canonical: `/menu/${categorySlug}/${item.id}`,
    },
    openGraph: {
      title: `CAVA ${item.name} Nutrition, Calories and Ingredients`,
      description: `Explore CAVA ${item.name} — ${item.calories} calories, ${item.protein}g protein. View full nutrition facts, ingredients, and customization options.`,
      url: pageUrl,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `CAVA ${item.name}`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `CAVA ${item.name} Nutrition, Calories and Ingredients`,
      description: `Explore CAVA ${item.name} — ${item.calories} calories, ${item.protein}g protein. Full nutrition, ingredients & customization.`,
      images: [image],
    },
  };
}

// ── Macro Colors ──
const macroColors = {
  calories: { bg: "bg-amber-50",  text: "text-amber-700",  bar: "bg-amber-400",  border: "border-amber-200" },
  protein:  { bg: "bg-emerald-50",text: "text-emerald-700",bar: "bg-emerald-400",border: "border-emerald-200" },
  carbs:    { bg: "bg-blue-50",   text: "text-blue-700",   bar: "bg-blue-400",   border: "border-blue-200" },
  fat:      { bg: "bg-orange-50", text: "text-orange-700", bar: "bg-orange-400", border: "border-orange-200" },
  sodium:   { bg: "bg-gray-50",   text: "text-gray-700",   bar: "bg-gray-400",   border: "border-gray-200" },
};

// ── Render markdown-style links ──
function renderText(text?: string | null) {
  if (!text || typeof text !== "string") return null;
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      return (
        <Link
          key={i}
          href={match[2]}
          className="text-[#0A6847] font-semibold underline underline-offset-2 hover:text-[#085238] transition-colors"
        >
          {match[1]}
        </Link>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

// ── Section Component ──
function Section({
  heading,
  children,
  className = "",
}: {
  heading: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs ${className}`}>
      <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-3">{heading}</h2>
      {children}
    </section>
  );
}

// ── Page Component ──
export default async function ItemPage({
  params,
}: {
  params: Promise<{ categorySlug: string; itemSlug: string }>;
}) {
  const { categorySlug, itemSlug } = await params;

  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const item = getItemBySlug(itemSlug);
  if (!item || item.category !== category) notFound();

  const catLabel = categoryLabels[item.category];
  const catSlug  = categorySlugs[item.category];
  const relatedItems = menuData
    .filter((i) => i.category === item.category && i.id !== item.id)
    .slice(0, 6);

  const content = loadContent(categorySlug, itemSlug);
  const maxMacro = 100;

  // ── Schema ──
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: catLabel, item: `/menu/${catSlug}` },
      { "@type": "ListItem", position: 3, name: item.name, item: `/menu/${catSlug}/${item.id}` },
    ],
  };

  const faqSchema = content?.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: content.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }
    : null;

  return (
    <main className="min-h-screen bg-white text-[#1A1A2E] font-sans">
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0A6847] transition-colors">Home</Link>
            <span>›</span>
            <Link href={`/menu/${catSlug}`} className="hover:text-[#0A6847] transition-colors">{catLabel}</Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">{item.name}</span>
          </nav>
        </div>
      </div>

      {/* ── HERO: H1 + Intro + Nutrition Card ── */}
      <section className="py-[10px] bg-gradient-to-b from-[#FAFAF8] via-white to-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left */}
            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-emerald-50 text-[#0A6847] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                {catLabel}
              </span>
              <h1 className="text-[35px] font-black text-[#1A1A2E] leading-tight tracking-tight mb-4">
                CAVA {item.name}
              </h1>
              {item.price && (
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-2xl font-bold text-[#0A6847]">{item.price}</span>
                  {(item as NutritionItem & { size?: string }).size && (
                    <span className="text-sm text-gray-500 font-medium">
                      {(item as NutritionItem & { size?: string }).size}
                    </span>
                  )}
                </div>
              )}

              {/* Item Image */}
              <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 mb-6">
                <Image
                  src={getItemImage(item.id, item.category)}
                  alt={getItemAlt(item.id, item.name)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {content?.intro ? (
                <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed mb-6">
                  {renderText(content.intro)}
                </p>
              ) : (
                <p className="text-gray-500 leading-relaxed mb-6">
                  CAVA {item.name} has <strong>{item.calories} calories</strong>, {item.protein}g protein,{" "}
                  {item.carbs}g carbs, and {item.fat}g fat per serving.
                </p>
              )}

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/calculator"
                  className="inline-flex items-center gap-2 bg-[#0A6847] text-white px-6 py-3 rounded-full font-bold hover:bg-[#065F46] transition-colors shadow-md"
                >
                  Add to Calculator
                </Link>
                <Link
                  href={`/menu/${catSlug}`}
                  className="inline-flex items-center gap-2 border-2 border-gray-200 text-[#1A1A2E] px-6 py-3 rounded-full font-bold hover:border-[#0A6847] hover:text-[#0A6847] transition-all"
                >
                  View All {catLabel}
                </Link>
              </div>
            </div>

            {/* Right: Nutrition Card */}
            <div className="lg:w-80 shrink-0">
              <div className="bg-white rounded-2xl border-2 border-gray-100 shadow-lg p-6 sticky top-4">
                <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                  Nutrition Facts
                </h2>
                <div className="text-center mb-6 pb-6 border-b border-gray-100">
                  <div className="text-6xl font-bold text-[#1A1A2E] tracking-tight">{item.calories}</div>
                  <div className="text-gray-500 font-medium uppercase tracking-wider text-sm mt-1">Calories</div>
                </div>
                <div className="space-y-4">
                  {(
                    [
                      { key: "protein" as const, label: "Protein", value: item.protein, unit: "g" },
                      { key: "carbs"   as const, label: "Carbs",   value: item.carbs,   unit: "g" },
                      { key: "fat"     as const, label: "Fat",     value: item.fat,     unit: "g" },
                      { key: "sodium"  as const, label: "Sodium",  value: item.sodium,  unit: "mg" },
                    ] as const
                  ).map((macro) => {
                    const colors = macroColors[macro.key];
                    const pct = Math.min((macro.value / maxMacro) * 100, 100);
                    return (
                      <div key={macro.key}>
                        <div className="flex justify-between items-baseline mb-1.5">
                          <span className="text-sm font-semibold text-gray-700">{macro.label}</span>
                          <span className={`text-sm font-bold ${colors.text}`}>
                            {macro.value}{macro.unit}
                          </span>
                        </div>
                        <div className={`h-2.5 rounded-full ${colors.bg} overflow-hidden`}>
                          <div
                            className={`h-full rounded-full ${colors.bar} transition-all duration-500`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Macro Summary Cards ── */}
      <section className="py-[10px] bg-[#F8FAFB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Calories", value: `${item.calories}`,    color: macroColors.calories },
              { label: "Protein",  value: `${item.protein}g`,    color: macroColors.protein },
              { label: "Carbs",    value: `${item.carbs}g`,      color: macroColors.carbs },
              { label: "Fat",      value: `${item.fat}g`,        color: macroColors.fat },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`${stat.color.bg} border ${stat.color.border} rounded-xl p-4 text-center`}
              >
                <div className={`text-2xl font-bold ${stat.color.text}`}>{stat.value}</div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO Content Sections ── */}
      {content && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-[10px] space-y-[10px]">

          {/* Price and Calories */}
          {content.priceCalories && (
            <Section heading={`CAVA ${item.name} Price and Calories`}>
              <p className="text-[#4B5563] leading-relaxed text-[15px]">{renderText(content.priceCalories)}</p>
            </Section>
          )}

          {/* What Makes Special */}
          {content.whatMakesSpecial && (
            <Section heading={`What Makes CAVA ${item.name} Special?`} className="border-l-4 border-[#0A6847] rounded-l-none">
              <p className="text-[#4B5563] leading-relaxed text-[15px]">{renderText(content.whatMakesSpecial)}</p>
            </Section>
          )}

          {/* Nutrition Facts */}
          {content.nutritionFacts && (
            <Section heading={`CAVA ${item.name} Nutrition Facts`}>
              <p className="text-[#4B5563] leading-relaxed text-[15px]">{renderText(content.nutritionFacts)}</p>
            </Section>
          )}

          {/* What's Inside */}
          {content.whatsInside && (
            <Section heading={`What's Inside CAVA ${item.name}?`}>
              {content.whatsInside.split("\n\n").map((para, i) => (
                <p key={i} className="text-[#4B5563] leading-relaxed text-[15px] mb-3 last:mb-0">
                  {renderText(para)}
                </p>
              ))}
            </Section>
          )}

          {/* Taste Like */}
          {content.tasteLike && (
            <Section heading={`What Does CAVA ${item.name} Taste Like?`}>
              <p className="text-[#4B5563] leading-relaxed text-[15px]">{renderText(content.tasteLike)}</p>
            </Section>
          )}

          {/* Customize */}
          {content.customize && (
            <Section heading={`Best Ways to Customize Your CAVA ${item.name}`}>
              <p className="text-[#4B5563] leading-relaxed text-[15px]">{renderText(content.customize)}</p>
            </Section>
          )}

          {/* Pairs Well */}
          {content.pairsWell && (
            <Section heading={`Best Sides and Drinks to Pair With CAVA ${item.name}`}>
              <p className="text-[#4B5563] leading-relaxed text-[15px]">{renderText(content.pairsWell)}</p>
            </Section>
          )}

          {/* Healthy Choice */}
          {content.healthyChoice && (
            <Section heading={`Is CAVA ${item.name} a Healthy Choice?`} className="bg-emerald-50/30 border-emerald-200">
              <p className="text-[#4B5563] leading-relaxed text-[15px]">{renderText(content.healthyChoice)}</p>
            </Section>
          )}

          {/* How to Order */}
          {content.howToOrder && (
            <Section heading={`How to Order CAVA ${item.name} Online or In Store`}>
              <p className="text-[#4B5563] leading-relaxed text-[15px]">{renderText(content.howToOrder)}</p>
            </Section>
          )}

          {/* vs Alternatives */}
          {content.vsAlternatives && (
            <Section heading={`CAVA ${item.name} vs Similar Menu Items`}>
              <p className="text-[#4B5563] leading-relaxed text-[15px]">{renderText(content.vsAlternatives)}</p>
            </Section>
          )}

          {/* Who Should Try */}
          {content.whoShouldTry && (
            <Section heading={`Who Should Try CAVA ${item.name}?`}>
              <p className="text-[#4B5563] leading-relaxed text-[15px]">{renderText(content.whoShouldTry)}</p>
            </Section>
          )}

          {/* Worth Trying */}
          {content.worthTrying && (
            <section className="bg-gradient-to-r from-[#0A6847] to-[#065F46] rounded-2xl p-6 sm:p-8 text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
                Is CAVA {item.name} Worth Trying?
              </h2>
              <p className="text-white/90 leading-relaxed text-[15px]">{content.worthTrying}</p>
            </section>
          )}

          {/* FAQs */}
          {content.faqs?.length > 0 && (
            <section className="pt-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-5 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {content.faqs.map((faq, index) => (
                  <details
                    key={faq.q}
                    className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs"
                    open={index === 0}
                  >
                    <summary className="flex items-center justify-between cursor-pointer p-5 text-[#1A1A2E] font-semibold text-[15px] select-none hover:bg-gray-50 transition-colors list-none">
                      <span>{faq.q}</span>
                      <span className="ml-4 flex-shrink-0 text-[#0A6847] font-black text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                    </summary>
                    <div className="px-5 pb-5 pt-1 border-t border-gray-100 bg-gray-50/50">
                      <p className="text-[#4B5563] leading-relaxed text-sm">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}
        </div>
      )}

      {/* ── Related Items ── */}
      {relatedItems.length > 0 && (
        <section className="py-[10px] bg-[#F8FAFB] border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#1A1A2E] mb-4">More from {catLabel}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedItems.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/menu/${catSlug}/${rel.id}`}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-emerald-200 transition-all group"
                >
                  <div className="relative h-32 bg-gray-100">
                    <Image
                      src={getItemImage(rel.id, rel.category)}
                      alt={rel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm group-hover:text-[#0A6847] transition-colors mb-2">
                      {rel.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-700">{rel.price || "–"}</span>
                      <span className="text-sm font-semibold text-amber-600">{rel.calories} Cal</span>
                    </div>
                    <div className="flex gap-3 mt-2 text-xs text-gray-500">
                      <span>P: {rel.protein}g</span>
                      <span>C: {rel.carbs}g</span>
                      <span>F: {rel.fat}g</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-4">
              <Link href={`/menu/${catSlug}`} className="text-sm font-semibold text-[#0A6847] hover:underline">
                View All {catLabel}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Back Links */}
      <section className="py-[10px] bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-6 justify-center">
          <Link href={`/menu/${catSlug}`} className="text-sm font-semibold text-[#0A6847] hover:underline">
            ← Back to {catLabel}
          </Link>
          <Link href="/calculator" className="text-sm font-semibold text-[#0A6847] hover:underline">
            Nutrition Calculator
          </Link>
          <Link href="/allergen-menu" className="text-sm font-semibold text-[#0A6847] hover:underline">
            Allergen Menu
          </Link>
          <Link href="/gluten-free" className="text-sm font-semibold text-[#0A6847] hover:underline">
            Gluten Free Guide
          </Link>
        </div>
      </section>
    </main>
  );
}
