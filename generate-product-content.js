/**
 * CAVA Product Content Generator
 * Uses Claude claude-sonnet-4-5 API to generate SEO content for all product pages.
 * Run: node generate-product-content.js --batch 0 --size 10
 * 
 * Args:
 *   --batch  : which batch to run (0-indexed)
 *   --size   : items per batch (default 10)
 *   --id     : generate for a single item id only
 *   --dry    : print prompt only, don't call API
 */

const fs = require('fs');
const path = require('path');

// ── Load env ──
const envPath = path.join(__dirname, '.env.local');
if (fs.existsSync(envPath)) {
  const envLines = fs.readFileSync(envPath, 'utf8').split('\n');
  for (const line of envLines) {
    const [k, ...v] = line.split('=');
    if (k && v.length) process.env[k.trim()] = v.join('=').trim().replace(/^["']|["']$/g, '');
  }
}

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
if (!ANTHROPIC_API_KEY) {
  console.error('❌  ANTHROPIC_API_KEY not found. Add it to cava-nutritions/.env.local');
  console.error('    Example: ANTHROPIC_API_KEY=sk-ant-...');
  process.exit(1);
}

// ── Parse Args ──
const args = process.argv.slice(2);
const getArg = (name) => {
  const idx = args.indexOf(`--${name}`);
  return idx !== -1 ? args[idx + 1] : null;
};
const BATCH_INDEX = parseInt(getArg('batch') || '0', 10);
const BATCH_SIZE  = parseInt(getArg('size')  || '10', 10);
const SINGLE_ID   = getArg('id');
const DRY_RUN     = args.includes('--dry');

// ── Menu Data (inline, mirrors src/data/menu.ts) ──
const categoryLabels = {
  'curated-bowl': 'Curated Bowls',
  'curated-pita': 'Curated Pitas',
  'base': 'Bases',
  'main': 'Mains',
  'kids': 'Kids Meal',
  'topping': 'Toppings',
  'dip': 'Dips & Spreads',
  'dressing': 'Dressings',
  'side': 'Sides',
  'dessert': 'Desserts',
  'drink': 'Drinks',
};

const categorySlugs = {
  'curated-bowl': 'curated-bowls',
  'curated-pita': 'curated-pitas',
  'base': 'bases',
  'main': 'mains',
  'kids': 'kids-meal',
  'topping': 'toppings',
  'dip': 'dips-spreads',
  'dressing': 'dressings',
  'side': 'sides',
  'dessert': 'desserts',
  'drink': 'drinks',
};

const menuData = [
  // Curated Bowls
  { id: 'chicken-rice-bowl',           name: 'Chicken + Rice Bowl',                 category: 'curated-bowl',  price: '$12.85 – $13.45', calories: 700,  protein: 40, fat: 42, carbs: 44, ingredients: 'Grilled Chicken, Brown Rice, Hummus, Tzatziki, Tomato + Onion, Persian Cucumber, Pickled Onions, Lemon Herb Tahini' },
  { id: 'greek-salad-bowl',            name: 'Greek Salad Bowl',                    category: 'curated-bowl',  price: '$12.85 – $13.45', calories: 580,  protein: 37, fat: 40, carbs: 19, ingredients: 'Grilled Chicken, Romaine, Tomato + Cucumber, Kalamata Olives, Crumbled Feta, Greek Vinaigrette' },
  { id: 'harissa-avocado-bowl',        name: 'Harissa Avocado Bowl',                category: 'curated-bowl',  price: '$13.95 – $14.95', calories: 830,  protein: 41, fat: 49, carbs: 62, ingredients: 'Harissa Honey Chicken, Brown Rice, Hummus, Harissa, Fresh Avocado, Pickled Onions, Lemon Herb Tahini' },
  { id: 'falafel-crunch-bowl',         name: 'Falafel Crunch Bowl',                 category: 'curated-bowl',  price: '$13.45 – $14.45', calories: 860,  protein: 24, fat: 56, carbs: 88, ingredients: 'Falafel, Saffron Basmati Rice, Hummus, Crazy Feta, Tomato + Cucumber, Pita Crisps, Lemon Herb Tahini' },
  { id: 'spicy-lamb-avocado-bowl',     name: 'Spicy Lamb + Avocado Bowl',           category: 'curated-bowl',  price: '$14.95 – $16.25', calories: 800,  protein: 43, fat: 52, carbs: 49, ingredients: 'Spicy Lamb Meatballs, Brown Rice, Hummus, Harissa, Fresh Avocado, Shredded Romaine, Hot Harissa Vinaigrette' },
  { id: 'steak-harissa-bowl',          name: 'Steak + Harissa Bowl',                category: 'curated-bowl',  price: '$15.45 – $16.55', calories: 620,  protein: 37, fat: 35, carbs: 39, ingredients: 'Grilled Steak, Black Lentils, Harissa, Tomato + Onion, Fire-Roasted Corn, Pickled Onions, Hot Harissa Vinaigrette' },
  { id: 'strawberry-steak-salad',      name: 'Strawberry Steak Salad',              category: 'curated-bowl',  price: '$15.45 – $16.55', calories: 420,  protein: 32, fat: 22, carbs: 26, ingredients: 'Grilled Steak, Arugula, Romaine, Crumbled Feta, Pickled Onions, Fire-Roasted Corn, Strawberry Sesame Dressing' },
  { id: 'pomegranate-glazed-salmon-bowl', name: 'Pomegranate Glazed Salmon Bowl',  category: 'curated-bowl',  price: '$16.95 – $18.45', calories: 1040, protein: 36, fat: 65, carbs: 80, ingredients: 'Glazed Salmon, Saffron Basmati Rice, Hummus, Crazy Feta, Tomato + Cucumber, Pita Crisps, Lemon Herb Tahini' },
  { id: 'salmon-yogurt-dill',          name: 'Salmon + Yogurt Dill',               category: 'curated-bowl',  price: '$16.95 – $18.45', calories: 710,  protein: 35, fat: 43, carbs: 49, ingredients: 'Glazed Salmon, Black Lentils, Tzatziki, Persian Cucumber, Tomato + Onion, Yogurt Dill Dressing' },
  { id: 'salmon-strawberry-sesame-bowl', name: 'Salmon + Strawberry Sesame Bowl', category: 'curated-bowl',  price: '$16.95 – $18.45', calories: 700,  protein: 36, fat: 43, carbs: 46, ingredients: 'Glazed Salmon, Super Greens, Romaine, Crumbled Feta, Pickled Onions, Fire-Roasted Corn, Strawberry Sesame Dressing' },
  { id: 'baharat-braised-beef-and-rice', name: 'Baharat Braised Beef and Rice',    category: 'curated-bowl',  price: '$15.45 – $16.75', calories: 650,  protein: 38, fat: 39, carbs: 60, ingredients: 'Baharat Braised Beef, Saffron Basmati Rice, Hummus, Roasted Eggplant Dip, Pickled Onions, Lemon Herb Tahini' },
  { id: 'baharat-beef-lemon-tahini',   name: 'Baharat Beef + Lemon Tahini',        category: 'curated-bowl',  price: '$15.45 – $16.75', calories: 620,  protein: 35, fat: 36, carbs: 52, ingredients: 'Baharat Braised Beef, Black Lentils, Roasted Eggplant Dip, Tomato + Onion, Persian Cucumber, Lemon Herb Tahini' },
  { id: 'grains-bowl',                 name: 'Grains Bowl',                         category: 'curated-bowl',  price: '$11.95 – $12.95', calories: 600,  protein: 12, fat: 15, carbs: 98, ingredients: 'Brown Rice, Saffron Basmati Rice, Hummus, Tzatziki, Tomato + Onion, Persian Cucumber, Lemon Herb Tahini' },
  { id: 'greens-grains-bowl',          name: 'Greens + Grains Bowl',               category: 'curated-bowl',  price: '$11.95 – $12.95', calories: 420,  protein: 10, fat: 12, carbs: 65, ingredients: 'Super Greens, Brown Rice, Hummus, Tomato + Cucumber, Persian Cucumber, Greek Vinaigrette' },
  // Curated Pitas
  { id: 'greek-chicken-pita',          name: 'Greek Chicken Pita',                  category: 'curated-pita',  price: '$12.95 – $13.45', calories: 720,  protein: 48, fat: 30, carbs: 64, ingredients: 'Pita Bread, Grilled Chicken, Tzatziki, Tomato + Cucumber, Crumbled Feta, Shredded Romaine' },
  { id: 'spicy-chicken-avocado-pita',  name: 'Spicy Chicken + Avocado Pita',       category: 'curated-pita',  price: '$13.95 – $15.45', calories: 930,  protein: 48, fat: 48, carbs: 80, ingredients: 'Pita Bread, Harissa Honey Chicken, Hummus, Fresh Avocado, Pickled Onions, Shredded Romaine, Skhug' },
  { id: 'steak-feta-pita',             name: 'Steak + Feta Pita',                   category: 'curated-pita',  price: '$15.45 – $16.65', calories: 820,  protein: 44, fat: 42, carbs: 68, ingredients: 'Pita Bread, Grilled Steak, Crazy Feta, Tomato + Onion, Pickled Onions, Shredded Romaine, Garlic Dressing' },
  { id: 'crispy-falafel-pita',         name: 'Crispy Falafel Pita',                 category: 'curated-pita',  price: '$11.45 – $12.45', calories: 750,  protein: 22, fat: 38, carbs: 82, ingredients: 'Pita Bread, Falafel, Hummus, Tomato + Cucumber, Pickled Onions, Shredded Romaine, Lemon Herb Tahini' },
  { id: 'garlic-chicken-veggie-pita',  name: 'Garlic Chicken + Veggie Pita',       category: 'curated-pita',  price: '$12.95 – $13.95', calories: 680,  protein: 42, fat: 28, carbs: 62, ingredients: 'Pita Bread, Grilled Chicken, Roasted Vegetables, Hummus, Shredded Romaine, Garlic Dressing' },
  { id: 'spicy-lamb-meatball-pita',    name: 'Spicy Lamb Meatball Pita',            category: 'curated-pita',  price: '$13.95 – $14.95', calories: 810,  protein: 38, fat: 44, carbs: 66, ingredients: 'Pita Bread, Spicy Lamb Meatballs, Tzatziki, Sumac Cabbage Slaw, Pickled Onions, Hot Harissa Vinaigrette' },
  // Bases
  { id: 'brown-rice',                  name: 'Brown Rice',                           category: 'base',          price: 'Included',        calories: 310,  protein: 7,  fat: 10, carbs: 48, ingredients: 'Whole grain brown rice cooked with olive oil' },
  { id: 'saffron-basmati-rice',        name: 'Saffron Basmati Rice',                category: 'base',          price: 'Included',        calories: 290,  protein: 5,  fat: 7,  carbs: 54, ingredients: 'Basmati rice infused with saffron and olive oil' },
  { id: 'black-lentils',               name: 'Black Lentils',                        category: 'base',          price: 'Included',        calories: 270,  protein: 18, fat: 7,  carbs: 37, ingredients: 'Black beluga lentils with olive oil and spices' },
  { id: 'super-greens',                name: 'Super Greens',                         category: 'base',          price: 'Included',        calories: 35,   protein: 3,  fat: 0.5,carbs: 6,  ingredients: 'Shredded cabbage, kale, and chicory blend' },
  { id: 'power-greens',                name: 'Power Greens',                         category: 'base',          price: 'Included',        calories: 30,   protein: 2,  fat: 0,  carbs: 4,  ingredients: 'Mixed leafy greens blend' },
  { id: 'baby-spinach',                name: 'Baby Spinach',                         category: 'base',          price: 'Included',        calories: 20,   protein: 3,  fat: 0,  carbs: 3,  ingredients: 'Tender baby spinach leaves' },
  { id: 'arugula',                     name: 'Arugula',                              category: 'base',          price: 'Included',        calories: 20,   protein: 2,  fat: 0.5,carbs: 3,  ingredients: 'Wild baby arugula' },
  { id: 'romaine',                     name: 'Romaine',                              category: 'base',          price: 'Included',        calories: 20,   protein: 1,  fat: 0,  carbs: 4,  ingredients: 'Chopped romaine hearts' },
  // Mains
  { id: 'grilled-chicken',             name: 'Grilled Chicken',                      category: 'main',          price: 'Base ($0)',        calories: 250,  protein: 28, fat: 13, carbs: 3,  ingredients: 'Marinated grilled white meat chicken' },
  { id: 'harissa-honey-chicken',       name: 'Harissa Honey Chicken',               category: 'main',          price: '+$0.50',          calories: 260,  protein: 26, fat: 14, carbs: 7,  ingredients: 'Grilled chicken tossed in harissa and honey glaze' },
  { id: 'grilled-steak',               name: 'Grilled Steak',                        category: 'main',          price: '+$2.50 – $3.25',  calories: 170,  protein: 23, fat: 9,  carbs: 1,  ingredients: 'Marinated and grilled beef steak' },
  { id: 'braised-lamb',                name: 'Braised Lamb',                         category: 'main',          price: '+$2.50 – $3.25',  calories: 210,  protein: 24, fat: 12, carbs: 2,  ingredients: 'Slow-cooked braised shredded lamb with Mediterranean spices' },
  { id: 'spicy-lamb-meatballs',        name: 'Spicy Lamb Meatballs',                category: 'main',          price: '+$2.25 – $2.75',  calories: 300,  protein: 24, fat: 21, carbs: 3,  ingredients: 'Spiced lamb meatballs with wheat breadcrumbs' },
  { id: 'falafel',                     name: 'Falafel',                              category: 'main',          price: 'Base ($0)',        calories: 350,  protein: 6,  fat: 26, carbs: 24, ingredients: 'Fried chickpea and herb balls' },
  { id: 'roasted-vegetables',          name: 'Roasted Vegetables',                   category: 'main',          price: 'Base ($0)',        calories: 100,  protein: 3,  fat: 4.5,carbs: 14, ingredients: 'Seasonal oven-roasted vegetables with olive oil' },
  { id: 'glazed-salmon',               name: 'Glazed Salmon',                        category: 'main',          price: '+$4.50 – $5.50',  calories: 320,  protein: 23, fat: 23, carbs: 5,  ingredients: 'Baked salmon fillet with savory herb glaze' },
  { id: 'baharat-braised-beef',        name: 'Baharat Braised Beef',                category: 'main',          price: '+$2.50 – $3.25',  calories: 310,  protein: 22, fat: 18, carbs: 8,  ingredients: 'Braised beef with baharat spice blend' },
  // Dips & Spreads
  { id: 'hummus',                      name: 'Hummus',                               category: 'dip',           price: 'Included (up to 3)', calories: 50, protein: 2,  fat: 2.5,carbs: 4,  ingredients: 'Pureed chickpeas, tahini, garlic, lemon juice, olive oil' },
  { id: 'red-pepper-hummus',           name: 'Red Pepper Hummus',                   category: 'dip',           price: 'Included (up to 3)', calories: 40, protein: 2,  fat: 1.5,carbs: 5,  ingredients: 'Hummus blended with roasted red peppers' },
  { id: 'harissa',                     name: 'Harissa',                              category: 'dip',           price: 'Included (up to 3)', calories: 70, protein: 1,  fat: 6,  carbs: 5,  ingredients: 'North African chili paste with garlic, olive oil, and spices' },
  { id: 'roasted-eggplant-dip',        name: 'Roasted Eggplant Dip',               category: 'dip',           price: 'Included (up to 3)', calories: 50, protein: 0,  fat: 5,  carbs: 2,  ingredients: 'Smoky roasted eggplant, garlic, herbs, olive oil' },
  { id: 'tzatziki',                    name: 'Tzatziki',                             category: 'dip',           price: 'Included (up to 3)', calories: 30, protein: 2,  fat: 2.5,carbs: 1,  ingredients: 'Greek yogurt, cucumber, garlic, dill, lemon' },
  { id: 'crazy-feta',                  name: 'Crazy Feta®',                         category: 'dip',           price: 'Included (up to 3)', calories: 70, protein: 4,  fat: 6,  carbs: 1,  ingredients: 'Whipped feta cheese with jalapeño peppers and olive oil' },
  // Toppings
  { id: 'shredded-romaine',            name: 'Shredded Romaine',                    category: 'topping',       price: 'Included',        calories: 5,    protein: 0,  fat: 0,  carbs: 1,  ingredients: 'Shredded fresh romaine lettuce' },
  { id: 'pita-crisps',                 name: 'Pita Crisps',                          category: 'topping',       price: 'Included',        calories: 70,   protein: 1,  fat: 11, carbs: 6,  ingredients: 'Baked wheat pita crisps' },
  { id: 'sumac-cabbage-slaw',          name: 'Sumac Cabbage Slaw',                  category: 'topping',       price: 'Included',        calories: 30,   protein: 1,  fat: 1.5,carbs: 3,  ingredients: 'Shredded cabbage tossed with sumac and olive oil' },
  { id: 'tomato-onion',                name: 'Tomato + Onion',                      category: 'topping',       price: 'Included',        calories: 20,   protein: 0,  fat: 1.5,carbs: 2,  ingredients: 'Diced ripe tomatoes and sweet onions' },
  { id: 'persian-cucumber',            name: 'Persian Cucumber',                    category: 'topping',       price: 'Included',        calories: 15,   protein: 0,  fat: 1,  carbs: 1,  ingredients: 'Sliced seedless Persian cucumber' },
  { id: 'tomato-cucumber',             name: 'Tomato + Cucumber',                   category: 'topping',       price: 'Included',        calories: 5,    protein: 0,  fat: 0,  carbs: 1,  ingredients: 'Diced tomatoes and cucumbers' },
  { id: 'kalamata-olives',             name: 'Kalamata Olives',                     category: 'topping',       price: 'Included',        calories: 35,   protein: 0,  fat: 3,  carbs: 2,  ingredients: 'Pitted Kalamata olives' },
  { id: 'fiery-broccoli',              name: 'Fiery Broccoli',                      category: 'topping',       price: 'Included',        calories: 35,   protein: 1,  fat: 2.5,carbs: 2,  ingredients: 'Charred broccoli with chili oil' },
  { id: 'pickled-onions',              name: 'Pickled Onions',                      category: 'topping',       price: 'Included',        calories: 20,   protein: 0,  fat: 0,  carbs: 5,  ingredients: 'Quick-pickled red onion slices' },
  { id: 'salt-brined-pickles',         name: 'Salt-Brined Pickles',                 category: 'topping',       price: 'Included',        calories: 5,    protein: 0,  fat: 0,  carbs: 0,  ingredients: 'Cucumber pickles brined in salt water' },
  { id: 'crumbled-feta',               name: 'Crumbled Feta',                       category: 'topping',       price: 'Included',        calories: 35,   protein: 3,  fat: 2.5,carbs: 0,  ingredients: 'Crumbled sheep and goat milk feta cheese' },
  { id: 'fire-roasted-corn',           name: 'Fire-Roasted Corn',                   category: 'topping',       price: 'Included',        calories: 45,   protein: 1,  fat: 2.5,carbs: 5,  ingredients: 'Charred sweet corn with peppers and lime' },
  { id: 'fresh-avocado',               name: 'Fresh Avocado',                       category: 'topping',       price: '+$1.95 – $2.45',  calories: 110,  protein: 1,  fat: 10, carbs: 6,  ingredients: 'Fresh sliced Hass avocado' },
  // Dressings
  { id: 'garlic-dressing',             name: 'Garlic Dressing',                     category: 'dressing',      price: 'Included (up to 2)', calories: 180, protein: 0, fat: 20, carbs: 0,  ingredients: 'Roasted garlic, oil, vinegar emulsified dressing' },
  { id: 'greek-vinaigrette',           name: 'Greek Vinaigrette',                   category: 'dressing',      price: 'Included (up to 2)', calories: 130, protein: 0, fat: 14, carbs: 1,  ingredients: 'Extra virgin olive oil, red wine vinegar, oregano' },
  { id: 'lemon-herb-tahini',           name: 'Lemon Herb Tahini',                   category: 'dressing',      price: 'Included (up to 2)', calories: 70,  protein: 2, fat: 6,  carbs: 4,  ingredients: 'Ground sesame tahini, lemon juice, herbs' },
  { id: 'hot-harissa-vinaigrette',     name: 'Hot Harissa Vinaigrette',             category: 'dressing',      price: 'Included (up to 2)', calories: 70,  protein: 0, fat: 7,  carbs: 1,  ingredients: 'Harissa pepper paste blended into vinaigrette' },
  { id: 'skhug',                       name: 'Skhug',                               category: 'dressing',      price: 'Included (up to 2)', calories: 80,  protein: 0, fat: 9,  carbs: 1,  ingredients: 'Yemeni green herb and chili sauce with cilantro' },
  { id: 'balsamic-date-vinaigrette',   name: 'Balsamic Date Vinaigrette',           category: 'dressing',      price: 'Included (up to 2)', calories: 60,  protein: 0, fat: 4,  carbs: 7,  ingredients: 'Aged balsamic vinegar with date puree' },
  { id: 'yogurt-dill',                 name: 'Yogurt Dill',                         category: 'dressing',      price: 'Included (up to 2)', calories: 30,  protein: 2, fat: 2,  carbs: 1,  ingredients: 'Greek yogurt, fresh dill, lemon' },
  { id: 'strawberry-sesame',           name: 'Strawberry Sesame',                   category: 'dressing',      price: 'Included (up to 2)', calories: 60,  protein: 1, fat: 5,  carbs: 3,  ingredients: 'Strawberry puree, sesame oil, rice vinegar' },
  // Sides
  { id: 'whole-pita',                  name: 'Whole Pita',                           category: 'side',          price: '$2.25 – $2.55',   calories: 320,  protein: 13, fat: 6,  carbs: 54, ingredients: 'Soft sprouted wheat pita bread' },
  { id: 'side-quarter-pita',           name: 'Side Quarter Pita',                   category: 'side',          price: 'Included w/ bowl', calories: 80,  protein: 3,  fat: 1.5,carbs: 14, ingredients: 'One quarter of a warm sprouted wheat pita' },
  { id: 'classic-pita-chips',          name: 'Classic Pita Chips',                  category: 'side',          price: '$2.55 – $2.95',   calories: 280,  protein: 10, fat: 8,  carbs: 41, ingredients: 'Baked wheat pita chips with sea salt' },
  { id: 'harissa-bbq-pita-chips',      name: 'Harissa BBQ Pita Chips',              category: 'side',          price: '$2.75 – $2.95',   calories: 280,  protein: 10, fat: 10, carbs: 43, ingredients: 'Baked pita chips with harissa BBQ seasoning' },
  { id: 'garlic-ranch-pita-chips',     name: 'Garlic Ranch Pita Chips',             category: 'side',          price: '$2.75 – $2.95',   calories: 280,  protein: 10, fat: 10, carbs: 42, ingredients: 'Baked pita chips with garlic and ranch seasoning' },
  { id: 'cinnamon-sugar-pita-chips',   name: 'Cinnamon Sugar Pita Chips',           category: 'side',          price: '$3.25 – $3.70',   calories: 310,  protein: 9,  fat: 8,  carbs: 48, ingredients: 'Baked pita chips coated with cinnamon and sugar' },
  // Desserts
  { id: 'greyston-chocolate-chip-blondie', name: 'Greyston Chocolate Chip Blondie', category: 'dessert',       price: '$2.75 – $2.95',   calories: 140,  protein: 2,  fat: 5,  carbs: 22, ingredients: 'Wheat flour, butter, sugar, chocolate chips' },
  { id: 'greyston-chocolate-fudge-brownie', name: 'Greyston Chocolate Fudge Brownie', category: 'dessert',     price: '$2.75 – $2.95',   calories: 150,  protein: 2,  fat: 9,  carbs: 17, ingredients: 'Wheat flour, dark cocoa, butter, sugar, eggs' },
  { id: 'salted-dark-chocolate-oat-cookie', name: 'Whisked! Salted Dark Chocolate Oat Cookie', category: 'dessert', price: '$3.25 – $3.55', calories: 260, protein: 4, fat: 13, carbs: 31, ingredients: 'Oats, dark chocolate, sea salt, coconut sugar, eggs' },
  { id: 'apricot-honey-oat-cookie',    name: 'Whisked! Apricot Honey Oat Cookie',  category: 'dessert',       price: '$3.25 – $3.55',   calories: 220,  protein: 3,  fat: 9,  carbs: 34, ingredients: 'Oats, dried apricot, honey, almond flour, eggs' },
  // Drinks (main ones)
  { id: 'classic-lemonade-16oz',       name: 'Classic Lemonade (16 oz)',            category: 'drink',         price: '$3.45', size: '16 oz', calories: 260, protein: 0,fat: 0,  carbs: 69, ingredients: 'Freshly squeezed lemon juice, cane sugar, water' },
  { id: 'classic-lemonade-22oz',       name: 'Classic Lemonade (22 oz)',            category: 'drink',         price: '$3.85', size: '22 oz', calories: 360, protein: 0,fat: 0,  carbs: 95, ingredients: 'Freshly squeezed lemon juice, cane sugar, water' },
  { id: 'blueberry-lavender-16oz',     name: 'Blueberry Lavender (16 oz)',          category: 'drink',         price: '$3.45', size: '16 oz', calories: 140, protein: 0,fat: 0,  carbs: 36, ingredients: 'Wild blueberries, lavender, cane sugar, water' },
  { id: 'blueberry-lavender-22oz',     name: 'Blueberry Lavender (22 oz)',          category: 'drink',         price: '$3.85', size: '22 oz', calories: 190, protein: 0,fat: 0,  carbs: 50, ingredients: 'Wild blueberries, lavender, cane sugar, water' },
  { id: 'cucumber-mint-lime-16oz',     name: 'Cucumber Mint Lime (16 oz)',          category: 'drink',         price: '$3.45', size: '16 oz', calories: 180, protein: 1,fat: 0,  carbs: 44, ingredients: 'Cucumber juice, fresh mint, lime juice, cane sugar' },
  { id: 'cucumber-mint-lime-22oz',     name: 'Cucumber Mint Lime (22 oz)',          category: 'drink',         price: '$3.85', size: '22 oz', calories: 240, protein: 1,fat: 0,  carbs: 61, ingredients: 'Cucumber juice, fresh mint, lime juice, cane sugar' },
  { id: 'sweet-tea-16oz',              name: 'Sweet Tea (16 oz)',                   category: 'drink',         price: '$3.45', size: '16 oz', calories: 150, protein: 0,fat: 0,  carbs: 37, ingredients: 'Brewed black tea, cane sugar' },
  { id: 'sweet-tea-22oz',              name: 'Sweet Tea (22 oz)',                   category: 'drink',         price: '$3.85', size: '22 oz', calories: 200, protein: 0,fat: 0,  carbs: 51, ingredients: 'Brewed black tea, cane sugar' },
  { id: 'jasmine-green-tea-16oz',      name: 'Jasmine Green Tea (16 oz)',           category: 'drink',         price: '$3.45', size: '16 oz', calories: 0,   protein: 0,fat: 0,  carbs: 0,  ingredients: 'Organic jasmine green tea' },
  { id: 'jasmine-green-tea-22oz',      name: 'Jasmine Green Tea (22 oz)',           category: 'drink',         price: '$3.85', size: '22 oz', calories: 0,   protein: 0,fat: 0,  carbs: 0,  ingredients: 'Organic jasmine green tea' },
  { id: 'spindrift-lemon',             name: 'Spindrift Lemon',                     category: 'drink',         price: '$2.95 – $3.25',   calories: 3,    protein: 0,fat: 0,  carbs: 1,  ingredients: 'Sparkling water, real lemon juice' },
  { id: 'spindrift-half-tea',          name: 'Spindrift Half Tea & Half Lemon',    category: 'drink',         price: '$2.95 – $3.25',   calories: 5,    protein: 0,fat: 0,  carbs: 1,  ingredients: 'Sparkling water, brewed black tea, real lemon juice' },
  { id: 'open-water-still',            name: 'Open Water Still',                    category: 'drink',         price: '$2.95 – $3.25',   calories: 0,    protein: 0,fat: 0,  carbs: 0,  ingredients: 'Purified still water' },
  { id: 'open-water-sparkling',        name: 'Open Water Sparkling',                category: 'drink',         price: '$2.95 – $3.25',   calories: 0,    protein: 0,fat: 0,  carbs: 0,  ingredients: 'Purified sparkling water' },
  { id: 'strawberry-ginger-16oz',     name: 'Strawberry Ginger (16 oz)',           category: 'drink',         price: '$3.45', size: '16 oz', calories: 120, protein: 0,fat: 0,  carbs: 30, ingredients: 'Strawberries, ginger, cane sugar, water' },
  { id: 'strawberry-ginger-22oz',     name: 'Strawberry Ginger (22 oz)',           category: 'drink',         price: '$3.85', size: '22 oz', calories: 165, protein: 0,fat: 0,  carbs: 41, ingredients: 'Strawberries, ginger, cane sugar, water' },
  { id: 'unsweetened-black-tea-16oz', name: 'Unsweetened Black Tea (16 oz)',       category: 'drink',         price: '$3.45', size: '16 oz', calories: 0,   protein: 0,fat: 0,  carbs: 0,  ingredients: 'Brewed black tea' },
  { id: 'unsweetened-black-tea-22oz', name: 'Unsweetened Black Tea (22 oz)',       category: 'drink',         price: '$3.85', size: '22 oz', calories: 0,   protein: 0,fat: 0,  carbs: 0,  ingredients: 'Brewed black tea' },
  { id: 'maine-root-soda-16oz',       name: 'Maine Root Fountain Soda (16 oz)',    category: 'drink',         price: '$3.25', size: '16 oz', calories: 160, protein: 0,fat: 0,  carbs: 42, ingredients: 'Carbonated water, cane sugar, natural flavors' },
  { id: 'maine-root-soda-22oz',       name: 'Maine Root Fountain Soda (22 oz)',    category: 'drink',         price: '$3.85', size: '22 oz', calories: 220, protein: 0,fat: 0,  carbs: 58, ingredients: 'Carbonated water, cane sugar, natural flavors' },
  { id: 'maine-root-diet-16oz',       name: 'Maine Root Diet Soda (16 oz)',        category: 'drink',         price: '$3.25', size: '16 oz', calories: 0,   protein: 0,fat: 0,  carbs: 0,  ingredients: 'Carbonated water, natural flavors, stevia' },
  { id: 'maine-root-diet-22oz',       name: 'Maine Root Diet Soda (22 oz)',        category: 'drink',         price: '$3.85', size: '22 oz', calories: 0,   protein: 0,fat: 0,  carbs: 0,  ingredients: 'Carbonated water, natural flavors, stevia' },
  { id: 'spindrift-grapefruit',       name: 'Spindrift Grapefruit',                category: 'drink',         price: '$2.95 – $3.25',   calories: 17,   protein: 0,fat: 0,  carbs: 4,  ingredients: 'Sparkling water, real grapefruit juice' },
  { id: 'organic-chocolate-milk',     name: 'Organic Chocolate Milk',              category: 'drink',         price: '$2.75 – $3.15',   calories: 150,  protein: 8, fat: 5,  carbs: 20, ingredients: 'Organic whole milk, cocoa, cane sugar' },
  { id: 'organic-1-percent-milk',     name: 'Organic 1% Milk',                     category: 'drink',         price: '$2.75 – $3.15',   calories: 110,  protein: 8, fat: 2,  carbs: 13, ingredients: 'Organic 1% lowfat milk' },
  { id: 'honest-kids-apple-juice',    name: 'Honest Kids Apple Juice',             category: 'drink',         price: '$2.75 – $3.15',   calories: 40,   protein: 0, fat: 0,  carbs: 10, ingredients: 'Organic apple juice, water, citric acid' },
];

// ── Internal Link Map ──
const internalLinks = {
  '/': 'full CAVA menu',
  '/menu/curated-bowls': 'CAVA Curated Bowls Menu',
  '/menu/curated-pitas': 'CAVA Curated Pitas Menu',
  '/menu/bases': 'CAVA Bases Menu',
  '/menu/mains': 'CAVA Mains Menu',
  '/menu/dips-spreads': 'CAVA Dips & Spreads Menu',
  '/menu/toppings': 'CAVA Toppings Menu',
  '/menu/dressings': 'CAVA Dressings Menu',
  '/menu/sides': 'CAVA Sides Menu',
  '/menu/desserts': 'CAVA Desserts Menu',
  '/menu/drinks': 'CAVA Drinks Menu',
  '/calculator': 'CAVA Nutrition Calculator',
  '/gluten-free': 'CAVA Gluten Free Menu',
  '/allergen-menu': 'CAVA Allergen Menu',
  '/locations': 'CAVA Locations',
};

// ── Build Prompt ──
function buildPrompt(item) {
  const catLabel = categoryLabels[item.category];
  const catSlug  = categorySlugs[item.category];
  const relatedItems = menuData
    .filter(i => i.category === item.category && i.id !== item.id)
    .slice(0, 4)
    .map(i => `${i.name} (${i.calories} cal, $${i.price})`)
    .join(', ');

  const internalLinksStr = Object.entries(internalLinks)
    .map(([url, label]) => `- "${label}" → ${url}`)
    .join('\n');

  return `You are a senior SEO content writer for cavanutrition.us, a CAVA menu information website.

Write SEO-optimized page content for the CAVA product below. Output ONLY a valid JSON object. No markdown fences, no extra text, no explanation. The JSON must be parseable by JSON.parse().

IMPORTANT JSON RULES:
- All string values must use escaped newlines (\\n) not literal newlines inside strings
- Use double quotes only for JSON keys and string values
- Do not use apostrophes inside string values (use "does not" instead of "doesn't")
- Keep each section 50-80 words max

## Product Data
- Name: ${item.name}
- Category: ${catLabel}
- Price: ${item.price}${item.size ? ` (${item.size})` : ''}
- Calories: ${item.calories} kcal
- Protein: ${item.protein}g | Carbs: ${item.carbs}g | Fat: ${item.fat}g
- Ingredients: ${item.ingredients}
- Category URL: /menu/${catSlug}
- Item URL: /menu/${catSlug}/${item.id}
- Related Items: ${relatedItems || 'None'}

## Internal Links (use 3-5 naturally)
${internalLinksStr}

## Output Format (valid JSON only):
{
  "intro": "string",
  "priceCalories": "string",
  "whatMakesSpecial": "string",
  "nutritionFacts": "string",
  "whatsInside": "string",
  "tasteLike": "string",
  "customize": "string",
  "pairsWell": "string",
  "healthyChoice": "string",
  "howToOrder": "string",
  "vsAlternatives": "string",
  "whoShouldTry": "string",
  "worthTrying": "string",
  "faqs": [
    {"q": "string", "a": "string"},
    {"q": "string", "a": "string"},
    {"q": "string", "a": "string"},
    {"q": "string", "a": "string"},
    {"q": "string", "a": "string"}
  ]
}

Include 3-5 markdown links [text](url) naturally within the string values above.`;
}

// ── Call Claude API ──
async function callClaude(prompt) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-5',
      max_tokens: 8192,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`API error ${response.status}: ${err}`);
  }

  const data = await response.json();
  return data.content[0].text.trim();
}

