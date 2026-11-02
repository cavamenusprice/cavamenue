'use client';

import { Fragment, useMemo, useState } from 'react';

export interface AllergenItem {
  category: string;
  name: string;
  wheat: boolean;
  dairy: boolean;
  eggs: boolean;
  soy: boolean;
  treeNuts: boolean;
  peanuts: boolean;
  fish: boolean;
  shellfish: boolean;
  sesame: boolean;
  vegan: boolean;
  vegetarian: boolean;
}

export const CATEGORY_ORDER = [
  'Curated Bowls',
  'Curated Pitas',
  'Bases',
  'Mains (Proteins)',
  'Dips & Spreads',
  'Toppings',
  'Dressings',
  'Sides',
  'Desserts',
  'Kids Meal',
] as const;

export const allergenData: AllergenItem[] = [
  // Curated Bowls
  { category: 'Curated Bowls', name: 'Chicken + Rice Bowl', wheat: false, dairy: true, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: true, vegan: false, vegetarian: false },
  { category: 'Curated Bowls', name: 'Greek Salad Bowl', wheat: false, dairy: true, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: true, vegan: false, vegetarian: false },
  { category: 'Curated Bowls', name: 'Harissa Avocado Bowl', wheat: false, dairy: true, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: true, vegan: false, vegetarian: false },
  { category: 'Curated Bowls', name: 'Falafel Crunch Bowl', wheat: true, dairy: false, eggs: false, soy: false, treeNuts: true, peanuts: false, fish: false, shellfish: false, sesame: true, vegan: true, vegetarian: true },
  { category: 'Curated Bowls', name: 'Spicy Lamb + Avocado Bowl', wheat: false, dairy: true, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: true, vegan: false, vegetarian: false },
  { category: 'Curated Bowls', name: 'Steak + Harissa Bowl', wheat: false, dairy: true, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: true, vegan: false, vegetarian: false },
  { category: 'Curated Bowls', name: 'Strawberry Steak Salad', wheat: false, dairy: false, eggs: false, soy: true, treeNuts: true, peanuts: false, fish: false, shellfish: false, sesame: true, vegan: false, vegetarian: false },
  { category: 'Curated Bowls', name: 'Pomegranate Glazed Salmon Bowl', wheat: false, dairy: false, eggs: false, soy: true, treeNuts: false, peanuts: false, fish: true, shellfish: false, sesame: true, vegan: false, vegetarian: false },
  { category: 'Curated Bowls', name: 'Salmon + Yogurt Dill', wheat: false, dairy: true, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: true, shellfish: false, sesame: true, vegan: false, vegetarian: false },
  { category: 'Curated Bowls', name: 'Salmon + Strawberry Sesame Bowl', wheat: false, dairy: false, eggs: false, soy: true, treeNuts: true, peanuts: false, fish: true, shellfish: false, sesame: true, vegan: false, vegetarian: false },
  { category: 'Curated Bowls', name: 'Baharat Braised Beef and Rice', wheat: false, dairy: true, eggs: true, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: false, vegetarian: false },
  { category: 'Curated Bowls', name: 'Baharat Beef + Lemon Tahini', wheat: false, dairy: true, eggs: true, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: true, vegan: false, vegetarian: false },
  { category: 'Curated Bowls', name: 'Grains Bowl', wheat: false, dairy: true, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: true, vegan: false, vegetarian: true },
  { category: 'Curated Bowls', name: 'Greens + Grains Bowl', wheat: false, dairy: true, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: true, vegan: false, vegetarian: true },

  // Curated Pitas
  { category: 'Curated Pitas', name: 'Greek Chicken Pita', wheat: true, dairy: true, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: false, vegetarian: false },
  { category: 'Curated Pitas', name: 'Spicy Chicken + Avocado Pita', wheat: true, dairy: true, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: false, vegetarian: false },
  { category: 'Curated Pitas', name: 'Steak + Feta Pita', wheat: true, dairy: true, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: true, vegan: false, vegetarian: false },
  { category: 'Curated Pitas', name: 'Crispy Falafel Pita', wheat: true, dairy: false, eggs: false, soy: false, treeNuts: true, peanuts: false, fish: false, shellfish: false, sesame: true, vegan: true, vegetarian: true },
  { category: 'Curated Pitas', name: 'Garlic Chicken + Veggie Pita', wheat: true, dairy: true, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: false, vegetarian: false },
  { category: 'Curated Pitas', name: 'Spicy Lamb Meatball Pita', wheat: true, dairy: true, eggs: true, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: false, vegetarian: false },

  // Bases
  { category: 'Bases', name: 'Brown Rice', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Bases', name: 'Saffron Basmati Rice', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Bases', name: 'Black Lentils', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Bases', name: 'SuperGreens', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Bases', name: 'Arugula', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Bases', name: 'Baby Spinach', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Bases', name: 'Romaine', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Bases', name: 'RightRice', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },

  // Mains (Proteins)
  { category: 'Mains (Proteins)', name: 'Grilled Chicken', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: false, vegetarian: false },
  { category: 'Mains (Proteins)', name: 'Harissa Honey Chicken', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: false, vegetarian: false },
  { category: 'Mains (Proteins)', name: 'Grilled Steak', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: false, vegetarian: false },
  { category: 'Mains (Proteins)', name: 'Braised Lamb', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: false, vegetarian: false },
  { category: 'Mains (Proteins)', name: 'Spicy Lamb Meatballs', wheat: true, dairy: false, eggs: true, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: false, vegetarian: false },
  { category: 'Mains (Proteins)', name: 'Falafel', wheat: true, dairy: false, eggs: false, soy: false, treeNuts: true, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Mains (Proteins)', name: 'Roasted Vegetables', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Mains (Proteins)', name: 'Glazed Salmon', wheat: false, dairy: false, eggs: false, soy: true, treeNuts: false, peanuts: false, fish: true, shellfish: false, sesame: false, vegan: false, vegetarian: false },
  { category: 'Mains (Proteins)', name: 'Baharat Braised Beef', wheat: false, dairy: false, eggs: true, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: false, vegetarian: false },

  // Dips & Spreads
  { category: 'Dips & Spreads', name: 'Tzatziki', wheat: false, dairy: true, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: false, vegetarian: true },
  { category: 'Dips & Spreads', name: 'Hummus', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: true, vegan: true, vegetarian: true },
  { category: 'Dips & Spreads', name: 'Roasted Eggplant Dip', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: true, vegan: true, vegetarian: true },
  { category: 'Dips & Spreads', name: 'Crazy Feta', wheat: false, dairy: true, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: false, vegetarian: true },
  { category: 'Dips & Spreads', name: 'Harissa', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Dips & Spreads', name: 'Red Pepper Hummus', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: true, vegan: true, vegetarian: true },

  // Toppings
  { category: 'Toppings', name: 'Shredded Romaine', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Toppings', name: 'Pita Crisps', wheat: true, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Toppings', name: 'Sumac Cabbage Slaw', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Toppings', name: 'Tomato + Onion', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Toppings', name: 'Persian Cucumber', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Toppings', name: 'Tomato + Cucumber', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Toppings', name: 'Kalamata Olives', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Toppings', name: 'Fiery Broccoli', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Toppings', name: 'Pickled Onions', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Toppings', name: 'Salt-Brined Pickles', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Toppings', name: 'Crumbled Feta', wheat: false, dairy: true, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: false, vegetarian: true },
  { category: 'Toppings', name: 'Fire-Roasted Corn', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Toppings', name: 'Fresh Avocado', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },

  // Dressings
  { category: 'Dressings', name: 'Balsamic Date Vinaigrette', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Dressings', name: 'Yogurt Dill', wheat: false, dairy: true, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: false, vegetarian: true },
  { category: 'Dressings', name: 'Lemon Herb Tahini', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: true, vegan: true, vegetarian: true },
  { category: 'Dressings', name: 'Strawberry Sesame', wheat: false, dairy: false, eggs: false, soy: true, treeNuts: true, peanuts: false, fish: false, shellfish: false, sesame: true, vegan: true, vegetarian: true },
  { category: 'Dressings', name: 'Greek Vinaigrette', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Dressings', name: 'Skhug', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Dressings', name: 'Hot Harissa Vinaigrette', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Dressings', name: 'Garlic Dressing', wheat: false, dairy: false, eggs: true, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: false, vegetarian: true },

  // Sides
  { category: 'Sides', name: 'Whole Pita', wheat: true, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Sides', name: 'Classic Pita Chips', wheat: true, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Sides', name: 'Harissa BBQ Pita Chips', wheat: true, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Sides', name: 'Garlic Ranch Pita Chips', wheat: true, dairy: true, eggs: true, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: false, vegetarian: true },
  { category: 'Sides', name: 'Cinnamon Sugar Pita Chips', wheat: true, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },

  // Desserts
  { category: 'Desserts', name: 'Greyston Chocolate Chip Blondie', wheat: true, dairy: true, eggs: true, soy: true, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: false, vegetarian: true },
  { category: 'Desserts', name: 'Greyston Chocolate Fudge Brownie', wheat: true, dairy: true, eggs: true, soy: true, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: false, vegetarian: true },
  { category: 'Desserts', name: 'Whisked! Salted Dark Chocolate Oat Cookie', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: true, vegetarian: true },
  { category: 'Desserts', name: 'Whisked! Apricot Honey Oat Cookie', wheat: false, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: false, vegetarian: true },

  // Kids Meal
  { category: 'Kids Meal', name: 'Kids Meal (Includes Mini Pita)', wheat: true, dairy: false, eggs: false, soy: false, treeNuts: false, peanuts: false, fish: false, shellfish: false, sesame: false, vegan: false, vegetarian: false },
];

const COLUMNS: { key: keyof AllergenItem; label: string; isDiet?: boolean }[] = [
  { key: 'wheat', label: 'Wheat/Gluten' },
  { key: 'dairy', label: 'Dairy' },
  { key: 'eggs', label: 'Eggs' },
  { key: 'soy', label: 'Soy' },
  { key: 'treeNuts', label: 'Tree Nuts' },
  { key: 'peanuts', label: 'Peanuts' },
  { key: 'fish', label: 'Fish' },
  { key: 'shellfish', label: 'Shellfish' },
  { key: 'sesame', label: 'Sesame' },
  { key: 'vegan', label: 'Vegan', isDiet: true },
  { key: 'vegetarian', label: 'Vegetarian', isDiet: true },
];

export default function AllergenTable() {
  const [search, setSearch] = useState('');

  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return allergenData;
    return allergenData.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
  }, [search]);

  const groupedCategories = useMemo(() => {
    const groups: { category: string; items: AllergenItem[] }[] = [];
    for (const cat of CATEGORY_ORDER) {
      const items = filteredItems.filter((i) => i.category === cat);
      if (items.length > 0) {
        groups.push({ category: cat, items });
      }
    }
    return groups;
  }, [filteredItems]);

  const totalResults = filteredItems.length;

  return (
    <div className="space-y-[10px]">
      {/* Search Input & Legend Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-md">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search menu items..."
            className="w-full rounded-full border-2 border-gray-200 bg-white px-5 py-2.5 sm:py-3 text-sm sm:text-base text-[#1A1A2E] placeholder:text-gray-400 outline-none focus:border-[#0A6847] transition-colors shadow-xs"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1A1A2E] text-xs font-bold px-1.5 py-0.5 rounded-full"
              aria-label="Clear search query"
            >
              Clear
            </button>
          )}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-5 text-xs text-gray-600 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
            <span>Present</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-300 font-bold select-none">—</span>
            <span>Free</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold select-none text-sm">✓</span>
            <span>Friendly</span>
          </div>
        </div>
      </div>

      {/* Item count status */}
      <div className="flex items-center justify-between text-xs text-gray-500 px-1">
        <span>Showing {totalResults} menu items</span>
        <span className="sm:hidden text-gray-400">Scroll sideways to view all columns</span>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
        <table className="min-w-[960px] w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#1A1A2E] text-white">
              <th
                scope="col"
                className="py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-left min-w-[220px]"
              >
                Menu Item
              </th>
              {COLUMNS.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className="py-3.5 px-2 sm:px-3 text-xs font-bold uppercase tracking-wider text-center whitespace-nowrap"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {groupedCategories.map((group) => (
              <Fragment key={`group-${group.category}`}>
                {/* Category group header */}
                <tr className="bg-gray-50 border-y border-gray-200">
                  <td
                    colSpan={12}
                    className="py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-gray-400"
                  >
                    {group.category}
                  </td>
                </tr>

                {/* Items in this category */}
                {group.items.map((item) => (
                  <tr
                    key={item.name}
                    className="hover:bg-gray-50 border-b border-gray-100 transition-colors"
                  >
                    <td className="py-3 px-4 font-semibold text-[#1A1A2E] text-sm whitespace-nowrap">
                      {item.name}
                    </td>
                    {COLUMNS.map((col) => {
                      const isPresent = Boolean(item[col.key]);

                      if (col.isDiet) {
                        return (
                          <td
                            key={col.key}
                            className="py-3 px-2 sm:px-3 text-center whitespace-nowrap"
                          >
                            {isPresent ? (
                              <span
                                className="text-emerald-500 font-bold select-none text-base"
                                aria-label="Yes"
                              >
                                ✓
                              </span>
                            ) : (
                              <span
                                className="text-gray-200 font-bold select-none"
                                aria-label="No"
                              >
                                —
                              </span>
                            )}
                          </td>
                        );
                      }

                      return (
                        <td
                          key={col.key}
                          className="py-3 px-2 sm:px-3 text-center whitespace-nowrap"
                        >
                          {isPresent ? (
                            <span
                              className="inline-block w-3 h-3 rounded-full bg-red-500"
                              title="Allergen present"
                              aria-label="Allergen present"
                            />
                          ) : (
                            <span
                              className="text-gray-200 font-bold select-none"
                              aria-label="Not present"
                            >
                              —
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </Fragment>
            ))}

            {groupedCategories.length === 0 && (
              <tr>
                <td colSpan={12} className="py-12 text-center text-gray-500 text-sm">
                  No menu items matched your search query.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
