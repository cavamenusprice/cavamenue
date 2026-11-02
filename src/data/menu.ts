export interface NutritionItem {
  id: string;
  name: string;
  category: "curated-bowl" | "curated-pita" | "base" | "main" | "kids" | "topping" | "dip" | "dressing" | "side" | "dessert" | "drink";
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  sodium: number;
  price?: string;
  size?: string;
  description?: string;
}

/** Dedicated images for menu items */
const ITEM_IMAGES: Record<string, string> = {
  // Curated Bowls
  "chicken-rice-bowl": "/images/menu/chicken-rice-bowl.webp",
  "greek-salad-bowl": "/images/menu/greek-salad-bowl.webp",
  "harissa-avocado-bowl": "/images/menu/harissa-avocado-bowl.webp",
  "falafel-crunch-bowl": "/images/menu/falafel-crunch-bowl.webp",
  "spicy-lamb-avocado-bowl": "/images/menu/spicy-lamb-avocado-bowl.webp",
  "steak-harissa-bowl": "/images/menu/steak-harissa-bowl.webp",
  "strawberry-steak-salad": "/images/menu/strawberry-steak-salad.webp",
  "pomegranate-glazed-salmon-bowl": "/images/menu/harissa-avocado-bowl.webp",
  "salmon-yogurt-dill": "/images/menu/harissa-avocado-bowl.webp",
  "salmon-strawberry-sesame-bowl": "/images/menu/strawberry-steak-salad.webp",
  "baharat-braised-beef-and-rice": "/images/menu/baharat-braised-beef-and-rice.webp",
  "baharat-beef-lemon-tahini": "/images/menu/baharat-beef-lemon-tahini.webp",
  "grains-bowl": "/images/menu/grains-bowl.webp",
  "greens-grains-bowl": "/images/menu/greens-grains-bowl.webp",

  // Curated Pitas
  "greek-chicken-pita": "/images/menu/greek-chicken-pita.webp",
  "spicy-chicken-avocado-pita": "/images/menu/spicy-chicken-avocado-pita.webp",
  "steak-feta-pita": "/images/menu/steak-feta-pita.webp",
  "crispy-falafel-pita": "/images/menu/crispy-falafel-pita.webp",
  "garlic-chicken-veggie-pita": "/images/menu/garlic-chicken-veggie-pita.webp",
  "spicy-lamb-meatball-pita": "/images/menu/spicy-lamb-meatball-pita.webp",

  // Bases
  "brown-rice": "/images/menu/chicken-rice-bowl.webp",
  "saffron-basmati-rice": "/images/menu/chicken-rice-bowl.webp",
  "black-lentils": "/images/menu/chicken-rice-bowl.webp",
  "super-greens": "/images/menu/greek-salad-bowl.webp",
  "power-greens": "/images/menu/greek-salad-bowl.webp",
  "baby-spinach": "/images/menu/greek-salad-bowl.webp",
  "arugula": "/images/menu/greek-salad-bowl.webp",
  "romaine": "/images/menu/greek-salad-bowl.webp",

  // Mains
  "grilled-chicken": "/images/menu/chicken-rice-bowl.webp",
  "harissa-honey-chicken": "/images/menu/harissa-avocado-bowl.webp",
  "grilled-steak": "/images/menu/steak-harissa-bowl.webp",
  "braised-lamb": "/images/menu/spicy-lamb-avocado-bowl.webp",
  "spicy-lamb-meatballs": "/images/menu/spicy-lamb-avocado-bowl.webp",
  "falafel": "/images/menu/falafel-crunch-bowl.webp",
  "roasted-vegetables": "/images/menu/greek-salad-bowl.webp",
  "glazed-salmon": "/images/menu/harissa-avocado-bowl.webp",
  "baharat-braised-beef": "/images/menu/baharat-braised-beef-and-rice.webp",

  // Dips & Spreads
  "tzatziki": "/images/menu/tzatziki.webp",
  "hummus": "/images/menu/hummus.webp",
  "roasted-eggplant-dip": "/images/menu/roasted-eggplant-dip.webp",
  "crazy-feta": "/images/menu/crazy-feta.webp",
  "harissa": "/images/menu/harissa.webp",
  "red-pepper-hummus": "/images/menu/red-pepper-hummus.webp",

  // Toppings
  "shredded-romaine": "/images/menu/greek-salad-bowl.webp",
  "pita-crisps": "/images/menu/falafel-crunch-bowl.webp",
  "sumac-cabbage-slaw": "/images/menu/falafel-crunch-bowl.webp",
  "tomato-onion": "/images/menu/greek-salad-bowl.webp",
  "persian-cucumber": "/images/menu/greek-salad-bowl.webp",
  "tomato-cucumber": "/images/menu/greek-salad-bowl.webp",
  "kalamata-olives": "/images/menu/greek-salad-bowl.webp",
  "fiery-broccoli": "/images/menu/greek-salad-bowl.webp",
  "pickled-onions": "/images/menu/greek-salad-bowl.webp",
  "salt-brined-pickles": "/images/menu/greek-salad-bowl.webp",
  "crumbled-feta": "/images/menu/greek-salad-bowl.webp",
  "fire-roasted-corn": "/images/menu/greek-salad-bowl.webp",
  "fresh-avocado": "/images/menu/harissa-avocado-bowl.webp",

  // Dressings
  "balsamic-date-vinaigrette": "/images/menu/harissa-avocado-bowl.webp",
  "yogurt-dill": "/images/menu/tzatziki.webp",
  "lemon-herb-tahini": "/images/menu/baharat-beef-lemon-tahini.webp",
  "strawberry-sesame": "/images/menu/strawberry-steak-salad.webp",
  "greek-vinaigrette": "/images/menu/greek-salad-bowl.webp",
  "skhug": "/images/menu/harissa-avocado-bowl.webp",
  "hot-harissa-vinaigrette": "/images/menu/harissa.webp",
  "garlic-dressing": "/images/menu/garlic-chicken-veggie-pita.webp",

  // Sides
  "whole-pita": "/images/menu/side-pita.webp",
  "side-quarter-pita": "/images/menu/side-pita.webp",
  "classic-pita-chips": "/images/menu/classic-pita-chips.webp",
  "harissa-bbq-pita-chips": "/images/menu/sumac-onion-pita-chips.webp",
  "garlic-ranch-pita-chips": "/images/menu/sumac-onion-pita-chips.webp",
  "cinnamon-sugar-pita-chips": "/images/menu/classic-pita-chips.webp",

  // Desserts
  "greyston-chocolate-chip-blondie": "/images/menu/greyston-blondie.webp",
  "greyston-chocolate-fudge-brownie": "/images/menu/greyston-brownie.webp",
  "salted-dark-chocolate-oat-cookie": "/images/menu/salted-chocolate-oat-cookie.webp",
  "apricot-honey-oat-cookie": "/images/menu/salted-chocolate-oat-cookie.webp",

  // Kids Meal
  "kids-meal": "/images/menu/kids-meal.webp",
  "kids-grilled-chicken": "/images/menu/chicken-rice-bowl.webp",
  "kids-harissa-honey-chicken": "/images/menu/chicken-rice-bowl.webp",
  "kids-falafel": "/images/menu/falafel-crunch-bowl.webp",
  "kids-spicy-lamb-meatballs": "/images/menu/spicy-lamb-avocado-bowl.webp",
  "kids-roasted-vegetables": "/images/menu/kids-meal.webp",
  "kids-braised-lamb": "/images/menu/spicy-lamb-avocado-bowl.webp",
  "kids-grilled-steak": "/images/menu/steak-harissa-bowl.webp",
  "kids-saffron-basmati-rice": "/images/menu/kids-meal.webp",
  "kids-brown-rice": "/images/menu/kids-meal.webp",
  "kids-black-lentils": "/images/menu/kids-meal.webp",
  "kids-pita-chips": "/images/menu/classic-pita-chips.webp",

  // Drinks
  "classic-lemonade-16oz": "/images/menu/classic-lemonade.webp",
  "classic-lemonade-22oz": "/images/menu/classic-lemonade.webp",
  "blueberry-lavender-16oz": "/images/menu/blueberry-lavender.webp",
  "blueberry-lavender-22oz": "/images/menu/blueberry-lavender.webp",
  "cucumber-mint-lime-16oz": "/images/menu/cucumber-mint-lime.webp",
  "cucumber-mint-lime-22oz": "/images/menu/cucumber-mint-lime.webp",
  "strawberry-ginger-16oz": "/images/menu/tangerine-aleppo.webp",
  "strawberry-ginger-22oz": "/images/menu/tangerine-aleppo.webp",
  "sweet-tea-16oz": "/images/menu/sweet-tea.webp",
  "sweet-tea-22oz": "/images/menu/sweet-tea.webp",
  "unsweetened-black-tea-16oz": "/images/menu/sweet-tea.webp",
  "unsweetened-black-tea-22oz": "/images/menu/sweet-tea.webp",
  "jasmine-green-tea-16oz": "/images/menu/jasmine-green-tea.webp",
  "jasmine-green-tea-22oz": "/images/menu/jasmine-green-tea.webp",
  "maine-root-soda-16oz": "/images/menu/fountain-soda.webp",
  "maine-root-soda-22oz": "/images/menu/fountain-soda.webp",
  "maine-root-diet-16oz": "/images/menu/fountain-soda.webp",
  "maine-root-diet-22oz": "/images/menu/fountain-soda.webp",
  "spindrift-lemon": "/images/menu/spindrift-lemon.webp",
  "spindrift-half-tea": "/images/menu/spindrift-half-tea.webp",
  "spindrift-grapefruit": "/images/menu/spindrift-lemon.webp",
  "open-water-still": "/images/menu/open-water-still.webp",
  "open-water-sparkling": "/images/menu/open-water-sparkling.webp",
  "organic-chocolate-milk": "/images/menu/kids-chocolate-milk.webp",
  "organic-1-percent-milk": "/images/menu/kids-milk.webp",
  "honest-kids-apple-juice": "/images/menu/kids-apple-juice.webp",
};

