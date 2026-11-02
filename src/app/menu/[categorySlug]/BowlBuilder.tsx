"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

/* ── Types ── */
interface BuilderItem {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  image: string;
  price: string;
}

interface StepConfig {
  key: string;
  title: string;
  subtitle: string;
  max: number;
  items: BuilderItem[];
}

/* ── Data ── */
const BASES: BuilderItem[] = [
  { id: "brown-rice", name: "Brown Rice", calories: 310, protein: 7, carbs: 48, fat: 10, price: "Included", image: "/images/menu/chicken-rice-bowl.webp" },
  { id: "saffron-basmati-rice", name: "Saffron Basmati Rice", calories: 290, protein: 5, carbs: 54, fat: 7, price: "Included", image: "/images/menu/chicken-rice-bowl.webp" },
  { id: "black-lentils", name: "Black Lentils", calories: 270, protein: 18, carbs: 37, fat: 7, price: "Included", image: "/images/menu/chicken-rice-bowl.webp" },
  { id: "super-greens", name: "Super Greens", calories: 35, protein: 3, carbs: 6, fat: 0.5, price: "Included", image: "/images/menu/greek-salad-bowl.webp" },
  { id: "power-greens", name: "Power Greens", calories: 30, protein: 2, carbs: 4, fat: 0, price: "Included", image: "/images/menu/greek-salad-bowl.webp" },
  { id: "baby-spinach", name: "Baby Spinach", calories: 20, protein: 3, carbs: 3, fat: 0, price: "Included", image: "/images/menu/greek-salad-bowl.webp" },
  { id: "arugula", name: "Arugula", calories: 20, protein: 2, carbs: 3, fat: 0.5, price: "Included", image: "/images/menu/greek-salad-bowl.webp" },
  { id: "romaine", name: "Romaine", calories: 20, protein: 1, carbs: 4, fat: 0, price: "Included", image: "/images/menu/greek-salad-bowl.webp" },
];

const PROTEINS: BuilderItem[] = [
  { id: "grilled-chicken", name: "Grilled Chicken", calories: 250, protein: 28, carbs: 3, fat: 13, price: "Base ($0)", image: "/images/menu/chicken-rice-bowl.webp" },
  { id: "harissa-honey-chicken", name: "Harissa Honey Chicken", calories: 260, protein: 26, carbs: 7, fat: 14, price: "+$0.50", image: "/images/menu/harissa-avocado-bowl.webp" },
  { id: "grilled-steak", name: "Grilled Steak", calories: 170, protein: 23, carbs: 1, fat: 9, price: "+$2.50", image: "/images/menu/steak-harissa-bowl.webp" },
  { id: "braised-lamb", name: "Braised Lamb", calories: 210, protein: 24, carbs: 2, fat: 12, price: "+$2.50", image: "/images/menu/spicy-lamb-avocado-bowl.webp" },
  { id: "spicy-lamb-meatballs", name: "Spicy Lamb Meatballs", calories: 300, protein: 24, carbs: 3, fat: 21, price: "+$2.25", image: "/images/menu/spicy-lamb-avocado-bowl.webp" },
  { id: "falafel", name: "Falafel", calories: 350, protein: 6, carbs: 24, fat: 26, price: "Base ($0)", image: "/images/menu/falafel-crunch-bowl.webp" },
  { id: "roasted-vegetables", name: "Roasted Vegetables", calories: 100, protein: 3, carbs: 14, fat: 4.5, price: "Base ($0)", image: "/images/menu/greek-salad-bowl.webp" },
  { id: "glazed-salmon", name: "Glazed Salmon", calories: 320, protein: 23, carbs: 5, fat: 23, price: "+$4.50", image: "/images/menu/harissa-avocado-bowl.webp" },
  { id: "baharat-braised-beef", name: "Baharat Braised Beef", calories: 310, protein: 22, carbs: 8, fat: 18, price: "+$2.50", image: "/images/menu/baharat-braised-beef-and-rice.webp" },
];

const DIPS: BuilderItem[] = [
  { id: "tzatziki", name: "Tzatziki", calories: 30, protein: 2, carbs: 1, fat: 2.5, price: "Included", image: "/images/menu/tzatziki.webp" },
  { id: "hummus", name: "Hummus", calories: 50, protein: 2, carbs: 4, fat: 2.5, price: "Included", image: "/images/menu/hummus.webp" },
  { id: "roasted-eggplant-dip", name: "Roasted Eggplant Dip", calories: 50, protein: 0, carbs: 2, fat: 5, price: "Included", image: "/images/menu/roasted-eggplant-dip.webp" },
  { id: "crazy-feta", name: "Crazy Feta", calories: 70, protein: 4, carbs: 1, fat: 6, price: "Included", image: "/images/menu/crazy-feta.webp" },
  { id: "harissa", name: "Harissa", calories: 70, protein: 1, carbs: 5, fat: 6, price: "Included", image: "/images/menu/harissa.webp" },
  { id: "red-pepper-hummus", name: "Red Pepper Hummus", calories: 40, protein: 2, carbs: 5, fat: 1.5, price: "Included", image: "/images/menu/red-pepper-hummus.webp" },
];

