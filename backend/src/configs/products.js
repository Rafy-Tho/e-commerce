// juice  -> 69952dd2fd10c3044b9859e7
// drink  -> 69952dd2fd10c3044b9859e8
// milk   -> 69952dd2fd10c3044b9859e9

import ENV from './env.js';

export const products = [
  // =========================
  // 🥤 COCA-COLA (5)
  // =========================
  {
    category: '69952dd2fd10c3044b9859e8',
    name: 'Coca-Cola Classic',
    brand: 'Coca-Cola',
    description: 'Original sparkling cola with a bold and refreshing taste.',
    price: 12,
    quantity: 120,
    image: `${ENV.URL}/coca-cola-1.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e8',
    name: 'Coca-Cola Zero Sugar',
    brand: 'Coca-Cola',
    description: 'Zero sugar cola with the same great Coca-Cola flavor.',
    price: 13,
    quantity: 110,
    image: `${ENV.URL}/coca-cola-2.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e8',
    name: 'Coca-Cola Vanilla',
    brand: 'Coca-Cola',
    description: 'Classic cola infused with smooth vanilla flavor.',
    price: 14,
    quantity: 100,
    image: `${ENV.URL}/coca-cola-3.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e8',
    name: 'Coca-Cola Cherry',
    brand: 'Coca-Cola',
    description: 'Sweet cherry twist blended with refreshing cola.',
    price: 14,
    quantity: 90,
    image: `${ENV.URL}/coca-cola-4.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e8',
    name: 'Coca-Cola Light',
    brand: 'Coca-Cola',
    description: 'Light cola drink with fewer calories and crisp taste.',
    price: 11,
    quantity: 95,
    image: `${ENV.URL}/coca-cola-5.jpg`,
  },

  // =========================
  // 🥛 MILK (5)
  // =========================
  {
    category: '69952dd2fd10c3044b9859e9',
    name: 'Fresh Farm Milk',
    brand: 'DairyPure',
    description: 'Pure and fresh whole milk from local farms.',
    price: 8,
    quantity: 150,
    image: `${ENV.URL}/     milk-1.avif`,
  },
  {
    category: '69952dd2fd10c3044b9859e9',
    name: 'Low Fat Milk',
    brand: 'DairyPure',
    description: 'Healthy low fat milk rich in calcium.',
    price: 7,
    quantity: 130,
    image: `${ENV.URL}/milk-2.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e9',
    name: 'Chocolate Milk',
    brand: 'DairyPure',
    description: 'Creamy milk blended with delicious chocolate flavor.',
    price: 9,
    quantity: 140,
    image: `${ENV.URL}/milk-3.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e9',
    name: 'Strawberry Milk',
    brand: 'DairyPure',
    description: 'Sweet strawberry flavored milk drink.',
    price: 9,
    quantity: 120,
    image: `${ENV.URL}/milk-4.png`,
  },
  {
    category: '69952dd2fd10c3044b9859e9',
    name: 'Organic Milk',
    brand: 'GreenFarm',
    description: 'Certified organic milk with natural goodness.',
    price: 10,
    quantity: 100,
    image: `${ENV.URL}/milk-5.png`,
  },

  // =========================
  // 🍎 APPLE JUICE (5)
  // =========================
  {
    category: '69952dd2fd10c3044b9859e7',
    name: 'Pure Apple Juice',
    brand: 'NatureSip',
    description: 'Freshly pressed apples with natural sweetness.',
    price: 10,
    quantity: 100,
    image: `${ENV.URL}/apple-juice-1.png`,
  },
  {
    category: '69952dd2fd10c3044b9859e7',
    name: 'Apple Juice Premium',
    brand: 'NatureSip',
    description: 'Premium quality apple juice with rich aroma.',
    price: 12,
    quantity: 90,
    image: `${ENV.URL}/apple-juice-2.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e7',
    name: 'Sparkling Apple Juice',
    brand: 'FreshWave',
    description: 'Lightly carbonated apple juice with crisp taste.',
    price: 13,
    quantity: 85,
    image: `${ENV.URL}/apple-juice-3.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e7',
    name: 'Apple Mango Blend',
    brand: 'FreshWave',
    description: 'Apple juice mixed with tropical mango flavor.',
    price: 14,
    quantity: 80,
    image: `${ENV.URL}/apple-juice-4.png`,
  },
  {
    category: '69952dd2fd10c3044b9859e7',
    name: 'Organic Apple Juice',
    brand: 'GreenSip',
    description: '100% organic apples with no added sugar.',
    price: 15,
    quantity: 70,
    image: `${ENV.URL}/apple-juice-5.jpg`,
  },

  // =========================
  // 🍊 ORANGE JUICE (5)
  // =========================
  {
    category: '69952dd2fd10c3044b9859e7',
    name: 'Fresh Orange Juice',
    brand: 'CitrusLife',
    description: 'Refreshing orange juice full of vitamin C.',
    price: 11,
    quantity: 120,
    image: `${ENV.URL}/orange-juice-1.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e7',
    name: 'Orange Juice Premium',
    brand: 'CitrusLife',
    description: 'Premium squeezed oranges with rich flavor.',
    price: 13,
    quantity: 100,
    image: `${ENV.URL}/orange-juice-2.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e7',
    name: 'Orange Mango Juice',
    brand: 'SunSip',
    description: 'Tropical blend of orange and mango.',
    price: 14,
    quantity: 95,
    image: `${ENV.URL}/orange-juice-3.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e7',
    name: 'Orange Pineapple Juice',
    brand: 'SunSip',
    description: 'Sweet pineapple mixed with fresh oranges.',
    price: 14,
    quantity: 90,
    image: `${ENV.URL}/orange-juice-4.png`,
  },
  {
    category: '69952dd2fd10c3044b9859e7',
    name: 'Organic Orange Juice',
    brand: 'GreenSip',
    description: 'Organic oranges with no artificial flavors.',
    price: 16,
    quantity: 75,
    image: `${ENV.URL}/orange-juice-5.png`,
  },

  // =========================
  // 🍋 LEMON JUICE (5)
  // =========================
  {
    category: '69952dd2fd10c3044b9859e7',
    name: 'Classic Lemon Juice',
    brand: 'CitrusFresh',
    description: 'Tangy and refreshing lemon juice.',
    price: 9,
    quantity: 110,
    image: `${ENV.URL}/lemon-juice-1.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e7',
    name: 'Honey Lemon Drink',
    brand: 'CitrusFresh',
    description: 'Sweet honey blended with fresh lemon.',
    price: 10,
    quantity: 100,
    image: `${ENV.URL}/lemon-juice-2.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e7',
    name: 'Sparkling Lemon',
    brand: 'FreshFizz',
    description: 'Light sparkling lemon refreshment.',
    price: 11,
    quantity: 90,
    image: `${ENV.URL}/lemon-juice-3.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e7',
    name: 'Lemon Mint Cooler',
    brand: 'FreshFizz',
    description: 'Cool lemon drink infused with mint leaves.',
    price: 12,
    quantity: 85,
    image: `${ENV.URL}/lemon-juice-4.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e7',
    name: 'Organic Lemon Juice',
    brand: 'GreenSip',
    description: 'Pure organic lemons with natural zest.',
    price: 13,
    quantity: 80,
    image: `${ENV.URL}/lemon-juice-5.jpg`,
  },

  // =========================
  // 🍵 GREEN TEA (5)
  // =========================
  {
    category: '69952dd2fd10c3044b9859e8',
    name: 'Classic Green Tea',
    brand: 'TeaLife',
    description: 'Refreshing green tea with natural antioxidants.',
    price: 7,
    quantity: 150,
    image: `${ENV.URL}/green-tea-1.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e8',
    name: 'Lemon Green Tea',
    brand: 'TeaLife',
    description: 'Green tea infused with fresh lemon flavor.',
    price: 8,
    quantity: 130,
    image: `${ENV.URL}/green-tea-2.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e8',
    name: 'Honey Green Tea',
    brand: 'HealthySip',
    description: 'Smooth green tea with a touch of honey.',
    price: 8,
    quantity: 120,
    image: `${ENV.URL}/green-tea-3.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e8',
    name: 'Mint Green Tea',
    brand: 'HealthySip',
    description: 'Cool mint blended with light green tea.',
    price: 9,
    quantity: 110,
    image: `${ENV.URL}/green-tea-4.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e8',
    name: 'Organic Green Tea',
    brand: 'PureLeaf',
    description: 'Organic green tea with clean natural taste.',
    price: 10,
    quantity: 100,
    image: `${ENV.URL}/green-tea-5.jpg`,
  },

  // =========================
  // 🥤 SOFT DRINK (5)
  // =========================
  {
    category: '69952dd2fd10c3044b9859e8',
    name: 'Cola Blast',
    brand: 'FizzUp',
    description: 'Strong sparkling cola for instant refreshment.',
    price: 9,
    quantity: 140,
    image: `${ENV.URL}/soft-drink-1.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e8',
    name: 'Orange Soda',
    brand: 'FizzUp',
    description: 'Sweet orange flavored carbonated drink.',
    price: 9,
    quantity: 130,
    image: `${ENV.URL}/soft-drink-2.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e8',
    name: 'Grape Soda',
    brand: 'FizzUp',
    description: 'Rich grape flavor with bubbly texture.',
    price: 10,
    quantity: 120,
    image: `${ENV.URL}/soft-drink-3.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e8',
    name: 'Lemon Soda',
    brand: 'FizzUp',
    description: 'Zesty lemon soda with sparkling bubbles.',
    price: 9,
    quantity: 110,
    image: `${ENV.URL}/soft-drink-4.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e8',
    name: 'Berry Soda',
    brand: 'FizzUp',
    description: 'Mixed berry carbonated soft drink.',
    price: 10,
    quantity: 100,
    image: `${ENV.URL}/soft-drink-5.jpg`,
  },

  // =========================
  // ⚡ ENERGY DRINK (5)
  // =========================
  {
    category: '69952dd2fd10c3044b9859e8',
    name: 'Energy Boost',
    brand: 'PowerMax',
    description: 'High energy drink for instant power and focus.',
    price: 15,
    quantity: 90,
    image: `${ENV.URL}/energy-drink-1.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e8',
    name: 'Power Energy Zero',
    brand: 'PowerMax',
    description: 'Zero sugar energy drink with strong kick.',
    price: 16,
    quantity: 85,
    image: `${ENV.URL}/energy-drink-2.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e8',
    name: 'Tropical Energy',
    brand: 'Volt',
    description: 'Tropical fruit flavored energy drink.',
    price: 17,
    quantity: 80,
    image: `${ENV.URL}/energy-drink-3.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e8',
    name: 'Berry Energy Rush',
    brand: 'Volt',
    description: 'Berry flavored energy boost drink.',
    price: 17,
    quantity: 75,
    image: `${ENV.URL}/energy-drink-4.jpg`,
  },
  {
    category: '69952dd2fd10c3044b9859e8',
    name: 'Extreme Energy Max',
    brand: 'Volt',
    description: 'Maximum strength energy drink for active lifestyle.',
    price: 18,
    quantity: 70,
    image: `${ENV.URL}/energy-drink-5.jpg`,
  },
];