/** Category-based fallback images */
const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
  "curated-bowl": "/images/menu/chicken-rice-bowl.webp",
  "curated-pita": "/images/menu/greek-chicken-pita.webp",
  "base": "/images/menu/chicken-rice-bowl.webp",
  "main": "/images/menu/chicken-rice-bowl.webp",
  "kids": "/images/menu/kids-meal.webp",
  "topping": "/images/menu/greek-salad-bowl.webp",
  "dip": "/images/menu/hummus.webp",
  "dressing": "/images/menu/tzatziki.webp",
  "side": "/images/menu/side-pita.webp",
  "dessert": "/images/menu/greyston-brownie.webp",
  "drink": "/images/menu/classic-lemonade.webp",
};

/** Get image path for a menu item */
export function getItemImage(id: string, category?: NutritionItem["category"]): string {
  if (ITEM_IMAGES[id]) {
    return ITEM_IMAGES[id];
  }
  if (category && CATEGORY_FALLBACK_IMAGES[category]) {
    return CATEGORY_FALLBACK_IMAGES[category];
  }
  return "/images/menu/chicken-rice-bowl.webp";
}

/** SEO-optimized alt text for menu item images */
const imageAlts: Record<string, string> = {
  "chicken-rice-bowl": "Chicken and Rice Bowl – CAVA curated bowl with grilled chicken, hummus, and brown rice",
  "greek-salad-bowl": "Greek Salad Bowl – CAVA curated bowl with grilled chicken, feta, and Greek vinaigrette",
  "harissa-avocado-bowl": "Harissa Avocado Bowl – CAVA curated bowl with harissa honey chicken and fresh avocado",
  "falafel-crunch-bowl": "Falafel Crunch Bowl – CAVA vegetarian bowl with falafel, hummus, and pita crisps",
  "spicy-lamb-avocado-bowl": "Spicy Lamb and Avocado Bowl – CAVA curated bowl with spicy lamb meatballs and avocado",
  "steak-harissa-bowl": "Steak and Harissa Bowl – CAVA curated bowl with grilled steak and harissa vinaigrette",
  "strawberry-steak-salad": "Strawberry Steak Salad – CAVA curated salad bowl with grilled steak and strawberry sesame dressing",
  "baharat-braised-beef-and-rice": "Baharat Braised Beef and Rice – CAVA curated bowl with baharat-seasoned braised beef",
  "baharat-beef-lemon-tahini": "Baharat Beef and Lemon Tahini Bowl – CAVA curated bowl with braised beef and lemon herb tahini",
  "grains-bowl": "Grains Bowl – CAVA Mediterranean grain bowl with saffron basmati and brown rice",
  "greens-grains-bowl": "Greens and Grains Bowl – CAVA balanced Mediterranean bowl with crisp greens and whole grains",
  "pomegranate-glazed-salmon-bowl": "Pomegranate Glazed Salmon Bowl – CAVA curated bowl with glazed salmon and saffron rice",
  "salmon-yogurt-dill": "Salmon and Yogurt Dill Bowl – CAVA curated bowl with glazed salmon and yogurt dill dressing",
  "salmon-strawberry-sesame-bowl": "Salmon Strawberry Sesame Bowl – CAVA curated bowl with glazed salmon and strawberry sesame",
  "greek-chicken-pita": "Greek Chicken Pita – CAVA Mediterranean wrap with grilled chicken, tzatziki, and feta",
  "spicy-chicken-avocado-pita": "Spicy Chicken Avocado Pita – CAVA curated pita wrap with harissa honey chicken and avocado",
  "steak-feta-pita": "Steak and Feta Pita – CAVA curated pita wrap with grilled steak and Crazy Feta",
  "crispy-falafel-pita": "Crispy Falafel Pita – CAVA vegetarian pita wrap with crispy falafel, hummus, and veggies",
  "garlic-chicken-veggie-pita": "Garlic Chicken and Veggie Pita – CAVA pita wrap with grilled chicken, roasted veggies, and garlic dressing",
  "spicy-lamb-meatball-pita": "Spicy Lamb Meatball Pita – CAVA Mediterranean pita wrap with spicy lamb meatballs and greens",
  "tzatziki": "Tzatziki Dip – CAVA authentic Greek yogurt spread with fresh cucumber and garlic",
  "hummus": "Traditional Hummus – CAVA creamy Mediterranean chickpea spread with tahini and garlic",
  "roasted-eggplant-dip": "Roasted Eggplant Dip – CAVA smoky Mediterranean spread with roasted eggplant and herbs",
  "crazy-feta": "Crazy Feta – CAVA signature spicy whipped feta cheese dip with jalapeño peppers",
  "harissa": "Harissa Dip – CAVA bold, spicy North African red chili spread",
  "red-pepper-hummus": "Red Pepper Hummus – CAVA sweet roasted red pepper blended with creamy hummus",
  "whole-pita": "Whole Pita Bread – CAVA soft, warm Mediterranean pita baked fresh",
  "side-quarter-pita": "Side Quarter Pita Bread – CAVA warm Mediterranean pita quarter",
  "classic-pita-chips": "Classic Pita Chips – CAVA crispy seasoned pita chips tossed with sea salt",
  "harissa-bbq-pita-chips": "Harissa BBQ Pita Chips – CAVA crunchy spiced pita chips with tangy BBQ harissa seasoning",
  "garlic-ranch-pita-chips": "Garlic Ranch Pita Chips – CAVA savory crispy pita chips with garlic and herbs",
  "cinnamon-sugar-pita-chips": "Cinnamon Sugar Pita Chips – CAVA sweet crispy pita chips coated in cinnamon and sugar",
  "greyston-chocolate-chip-blondie": "Greyston Chocolate Chip Blondie – CAVA rich, buttery blondie baked with gourmet chocolate chips",
  "greyston-chocolate-fudge-brownie": "Greyston Chocolate Fudge Brownie – CAVA decadent fudgy dark chocolate brownie",
  "salted-dark-chocolate-oat-cookie": "Whisked! Salted Dark Chocolate Oat Cookie – CAVA soft oat cookie with dark chocolate and sea salt",
  "apricot-honey-oat-cookie": "Whisked! Apricot Honey Oat Cookie – CAVA chewy oat cookie baked with sweet apricot and pure honey",
  "kids-meal": "Kids Meal – CAVA balanced Mediterranean plate with protein, grain, and mini pita bread",
  "classic-lemonade-16oz": "Classic Lemonade (16 oz) – CAVA freshly squeezed tart and sweet lemonade",
  "classic-lemonade-22oz": "Classic Lemonade (22 oz) – CAVA refreshing house-crafted lemonade with real lemons",
  "blueberry-lavender-16oz": "Blueberry Lavender Juice (16 oz) – CAVA handcrafted beverage with wild blueberries and floral lavender",
  "blueberry-lavender-22oz": "Blueberry Lavender Juice (22 oz) – CAVA cold handcrafted blueberry and lavender drink",
  "cucumber-mint-lime-16oz": "Cucumber Mint Lime Juice (16 oz) – CAVA crisp refreshing agua fresca with cool mint and lime",
  "cucumber-mint-lime-22oz": "Cucumber Mint Lime Juice (22 oz) – CAVA chilled cucumber mint lime agua fresca",
  "strawberry-ginger-16oz": "Strawberry Ginger Drink (16 oz) – CAVA vibrant fruit drink infused with real strawberry and ginger",
  "strawberry-ginger-22oz": "Strawberry Ginger Drink (22 oz) – CAVA refreshing strawberry ginger beverage",
  "sweet-tea-16oz": "Sweet Tea (16 oz) – CAVA freshly brewed Southern-style sweet black tea",
  "sweet-tea-22oz": "Sweet Tea (22 oz) – CAVA chilled brewed sweet black tea with pure cane sugar",
  "unsweetened-black-tea-16oz": "Unsweetened Black Tea (16 oz) – CAVA crisp unsweetened iced black tea",
  "unsweetened-black-tea-22oz": "Unsweetened Black Tea (22 oz) – CAVA refreshing zero-sugar unsweetened iced tea",
  "jasmine-green-tea-16oz": "Jasmine Green Tea (16 oz) – CAVA organic green tea infused with fragrant jasmine blossoms",
  "jasmine-green-tea-22oz": "Jasmine Green Tea (22 oz) – CAVA naturally brewed iced jasmine green tea",
  "maine-root-soda-16oz": "Maine Root Fountain Soda (16 oz) – CAVA fair trade fountain soda sweetened with organic cane sugar",
  "maine-root-soda-22oz": "Maine Root Fountain Soda (22 oz) – CAVA organic cane sugar fountain soda",
  "maine-root-diet-16oz": "Maine Root Diet Soda (16 oz) – CAVA refreshing zero calorie diet fountain soda",
  "maine-root-diet-22oz": "Maine Root Diet Soda (22 oz) – CAVA crisp calorie-free diet fountain soda",
  "spindrift-lemon": "Spindrift Lemon Sparkling Water – CAVA sparkling water with real squeezed lemon juice",
  "spindrift-half-tea": "Spindrift Half Tea & Half Lemon – CAVA sparkling water brewed with black tea and fresh lemon",
  "spindrift-grapefruit": "Spindrift Grapefruit Sparkling Water – CAVA sparkling water with real grapefruit juice",
  "open-water-still": "Open Water Still – CAVA ultra-purified still water in 100% recyclable aluminum bottle",
  "open-water-sparkling": "Open Water Sparkling – CAVA crisp sparkling water in eco-friendly aluminum bottle",
  "organic-chocolate-milk": "Organic Chocolate Milk – CAVA certified organic lowfat chocolate milk for kids",
  "organic-1-percent-milk": "Organic 1% Milk – CAVA healthy certified organic low-fat white milk for kids",
  "honest-kids-apple-juice": "Honest Kids Organic Apple Juice – CAVA certified organic 100% juice drink pouch"
};