const TOPPINGS: BuilderItem[] = [
  { id: "shredded-romaine", name: "Shredded Romaine", calories: 5, protein: 0, carbs: 1, fat: 0, price: "Included", image: "/images/menu/greek-salad-bowl.webp" },
  { id: "pita-crisps", name: "Pita Crisps", calories: 70, protein: 1, carbs: 6, fat: 11, price: "Included", image: "/images/menu/falafel-crunch-bowl.webp" },
  { id: "sumac-cabbage-slaw", name: "Sumac Cabbage Slaw", calories: 30, protein: 1, carbs: 3, fat: 1.5, price: "Included", image: "/images/menu/falafel-crunch-bowl.webp" },
  { id: "tomato-onion", name: "Tomato + Onion", calories: 20, protein: 0, carbs: 2, fat: 1.5, price: "Included", image: "/images/menu/greek-salad-bowl.webp" },
  { id: "persian-cucumber", name: "Persian Cucumber", calories: 15, protein: 0, carbs: 1, fat: 1, price: "Included", image: "/images/menu/greek-salad-bowl.webp" },
  { id: "tomato-cucumber", name: "Tomato + Cucumber", calories: 5, protein: 0, carbs: 1, fat: 0, price: "Included", image: "/images/menu/greek-salad-bowl.webp" },
  { id: "kalamata-olives", name: "Kalamata Olives", calories: 35, protein: 0, carbs: 2, fat: 3, price: "Included", image: "/images/menu/greek-salad-bowl.webp" },
  { id: "fiery-broccoli", name: "Fiery Broccoli", calories: 35, protein: 1, carbs: 2, fat: 2.5, price: "Included", image: "/images/menu/greek-salad-bowl.webp" },
  { id: "pickled-onions", name: "Pickled Onions", calories: 20, protein: 0, carbs: 5, fat: 0, price: "Included", image: "/images/menu/greek-salad-bowl.webp" },
  { id: "salt-brined-pickles", name: "Salt-Brined Pickles", calories: 5, protein: 0, carbs: 0, fat: 0, price: "Included", image: "/images/menu/greek-salad-bowl.webp" },
  { id: "crumbled-feta", name: "Crumbled Feta", calories: 35, protein: 3, carbs: 0, fat: 2.5, price: "Included", image: "/images/menu/greek-salad-bowl.webp" },
  { id: "fire-roasted-corn", name: "Fire-Roasted Corn", calories: 45, protein: 1, carbs: 5, fat: 2.5, price: "Included", image: "/images/menu/greek-salad-bowl.webp" },
  { id: "fresh-avocado", name: "Fresh Avocado", calories: 110, protein: 1, carbs: 6, fat: 10, price: "+$1.95", image: "/images/menu/harissa-avocado-bowl.webp" },
];

const DRESSINGS: BuilderItem[] = [
  { id: "balsamic-date-vinaigrette", name: "Balsamic Date Vinaigrette", calories: 60, protein: 0, carbs: 7, fat: 4, price: "Included", image: "/images/menu/harissa-avocado-bowl.webp" },
  { id: "yogurt-dill", name: "Yogurt Dill", calories: 30, protein: 2, carbs: 1, fat: 2, price: "Included", image: "/images/menu/tzatziki.webp" },
  { id: "lemon-herb-tahini", name: "Lemon Herb Tahini", calories: 70, protein: 2, carbs: 4, fat: 6, price: "Included", image: "/images/menu/baharat-beef-lemon-tahini.webp" },
  { id: "strawberry-sesame", name: "Strawberry Sesame", calories: 60, protein: 1, carbs: 3, fat: 5, price: "Included", image: "/images/menu/strawberry-steak-salad.webp" },
  { id: "greek-vinaigrette", name: "Greek Vinaigrette", calories: 130, protein: 0, carbs: 1, fat: 14, price: "Included", image: "/images/menu/greek-salad-bowl.webp" },
  { id: "skhug", name: "Skhug", calories: 80, protein: 0, carbs: 1, fat: 9, price: "Included", image: "/images/menu/harissa-avocado-bowl.webp" },
  { id: "hot-harissa-vinaigrette", name: "Hot Harissa Vinaigrette", calories: 70, protein: 0, carbs: 1, fat: 7, price: "Included", image: "/images/menu/harissa.webp" },
  { id: "garlic-dressing", name: "Garlic Dressing", calories: 180, protein: 0, carbs: 0, fat: 20, price: "Included", image: "/images/menu/garlic-chicken-veggie-pita.webp" },
];

