import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Strawberry Watermelon",
    price: "₹150",
    image: "/images/product1.webp",
    slug: "focus-elixir",
    bgStriped:
      "repeating-linear-gradient(135deg, rgba(254,62,52,0.3) 0 50px, rgba(255,255,255,0.2) 50px 100px)", // red stripes
    shadowColor: "rgba(255, 182, 193, 0.7)",
  },
  {
    id: 2,
    title: "Mango Pineapple",
    price: "₹150",
    image: "/images/product2.webp",
    slug: "hydration-booster",
    bgStriped:
      "repeating-linear-gradient(135deg, rgba(254,221,76,0.3) 0 50px, rgba(255,255,255,0.2) 50px 100px)", // yellow stripes
    shadowColor: "rgba(255, 255, 153, 0.7)",
  },
  {
    id: 3,
    title: "Kiwi Lemon",
    price: "₹150",
    image: "/images/product3.webp",
    slug: "mind-fuel-capsules",
    bgStriped:
      "repeating-linear-gradient(135deg, rgba(158,218,98,0.3) 0 50px, rgba(255,255,255,0.2) 50px 100px)", // green stripes
    shadowColor: "rgba(144, 238, 144, 0.7)",
  },
  {
    id: 4,
    title: "Combo Pack (All 3)",
    price: "₹450",
    image: "/images/product5.webp",
    slug: "combo-pack",
    isCombo: true,
     bgStriped:
      `repeating-linear-gradient(
        135deg,
        rgba(254, 221, 76, 0.3) 0 40px,
        rgba(255, 165, 0, 0.3) 40px 80px,
        rgba(255, 99, 71, 0.3) 80px 120px,
        rgba(255, 255, 255, 0.2) 120px 160px,
        rgba(70, 130, 180, 0.3) 160px 200px
      )`,
    shadowColor: "rgba(255, 165, 0, 0.7)",
  },
];

const glitterAnimationStyle = `
@keyframes glitter {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
`;

export default function ProductPage() {
  const [hoveredId, setHoveredId] = useState(null);

  const getBackgroundStyle = () => {
    if (!hoveredId) {
      return {
        background:
          "repeating-linear-gradient(135deg, rgba(160,196,255,0.2) 0 50px, rgba(248,251,255,0.3) 50px 100px)",
        transition: "background 0.5s ease",
      };
    }
    const product = products.find((p) => p.id === hoveredId);
    if (!product) return {};

    return {
      background: product.bgStriped,
      transition: "background 0.5s ease",
    };
  };

  return (
    <>
      <style>{glitterAnimationStyle}</style>
      <div
        className="min-h-screen py-20 px-6 md:px-16 transition-colors duration-500"
        style={{
          ...getBackgroundStyle(),
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16 px-4 md:px-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 py-6">
            Explore Our Products🔎
          </h1>
          <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
            Premium blends designed to boost your focus, energy, and hydration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {products.map((product, index) => {
            const isEven = product.id % 2 === 0;

            return (
              <motion.div
                key={product.id}
                className="bg-white p-4 rounded-2xl transition-all duration-300 shadow-md"
                whileHover={{
                  scale: 1.07,
                  rotate: isEven ? 5 : -5,
                }}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  boxShadow:
                    hoveredId === product.id
                      ? `0 10px 25px ${product.shadowColor}`
                      : "0 4px 10px rgba(0,0,0,0.1)",
                  borderWidth: hoveredId === product.id ? "5px" : "2px",
                  borderStyle: "solid",
                  borderImageSlice: 1,
                  borderImageSource:
                    hoveredId === product.id
                      ? "linear-gradient(270deg, #ff6f61, #f6d365, #a8e063, #56ab2f, #ff6f61)"
                      : "transparent",
                  animation:
                    hoveredId === product.id ? "glitter 3s linear infinite" : "none",
                }}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.15 }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-cover rounded-xl mb-4 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-700 mb-4 font-semibold">{product.price}</p>
                <Link
                  to={`/product/${product.id}`}
                  className="inline-block text-sm font-medium text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  View Details
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