/** Get SEO-optimized alt text for a menu item image */
export function getItemAlt(id: string, fallbackName: string): string {
  return imageAlts[id] || `${fallbackName} – CAVA menu item nutrition and calories`;
}

/** Get a fallback category image (first item in category) */
export function getCategoryImage(category: NutritionItem["category"]): string {
  const firstItem = menuData.find((i) => i.category === category);
  return firstItem ? getItemImage(firstItem.id, category) : "/images/menu/harissa-avocado-bowl.webp";
}

export const menuData: NutritionItem[] = [
  // ── Curated Bowls ──
  { id: "chicken-rice-bowl", name: "Chicken + Rice Bowl", category: "curated-bowl", price: "$12.85 – $13.45", calories: 700, protein: 40, fat: 42, carbs: 44, sodium: 0 },
  { id: "greek-salad-bowl", name: "Greek Salad Bowl", category: "curated-bowl", price: "$12.85 – $13.45", calories: 580, protein: 37, fat: 40, carbs: 19, sodium: 0 },
  { id: "harissa-avocado-bowl", name: "Harissa Avocado Bowl", category: "curated-bowl", price: "$13.95 – $14.95", calories: 830, protein: 41, fat: 49, carbs: 62, sodium: 0 },
  { id: "falafel-crunch-bowl", name: "Falafel Crunch Bowl", category: "curated-bowl", price: "$13.45 – $14.45", calories: 860, protein: 24, fat: 56, carbs: 88, sodium: 0 },
  { id: "spicy-lamb-avocado-bowl", name: "Spicy Lamb + Avocado Bowl", category: "curated-bowl", price: "$14.95 – $16.25", calories: 800, protein: 43, fat: 52, carbs: 49, sodium: 0 },
  { id: "steak-harissa-bowl", name: "Steak + Harissa Bowl", category: "curated-bowl", price: "$15.45 – $16.55", calories: 620, protein: 37, fat: 35, carbs: 39, sodium: 0 },
  { id: "strawberry-steak-salad", name: "Strawberry Steak Salad", category: "curated-bowl", price: "$15.45 – $16.55", calories: 420, protein: 32, fat: 22, carbs: 26, sodium: 0 },
  { id: "pomegranate-glazed-salmon-bowl", name: "Pomegranate Glazed Salmon Bowl", category: "curated-bowl", price: "$16.95 – $18.45", calories: 1040, protein: 36, fat: 65, carbs: 80, sodium: 0 },
  { id: "salmon-yogurt-dill", name: "Salmon + Yogurt Dill", category: "curated-bowl", price: "$16.95 – $18.45", calories: 710, protein: 35, fat: 43, carbs: 49, sodium: 0 },
  { id: "salmon-strawberry-sesame-bowl", name: "Salmon + Strawberry Sesame Bowl", category: "curated-bowl", price: "$16.95 – $18.45", calories: 700, protein: 36, fat: 43, carbs: 46, sodium: 0 },
  { id: "baharat-braised-beef-and-rice", name: "Baharat Braised Beef and Rice", category: "curated-bowl", price: "$15.45 – $16.75", calories: 650, protein: 38, fat: 39, carbs: 60, sodium: 0 },
  { id: "baharat-beef-lemon-tahini", name: "Baharat Beef + Lemon Tahini", category: "curated-bowl", price: "$15.45 – $16.75", calories: 620, protein: 35, fat: 36, carbs: 52, sodium: 0 },
  { id: "grains-bowl", name: "Grains Bowl", category: "curated-bowl", price: "$11.95 – $12.95", calories: 600, protein: 12, fat: 15, carbs: 98, sodium: 0 },
  { id: "greens-grains-bowl", name: "Greens + Grains Bowl", category: "curated-bowl", price: "$11.95 – $12.95", calories: 420, protein: 10, fat: 12, carbs: 65, sodium: 0 },

  // ── Curated Pitas ──
  { id: "greek-chicken-pita", name: "Greek Chicken Pita", category: "curated-pita", price: "$12.95 – $13.45", calories: 720, protein: 48, fat: 30, carbs: 64, sodium: 0 },
  { id: "spicy-chicken-avocado-pita", name: "Spicy Chicken + Avocado Pita", category: "curated-pita", price: "$13.95 – $15.45", calories: 930, protein: 48, fat: 48, carbs: 80, sodium: 0 },
  { id: "steak-feta-pita", name: "Steak + Feta Pita", category: "curated-pita", price: "$15.45 – $16.65", calories: 820, protein: 44, fat: 42, carbs: 68, sodium: 0 },
  { id: "crispy-falafel-pita", name: "Crispy Falafel Pita", category: "curated-pita", price: "$11.45 – $12.45", calories: 750, protein: 22, fat: 38, carbs: 82, sodium: 0 },
  { id: "garlic-chicken-veggie-pita", name: "Garlic Chicken + Veggie Pita", category: "curated-pita", price: "$12.95 – $13.95", calories: 680, protein: 42, fat: 28, carbs: 62, sodium: 0 },
  { id: "spicy-lamb-meatball-pita", name: "Spicy Lamb Meatball Pita", category: "curated-pita", price: "$13.95 – $14.95", calories: 810, protein: 38, fat: 44, carbs: 66, sodium: 0 },

  // ── Bases ──
  { id: "brown-rice", name: "Brown Rice", category: "base", price: "Included", calories: 310, protein: 7, fat: 10, carbs: 48, sodium: 0 },
  { id: "saffron-basmati-rice", name: "Saffron Basmati Rice", category: "base", price: "Included", calories: 290, protein: 5, fat: 7, carbs: 54, sodium: 0 },
  { id: "black-lentils", name: "Black Lentils", category: "base", price: "Included", calories: 270, protein: 18, fat: 7, carbs: 37, sodium: 0 },
  { id: "super-greens", name: "Super Greens", category: "base", price: "Included", calories: 35, protein: 3, fat: 0.5, carbs: 6, sodium: 0 },
  { id: "power-greens", name: "Power Greens", category: "base", price: "Included", calories: 30, protein: 2, fat: 0, carbs: 4, sodium: 0 },
  { id: "baby-spinach", name: "Baby Spinach", category: "base", price: "Included", calories: 20, protein: 3, fat: 0, carbs: 3, sodium: 0 },
  { id: "arugula", name: "Arugula", category: "base", price: "Included", calories: 20, protein: 2, fat: 0.5, carbs: 3, sodium: 0 },
  { id: "romaine", name: "Romaine", category: "base", price: "Included", calories: 20, protein: 1, fat: 0, carbs: 4, sodium: 0 },

  // ── Mains ──
  { id: "grilled-chicken", name: "Grilled Chicken", category: "main", price: "Base ($0)", calories: 250, protein: 28, fat: 13, carbs: 3, sodium: 0 },
  { id: "harissa-honey-chicken", name: "Harissa Honey Chicken", category: "main", price: "+$0.50", calories: 260, protein: 26, fat: 14, carbs: 7, sodium: 0 },
  { id: "grilled-steak", name: "Grilled Steak", category: "main", price: "+$2.50 – $3.25", calories: 170, protein: 23, fat: 9, carbs: 1, sodium: 0 },
  { id: "braised-lamb", name: "Braised Lamb", category: "main", price: "+$2.50 – $3.25", calories: 210, protein: 24, fat: 12, carbs: 2, sodium: 0 },
  { id: "spicy-lamb-meatballs", name: "Spicy Lamb Meatballs", category: "main", price: "+$2.25 – $2.75", calories: 300, protein: 24, fat: 21, carbs: 3, sodium: 0 },
  { id: "falafel", name: "Falafel", category: "main", price: "Base ($0)", calories: 350, protein: 6, fat: 26, carbs: 24, sodium: 0 },
  { id: "roasted-vegetables", name: "Roasted Vegetables", category: "main", price: "Base ($0)", calories: 100, protein: 3, fat: 4.5, carbs: 14, sodium: 0 },
  { id: "glazed-salmon", name: "Glazed Salmon", category: "main", price: "+$4.50 – $5.50", calories: 320, protein: 23, fat: 23, carbs: 5, sodium: 0 },
  { id: "baharat-braised-beef", name: "Baharat Braised Beef", category: "main", price: "+$2.50 – $3.25", calories: 310, protein: 22, fat: 18, carbs: 8, sodium: 0 },

  // ── Dips & Spreads ──
  { id: "tzatziki", name: "Tzatziki", category: "dip", price: "Included (up to 3)", calories: 30, protein: 2, fat: 2.5, carbs: 1, sodium: 0 },
  { id: "hummus", name: "Hummus", category: "dip", price: "Included (up to 3)", calories: 50, protein: 2, fat: 2.5, carbs: 4, sodium: 0 },
  { id: "roasted-eggplant-dip", name: "Roasted Eggplant Dip", category: "dip", price: "Included (up to 3)", calories: 50, protein: 0, fat: 5, carbs: 2, sodium: 0 },
  { id: "crazy-feta", name: "Crazy Feta®", category: "dip", price: "Included (up to 3)", calories: 70, protein: 4, fat: 6, carbs: 1, sodium: 0 },
  { id: "harissa", name: "Harissa", category: "dip", price: "Included (up to 3)", calories: 70, protein: 1, fat: 6, carbs: 5, sodium: 0 },
  { id: "red-pepper-hummus", name: "Red Pepper Hummus", category: "dip", price: "Included (up to 3)", calories: 40, protein: 2, fat: 1.5, carbs: 5, sodium: 0 },

  // ── Toppings ──
  { id: "shredded-romaine", name: "Shredded Romaine", category: "topping", price: "Included", calories: 5, protein: 0, fat: 0, carbs: 1, sodium: 0 },
  { id: "pita-crisps", name: "Pita Crisps", category: "topping", price: "Included", calories: 70, protein: 1, fat: 11, carbs: 6, sodium: 0 },
  { id: "sumac-cabbage-slaw", name: "Sumac Cabbage Slaw", category: "topping", price: "Included", calories: 30, protein: 1, fat: 1.5, carbs: 3, sodium: 0 },
  { id: "tomato-onion", name: "Tomato + Onion", category: "topping", price: "Included", calories: 20, protein: 0, fat: 1.5, carbs: 2, sodium: 0 },
  { id: "persian-cucumber", name: "Persian Cucumber", category: "topping", price: "Included", calories: 15, protein: 0, fat: 1, carbs: 1, sodium: 0 },
  { id: "tomato-cucumber", name: "Tomato + Cucumber", category: "topping", price: "Included", calories: 5, protein: 0, fat: 0, carbs: 1, sodium: 0 },
  { id: "kalamata-olives", name: "Kalamata Olives", category: "topping", price: "Included", calories: 35, protein: 0, fat: 3, carbs: 2, sodium: 0 },
  { id: "fiery-broccoli", name: "Fiery Broccoli", category: "topping", price: "Included", calories: 35, protein: 1, fat: 2.5, carbs: 2, sodium: 0 },
  { id: "pickled-onions", name: "Pickled Onions", category: "topping", price: "Included", calories: 20, protein: 0, fat: 0, carbs: 5, sodium: 0 },
  { id: "salt-brined-pickles", name: "Salt-Brined Pickles", category: "topping", price: "Included", calories: 5, protein: 0, fat: 0, carbs: 0, sodium: 0 },
  { id: "crumbled-feta", name: "Crumbled Feta", category: "topping", price: "Included", calories: 35, protein: 3, fat: 2.5, carbs: 0, sodium: 0 },
  { id: "fire-roasted-corn", name: "Fire-Roasted Corn", category: "topping", price: "Included", calories: 45, protein: 1, fat: 2.5, carbs: 5, sodium: 0 },
  { id: "fresh-avocado", name: "Fresh Avocado", category: "topping", price: "+$1.95 – $2.45", calories: 110, protein: 1, fat: 10, carbs: 6, sodium: 0 },

  // ── Dressings ──
  { id: "balsamic-date-vinaigrette", name: "Balsamic Date Vinaigrette", category: "dressing", price: "Included (up to 2)", calories: 60, protein: 0, fat: 4, carbs: 7, sodium: 0 },
  { id: "yogurt-dill", name: "Yogurt Dill", category: "dressing", price: "Included (up to 2)", calories: 30, protein: 2, fat: 2, carbs: 1, sodium: 0 },
  { id: "lemon-herb-tahini", name: "Lemon Herb Tahini", category: "dressing", price: "Included (up to 2)", calories: 70, protein: 2, fat: 6, carbs: 4, sodium: 0 },
  { id: "strawberry-sesame", name: "Strawberry Sesame", category: "dressing", price: "Included (up to 2)", calories: 60, protein: 1, fat: 5, carbs: 3, sodium: 0 },
  { id: "greek-vinaigrette", name: "Greek Vinaigrette", category: "dressing", price: "Included (up to 2)", calories: 130, protein: 0, fat: 14, carbs: 1, sodium: 0 },
  { id: "skhug", name: "Skhug", category: "dressing", price: "Included (up to 2)", calories: 80, protein: 0, fat: 9, carbs: 1, sodium: 0 },
  { id: "hot-harissa-vinaigrette", name: "Hot Harissa Vinaigrette", category: "dressing", price: "Included (up to 2)", calories: 70, protein: 0, fat: 7, carbs: 1, sodium: 0 },
  { id: "garlic-dressing", name: "Garlic Dressing", category: "dressing", price: "Included (up to 2)", calories: 180, protein: 0, fat: 20, carbs: 0, sodium: 0 },

  // ── Sides ──
  { id: "whole-pita", name: "Whole Pita", category: "side", price: "$2.25 – $2.55", calories: 320, protein: 13, fat: 6, carbs: 54, sodium: 0 },
  { id: "side-quarter-pita", name: "Side Quarter Pita", category: "side", price: "Included w/ bowl", calories: 80, protein: 3, fat: 1.5, carbs: 14, sodium: 0 },
  { id: "classic-pita-chips", name: "Classic Pita Chips", category: "side", price: "$2.55 – $2.95", calories: 280, protein: 10, fat: 8, carbs: 41, sodium: 0 },
  { id: "harissa-bbq-pita-chips", name: "Harissa BBQ Pita Chips", category: "side", price: "$2.75 – $2.95", calories: 280, protein: 10, fat: 10, carbs: 43, sodium: 0 },
  { id: "garlic-ranch-pita-chips", name: "Garlic Ranch Pita Chips", category: "side", price: "$2.75 – $2.95", calories: 280, protein: 10, fat: 10, carbs: 42, sodium: 0 },
  { id: "cinnamon-sugar-pita-chips", name: "Cinnamon Sugar Pita Chips", category: "side", price: "$3.25 – $3.70", calories: 310, protein: 9, fat: 8, carbs: 48, sodium: 0 },

  // ── Desserts ──
  { id: "greyston-chocolate-chip-blondie", name: "Greyston Chocolate Chip Blondie", category: "dessert", price: "$2.75 – $2.95", calories: 140, protein: 2, fat: 5, carbs: 22, sodium: 0 },
  { id: "greyston-chocolate-fudge-brownie", name: "Greyston Chocolate Fudge Brownie", category: "dessert", price: "$2.75 – $2.95", calories: 150, protein: 2, fat: 9, carbs: 17, sodium: 0 },
  { id: "salted-dark-chocolate-oat-cookie", name: "Whisked! Salted Dark Chocolate Oat Cookie", category: "dessert", price: "$3.25 – $3.55", calories: 260, protein: 4, fat: 13, carbs: 31, sodium: 0 },
  { id: "apricot-honey-oat-cookie", name: "Whisked! Apricot Honey Oat Cookie", category: "dessert", price: "$3.25 – $3.55", calories: 220, protein: 3, fat: 9, carbs: 34, sodium: 0 },

  // ── Kids Meal ──
  { id: "kids-grilled-chicken", name: "Kids Grilled Chicken", category: "kids", price: "Included", calories: 120, protein: 14, fat: 7, carbs: 1, sodium: 0 },
  { id: "kids-harissa-honey-chicken", name: "Kids Harissa Honey Chicken", category: "kids", price: "Included", calories: 130, protein: 13, fat: 7, carbs: 4, sodium: 0 },
  { id: "kids-falafel", name: "Kids Falafel", category: "kids", price: "Included", calories: 170, protein: 3, fat: 13, carbs: 12, sodium: 0 },
  { id: "kids-spicy-lamb-meatballs", name: "Kids Spicy Lamb Meatballs", category: "kids", price: "Included", calories: 150, protein: 12, fat: 11, carbs: 2, sodium: 0 },
  { id: "kids-roasted-vegetables", name: "Kids Roasted Vegetables", category: "kids", price: "Included", calories: 50, protein: 2, fat: 2, carbs: 7, sodium: 0 },
  { id: "kids-braised-lamb", name: "Kids Braised Lamb", category: "kids", price: "Included", calories: 110, protein: 12, fat: 6, carbs: 1, sodium: 0 },
  { id: "kids-grilled-steak", name: "Kids Grilled Steak", category: "kids", price: "Included", calories: 90, protein: 11, fat: 4.5, carbs: 0, sodium: 0 },
  { id: "kids-saffron-basmati-rice", name: "Kids Saffron Basmati Rice", category: "kids", price: "Included", calories: 150, protein: 3, fat: 3.5, carbs: 27, sodium: 0 },
  { id: "kids-brown-rice", name: "Kids Brown Rice", category: "kids", price: "Included", calories: 150, protein: 3, fat: 5, carbs: 24, sodium: 0 },
  { id: "kids-black-lentils", name: "Kids Black Lentils", category: "kids", price: "Included", calories: 130, protein: 9, fat: 3.5, carbs: 18, sodium: 0 },
  { id: "kids-pita-chips", name: "Kids Pita Chips", category: "kids", price: "Included", calories: 140, protein: 5, fat: 4, carbs: 20, sodium: 0 },

  // ── Drinks ──
  { id: "classic-lemonade-16oz", name: "Classic Lemonade (16 oz)", category: "drink", price: "$3.45", size: "16 oz", calories: 260, protein: 0, fat: 0, carbs: 69, sodium: 0 },
  { id: "classic-lemonade-22oz", name: "Classic Lemonade (22 oz)", category: "drink", price: "$3.85", size: "22 oz", calories: 360, protein: 0, fat: 0, carbs: 95, sodium: 0 },
  { id: "blueberry-lavender-16oz", name: "Blueberry Lavender (16 oz)", category: "drink", price: "$3.45", size: "16 oz", calories: 140, protein: 0, fat: 0, carbs: 36, sodium: 0 },
  { id: "blueberry-lavender-22oz", name: "Blueberry Lavender (22 oz)", category: "drink", price: "$3.85", size: "22 oz", calories: 190, protein: 0, fat: 0, carbs: 50, sodium: 0 },
  { id: "cucumber-mint-lime-16oz", name: "Cucumber Mint Lime (16 oz)", category: "drink", price: "$3.45", size: "16 oz", calories: 180, protein: 1, fat: 0, carbs: 44, sodium: 0 },
  { id: "cucumber-mint-lime-22oz", name: "Cucumber Mint Lime (22 oz)", category: "drink", price: "$3.85", size: "22 oz", calories: 240, protein: 1, fat: 0, carbs: 61, sodium: 0 },
  { id: "strawberry-ginger-16oz", name: "Strawberry Ginger (16 oz)", category: "drink", price: "$3.45", size: "16 oz", calories: 150, protein: 0, fat: 0, carbs: 38, sodium: 0 },
  { id: "strawberry-ginger-22oz", name: "Strawberry Ginger (22 oz)", category: "drink", price: "$3.85", size: "22 oz", calories: 210, protein: 0, fat: 0, carbs: 53, sodium: 0 },
  { id: "sweet-tea-16oz", name: "Sweet Tea (16 oz)", category: "drink", price: "$3.45", size: "16 oz", calories: 150, protein: 0, fat: 0, carbs: 37, sodium: 0 },
  { id: "sweet-tea-22oz", name: "Sweet Tea (22 oz)", category: "drink", price: "$3.85", size: "22 oz", calories: 200, protein: 0, fat: 0, carbs: 51, sodium: 0 },
  { id: "unsweetened-black-tea-16oz", name: "Unsweetened Black Tea (16 oz)", category: "drink", price: "$3.45", size: "16 oz", calories: 0, protein: 0, fat: 0, carbs: 0, sodium: 0 },
  { id: "unsweetened-black-tea-22oz", name: "Unsweetened Black Tea (22 oz)", category: "drink", price: "$3.85", size: "22 oz", calories: 0, protein: 0, fat: 0, carbs: 0, sodium: 0 },
  { id: "jasmine-green-tea-16oz", name: "Jasmine Green Tea (16 oz)", category: "drink", price: "$3.45", size: "16 oz", calories: 0, protein: 0, fat: 0, carbs: 0, sodium: 0 },
  { id: "jasmine-green-tea-22oz", name: "Jasmine Green Tea (22 oz)", category: "drink", price: "$3.85", size: "22 oz", calories: 0, protein: 0, fat: 0, carbs: 0, sodium: 0 },
  { id: "maine-root-soda-16oz", name: "Maine Root Fountain Soda (16 oz)", category: "drink", price: "$3.25", size: "16 oz", calories: 190, protein: 0, fat: 0, carbs: 50, sodium: 0 },
  { id: "maine-root-soda-22oz", name: "Maine Root Fountain Soda (22 oz)", category: "drink", price: "$3.85", size: "22 oz", calories: 270, protein: 0, fat: 0, carbs: 60, sodium: 0 },
  { id: "maine-root-diet-16oz", name: "Maine Root Diet Soda (16 oz)", category: "drink", price: "$3.25", size: "16 oz", calories: 0, protein: 0, fat: 0, carbs: 0, sodium: 0 },
  { id: "maine-root-diet-22oz", name: "Maine Root Diet Soda (22 oz)", category: "drink", price: "$3.85", size: "22 oz", calories: 0, protein: 0, fat: 0, carbs: 0, sodium: 0 },
  { id: "spindrift-lemon", name: "Spindrift Lemon", category: "drink", price: "$2.95 – $3.25", calories: 3, protein: 0, fat: 0, carbs: 1, sodium: 0 },
  { id: "spindrift-half-tea", name: "Spindrift Half Tea & Half Lemon", category: "drink", price: "$2.95 – $3.25", calories: 5, protein: 0, fat: 0, carbs: 1, sodium: 0 },
  { id: "spindrift-grapefruit", name: "Spindrift Grapefruit", category: "drink", price: "$2.95 – $3.25", calories: 17, protein: 0, fat: 0, carbs: 4, sodium: 0 },
  { id: "open-water-still", name: "Open Water Still", category: "drink", price: "$2.95 – $3.25", calories: 0, protein: 0, fat: 0, carbs: 0, sodium: 0 },
  { id: "open-water-sparkling", name: "Open Water Sparkling", category: "drink", price: "$2.95 – $3.25", calories: 0, protein: 0, fat: 0, carbs: 0, sodium: 0 },
  { id: "organic-chocolate-milk", name: "Organic Chocolate Milk", category: "drink", price: "$2.75 – $3.15", calories: 150, protein: 8, fat: 2.5, carbs: 22, sodium: 0 },
  { id: "organic-1-percent-milk", name: "Organic 1% Milk", category: "drink", price: "$2.75 – $3.15", calories: 110, protein: 8, fat: 2.5, carbs: 12, sodium: 0 },
  { id: "honest-kids-apple-juice", name: "Honest Kids Apple Juice", category: "drink", price: "$2.75 – $3.15", calories: 35, protein: 0, fat: 0, carbs: 9, sodium: 0 },
];