const STEPS: StepConfig[] = [
  { key: "base", title: "Choose Your Base", subtitle: "Pick 1 base", max: 1, items: BASES },
  { key: "protein", title: "Choose Your Protein", subtitle: "Pick 1 protein", max: 1, items: PROTEINS },
  { key: "dip", title: "Choose Your Dips", subtitle: "Pick up to 3", max: 3, items: DIPS },
  { key: "topping", title: "Choose Your Toppings", subtitle: "Pick up to 4", max: 4, items: TOPPINGS },
  { key: "dressing", title: "Choose Your Dressing", subtitle: "Pick up to 2", max: 2, items: DRESSINGS },
];

/* ── Bowl result image based on protein selection ── */
const BOWL_IMAGES: Record<string, string> = {
  "grilled-chicken": "/images/menu/chicken-rice-bowl.webp",
  "harissa-honey-chicken": "/images/menu/harissa-avocado-bowl.webp",
  "grilled-steak": "/images/menu/steak-harissa-bowl.webp",
  "braised-lamb": "/images/menu/spicy-lamb-avocado-bowl.webp",
  "spicy-lamb-meatballs": "/images/menu/spicy-lamb-avocado-bowl.webp",
  "falafel": "/images/menu/falafel-crunch-bowl.webp",
  "roasted-vegetables": "/images/menu/greek-salad-bowl.webp",
  "glazed-salmon": "/images/menu/harissa-avocado-bowl.webp",
  "baharat-braised-beef": "/images/menu/baharat-braised-beef-and-rice.webp",
};