// ── Save Content ──
function saveContent(item, content) {
  const catSlug = categorySlugs[item.category];
  const dir = path.join(__dirname, 'src', 'data', 'product-content', catSlug, item.id);
  fs.mkdirSync(dir, { recursive: true });

  const filePath = path.join(dir, 'content.json');
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
  console.log(`  ✅ Saved: ${filePath}`);
}

// ── Check if already generated ──
function alreadyExists(item) {
  const catSlug = categorySlugs[item.category];
  const filePath = path.join(__dirname, 'src', 'data', 'product-content', catSlug, item.id, 'content.json');
  return fs.existsSync(filePath);
}

// ── Main ──
async function main() {
  console.log('\n🚀 CAVA Product Content Generator');
  console.log(`   Model: claude-sonnet-4-5`);

  let items;
  if (SINGLE_ID) {
    items = menuData.filter(i => i.id === SINGLE_ID);
    if (!items.length) {
      console.error(`❌ No item found with id: ${SINGLE_ID}`);
      process.exit(1);
    }
    console.log(`   Mode: Single item → ${items[0].name}\n`);
  } else {
    const start = BATCH_INDEX * BATCH_SIZE;
    const end   = start + BATCH_SIZE;
    items = menuData.slice(start, end);
    console.log(`   Mode: Batch ${BATCH_INDEX} (items ${start}–${Math.min(end, menuData.length) - 1} of ${menuData.length})`);
    console.log(`   Items in this batch: ${items.length}\n`);
  }

  if (items.length === 0) {
    console.log('⚠️  No items in this batch. Try a lower --batch number.');
    return;
  }

  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const label = `[${i + 1}/${items.length}] ${item.name}`;

    if (alreadyExists(item)) {
      console.log(`  ⏭️  ${label} — already exists, skipping`);
      skipCount++;
      continue;
    }

    console.log(`  ⏳ ${label}`);
    const prompt = buildPrompt(item);

    if (DRY_RUN) {
      console.log('\n--- PROMPT PREVIEW ---');
      console.log(prompt.slice(0, 500) + '...');
      console.log('--- END PREVIEW ---\n');
      continue;
    }

    try {
      const rawText = await callClaude(prompt);

      // Try to parse JSON — strip any accidental markdown/code fences and whitespace
      let jsonText = rawText.trim();
      // Remove markdown code fences like ```json ... ``` or ``` ... ```
      jsonText = jsonText.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
      // Extract the outermost JSON object
      const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
      if (jsonMatch) jsonText = jsonMatch[0];

      const content = JSON.parse(jsonText);
      saveContent(item, content);
      successCount++;

      // Small delay between calls to be respectful
      if (i < items.length - 1) {
        await new Promise(r => setTimeout(r, 800));
      }
    } catch (err) {
      console.error(`  ❌ ${label} — Error: ${err.message}`);
      errorCount++;
    }
  }

  console.log(`\n📊 Done! ✅ ${successCount} generated | ⏭️  ${skipCount} skipped | ❌ ${errorCount} errors`);
  console.log(`\nTotal items in database: ${menuData.length}`);
  console.log(`Total batches needed (size ${BATCH_SIZE}): ${Math.ceil(menuData.length / BATCH_SIZE)}`);
  console.log('\nRun all batches like:');
  for (let b = 0; b < Math.ceil(menuData.length / BATCH_SIZE); b++) {
    console.log(`  node generate-product-content.js --batch ${b} --size ${BATCH_SIZE}`);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
