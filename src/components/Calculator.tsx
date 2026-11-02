"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { menuData, categoryLabels, categoryOrder, getItemImage, getItemAlt, type NutritionItem } from "@/data/menu";

interface SelectedItem {
  item: NutritionItem;
  quantity: number;
}

export default function Calculator() {
  const [selected, setSelected] = useState<SelectedItem[]>([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<NutritionItem["category"] | "all">("all");

  const filteredItems = useMemo(() => {
    let items = menuData;
    if (activeCategory !== "all") {
      items = items.filter((i) => i.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter((i) => i.name.toLowerCase().includes(q));
    }
    return items;
  }, [search, activeCategory]);

  const totals = useMemo(() => {
    return selected.reduce(
      (acc, { item, quantity }) => ({
        calories: acc.calories + item.calories * quantity,
        protein: acc.protein + item.protein * quantity,
        carbs: acc.carbs + item.carbs * quantity,
        fat: acc.fat + item.fat * quantity,
        sodium: acc.sodium + item.sodium * quantity,
      }),
      { calories: 0, protein: 0, carbs: 0, fat: 0, sodium: 0 }
    );
  }, [selected]);

  const addItem = (item: NutritionItem) => {
    setSelected((prev) => {
      const existing = prev.find((s) => s.item.id === item.id);
      if (existing) {
        return prev.map((s) =>
          s.item.id === item.id ? { ...s, quantity: s.quantity + 1 } : s
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setSelected((prev) => prev.filter((s) => s.item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setSelected((prev) =>
      prev
        .map((s) =>
          s.item.id === id ? { ...s, quantity: Math.max(0, s.quantity + delta) } : s
        )
        .filter((s) => s.quantity > 0)
    );
  };

  const clearAll = () => setSelected([]);

  const categoryColors: Record<NutritionItem["category"], string> = {
    "curated-bowl": "bg-amber-50 text-amber-700 border-amber-200",
    "curated-pita": "bg-yellow-50 text-yellow-700 border-yellow-200",
    base: "bg-emerald-50 text-emerald-700 border-emerald-200",
    main: "bg-orange-50 text-orange-700 border-orange-200",
    kids: "bg-pink-50 text-pink-700 border-pink-200",
    topping: "bg-sky-50 text-sky-700 border-sky-200",
    dip: "bg-purple-50 text-purple-700 border-purple-200",
    dressing: "bg-rose-50 text-rose-700 border-rose-200",
    side: "bg-teal-50 text-teal-700 border-teal-200",
    dessert: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
    drink: "bg-indigo-50 text-indigo-700 border-indigo-200",
  };

  const categoryBtnColors: Record<string, string> = {
    all: "bg-[#0A6847] text-white border-[#0A6847]",
    "curated-bowl": "bg-amber-600 text-white border-amber-600",
    "curated-pita": "bg-yellow-600 text-white border-yellow-600",
    base: "bg-emerald-600 text-white border-emerald-600",
    main: "bg-orange-600 text-white border-orange-600",
    kids: "bg-pink-600 text-white border-pink-600",
    topping: "bg-sky-600 text-white border-sky-600",
    dip: "bg-purple-600 text-white border-purple-600",
    dressing: "bg-rose-600 text-white border-rose-600",
    side: "bg-teal-600 text-white border-teal-600",
    dessert: "bg-fuchsia-600 text-white border-fuchsia-600",
    drink: "bg-indigo-600 text-white border-indigo-600",
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Menu Items */}
        <div className="lg:col-span-2">
          {/* Search */}
          <div className="relative mb-4">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium select-none">
              Search
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="chicken, hummus, rice…"
              className="w-full pl-20 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#0A6847] focus:ring-1 focus:ring-[#0A6847] outline-none text-sm bg-white transition-colors"
            />
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap border ${
                activeCategory === "all"
                  ? categoryBtnColors.all
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#0A6847] hover:text-[#0A6847]"
              }`}
            >
              All Items
            </button>
            {categoryOrder.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap border ${
                  activeCategory === cat
                    ? categoryBtnColors[cat]
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#0A6847] hover:text-[#0A6847]"
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredItems.map((item) => {
              const isSelected = selected.some((s) => s.item.id === item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => addItem(item)}
                  className={`text-left p-3.5 rounded-xl border-2 transition-all duration-200 group ${
                    isSelected
                      ? "border-[#0A6847] bg-emerald-50/30"
                      : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 bg-gray-100 border border-gray-100">
                      <Image
                        src={getItemImage(item.id, item.category)}
                        alt={getItemAlt(item.id, item.name)}
                        fill
                        sizes="(max-width: 640px) 56px, 64px"
                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${categoryColors[item.category]}`}>
                          {categoryLabels[item.category]}
                        </span>
                      </div>
                      <span className="font-semibold text-gray-900 text-sm block truncate">{item.name}</span>
                      <div className="flex items-center gap-2.5 mt-1 text-xs text-gray-500">
                        <span className="font-bold text-[#1A1A2E]">{item.calories} cal</span>
                        <span>P {item.protein}g</span>
                        <span>C {item.carbs}g</span>
                        <span>F {item.fat}g</span>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors text-sm font-bold ${
                      isSelected ? "bg-[#0A6847] text-white" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                    }`}>
                      {isSelected ? "✓" : "+"}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <p className="text-2xl font-bold mb-2">No items found</p>
              <p className="text-sm">Try a different search term</p>
            </div>
          )}
        </div>

        {/* Right: Bowl Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            {/* Nutrition Totals Card */}
            <div className="bg-white rounded-2xl border-2 border-[#0A6847]/15 p-6 shadow-sm mb-4">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold text-xl text-[#1A1A2E]">Your Bowl</h2>
                {selected.length > 0 && (
                  <button
                    onClick={clearAll}
                    className="text-xs text-red-500 hover:text-red-700 font-semibold uppercase tracking-wide"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Macro Summary */}
              <div className="bg-gradient-to-br from-[#0A6847] to-[#065F46] rounded-xl p-6 mb-5 text-white">
                <div className="text-center mb-5">
                  <div className="text-5xl font-bold tracking-tight">{totals.calories}</div>
                  <div className="text-emerald-200 text-sm font-medium uppercase tracking-wider mt-1">calories</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-white/15 rounded-lg p-2.5">
                    <div className="font-bold text-sm">{totals.protein}g</div>
                    <div className="text-[10px] text-emerald-200 font-medium">Protein</div>
                  </div>
                  <div className="bg-white/15 rounded-lg p-2.5">
                    <div className="font-bold text-sm">{totals.carbs}g</div>
                    <div className="text-[10px] text-emerald-200 font-medium">Carbs</div>
                  </div>
                  <div className="bg-white/15 rounded-lg p-2.5">
                    <div className="font-bold text-sm">{totals.fat}g</div>
                    <div className="text-[10px] text-emerald-200 font-medium">Fat</div>
                  </div>
                  <div className="bg-white/15 rounded-lg p-2.5">
                    <div className="font-bold text-sm">{totals.sodium}</div>
                    <div className="text-[10px] text-emerald-200 font-medium">Sodium</div>
                  </div>
                </div>
              </div>

              {/* Macro Bars */}
              {selected.length > 0 && totals.calories > 0 && (
                <div className="space-y-3 mb-5">
                  {[
                    { label: "Protein", value: totals.protein * 4, color: "bg-blue-500" },
                    { label: "Carbs", value: totals.carbs * 4, color: "bg-amber-500" },
                    { label: "Fat", value: totals.fat * 9, color: "bg-red-400" },
                  ].map((macro) => {
                    const pct = Math.round((macro.value / totals.calories) * 100);
                    return (
                      <div key={macro.label}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-semibold text-gray-700">{macro.label}</span>
                          <span className="text-gray-500 font-medium">{pct}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${macro.color} rounded-full transition-all duration-500`}
                            style={{ width: `${Math.min(pct, 100)}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Selected Items */}
              {selected.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                  <p className="text-3xl font-bold text-gray-200 mb-3">0</p>
                  <p className="text-sm font-medium">Your bowl is empty</p>
                  <p className="text-xs mt-1">Click items to start building</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {selected.map(({ item, quantity }) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl gap-2.5"
                    >
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-white border border-gray-200">
                        <Image
                          src={getItemImage(item.id, item.category)}
                          alt={getItemAlt(item.id, item.name)}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.calories * quantity} cal</p>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:border-red-300 hover:text-red-500 transition-colors font-bold text-sm"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm font-bold text-gray-900">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#0A6847] hover:text-[#0A6847] transition-colors font-bold text-sm"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors ml-0.5 text-xs font-bold"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Daily Value Context */}
            {selected.length > 0 && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800">
                <p className="font-bold mb-1">Daily Value Context</p>
                <p>
                  Based on a 2,000 calorie diet, this bowl provides{" "}
                  <strong>{Math.round((totals.calories / 2000) * 100)}%</strong> of daily calories,{" "}
                  <strong>{Math.round((totals.protein / 50) * 100)}%</strong> of protein,{" "}
                  and <strong>{Math.round((totals.sodium / 2300) * 100)}%</strong> of sodium.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
