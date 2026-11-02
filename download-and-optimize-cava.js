const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// List of target image downloads from cavasmenu.com
// We provide fallback URLs in case one path variant is 404
const IMAGES_TO_PROCESS = [
  // --- Curated Bowls ---
  {
    name: 'chicken-rice-bowl.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/chicken-and-rice_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/chicken-and-rice_-300x300.avif'
    ],
    seoAlt: 'Chicken and Rice Bowl – CAVA curated bowl with grilled chicken, hummus, and saffron basmati rice',
    menuIds: ['chicken-rice-bowl', 'brown-rice', 'saffron-basmati-rice', 'black-lentils', 'grilled-chicken', 'kids-grilled-chicken']
  },
  {
    name: 'greek-salad-bowl.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/greek-salad-bowl.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/greek-salad-bowl-300x300.avif'
    ],
    seoAlt: 'Greek Salad Bowl – CAVA fresh Mediterranean salad bowl with grilled chicken, feta, and Greek vinaigrette',
    menuIds: ['greek-salad-bowl', 'super-greens', 'power-greens', 'baby-spinach', 'arugula', 'romaine', 'roasted-vegetables', 'shredded-romaine', 'tomato-onion', 'persian-cucumber', 'tomato-cucumber', 'kalamata-olives', 'crumbled-feta', 'greek-vinaigrette']
  },
  {
    name: 'harissa-avocado-bowl.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/harissa-avocado-bowl_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/harissa-avocado-bowl_-300x300.avif'
    ],
    seoAlt: 'Harissa Avocado Bowl – CAVA signature bowl with hot harissa chicken, fresh avocado, and Crazy Feta',
    menuIds: ['harissa-avocado-bowl', 'harissa-honey-chicken', 'fresh-avocado', 'hot-harissa-vinaigrette']
  },
  {
    name: 'falafel-crunch-bowl.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/falafel-crunch-bowl.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/falafel-crunch-bowl-300x300.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/03/falafel-crunch-bowl-300x300-3.avif'
    ],
    seoAlt: 'Falafel Crunch Bowl – CAVA vegetarian bowl packed with crispy falafel, hummus, and pita crisps',
    menuIds: ['falafel-crunch-bowl', 'falafel', 'kids-falafel', 'pita-crisps', 'sumac-cabbage-slaw']
  },
  {
    name: 'spicy-lamb-avocado-bowl.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/spicy-lamb-avocado.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/spicy-lamb-avocado-300x300.avif'
    ],
    seoAlt: 'Spicy Lamb and Avocado Bowl – CAVA curated bowl featuring spiced lamb meatballs, feta, and avocado',
    menuIds: ['spicy-lamb-avocado-bowl', 'braised-lamb', 'spicy-lamb-meatballs', 'kids-spicy-lamb-meatballs', 'kids-braised-lamb']
  },
  {
    name: 'steak-harissa-bowl.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/steak-harissa-bowl_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/steak-harissa-bowl_-300x300.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/03/steak-harissa-bowl_-300x300-1.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/03/steak-harissa-bowl_-300x300-2.avif'
    ],
    seoAlt: 'Steak and Harissa Bowl – CAVA curated protein bowl with grilled steak and harissa vinaigrette',
    menuIds: ['steak-harissa-bowl', 'grilled-steak', 'kids-grilled-steak']
  },
  {
    name: 'grains-bowl.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/Grains-bowl.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/Grains-bowl-300x300.avif'
    ],
    seoAlt: 'Grains Bowl – CAVA Mediterranean grain bowl with saffron basmati and brown rice',
    menuIds: ['grains-bowl']
  },
  {
    name: 'greens-grains-bowl.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/Greensgrains.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/Greensgrains-300x300.avif'
    ],
    seoAlt: 'Greens and Grains Bowl – CAVA balanced Mediterranean bowl with crisp greens and whole grains',
    menuIds: ['greens-grains-bowl']
  },

  // --- Curated Pitas ---
  {
    name: 'greek-chicken-pita.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/greek-chicken.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/03/greek-chicken-1.avif'
    ],
    seoAlt: 'Greek Chicken Pita – CAVA grilled chicken wrapped in warm pita with tzatziki, feta, and cucumbers',
    menuIds: ['greek-chicken-pita']
  },
  {
    name: 'crispy-falafel-pita.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/crispy-falllafel.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/03/crispy-falllafel-1.avif'
    ],
    seoAlt: 'Crispy Falafel Pita – CAVA Mediterranean pita wrap filled with warm crispy falafel and hummus',
    menuIds: ['crispy-falafel-pita']
  },
  {
    name: 'steak-feta-pita.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/steak-feta.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/steak-feta_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/03/steak-feta-1.avif'
    ],
    seoAlt: 'Steak and Feta Pita – CAVA warm pita wrap with tender grilled steak, Crazy Feta, and pickled onions',
    menuIds: ['steak-feta-pita']
  },
  {
    name: 'garlic-chicken-veggie-pita.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/garlic-chichen.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/03/garlic-chichen-1.avif'
    ],
    seoAlt: 'Garlic Chicken and Veggie Pita – CAVA pita wrap loaded with savory grilled chicken and roasted vegetables',
    menuIds: ['garlic-chicken-veggie-pita', 'garlic-dressing']
  },
  {
    name: 'spicy-lamb-meatball-pita.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/pita.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/03/pita-1.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/03/spicy-lamb-meatball.avif'
    ],
    seoAlt: 'Spicy Lamb Meatball Pita – CAVA Mediterranean pita wrap with spicy lamb meatballs and garlic dressing',
    menuIds: ['spicy-lamb-meatball-pita']
  },
  {
    name: 'spicy-chicken-avocado-pita.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/chicken-avacado.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/03/pita-3.avif'
    ],
    seoAlt: 'Spicy Chicken Avocado Pita – CAVA handcrafted pita wrap with fiery grilled chicken and ripe avocado',
    menuIds: ['spicy-chicken-avocado-pita']
  },

  // --- Dips & Spreads ---
  {
    name: 'tzatziki.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/tzatziki_20240118.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/tzatziki_20240118-300x300.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/04/tzatziki_20240118-300x300-1.avif'
    ],
    seoAlt: 'Tzatziki Dip – CAVA traditional Greek yogurt dip blended with grated cucumber and fresh garlic',
    menuIds: ['tzatziki']
  },
  {
    name: 'hummus.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/hummus_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/hummus_-300x300.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/04/hummus_-300x300-1.avif'
    ],
    seoAlt: 'Traditional Hummus – CAVA creamy chickpea spread blended with rich tahini and Mediterranean spices',
    menuIds: ['hummus']
  },
  {
    name: 'roasted-eggplant-dip.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/roasted-eggplant-dip_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/roasted-eggplant-dip_-300x300.avif'
    ],
    seoAlt: 'Roasted Eggplant Dip – CAVA smoky Mediterranean roasted eggplant spread with garlic and herbs',
    menuIds: ['roasted-eggplant-dip']
  },
  {
    name: 'crazy-feta.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/crazy-feta_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/crazy-feta_-300x300.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/04/crazy-feta_-300x300-1.avif'
    ],
    seoAlt: 'Crazy Feta – CAVA signature spicy whipped feta dip with jalapeño peppers and extra virgin olive oil',
    menuIds: ['crazy-feta']
  },
  {
    name: 'harissa.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/harissa_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/harissa_-300x300.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/04/harissa_-300x300-1.avif'
    ],
    seoAlt: 'Harissa Dip – CAVA bold, traditional North African red chili paste with aromatic spices',
    menuIds: ['harissa']
  },
  {
    name: 'red-pepper-hummus.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/red-pepper-hummus.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/red-pepper-hummus-300x300.avif'
    ],
    seoAlt: 'Red Pepper Hummus – CAVA sweet roasted red pepper blended with smooth hummus and spices',
    menuIds: ['red-pepper-hummus']
  },

  // --- Sides ---
  {
    name: 'side-pita.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/side-pita_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/side-pita_-300x300.avif'
    ],
    seoAlt: 'Side Pita Bread – CAVA warm, fluffy Mediterranean pita bread baked fresh daily',
    menuIds: ['whole-pita', 'side-quarter-pita']
  },
  {
    name: 'classic-pita-chips.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/pita-chips_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/pita-chips_-300x300.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/04/pita-chips_-300x300-1.avif'
    ],
    seoAlt: 'Classic Pita Chips – CAVA crispy seasoned pita chips seasoned with sea salt',
    menuIds: ['classic-pita-chips', 'cinnamon-sugar-pita-chips', 'kids-pita-chips']
  },
  {
    name: 'sumac-onion-pita-chips.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/sumac-sour-cream-pita-chips_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/sumac-sour-cream-pita-chips_-300x300.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/04/sumac-sour-cream-pita-chips_-300x300-1.avif'
    ],
    seoAlt: 'Sumac Sour Cream and Onion Pita Chips – CAVA zesty seasoned pita chips dusted with tangy sumac',
    menuIds: ['harissa-bbq-pita-chips', 'garlic-ranch-pita-chips']
  },

  // --- Desserts ---
  {
    name: 'greyston-blondie.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/blondie_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/blondie_-300x300.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/04/blondie_-300x300-1.avif'
    ],
    seoAlt: 'Greyston Chocolate Chip Blondie – CAVA rich, buttery blondie loaded with gourmet chocolate chips',
    menuIds: ['greyston-chocolate-chip-blondie']
  },
  {
    name: 'greyston-brownie.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/brownie_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/brownie_-300x300.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/04/brownie_-300x300-1.avif'
    ],
    seoAlt: 'Greyston Chocolate Fudge Brownie – CAVA decadent fudgy dark chocolate brownie from Greyston Bakery',
    menuIds: ['greyston-chocolate-fudge-brownie']
  },
  {
    name: 'salted-chocolate-oat-cookie.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/chocolate-chip-oat-cookie_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/chocolate-chip-oat-cookie_-300x300.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/04/chocolate-chip-oat-cookie_-300x300-1.avif'
    ],
    seoAlt: 'Whisked! Salted Dark Chocolate Oat Cookie – CAVA chewy oat cookie baked with dark chocolate and sea salt',
    menuIds: ['salted-dark-chocolate-oat-cookie', 'apricot-honey-oat-cookie']
  },

  // --- Kids Meal ---
  {
    name: 'kids-meal.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/kids-meal.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/kids-meal-300x300.avif'
    ],
    seoAlt: 'Kids Meal at CAVA – Balanced Mediterranean meal for kids with choice of protein, grain, and mini pita',
    menuIds: ['kids-meal', 'kids-roasted-vegetables', 'kids-saffron-basmati-rice', 'kids-brown-rice', 'kids-black-lentils']
  },

  // --- Drinks ---
  {
    name: 'classic-lemonade.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/classic-lemonade_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/classic-lemonade_-300x300.avif',
      'https://cavasmenu.us/wp-content/uploads/2026/01/classic-lemonade_-300x300.avif'
    ],
    seoAlt: 'Classic Lemonade – CAVA house-made tart and sweet refreshing lemonade crafted with real lemons',
    menuIds: ['classic-lemonade-16oz', 'classic-lemonade-22oz']
  },
  {
    name: 'tangerine-aleppo.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/tangerine-aleppo_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/tangerine-aleppo_-300x300.avif',
      'https://cavasmenu.us/wp-content/uploads/2026/01/tangerine-aleppo_-300x300.avif'
    ],
    seoAlt: 'Tangerine Aleppo Drink – CAVA specialty beverage blending sweet citrus tangerine with mild Aleppo pepper',
    menuIds: ['tangerine-aleppo', 'strawberry-ginger-16oz', 'strawberry-ginger-22oz']
  },
  {
    name: 'blueberry-lavender.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/blueberry-lavender_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/blueberry-lavender_-300x300.avif',
      'https://cavasmenu.us/wp-content/uploads/2026/01/blueberry-lavender_-300x300.avif'
    ],
    seoAlt: 'Blueberry Lavender Juice – CAVA refreshing handcrafted drink with wild blueberry and floral lavender',
    menuIds: ['blueberry-lavender-16oz', 'blueberry-lavender-22oz']
  },
  {
    name: 'cucumber-mint-lime.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/cucumber-mint-lime_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/cucumber-mint-lime_-300x300.avif',
      'https://cavasmenu.us/wp-content/uploads/2026/01/cucumber-mint-lime_-300x300.avif'
    ],
    seoAlt: 'Cucumber Mint Lime Agua Fresca – CAVA cool crisp drink with fresh cucumber, mint, and zesty lime',
    menuIds: ['cucumber-mint-lime-16oz', 'cucumber-mint-lime-22oz']
  },
  {
    name: 'jasmine-green-tea.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/jasmine-tea_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/jasmine-tea_-300x300.avif',
      'https://cavasmenu.us/wp-content/uploads/2026/01/jasmine-tea_-300x300.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/03/jasmine-tea_-300x300-1.avif'
    ],
    seoAlt: 'Jasmine Green Tea – CAVA naturally brewed organic green tea infused with delicate fragrant jasmine blossoms',
    menuIds: ['jasmine-green-tea-16oz', 'jasmine-green-tea-22oz']
  },
  {
    name: 'sweet-tea.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/sweet-tea_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/sweet-tea_-300x300.avif',
      'https://cavasmenu.us/wp-content/uploads/2026/01/sweet-tea_-300x300.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/03/sweet-tea_-300x300-1.avif'
    ],
    seoAlt: 'Sweet Tea – CAVA traditional Southern-style brewed black tea gently sweetened with pure cane sugar',
    menuIds: ['sweet-tea-16oz', 'sweet-tea-22oz', 'unsweetened-black-tea-16oz', 'unsweetened-black-tea-22oz']
  },
  {
    name: 'fountain-soda.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/mexicane-cola_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/mexicane-cola_-300x300.avif',
      'https://cavasmenu.us/wp-content/uploads/2026/01/mexicane-cola_-300x300.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/03/mexicane-cola_-300x300-2.avif'
    ],
    seoAlt: 'Maine Root Fountain Soda – CAVA fair trade fountain soda crafted with real organic cane sugar',
    menuIds: ['maine-root-soda-16oz', 'maine-root-soda-22oz', 'maine-root-diet-16oz', 'maine-root-diet-22oz']
  },
  {
    name: 'spindrift-lemon.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/spindrift-lemon_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/spindrift-lemon_-300x300.avif',
      'https://cavasmenu.us/wp-content/uploads/2026/01/spindrift-lemon_-300x300.avif'
    ],
    seoAlt: 'Spindrift Lemon Sparkling Water – CAVA crisp sparkling water flavored with real squeezed lemons',
    menuIds: ['spindrift-lemon', 'spindrift-grapefruit']
  },
  {
    name: 'spindrift-half-tea.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/spindrift-half-tea-half-lemon.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/spindrift-half-tea-half-lemon-300x300.avif',
      'https://cavasmenu.us/wp-content/uploads/2026/01/spindrift-half-tea-half-lemon-300x300.avif'
    ],
    seoAlt: 'Spindrift Half Tea & Half Lemon – CAVA sparkling water with brewed real black tea and fresh squeezed lemon',
    menuIds: ['spindrift-half-tea']
  },
  {
    name: 'open-water-still.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/still-water_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/still-water_-300x300.avif',
      'https://cavasmenu.us/wp-content/uploads/2026/01/still-water_-300x300.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/03/still-water_-300x300-1.avif'
    ],
    seoAlt: 'Open Water Still – CAVA purified ultra-refreshing still water packaged in eco-friendly aluminum bottle',
    menuIds: ['open-water-still']
  },
  {
    name: 'open-water-sparkling.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/sparkling-water_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/sparkling-water_-300x300.avif',
      'https://cavasmenu.us/wp-content/uploads/2026/01/sparkling-water_-300x300.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/03/sparkling-water_-300x300-1.avif'
    ],
    seoAlt: 'Open Water Sparkling – CAVA crisp effervescent sparkling water packaged in recyclable aluminum bottle',
    menuIds: ['open-water-sparkling']
  },
  {
    name: 'kids-apple-juice.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/apple-juice_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/apple-juice_-300x300.avif',
      'https://cavasmenu.us/wp-content/uploads/2026/01/apple-juice_-300x300.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/03/apple-juice_-300x300-1.avif'
    ],
    seoAlt: 'Honest Kids Organic Apple Juice – CAVA certified organic 100% apple juice pouch for kids',
    menuIds: ['honest-kids-apple-juice']
  },
  {
    name: 'kids-milk.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/milk_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/milk_-300x300.avif',
      'https://cavasmenu.us/wp-content/uploads/2026/01/milk_-300x300.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/03/milk_-300x300-1.avif'
    ],
    seoAlt: 'Organic Lowfat 1% Milk – CAVA healthy certified organic low-fat milk bottle for kids',
    menuIds: ['organic-1-percent-milk']
  },
  {
    name: 'kids-chocolate-milk.webp',
    destDir: 'public/images/menu',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/chocolate-milk_.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/chocolate-milk_-300x300.avif',
      'https://cavasmenu.us/wp-content/uploads/2026/01/chocolate-milk_-300x300.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/03/chocolate-milk_-300x300-1.avif'
    ],
    seoAlt: 'Organic Chocolate Milk – CAVA delicious certified organic lowfat chocolate milk bottle',
    menuIds: ['organic-chocolate-milk']
  },

  // --- Category Banners & Site Graphics ---
  {
    name: 'cava-drinks.webp',
    destDir: 'public/images',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/drinks.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/drinks-150x150.avif'
    ],
    seoAlt: 'CAVA Drinks Menu – Handcrafted juices, organic teas, and refreshing fountain sodas',
    menuIds: []
  },
  {
    name: 'cava-desserts.webp',
    destDir: 'public/images',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/desserts.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/desserts-150x150.avif'
    ],
    seoAlt: 'CAVA Desserts Menu – Freshly baked brownies, blondies, and artisan oat cookies',
    menuIds: []
  },
  {
    name: 'cava-sides.webp',
    destDir: 'public/images',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/sides.avif',
      'https://cavasmenu.com/wp-content/uploads/2026/01/sides-150x150.avif'
    ],
    seoAlt: 'CAVA Sides & Dips – Crispy pita chips, warm pita bread, and handcrafted Mediterranean dips',
    menuIds: []
  },
  {
    name: 'cava-catering-menu.webp',
    destDir: 'public/images',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/05/Cava-Catering-Menu-1024x683-1.webp',
      'https://cavasmenu.us/wp-content/uploads/2026/02/Cava-Catering-Menu-1024x683.webp'
    ],
    seoAlt: 'CAVA Catering Menu – Mediterranean catering trays, bowls, and pita packages for events',
    menuIds: []
  },
  {
    name: 'cava-locations.webp',
    destDir: 'public/images',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/cava-location-1024x683.webp',
      'https://cavasmenu.com/wp-content/uploads/2026/01/cava-location.webp'
    ],
    seoAlt: 'CAVA Locations & Hours – Find Mediterranean fast casual restaurant near you',
    menuIds: []
  },
  {
    name: 'cava-holiday-hours.webp',
    destDir: 'public/images',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/Cava-Holiday-Hours-1024x683.webp',
      'https://cavasmenu.com/wp-content/uploads/2026/01/Cava-Holiday-Hours.webp'
    ],
    seoAlt: 'CAVA Holiday Hours – Holiday opening and closing schedule for all locations',
    menuIds: []
  },
  {
    name: 'cava-hours.webp',
    destDir: 'public/images',
    urls: [
      'https://cavasmenu.com/wp-content/uploads/2026/01/Cava-Hours-1024x683.webp',
      'https://cavasmenu.com/wp-content/uploads/2026/01/Cava-Hours.webp'
    ],
    seoAlt: 'CAVA Daily Hours – Opening and closing operating hours by location',
    menuIds: []
  }
];