export const categoryLabels: Record<NutritionItem["category"], string> = {
  "curated-bowl": "Curated Bowls",
  "curated-pita": "Curated Pitas",
  "base": "Bases",
  "main": "Mains",
  "kids": "Kids Meal",
  "topping": "Toppings",
  "dip": "Dips & Spreads",
  "dressing": "Dressings",
  "side": "Sides",
  "dessert": "Desserts",
  "drink": "Drinks",
};

export const categoryOrder: NutritionItem["category"][] = [
  "curated-bowl",
  "curated-pita",
  "base",
  "main",
  "kids",
  "topping",
  "dip",
  "dressing",
  "side",
  "dessert",
  "drink",
];

export const categorySlugs: Record<NutritionItem["category"], string> = {
  "curated-bowl": "curated-bowls",
  "curated-pita": "curated-pitas",
  "base": "bases",
  "main": "mains",
  "kids": "kids-meal",
  "topping": "toppings",
  "dip": "dips-spreads",
  "dressing": "dressings",
  "side": "sides",
  "dessert": "desserts",
  "drink": "drinks",
};

export const categoryDescriptions: Record<NutritionItem["category"], string> = {
  "curated-bowl": "Chef-crafted bowls with signature flavor combinations. Choose your favorite or build your own.",
  "curated-pita": "Hand-rolled pitas stuffed with premium ingredients and bold Mediterranean flavors.",
  "base": "Start your custom bowl or pita with a wholesome base — grains or greens.",
  "main": "Pick your protein or plant-based main to power your meal.",
  "kids": "Perfectly portioned meals for little ones with the same great CAVA flavors.",
  "topping": "Fresh vegetables, crunchy add-ons, and vibrant toppings to complete your bowl.",
  "dip": "Creamy, bold, and flavorful dips & spreads made fresh daily.",
  "dressing": "Signature dressings to drizzle over your bowl or pita.",
  "side": "Pitas, pita chips, and more to pair with your meal.",
  "dessert": "Sweet treats to finish your meal — brownies, blondies, and cookies.",
  "drink": "Refreshing lemonades, teas, sparkling water, and more.",
};

/** Get category key from its URL slug */
export function getCategoryBySlug(slug: string): NutritionItem["category"] | undefined {
  const entry = Object.entries(categorySlugs).find(([, s]) => s === slug);
  return entry ? (entry[0] as NutritionItem["category"]) : undefined;
}

/** Get a menu item by its id (URL slug) */
export function getItemBySlug(slug: string): NutritionItem | undefined {
  return menuData.find((item) => item.id === slug);
}
