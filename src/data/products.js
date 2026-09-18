export const products = [
  // CATEGORY 1 — PICKLES
  {
    id: 1,
    slug: "mango-pickle",
    name: "Mango Pickle",
    category: "pickles",
    categoryName: "Pickles",
    image: "/images/products/mango-pickel.jpg",
    images: [
      "/images/products/mango-pickel.jpg"
    ],
    shortDescription: "A traditional Andhra-style spicy cut mango pickle crafted with premium raw mangoes.",
    description: "Varahi Foods Mango Pickle is handcrafted following generations-old Andhra recipes. Made from crisp, hand-picked raw mangoes, freshly ground red chilli, mustard powder, and sesame oil. Every spoonful brings authentic tanginess, warmth, and nostalgic home flavour to your rice and ghee.",
    ingredients: [
      "Raw Mango Pieces",
      "Guntur Red Chilli Powder",
      "Mustard Powder",
      "Fenugreek Seeds",
      "Iodised Salt",
      "Cold-Pressed Sesame Oil"
    ],
    variants: [
      { weight: "250g", price: 149 },
      { weight: "500g", price: 249 },
      { weight: "1kg", price: 449 }
    ],
    rating: 4.8,
    reviewCount: 38,
    bestseller: true,
    newArrival: false,
    storage: "Store in a cool, dry place. Use a dry spoon for serving.",
    shelfLife: "9 Months"
  },
  {
    id: 2,
    slug: "gongura-pickle",
    name: "Gongura Pickle",
    category: "pickles",
    categoryName: "Pickles",
    image: "/images/products/gongura-pickle.jpg",
    images: [
      "/images/products/gongura-pickle.jpg"
    ],
    shortDescription: "Iconic Andhra Sorrel leaves pickle simmered with red chillies and garlic.",
    description: "Known as the pride of Andhra cuisine, Varahi Foods Gongura Pickle is made from fresh red sorrel leaves sautéed with garlic, cumin, and aromatic spices. Its rich, tangy, and earthy flavor elevates hot steamed rice and biryani.",
    ingredients: [
      "Fresh Gongura (Sorrel) Leaves",
      "Garlic Cloves",
      "Red Chilli Powder",
      "Cumin Seeds",
      "Corriander Powder",
      "Groundnut Oil",
      "Salt"
    ],
    variants: [
      { weight: "250g", price: 159 },
      { weight: "500g", price: 269 },
      { weight: "1kg", price: 479 }
    ],
    rating: 4.9,
    reviewCount: 42,
    bestseller: true,
    newArrival: false,
    storage: "Store in an airtight container away from direct sunlight.",
    shelfLife: "6 Months"
  },
  {
    id: 3,
    slug: "tomato-pickle",
    name: "Tomato Pickle",
    category: "pickles",
    categoryName: "Pickles",
    image: "/images/products/tomato-pickel.jpg",
    images: [
      "/images/products/tomato-pickel.jpg"
    ],
    shortDescription: "Sun-dried farm tomatoes blended with tamarind, garlic, and traditional spices.",
    description: "Made from juicy, sun-dried ripe tomatoes slow-cooked with tamarind pulp, mustard, and garlic temperings. Varahi Tomato Pickle has a perfectly balanced sweet, spicy, and tangy notes that complement idli, dosa, parathas, and rice.",
    ingredients: [
      "Ripe Farm Tomatoes",
      "Tamarind Extract",
      "Garlic",
      "Mustard Seeds",
      "Red Chilli Powder",
      "Sesame Oil",
      "Himalayan Salt"
    ],
    variants: [
      { weight: "250g", price: 139 },
      { weight: "500g", price: 239 },
      { weight: "1kg", price: 429 }
    ],
    rating: 4.7,
    reviewCount: 29,
    bestseller: false,
    newArrival: true,
    storage: "Refrigerate after opening for extended freshness.",
    shelfLife: "6 Months"
  },
  {
    id: 4,
    slug: "lemon-pickle",
    name: "Lemon Pickle",
    category: "pickles",
    categoryName: "Pickles",
    image: "/images/products/lemon-pickel.jpg",
    images: [
      "/images/products/lemon-pickel.jpg"
    ],
    shortDescription: "Tangy, juicy lemons cured in spiced brine and mustard oil.",
    description: "Carefully cured thin-skinned lemons spiced with turmeric, red chilli, and roasted asafoetida. Varahi Lemon Pickle gets better with age, softening into a delicious zest that aids digestion and pairs beautifully with curd rice.",
    ingredients: [
      "Fresh Farm Lemons",
      "Asafoetida (Hing)",
      "Turmeric Powder",
      "Red Chilli Powder",
      "Mustard Oil",
      "Rock Salt"
    ],
    variants: [
      { weight: "250g", price: 149 },
      { weight: "500g", price: 249 },
      { weight: "1kg", price: 449 }
    ],
    rating: 4.8,
    reviewCount: 31,
    bestseller: false,
    newArrival: false,
    storage: "Store in a cool dry place.",
    shelfLife: "12 Months"
  },

  // CATEGORY 2 — TRADITIONAL SWEETS
  {
    id: 5,
    slug: "ariselu",
    name: "Ariselu",
    category: "sweets",
    categoryName: "Traditional Sweets",
    image: "/images/products/ariselu.jpg",
    images: [
      "/images/products/ariselu.jpg"
    ],
    shortDescription: "Authentic festival delicacy prepared with fresh rice flour, jaggery, and sesame.",
    description: "Ariselu is a cherished traditional sweet prepared during harvest festivals in Andhra Pradesh. Soft yet crispy at the edges, made with freshly milled rice flour, organic bellam (jaggery), aromatic cardamom, and coated with sesame seeds.",
    ingredients: [
      "Soaked & Ground Rice Flour",
      "Organic Jaggery (Bellam)",
      "Pure Desi Ghee",
      "White Sesame Seeds",
      "Green Cardamom Powder"
    ],
    variants: [
      { weight: "250g", price: 199 },
      { weight: "500g", price: 349 },
      { weight: "1kg", price: 649 }
    ],
    rating: 4.9,
    reviewCount: 54,
    bestseller: true,
    newArrival: false,
    storage: "Keep in a clean dry airtight container.",
    shelfLife: "30 Days"
  },
  {
    id: 6,
    slug: "bellam-gavvalu",
    name: "Bellam Gavvalu",
    category: "sweets",
    categoryName: "Traditional Sweets",
    image: "/images/products/bellam-gavvalu.jpg",
    images: [
      "/images/products/bellam-gavvalu.jpg"
    ],
    shortDescription: "Crunchy shell-shaped sweet bites dipped in cardamom-infused jaggery syrup.",
    description: "Gavvalu (meaning shell shapes) are crunchy fried dough shells soaked in rich, glossy jaggery syrup with subtle notes of cardamom and nutmeg. A delightful traditional crunch loved across all age groups.",
    ingredients: [
      "Whole Wheat Flour",
      "All-Purpose Flour",
      "Pure Jaggery Syrup",
      "Cardamom",
      "Refined Vegetable Oil / Ghee"
    ],
    variants: [
      { weight: "250g", price: 179 },
      { weight: "500g", price: 299 },
      { weight: "1kg", price: 549 }
    ],
    rating: 4.8,
    reviewCount: 36,
    bestseller: true,
    newArrival: false,
    storage: "Store at room temperature in an airtight jar.",
    shelfLife: "45 Days"
  },
  {
    id: 7,
    slug: "sunnundalu",
    name: "Sunnundalu",
    category: "sweets",
    categoryName: "Traditional Sweets",
    image: "/images/products/sunnundalu.jpeg",
    images: [
      "/images/products/sunnundalu.jpeg"
    ],
    shortDescription: "Nutritious roasted urad dal laddus bound with melted ghee and jaggery.",
    description: "Varahi Sunnundalu is made by slow-roasting whole urad dal (black gram) to golden perfection, grinding it into a fine flour, and blending with dark organic jaggery and generous amounts of pure cow ghee. Rich in protein and melt-in-the-mouth taste.",
    ingredients: [
      "Roasted Urad Dal (Black Gram)",
      "Pure Cow Ghee",
      "Organic Jaggery",
      "Cardamom Powder"
    ],
    variants: [
      { weight: "250g", price: 199 },
      { weight: "500g", price: 349 },
      { weight: "1kg", price: 649 }
    ],
    rating: 4.8,
    reviewCount: 47,
    bestseller: true,
    newArrival: false,
    storage: "Store in a cool dry place.",
    shelfLife: "60 Days"
  },
  {
    id: 8,
    slug: "boondi-laddu",
    name: "Boondi Laddu",
    category: "sweets",
    categoryName: "Traditional Sweets",
    image: "/images/products/boondi-laddu.jpg",
    images: [
      "/images/products/boondi-laddu.jpg"
    ],
    shortDescription: "Golden chickpea pearls soaked in aromatic sugar syrup with cashew nuts & raisins.",
    description: "Soft, juicy boondi laddus crafted from fine besan (chickpea flour), deep-fried into golden beads, soaked in fragrant sugar syrup, and enriched with roasted cashews, raisins, and cloves.",
    ingredients: [
      "Gram Flour (Besan)",
      "Sugar Syrup",
      "Pure Ghee",
      "Cashews",
      "Raisins",
      "Cloves & Cardamom"
    ],
    variants: [
      { weight: "250g", price: 179 },
      { weight: "500g", price: 299 },
      { weight: "1kg", price: 549 }
    ],
    rating: 4.7,
    reviewCount: 33,
    bestseller: false,
    newArrival: true,
    storage: "Store in a dry airtight container.",
    shelfLife: "20 Days"
  },

  // CATEGORY 3 — SNACKS
  {
    id: 9,
    slug: "murukku",
    name: "Murukku",
    category: "snacks",
    categoryName: "Snacks",
    image: "/images/products/murukkulu.jpg",
    images: [
      "/images/products/murukkulu.jpg"
    ],
    shortDescription: "Crispy spiral savouries seasoned with cumin, ajwain, and sesame seeds.",
    description: "Classic South Indian spiral crunchies made with fine rice flour and urad dal flour. Spiced with ajwain (carom seeds) and white sesame, fried to a crisp golden finish. The ultimate accompaniment to evening tea.",
    ingredients: [
      "Fine Rice Flour",
      "Urad Dal Flour",
      "Cumin & Ajwain Seeds",
      "Sesame Seeds",
      "Vegetable Oil",
      "Salt"
    ],
    variants: [
      { weight: "250g", price: 149 },
      { weight: "500g", price: 249 },
      { weight: "1kg", price: 449 }
    ],
    rating: 4.8,
    reviewCount: 41,
    bestseller: true,
    newArrival: false,
    storage: "Store in an airtight container to preserve crispiness.",
    shelfLife: "45 Days"
  },
  {
    id: 10,
    slug: "chekkalu",
    name: "Chekkalu",
    category: "snacks",
    categoryName: "Snacks",
    image: "/images/products/chekkalu.jpg",
    images: [
      "/images/products/chekkalu.jpg"
    ],
    shortDescription: "Flat rice crackers studded with chana dal, curry leaves, and green chillies.",
    description: "Traditional Andhra Pappu Chekkalu (rice disk crackers). Made from rice dough mixed with soaked chana dal, fresh green chillies, ginger, and crispy curry leaves. Deep-fried until crunchy and fragrant.",
    ingredients: [
      "Rice Flour",
      "Chana Dal (Bengal Gram)",
      "Green Chillies",
      "Ginger",
      "Curry Leaves",
      "Asafoetida",
      "Vegetable Oil",
      "Salt"
    ],
    variants: [
      { weight: "250g", price: 149 },
      { weight: "500g", price: 249 },
      { weight: "1kg", price: 449 }
    ],
    rating: 4.7,
    reviewCount: 28,
    bestseller: false,
    newArrival: false,
    storage: "Keep away from moisture in a closed tin.",
    shelfLife: "45 Days"
  },
  {
    id: 11,
    slug: "traditional-mixture",
    name: "Traditional Mixture",
    category: "snacks",
    categoryName: "Snacks",
    image: "/images/products/mixture.webp",
    images: [
      "/images/products/mixture.webp"
    ],
    shortDescription: "A savoury blend of crunchy sev, roasted peanuts, fried dal, and curry leaves.",
    description: "Varahi Special Hot Mixture is a classic savory medley combining thin chickpea strands, boondi, crunchy fried peanuts, roasted chana dal, and garlic-infused curry leaves tempered with mild chilli spice.",
    ingredients: [
      "Gram Flour (Besan)",
      "Peanuts",
      "Roasted Chana Dal",
      "Poha (Flattened Rice)",
      "Curry Leaves",
      "Red Chilli Powder",
      "Garlic Powder",
      "Oil & Salt"
    ],
    variants: [
      { weight: "250g", price: 129 },
      { weight: "500g", price: 219 },
      { weight: "1kg", price: 399 }
    ],
    rating: 4.8,
    reviewCount: 39,
    bestseller: true,
    newArrival: false,
    storage: "Store in a sealed airtight jar.",
    shelfLife: "60 Days"
  },
  {
    id: 12,
    slug: "karapusa",
    name: "Karapusa",
    category: "snacks",
    categoryName: "Snacks",
    image: "/images/products/karapusa.jpeg",
    images: [
      "/images/products/karapusa.jpeg"
    ],
    shortDescription: "Ultra-fine, melt-in-mouth spicy chickpea flour noodles with ajwain flavor.",
    description: "Light, crispy, thin strands of spiced gram flour noodles seasoned with thymol (vaamu / ajwain). Easy on the palate and addictive as a tea-time snack or topping for chats.",
    ingredients: [
      "Besan (Gram Flour)",
      "Ajwain (Vamu)",
      "Red Chilli Powder",
      "Refined Oil",
      "Salt"
    ],
    variants: [
      { weight: "250g", price: 139 },
      { weight: "500g", price: 229 },
      { weight: "1kg", price: 419 }
    ],
    rating: 4.7,
    reviewCount: 26,
    bestseller: false,
    newArrival: true,
    storage: "Store in a dry airtight vessel.",
    shelfLife: "45 Days"
  },

  // CATEGORY 4 — POWDERS & SPICES
  {
    id: 13,
    slug: "idli-karam",
    name: "Idli Karam",
    category: "powders",
    categoryName: "Powders & Spices",
    image: "/images/products/idly-karam.webp",
    images: [
      "/images/products/idly-karam.webp"
    ],
    shortDescription: "Coarsely ground spice mix of roasted lentils, garlic, and dried red chillies.",
    description: "Popularly known as Gunpowder or Idli podi, Varahi Idli Karam is handcrafted by roasting chana dal, urad dal, dried red chillies, garlic cloves, and cumin. Mix with hot ghee or sesame oil and serve with soft idlis or dosas.",
    ingredients: [
      "Chana Dal",
      "Urad Dal",
      "Red Chillies",
      "Garlic Cloves",
      "Cumin Seeds",
      "Asafoetida",
      "Salt"
    ],
    variants: [
      { weight: "250g", price: 129 },
      { weight: "500g", price: 219 },
      { weight: "1kg", price: 399 }
    ],
    rating: 4.8,
    reviewCount: 50,
    bestseller: true,
    newArrival: false,
    storage: "Store in a moisture-free glass container.",
    shelfLife: "6 Months"
  },
  {
    id: 14,
    slug: "peanut-powder",
    name: "Peanut Powder",
    category: "powders",
    categoryName: "Powders & Spices",
    image: "/images/products/peanut-power.avif",
    images: [
      "/images/products/peanut-power.avif"
    ],
    shortDescription: "Slow-roasted peanuts ground with red chilli, garlic, and spices (Palli Karam).",
    description: "Varahi Peanut Karam Podi is made from slow-roasted premium groundnuts blended with garlic, red chillies, and cumin. Adds a nutty, savory punch when mixed with hot rice & ghee or sprinkled over stir-fried vegetables.",
    ingredients: [
      "Roasted Peanuts (Pallilu)",
      "Red Chilli Powder",
      "Garlic",
      "Cumin",
      "Salt"
    ],
    variants: [
      { weight: "250g", price: 139 },
      { weight: "500g", price: 229 },
      { weight: "1kg", price: 419 }
    ],
    rating: 4.8,
    reviewCount: 37,
    bestseller: false,
    newArrival: true,
    storage: "Keep in a cool dry airtight jar.",
    shelfLife: "4 Months"
  },
  {
    id: 15,
    slug: "curry-leaf-powder",
    name: "Curry Leaf Powder",
    category: "powders",
    categoryName: "Powders & Spices",
    image: "/images/products/curry-leaf-power.jpg",
    images: [
      "/images/products/curry-leaf-power.jpg"
    ],
    shortDescription: "Aromatic Karivepaku Podi made with sun-dried curry leaves and roasted legumes.",
    description: "Nutritious and flavorful Karivepaku Karam Podi. Made from fresh, dark green curry leaves gently dried and roasted with lentils, coriander seeds, and pepper. Rich in iron and herbal aroma.",
    ingredients: [
      "Fresh Curry Leaves (Karivepaku)",
      "Bengal Gram",
      "Black Gram",
      "Pepper & Cumin",
      "Red Chilli",
      "Salt"
    ],
    variants: [
      { weight: "250g", price: 149 },
      { weight: "500g", price: 249 },
      { weight: "1kg", price: 449 }
    ],
    rating: 4.7,
    reviewCount: 30,
    bestseller: false,
    newArrival: false,
    storage: "Store away from humidity in a dry container.",
    shelfLife: "6 Months"
  },
  {
    id: 16,
    slug: "sambar-powder",
    name: "Sambar Powder",
    category: "powders",
    categoryName: "Powders & Spices",
    image: "/images/products/sambar-power.jpg",
    images: [
      "/images/products/sambar-power.jpg"
    ],
    shortDescription: "Authentic South Indian aromatic spice blend for rich, golden home-cooked sambar.",
    description: "Varahi Sambar Powder is an authentic blend of roasted coriander seeds, cumin, fenugreek, red chillies, turmeric, and asafoetida. Gives your sambar a rich color, thick texture, and fragrant hotel-style aroma.",
    ingredients: [
      "Coriander Seeds",
      "Red Chillies",
      "Cumin Seeds",
      "Fenugreek (Methi)",
      "Turmeric",
      "Asafoetida",
      "Toor Dal"
    ],
    variants: [
      { weight: "250g", price: 129 },
      { weight: "500g", price: 219 },
      { weight: "1kg", price: 399 }
    ],
    rating: 4.8,
    reviewCount: 35,
    bestseller: true,
    newArrival: false,
    storage: "Store in an airtight jar in a cool place.",
    shelfLife: "9 Months"
  }
];