async function downloadBuffer(urls) {
  for (const u of urls) {
    try {
      const res = await fetch(u, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      if (res.ok) {
        return { buffer: Buffer.from(await res.arrayBuffer()), url: u };
      }
    } catch (e) {
      // try next url
    }
  }
  return null;
}

async function optimizeToWebpUnder100kb(inputBuffer, targetPath, isBanner = false) {
  const maxDimension = isBanner ? 1024 : 640;
  let quality = 85;

  let imgPipeline = sharp(inputBuffer)
    .resize({
      width: maxDimension,
      height: maxDimension,
      fit: sharp.fit.inside,
      withoutEnlargement: true
    });

  let outputBuffer = await imgPipeline.webp({ quality, effort: 6 }).toBuffer();

  // If size is >= 95KB (target is strictly < 100KB), incrementally compress
  while (outputBuffer.length > 95 * 1024 && quality > 40) {
    quality -= 5;
    outputBuffer = await sharp(inputBuffer)
      .resize({
        width: maxDimension,
        height: maxDimension,
        fit: sharp.fit.inside,
        withoutEnlargement: true
      })
      .webp({ quality, effort: 6 })
      .toBuffer();
  }

  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, outputBuffer);

  return {
    sizeBytes: outputBuffer.length,
    sizeKb: (outputBuffer.length / 1024).toFixed(1),
    quality
  };
}

