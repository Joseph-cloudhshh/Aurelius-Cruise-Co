export interface Ship {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  capacity: number
  yearBuilt: number
  length: string
  decks: number
  crew: number
  features: string[]
  amenities: {
    category: string
    items: string[]
  }[]
  cabinTypes: {
    name: string
    description: string
    size: string
    price: number
    features: string[]
  }[]
  diningVenues: {
    name: string
    description: string
    type: string
  }[]
}

export const ships: Ship[] = [
  {
    id: "aurora",
    name: "Aurora Majesty",
    tagline: "The Pinnacle of Ocean Luxury",
    description: "Our flagship vessel, the Aurora Majesty represents the ultimate in maritime excellence. Featuring the revolutionary Sky Dome observatory, 20 world-class dining venues, and the most spacious suites at sea, every moment aboard is designed to exceed expectations. Her elegant design harmoniously blends classic nautical heritage with cutting-edge innovation.",
    image: "/images/ship-aurora.jpg",
    capacity: 2850,
    yearBuilt: 2022,
    length: "1,188 feet",
    decks: 18,
    crew: 1400,
    features: ["Sky Dome Observatory", "Infinity Pool", "Michelin-Star Dining", "Spa Sanctuary", "Broadway Theater", "Casino Royale", "Art Gallery", "Rock Climbing Wall"],
    amenities: [
      {
        category: "Wellness & Relaxation",
        items: ["Full-service spa with ocean views", "Thermal suite with hydrotherapy", "Meditation garden", "Fitness center with personal trainers", "Yoga studio", "Beauty salon"],
      },
      {
        category: "Entertainment",
        items: ["Broadway-style theater (1,200 seats)", "Casino with poker room", "Jazz lounge", "Dance club", "Comedy club", "Movie theater"],
      },
      {
        category: "Recreation",
        items: ["3 swimming pools", "Water slides", "Mini golf", "Rock climbing wall", "Basketball court", "Jogging track"],
      },
    ],
    cabinTypes: [
      {
        name: "Interior Stateroom",
        description: "Comfortable and cozy with all essential amenities",
        size: "172 sq ft",
        price: 799,
        features: ["Queen bed", "En-suite bathroom", "Flat-screen TV", "Mini-refrigerator"],
      },
      {
        name: "Ocean View",
        description: "Wake up to stunning sea views through your porthole window",
        size: "185 sq ft",
        price: 1199,
        features: ["Queen bed", "Ocean view window", "Sitting area", "24-hour room service"],
      },
      {
        name: "Balcony Suite",
        description: "Private outdoor space to enjoy the ocean breeze",
        size: "245 sq ft",
        price: 1899,
        features: ["King bed", "Private balcony", "Luxury bathroom", "Priority boarding"],
      },
      {
        name: "Penthouse Suite",
        description: "The ultimate in luxury with panoramic views and butler service",
        size: "580 sq ft",
        price: 4999,
        features: ["King bed", "Living room", "Whirlpool tub", "Personal butler", "VIP lounge access"],
      },
    ],
    diningVenues: [
      { name: "The Grand Aurora", description: "Our signature 3-story main dining room with classic elegance", type: "Main Dining" },
      { name: "Sakura", description: "Authentic Japanese cuisine with teppanyaki and sushi bar", type: "Specialty" },
      { name: "La Stella", description: "Italian fine dining with handmade pasta", type: "Specialty" },
      { name: "The Steakhouse", description: "Prime cuts aged to perfection", type: "Specialty" },
      { name: "Ocean Grill", description: "Fresh seafood with ocean views", type: "Casual" },
      { name: "The Buffet World", description: "International cuisines from around the globe", type: "Buffet" },
    ],
  },
  {
    id: "celestial",
    name: "Celestial Dreams",
    tagline: "Where Every Moment Shines",
    description: "An intimate luxury experience unlike any other. The Celestial Dreams offers a more personal journey with spacious suites, a 1:1.5 guest-to-crew ratio, and personalized butler service for all suite guests. Her boutique atmosphere allows for deeper connections with destinations and fellow travelers.",
    image: "/images/ship-celestial.jpg",
    capacity: 2200,
    yearBuilt: 2020,
    length: "984 feet",
    decks: 15,
    crew: 1100,
    features: ["Crystal Atrium", "Private Cabanas", "Wine Cellar", "Art Gallery", "Library Lounge", "Observation Deck", "Piano Bar", "Culinary Center"],
    amenities: [
      {
        category: "Wellness & Relaxation",
        items: ["Balinese-inspired spa", "Salt room therapy", "Aromatherapy garden", "Pilates studio", "Lap pool", "Quiet retreat deck"],
      },
      {
        category: "Entertainment",
        items: ["Intimate theater (800 seats)", "Wine tasting cellar", "Jazz piano bar", "Stargazing lounge", "Library with rare books", "Lecture hall"],
      },
      {
        category: "Recreation",
        items: ["2 pools with retractable roof", "Private cabana rentals", "Croquet lawn", "Shuffleboard", "Art studio", "Culinary classes"],
      },
    ],
    cabinTypes: [
      {
        name: "Deluxe Stateroom",
        description: "Elegantly appointed with fine furnishings",
        size: "195 sq ft",
        price: 999,
        features: ["Queen bed", "En-suite marble bathroom", "Evening turndown", "Luxury linens"],
      },
      {
        name: "Veranda Stateroom",
        description: "Your private sanctuary with ocean views",
        size: "235 sq ft",
        price: 1499,
        features: ["King bed", "Private veranda", "Espresso machine", "Premium toiletries"],
      },
      {
        name: "Grand Suite",
        description: "Expansive living space with premium amenities",
        size: "450 sq ft",
        price: 3299,
        features: ["King bed", "Separate living area", "Walk-in closet", "Butler service"],
      },
      {
        name: "Owner's Suite",
        description: "The pinnacle of luxury living at sea",
        size: "1,200 sq ft",
        price: 8999,
        features: ["Master bedroom", "Dining room", "Private hot tub", "Personal chef available"],
      },
    ],
    diningVenues: [
      { name: "The Celestial Room", description: "Refined elegance under a ceiling of stars", type: "Main Dining" },
      { name: "Provence", description: "French cuisine with a modern twist", type: "Specialty" },
      { name: "Red Dragon", description: "Authentic Cantonese and Szechuan flavors", type: "Specialty" },
      { name: "The Grill", description: "American classics perfected", type: "Specialty" },
      { name: "Garden Café", description: "Fresh, healthy options all day", type: "Casual" },
    ],
  },
  {
    id: "imperial",
    name: "Imperial Odyssey",
    tagline: "Adventure Meets Elegance",
    description: "Our newest and most innovative vessel, the Imperial Odyssey is designed for the modern explorer. Featuring a state-of-the-art expedition center, helicopter pad for aerial excursions, and advanced stabilization technology, she ventures to destinations other ships simply cannot reach—all while maintaining the legendary Aurelius standard of luxury.",
    image: "/images/ship-imperial.jpg",
    capacity: 3100,
    yearBuilt: 2024,
    length: "1,248 feet",
    decks: 20,
    crew: 1550,
    features: ["Expedition Center", "Helicopter Pad", "Casino Royale", "Golf Simulator", "Virtual Reality Zone", "Ice Skating Rink", "Surf Simulator", "Go-Kart Track"],
    amenities: [
      {
        category: "Wellness & Relaxation",
        items: ["Multi-level spa complex", "Cryotherapy chamber", "Float therapy pods", "CrossFit gym", "Outdoor yoga deck", "Medi-spa treatments"],
      },
      {
        category: "Entertainment",
        items: ["360° rotating theater", "Casino with VIP room", "E-sports arena", "Virtual reality zone", "Escape room experiences", "Live music venues"],
      },
      {
        category: "Recreation",
        items: ["Wave pool with surf simulator", "Go-kart track", "Ice skating rink", "Multi-sport court", "Zip line", "Climbing adventure park"],
      },
    ],
    cabinTypes: [
      {
        name: "Explorer Stateroom",
        description: "Modern comfort for the adventurous spirit",
        size: "180 sq ft",
        price: 899,
        features: ["Queen bed", "Interactive TV", "USB charging throughout", "Adventure gear storage"],
      },
      {
        name: "Panorama Suite",
        description: "Floor-to-ceiling windows for maximum views",
        size: "280 sq ft",
        price: 1699,
        features: ["King bed", "Panoramic windows", "Rain shower", "Expedition binoculars"],
      },
      {
        name: "Expedition Suite",
        description: "For serious explorers with premium amenities",
        size: "520 sq ft",
        price: 3999,
        features: ["King bed", "Private deck", "Telescope", "Butler service", "Helicopter priority"],
      },
      {
        name: "Imperial Suite",
        description: "The ultimate adventure headquarters",
        size: "1,800 sq ft",
        price: 12999,
        features: ["2 bedrooms", "Private pool", "Personal expedition guide", "Helicopter excursions included"],
      },
    ],
    diningVenues: [
      { name: "Empire Restaurant", description: "Grand dining with a view of the bow", type: "Main Dining" },
      { name: "Explorers Club", description: "Global cuisine inspired by world adventures", type: "Specialty" },
      { name: "Teppanyaki", description: "Interactive Japanese dining experience", type: "Specialty" },
      { name: "The Smokehouse", description: "Texas-style BBQ and craft beers", type: "Specialty" },
      { name: "Marketplace", description: "Global food hall concept", type: "Casual" },
      { name: "The Pool Deck Grill", description: "Casual poolside dining", type: "Casual" },
    ],
  },
]

export function getShipById(id: string): Ship | undefined {
  return ships.find(ship => ship.id === id)
}