/* ── Component ── */
export default function BowlBuilder() {
  const [selections, setSelections] = useState<Record<string, string[]>>({
    base: [],
    protein: [],
    dip: [],
    topping: [],
    dressing: [],
  });

  function toggleItem(stepKey: string, itemId: string, max: number) {
    setSelections((prev) => {
      const current = prev[stepKey] ?? [];
      if (current.includes(itemId)) {
        return { ...prev, [stepKey]: current.filter((id) => id !== itemId) };
      }
      if (current.length >= max) {
        if (max === 1) {
          return { ...prev, [stepKey]: [itemId] };
        }
        return prev;
      }
      return { ...prev, [stepKey]: [...current, itemId] };
    });
  }

  function resetAll() {
    setSelections({ base: [], protein: [], dip: [], topping: [], dressing: [] });
  }

  const totals = useMemo(() => {
    let cal = 0, pro = 0, carb = 0, fat = 0, price = 0;
    const BASE_BOWL_PRICE = 11.95;
    let hasAnySelection = false;
    for (const step of STEPS) {
      const selected = selections[step.key] ?? [];
      for (const id of selected) {
        hasAnySelection = true;
        const item = step.items.find((i) => i.id === id);
        if (item) {
          cal += item.calories;
          pro += item.protein;
          carb += item.carbs;
          fat += item.fat;
          // Parse extra cost from price string like "+$2.50"
          const match = item.price.match(/\+\$(\d+\.?\d*)/);
          if (match) price += parseFloat(match[1]);
        }
      }
    }
    const totalPrice = hasAnySelection ? BASE_BOWL_PRICE + price : 0;
    return { calories: cal, protein: pro, carbs: carb, fat: Math.round(fat), price: totalPrice };
  }, [selections]);

  const totalSelected = Object.values(selections).flat().length;
  const hasBase = selections.base.length > 0;
  const hasProtein = selections.protein.length > 0;
  const isBowlReady = hasBase && hasProtein;
  const bowlImage = hasProtein ? (BOWL_IMAGES[selections.protein[0]] || "/images/menu/chicken-rice-bowl.webp") : null;

  // Collect selected item names for summary
  const getSelectedNames = (stepKey: string) => {
    const step = STEPS.find(s => s.key === stepKey);
    if (!step) return [];
    return (selections[stepKey] ?? []).map(id => step.items.find(i => i.id === id)?.name).filter(Boolean);
  };

  return (
    <div>
      {/* Your Bowl Summary Card */}
      <div className="bg-gradient-to-br from-[#0A6847] to-[#065F46] rounded-2xl p-5 sm:p-6 mb-10 text-white overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center gap-5">
          {/* Bowl image */}
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-white/10 flex-shrink-0">
            {bowlImage ? (
              <Image
                src={bowlImage}
                alt="Your custom CAVA bowl"
                fill
                className="object-cover"
                sizes="144px"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white/30 text-xs font-semibold text-center px-3">Pick a base and protein to start</span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 text-center sm:text-left w-full">
            <div className="flex items-center justify-center sm:justify-between mb-3">
              <h3 className="text-lg font-bold">Your Bowl</h3>
              {totalSelected > 0 && (
                <button
                  onClick={resetAll}
                  className="text-xs font-semibold text-white/60 hover:text-white transition-colors hidden sm:block"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Price & Macros grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              <div className="col-span-2 sm:col-span-1 bg-amber-400 text-gray-900 rounded-xl py-2.5 px-2 shadow-sm">
                <div className="text-[9px] font-bold uppercase tracking-wider text-amber-950 mb-0.5">
                  Est. Price
                </div>
                <div className="text-base sm:text-lg font-black tabular-nums">
                  {totals.price > 0 ? `$${totals.price.toFixed(2)}` : "$0.00"}
                </div>
              </div>
              {[
                { label: "Cal", value: totals.calories, unit: "" },
                { label: "Protein", value: totals.protein, unit: "g" },
                { label: "Carbs", value: totals.carbs, unit: "g" },
                { label: "Fat", value: totals.fat, unit: "g" },
              ].map((m) => (
                <div key={m.label} className="bg-white/10 rounded-xl py-2.5 px-2">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-white/50 mb-0.5">
                    {m.label}
                  </div>
                  <div className="text-base sm:text-lg font-black tabular-nums">
                    {m.value}{m.unit}
                  </div>
                </div>
              ))}
            </div>

            {/* Selected items summary */}
            {isBowlReady && (
              <div className="mt-3 text-xs text-white/60 leading-relaxed">
                {getSelectedNames("base").join(", ")}
                {" + "}
                {getSelectedNames("protein").join(", ")}
                {getSelectedNames("dip").length > 0 && ` + ${getSelectedNames("dip").join(", ")}`}
              </div>
            )}

            {/* Mobile reset */}
            {totalSelected > 0 && (
              <button
                onClick={resetAll}
                className="sm:hidden mt-3 text-xs font-semibold text-white/60 hover:text-white transition-colors"
              >
                Reset All
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-[10px]">
        {STEPS.map((step, stepIndex) => {
          const selected = selections[step.key] ?? [];
          return (
            <div key={step.key}>
              {/* Step header */}
              <div className="flex items-center gap-3 mb-[10px]">
                <span className="w-8 h-8 rounded-full bg-[#0A6847] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {stepIndex + 1}
                </span>
                <div className="flex-1">
                  <h4 className="text-base font-bold text-gray-900">{step.title}</h4>
                  <p className="text-xs text-gray-400">{step.subtitle}</p>
                </div>
                <span className="text-xs font-bold text-[#0A6847] bg-emerald-50 px-2.5 py-1 rounded-full tabular-nums">
                  {selected.length}/{step.max}
                </span>
              </div>

              {/* Items grid */}
              <div className={`grid gap-2.5 ${
                step.key === "dip" || step.key === "dressing"
                  ? "grid-cols-2 sm:grid-cols-3"
                  : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
              }`}>
                {step.items.map((item) => {
                  const isSelected = selected.includes(item.id);
                  const isFull = selected.length >= step.max && !isSelected;
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleItem(step.key, item.id, step.max)}
                      disabled={isFull && step.max > 1}
                      className={`
                        group relative text-left rounded-xl border overflow-hidden transition-all duration-200
                        ${isSelected
                          ? "border-[#0A6847] ring-2 ring-[#0A6847]/20 shadow-md"
                          : isFull && step.max > 1
                            ? "border-gray-100 opacity-35 cursor-not-allowed"
                            : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                        }
                      `}
                    >
                      {/* Image */}
                      <div className="aspect-[4/3] relative bg-gray-100 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          className={`object-cover transition-transform duration-300 ${
                            isSelected ? "scale-105" : "group-hover:scale-105"
                          }`}
                        />
                        {/* Selected checkmark */}
                        {isSelected && (
                          <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#0A6847] flex items-center justify-center shadow-lg">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="p-3">
                        <div className="flex items-center justify-between mb-1">
                          <h5 className={`text-sm font-bold leading-tight ${
                            isSelected ? "text-[#0A6847]" : "text-gray-900"
                          }`}>
                            {item.name}
                          </h5>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                            <span>{item.calories} cal</span>
                            <span className="w-0.5 h-0.5 rounded-full bg-gray-300" />
                            <span>{item.protein}g protein</span>
                          </div>
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                            item.price.startsWith("+")
                              ? "bg-emerald-50 text-[#0A6847]"
                              : "bg-gray-100 text-gray-400"
                          }`}>
                            {item.price}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