async function run() {
  console.log(`Starting download & optimization of ${IMAGES_TO_PROCESS.length} images...`);

  const results = [];
  for (const item of IMAGES_TO_PROCESS) {
    const targetPath = path.resolve(process.cwd(), item.destDir, item.name);
    console.log(`\nFetching: ${item.name}...`);
    const dl = await downloadBuffer(item.urls);
    if (!dl) {
      console.error(`  ❌ Failed to download from all URLs:`, item.urls);
      results.push({ name: item.name, status: 'FAILED' });
      continue;
    }

    const isBanner = item.destDir === 'public/images';
    const opt = await optimizeToWebpUnder100kb(dl.buffer, targetPath, isBanner);
    console.log(`  ✅ Saved: ${targetPath}`);
    console.log(`     Source: ${dl.url}`);
    console.log(`     Size: ${opt.sizeKb} KB (Quality: ${opt.quality}) | Target < 100KB: ${parseFloat(opt.sizeKb) < 100}`);

    results.push({
      name: item.name,
      destPath: path.relative(process.cwd(), targetPath),
      sizeKb: opt.sizeKb,
      status: 'SUCCESS',
      sourceUrl: dl.url,
      seoAlt: item.seoAlt,
      menuIds: item.menuIds
    });
  }

  // Also scan all existing files in public/images/ and public/images/menu/
  // to ensure ANY existing image that is over 100KB gets optimized under 100KB!
  console.log('\n--- Checking existing images in public/images to ensure all are < 100KB ---');
  const checkDirs = [
    path.resolve(process.cwd(), 'public/images'),
    path.resolve(process.cwd(), 'public/images/menu')
  ];

  for (const dir of checkDirs) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) continue;
      
      const stats = fs.statSync(fullPath);
      const sizeKb = stats.size / 1024;
      if (sizeKb >= 100) {
        console.log(`Re-optimizing large existing file: ${file} (${sizeKb.toFixed(1)} KB)...`);
        const buf = fs.readFileSync(fullPath);
        
        let targetFilePath = fullPath;
        // If it's a jpg, convert to webp or compress
        if (file.endsWith('.jpg')) {
          targetFilePath = fullPath.replace(/\.jpg$/, '.webp');
        }

        const opt = await optimizeToWebpUnder100kb(buf, targetFilePath, false);
        console.log(`  ✅ Reduced to ${opt.sizeKb} KB`);
        if (targetFilePath !== fullPath) {
          fs.unlinkSync(fullPath);
        }
      } else {
        console.log(`Already under 100KB: ${file} (${sizeKb.toFixed(1)} KB)`);
      }
    }
  }

  fs.writeFileSync(
    path.resolve(process.cwd(), 'optimization_summary.json'),
    JSON.stringify(results, null, 2)
  );

  console.log('\nOptimization completed successfully!');
}

run().catch(console.error);
