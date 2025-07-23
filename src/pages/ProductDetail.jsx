import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart } from "lucide-react";
import confetti from "canvas-confetti"; // ← Import here

const products = [
  {
    id: 1,
    title: "Fokus Hydration - Strawberry Watermelon",
    price: 150,
    images: [
      "/images/product1.webp",
      "/images/product11.webp",
      "/images/product12.webp",
      "/images/product13.webp",
    ],
    description:
      "A refreshing drink that boosts focus and hydration with natural strawberry and watermelon flavor.",
    backContent: {
      text: (
  <div>
    <p>
      Strawberry Watermelon is a refreshing mix of sweet and tangy flavors, perfect for hydration during workouts or hot days. Fortified with electrolytes and no added sugar.
    </p>
    <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", listStyleType: "disc" }}>
      <li>🥥 <strong>Coconut Water</strong> – Natural electrolytes for hydration.</li>
      <li>❌ <strong>Zero Sugar</strong> – Light and calorie-free.</li>
      <li>☀️ <strong>Vitamin D3</strong> – Boosts immunity and mood.</li>
      <li>⚡ <strong>Taurine</strong> – Enhances energy and focus.</li>
      <li>🌿 <strong>Ginseng & Ginkgo Biloba</strong> – Support endurance and cognition.</li>
      <li>💪 <strong>Creatine & Glutamine</strong> – Aid muscle recovery.</li>
      <li>🔥 <strong>L-Carnitine L-Tartrate</strong> – Converts fat into energy.</li>
      <li>🧠 <strong>5-HTP & Inositol</strong> – Help with mental clarity.</li>
    </ul>
  </div>
),


      image: "/images/product14.webp",
    },
  },
  {
    id: 2,
    title: "Fokus Hydration - Mango Pineapple",
    price: 150,
    images: [
      "/images/product2.webp",
      "/images/product21.webp",
      "/images/product22.webp",
      "/images/product23.webp",
    ],
    description:
      "A refreshing drink that boosts focus and hydration with natural mango and pineapple flavor.",
    backContent: {
      text: (
  <div>
    <p>
      Mango Pineapple delivers tropical goodness with every sip. Designed for those who want a delicious way to stay energized and focused throughout the day.
    </p>
    <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", listStyleType: "disc" }}>
      <li>🥭🍍 <strong>Tropical Flavors</strong> – Refreshing mango and pineapple blend for a tasty hydration boost.</li>
      <li>⚡ <strong>Energy Support</strong> – Includes Taurine to keep you energized and active.</li>
      <li>🧠 <strong>Mental Focus</strong> – Ginseng and Ginkgo Biloba help sharpen your mind.</li>
      <li>💪 <strong>Muscle Recovery</strong> – Contains Creatine and Glutamine for better recovery post-workout.</li>
      <li>🍃 <strong>Natural Electrolytes</strong> – Coconut water helps maintain optimal hydration levels.</li>
      <li>💧 <strong>Zero Sugar</strong> – Sweetened with sucralose to keep calories low.</li>
      <li>🌿 <strong>Calm & Clarity</strong> – 5-HTP and Inositol to support mood and mental clarity.</li>
      <li>🔥 <strong>Fat Metabolism</strong> – L-Carnitine L-Tartrate aids in converting fat into energy.</li>
    </ul>
  </div>
),

      image: "/images/product24.webp",
    },
  },
  {
    id: 3,
    title: "Fokus Hydration - Kiwi Lemon",
    price: 150,
    images: [
      "/images/product3.webp",
      "/images/product31.jpg",
      "/images/product32.webp",
      "/images/product33.jpg",
    ],
    description:
      "A refreshing drink that boosts focus and hydration with kiwi and lemon essence.",
    backContent: {
     text: (
  <div>
    <p>
      Kiwi Lemon is a zesty blend that uplifts your senses with a burst of tart flavor—perfect for hydration and focus.
    </p>
    <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", listStyleType: "disc" }}>
      <li>☀️ <strong>Vitamin D3</strong> – Supports mood, immunity & bones.</li>
      <li>💧 <strong>Pure Water</strong> – Keeps you hydrated and clear-headed.</li>
      <li>🥥 <strong>Coconut Water (22%)</strong> – Electrolyte-rich refreshment.</li>
      <li>⚡ <strong>Taurine</strong> – Boosts energy & mental stamina.</li>
      <li>🌿 <strong>Ginseng & Ginkgo Biloba</strong> – Enhance focus & cognition.</li>
      <li>💪 <strong>Creatine & Glutamine</strong> – Aid muscle recovery & immunity.</li>
      <li>🧘 <strong>5‑HTP & Inositol</strong> – Promote calm & mental balance.</li>
      <li>❌ <strong>Zero Sugar</strong> – Sweet without calories.</li>
    </ul>
  </div>
),


      image: "/images/product34.webp",
    },
  },
  {
    id: 4,
    title: "Fokus Hydration Pack of 3",
    price: 450,
    images: [
      "/images/product4.webp",
      "/images/product41.webp",
      "/images/product42.webp",
      "/images/product43.jpg",
      "/images/product44.webp",
    ],
    description:
      "A hydration pack with all flavors to keep you refreshed all day long.",
    backContent: {
      text: (
  <div>
    <p>
      Our 3-pack brings together the best of all flavors. Whether you're at work, the gym, or relaxing, there's a bottle to match your vibe.
    </p>
    <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", listStyleType: "disc" }}>
      <li>🌤️ <strong>Vitamin D3</strong> – Supports your immune system and uplifts your mood.</li>
      <li>💧 <strong>Coconut Water (22%)</strong> – Naturally hydrating with essential electrolytes.</li>
      <li>⚡ <strong>Taurine, Ginseng & Ginkgo Biloba</strong> – Improve focus and fight fatigue.</li>
      <li>🏋️ <strong>Creatine & Glutamine</strong> – Boost workout performance and recovery.</li>
      <li>🔥 <strong>L-Carnitine L-Tartrate</strong> – Converts fat into energy and enhances endurance.</li>
      <li>😊 <strong>5-HTP & Inositol</strong> – Promotes calmness and emotional balance.</li>
      <li>🚫 <strong>Zero Sugar</strong> – Sweetened with sucralose for guilt-free hydration.</li>
    </ul>
  </div>
),

      image: "/images/product45.webp",
    },
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(product?.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    setSelectedImage(product?.images[0]);
    setQuantity(1);
    setFlipped(false);
  }, [product]);

  const handleAddToCart = () => {
    setCartItems((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      if (existingIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          quantity: updatedCart[existingIndex].quantity + quantity,
        };
        return updatedCart;
      }
      return [...prevCart, { ...product, quantity, wishlisted: false }];
    });
    setCartOpen(true);
    setQuantity(1);
  };

  const handleRemoveOne = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : null
            : item
        )
        .filter(Boolean)
    );
  };

  const handleToggleWishlist = (itemId) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, wishlisted: !item.wishlisted } : item
      )
    );
  };

  const triggerConfetti = () => {
    // Left side: origin near left edge, shooting toward right (angle ~ 45°)
    confetti({
      particleCount: 250,
      spread: 60,
      origin: { y: 0.4, x: 0.1 }, // near left
      angle: 45,
    });

    // Right side: origin near right edge, shooting toward left (angle ~ 135°)
    confetti({
      particleCount: 250,
      spread: 60,
      origin: { y: 0.4, x: 0.9 }, // near right
      angle: 135,
    });
  };

  if (!product) {
    return (
      <div className="text-center py-20 text-red-600">Product not found.</div>
    );
  }

  return (
    <div
      className="relative pt-28 px-4 sm:px-6 min-h-screen bg-white"
      style={{
        background:
          "repeating-linear-gradient(135deg, rgba(100,150,220,0.25) 0 50px, rgba(220,235,250,0.35) 50px 100px)",
      }}
    >
      <button
        onClick={() => navigate("/product")}
        className="absolute left-6 cursor-pointer top-18 md:top-28 md:p-3 p-2 border-2 rounded-2xl hover:text-white hover:bg-black text-black z-20"
      >
        ← Back to Products
      </button>

      <button
        onClick={() => setCartOpen(true)}
        className="absolute top-18 md:top-28 cursor-pointer right-6 bg-black text-white p-3 rounded-full z-40 shadow-md hover:bg-gray-600"
        aria-label="Open Cart"
      >
        <ShoppingCart className="w-5 h-5" />
      </button>

      {/* Flip Card */}
      <div
        className="relative pt-12 mx-auto"
        style={{ perspective: "1500px", maxWidth: "90rem" }}
      >
        <div
          className="relative w-full"
          style={{
            transition: "transform 0.8s",
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "none",
          }}
        >
          {/* Front */}
          <div
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-white shadow-2xl p-6 rounded-xl"
            >
              <div>
                <motion.img
                  layoutId="main-image"
                  src={selectedImage}
                  alt={product.title}
                  className="w-full h-[350px] sm:h-[450px] object-cover rounded-lg mb-4"
                />
                <div className="flex gap-3 overflow-x-auto">
                  {product.images.map((img, idx) => (
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      key={idx}
                      src={img}
                      onClick={() => setSelectedImage(img)}
                      className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded cursor-pointer border-2 transition-all duration-200 ${
                        selectedImage === img
                          ? "border-black"
                          : "border-gray-200"
                      }`}
                      alt="thumbnail"
                    />
                  ))}
                </div>
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                  {product.title}
                </h1>
                <p className="text-lg sm:text-2xl text-gray-800 mb-4">
                  Rs.{product.price}
                </p>
                <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                  {product.description}
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="space-y-2 text-sm sm:text-base text-gray-700 bg-gray-50 p-4 rounded-md shadow-inner border mb-6"
                >
                  <p>➡️ Tax included. Shipping calculated at checkout</p>
                  <p className="text-green-600 font-medium">
                    ➡️ Free Shipping on all orders for 24 Hours
                  </p>
                  <p>➡️ Orders will be delivered in 10-15 working days</p>
                  <p className="text-red-500">➡️ Prepaid orders only</p>
                </motion.div>

                <div className="flex items-center gap-4 mb-6">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="px-2 py-1.5 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    ➖
                  </button>
                  <span className="text-lg font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="px-2 py-1.5 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    ➕
                  </button>
                </div>

                <div className="flex flex-wrap gap-4">
                  <motion.button
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      e.currentTarget.style.transform = `translate(${
                        (x - rect.width / 2) * 0.1
                      }px, ${(y - rect.height / 2) * 0.1}px) scale(1.05)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        "translate(0px, 0px) scale(1)";
                    }}
                    onClick={handleAddToCart}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition w-full sm:w-auto relative z-10 shadow-md hover:shadow-xl"
                  >
                    Add to Bag
                  </motion.button>

                  <button
                    onClick={() => setFlipped(true)}
                    className="px-6 py-3 bg-black text-white rounded hover:bg-gray-500 transition w-full sm:w-auto relative z-10 shadow-md hover:shadow-xl"
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Back */}
          <div
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              position: "absolute",
              top: 0,
              width: "100%",
            }}
          >
            <div className="max-w-6xl mx-auto bg-white shadow-2xl p-6 rounded-xl min-h-[400px] grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  More about this product
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {product.backContent?.text || product.description}
                </p>
                <div className="scroll-container">
                  <div className="scroll-row">
                    <img src="/images/health1.png" alt="Decor 1" />
                    <img src="/images/health2.webp" alt="Decor 2" />
                    <img src="/images/health3.webp" alt="Decor 3" />
                    <img src="/images/health4.webp" alt="Decor 4" />
                    <img src="/images/health5.png" alt="Decor 5" />
                    <img src="/images/health1.png" alt="Decor 1" />
                    <img src="/images/health2.webp" alt="Decor 2" />
                    <img src="/images/health3.webp" alt="Decor 3" />
                    <img src="/images/health4.webp" alt="Decor 4" />
                    <img src="/images/health5.png" alt="Decor 5" />
                  </div>

                  {/* Inline CSS safely injected */}
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `
        .scroll-container {
          overflow: hidden;
          width: 100%;
          margin-top: 1rem;
        }

        .scroll-row {
          display: flex;
          gap: 20px;
          animation: scroll-left 20s linear infinite;
        }

        .scroll-row img {
          height: 80px;
          width: auto;
          object-fit: contain;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `,
                    }}
                  />
                </div>

                <button
                  onClick={() => setFlipped(false)}
                  className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                >
                  Go Back
                </button>
              </div>
              {product.backContent?.image && (
                <img
                  src={product.backContent.image}
                  alt="More about"
                  className="w-full h-auto rounded-lg object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Cart */}
      <AnimatePresence>
        {cartOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed right-0 h-[88vh] top-[8.5vh] md:h-[86vh] md:top-[11vh] w-full sm:w-1/2 md:w-1/3 rounded-3xl bg-white shadow-2xl p-6 z-50 flex flex-col justify-between"
          >
            <div className="overflow-y-auto flex-grow">
              <div className="flex justify-between pt-5 items-center mb-6">
                <h2 className="text-2xl font-bold">Your Bag</h2>
                <button
                  onClick={() => setCartOpen(false)}
                  aria-label="Close Cart"
                >
                  <X className="w-8 h-8 text-gray-700 hover:text-black cursor-pointer hover:border-2" />
                </button>
              </div>

              {cartItems.length === 0 ? (
                <p className="text-gray-500">
                  Your cart is hungry, Add items😊
                </p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 items-center mb-6 border-b pb-4"
                  >
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Qty: {item.quantity}
                      </p>
                      <p className="font-medium text-sm">
                        ₹{item.quantity * item.price}
                      </p>
                      <div className="flex gap-4 mt-2">
                        <button
                          onClick={() => handleRemoveOne(item.id)}
                          className="text-red-600 cursor-pointer hover:underline text-lg"
                        >
                          Remove
                        </button>
                        <button
                          onClick={() => handleToggleWishlist(item.id)}
                          className="text-xl cursor-pointer"
                          aria-label={
                            item.wishlisted
                              ? "Remove from wishlist"
                              : "Add to wishlist"
                          }
                        >
                          {item.wishlisted ? "❤️" : "🤍"} Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  if (cartItems.length > 0) {
                    triggerConfetti();
                    // We can navigate or handle payment here, but since i have not integrated backend , so its just a dummy
                    // alert("Proceeding to payment!");
                  } else {
                    alert("Your cart is empty!");
                  }
                }}
                className="w-full py-3 bg-black text-white text-center rounded hover:bg-gray-800"
              >
                Proceed to Pay
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
