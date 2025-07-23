const flavorlists = [
  {
    name: " Kiwi Lemon",
    color: "green",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Strawberry Watermelon",
    color: "red",
    rotation: "md:rotate-[8deg] rotate-0",
  },
  {
    name: "Mango Pineapple",
    color: "yellow",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Pack of 3",
    color: "combo",
    rotation: "md:rotate-[8deg] rotate-0",
  },
];

const nutrientLists = [
  { label: "Coconut Water", amount: "22%" },
  { label: "Vitamin D3", amount: "5mcg" },
  { label: "Creatine", amount: "250mg" },
  { label: "Ginseng Extract", amount: "50mg" },
  { label: "Taurine", amount: "500mg" },
  { label: "Glutamine", amount: "250mg" },
  { label: "L-Carnitine (LCLT)", amount: "250mg" },
  { label: "5-HTP", amount: "50mg" },
  { label: "Inositol", amount: "100mg" },
];


const cards = [
  {
    src: "/videos/f1.mp4",
    rotation: "rotate-z-[-10deg]",
    name: "Madison",
    img: "/images/p1.png",
    translation: "translate-y-[-5%]",
  },
  {
    src: "/videos/f2.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Alexander",
    img: "/images/p2.png",
  },
  {
    src: "/videos/f3.mp4",
    rotation: "rotate-z-[-4deg]",
    name: "Andrew",
    img: "/images/p3.png",
    translation: "translate-y-[-5%]",
  },
  {
    src: "/videos/f4.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Bryan",
    img: "/images/p4.png",
    translation: "translate-y-[5%]",
  },
  {
    src: "/videos/f5.mp4",
    rotation: "rotate-z-[-10deg]",
    name: "Chris",
    img: "/images/p5.png",
  },
  {
    src: "/videos/f6.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Devante",
    img: "/images/p6.png",
    translation: "translate-y-[5%]",
  },
  {
    src: "/videos/f7.mp4",
    rotation: "rotate-z-[-3deg]",
    name: "Melisa",
    img: "/images/p7.png",
    translation: "translate-y-[10%]",
  },
];


const products = [
  {
    id: 1,
    title: "Fokus Hydration - Strawberry Watermelon",
    price: 150,
    images: ["/images/product1.webp","/images/product11.webp", "/images/product12.webp", "/images/product1-alt2.webp"],
    description: "A refreshing drink that boosts focus and hydration with natural strawberry and watermelon flavor.",
  },
  {
    id: 2,
    title: "Fokus Hydration - Mango Pineapple",
    price: 150,
    images: ["/images/product2.webp", "/images/product1-alt1.webp", "/images/product1-alt2.webp"],
    description: "A refreshing drink that boosts focus and hydration with natural mango and pineapple flavor.",
  },
  {
    id: 3,
    title: "Fokus Hydration - Kiwi Lemon",
    price: 150,
    images: ["/images/product3.webp", "/images/product1-alt1.webp", "/images/product1-alt2.webp"],
    description: "A refreshing drink that boosts focus and hydration with kiwi and lemon essence.",
  },
  {
    id: 4,
    title: "Fokus Hydration Pack of 3",
    price: 450,
    images: ["/images/product4.webp", "/images/product1-alt1.webp", "/images/product1-alt2.webp"],
    description: "A hydration pack with all flavors to keep you refreshed all day long.",
  },
];

export { flavorlists, nutrientLists, cards, products };
