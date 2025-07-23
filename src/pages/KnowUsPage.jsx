import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const backgroundImages = [
  "/images/bg3.webp",
  "/images/bg2.webp",
  "/images/bg1.webp",
];
const highlightWords = [
  // Brand & keywords
  { word: "FOKUS", color: "#e11d48" },
  { word: "Healthy", color: "#64e92f" },
  { word: "vitamin D", color: "#fbbf24" },
  { word: "sugar", color: "#ef4444" },
  { word: "coconut", color: "#22d3ee" },
  { word: "recyclable", color: "#a855f7" },
  { word: "clarity", color: "#f59e0b" },
  { word: "movement", color: "#10b981" },
  { word: "ambition", color: "#38bdf8" },
  { word: "vision", color: "#8b5cf6" },
  { word: "focus", color: "#ec4899" },
  { word: "hustle", color: "#f43f5e" },
  { word: "dream", color: "#06b6d4" },
  { word: "energy", color: "#fde047" },
  { word: "creators", color: "#7c3aed" },
  { word: "hydrating", color: "#3b82f6" },
  { word: "purpose", color: "#84cc16" },
  { word: "bold", color: "#e11d48" },
  { word: "empowers", color: "#db2777" },
  { word: "refresh", color: "#0ea5e9" },
  { word: "ignite", color: "#f97316" },
  { word: "Abhishek", color: "#ff6b6b" },
  { word: "Nischay", color: "#ff922b" },
  { word: "Malhan", color: "#3b82f6" },
  { word: "Mayank", color: "#20c997" },
  { word: "Aman", color: "#e11d48" },
  { word: "Ankit", color: "#10b981" },
  { word: "Madaan", color: "#a3e635" },
  { word: "sunshine", color: "#facc15" },
  { word: "planet", color: "#3b82f6" },
  { word: "designs", color: "#eab308" },
  { word: "formula", color: "#10b981" },
  { word: "boardroom", color: "#a3e635" },
  { word: "gym", color: "#4ade80" },
  { word: "creators", color: "#7c3aed" },
  { word: "creators", color: "#7c3aed" },
  { word: "doers", color: "#f87171" },
  { word: "entrepreneurs", color: "#fb923c" },
  { word: "Vitamin", color: "#fb923c" },
  { word: "#", color: "#06b6d4" },
  { word: "’", color: "#e11d48" },
  { word: ",", color: "#4ade80" },
  { word: "-", color: "#f43f5e" },
  { word: "CEO", color: "#f97316" },
  { word: "Co", color: "#f97316" },
  { word: "Founder", color: "#ec4899" },
];

const colorizeText = (text) => {
  const words = highlightWords.map(({ word }) => word).sort((a, b) => b.length - a.length);
  const regex = new RegExp(`\\b(${words.join("|")})\\b`, "gi");

  return text.split(regex).map((part, i) => {
    const match = highlightWords.find(
      ({ word }) => word.toLowerCase() === part.toLowerCase()
    );
    return match ? (
      <span key={i} style={{ color: match.color }} className="font-bold">
        {part}
      </span>
    ) : (
      part
    );
  });
};


const KnowUsPage = () => {
  const videoRefs = useRef([]);
  const [bgIndex, setBgIndex] = useState(0);
  const sectionsRef = useRef([]);
  const scrollContainerRef = useRef(null); // 👈 new ref

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              toggleActions: "play none none reverse",
              scroller: scrollContainerRef.current,
            },
          }
        );
      }
    });
  }, []);

  const handleUnmute = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].muted = false;
      videoRefs.current[index].play();
    }
  };

  const handleMute = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].muted = true;
    }
  };

  return (
    <div ref={scrollContainerRef} className="relative w-full h-screen overflow-y-auto font-sans overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${bgIndex === index ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.6)), url(${img})`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-22 py-32 text-white">
         <h1 className="text-6xl md:text-9xl font-extrabold text-center mb-20 animate-fade-in">
          Know <span className="group inline-block"> <span className="bg-gradient-to-r from-blue-600 via-yellow-500 to-green-500 bg-clip-text text-transparent group-hover:opacity-10 transition duration-500 ease-in-out">FOK</span><span className="text-red-600 animate-bounce inline-block">US</span></span>
        </h1>

        <div className="space-y-20 max-w-5xl mx-auto text-xl md:text-2xl font-extrabold text-balance leading-relaxed px-4 md:px-0">
          {[
            {
              heading: "Welcome to the World of FOKUS",
              content: "We’re more than just a brand-we’re a vibrant community driven by passion, purpose, and a shared vision for a better lifestyle, built by creators Abhishek & Nischay Malhan, along with digital entrepreneurs Mayank & Aman Madaan. We craft drinks that don’t just refresh-but empower. Whether you're chasing fitness goals, building your dream, or living on your terms, we’re here to fuel every step. #GetFokus"
            },
            {
              heading: "Vitamin D3",
              content: "Tackling India’s vitamin D shortage, one bottle at a time - because we all need a little more sunshine in our lives."
            },
            {
              heading: "No Sugar & Coconut Water (22%)",
              content: "Healthy can taste amazing-get all the flavour without the added sugar, so you can sip guilt-free.Because who wouldn’t want a mini beach vacation with every sip?"
            },
            {
              heading: "Cool Look, Cooler Conscience",
              content: "Our packaging isn’t just easy on the eyes—it’s designed to make you feel amazing too. Bold designs, clear info-and 100% recyclable. Sip guilt-free while helping the planet."
            },
            {
              heading: "The #GetFokus Revolution",
              content: "Led by Abhishek & Nischay Malhan, #GetFokus is more than a drink-it’s a movement. Join the tribe: share, connect, and take over the world-one focused moment at a time."
            },
            {
              heading: "Purpose in Every Sip",
              content: "We're not just selling a drink-we're creating a movement. Every can of FOKUS represents strength, ambition, and clarity. It's a symbol of choosing to stand out, not blend in."
            },
            {
              heading: "Engineered for Visionaries",
              content: "With a bold vision and a powerful formula, FOKUS empowers the creators, thinkers, dreamers, and doers of tomorrow. We believe in the power of clarity and the momentum of action."
            },
            {
              heading: "Precision Formulation",
              content: "Each ingredient in FOKUS is carefully selected not only for taste, but for its role in elevating your energy, sharpening your focus, and hydrating your hustle."
            },
            {
              heading: "Companion in Every Hustle",
              content: "From the gym to the boardroom, from sunrise to all-nighters-FOKUS is with you every step of the way. We’re not just fueling your body; we’re igniting your mindset."
            },
            {
              heading: "CONTRIBUTER'S",
              content: "Ankit Madaan Founder & CEO Leads the company with a vision for creating clean, functional hydration. He oversees overall strategy, product development, and brand growth.    Mayank Mishra Founder & COO Manages operations and ensures everything runs smoothly—from production to supply chain—keeping the brand agile and reliable.  Aman Madaan Co‑Founder & CFO Heads financial planning, budgeting, and capital allocation, securing the resources that fuel Fokus’s growth mission.  Nischay Malhan Co‑Founder Known from digital content creation, he drives brand storytelling, marketing strategy, and community engagement. Abhishek Malhan Co‑Founder Also a digital content creator, he collaborates on creative direction, social media strategy, and brand partnerships. "
            },
          ].map(({ heading, content }, index) => (
            <div key={index} ref={(el) => (sectionsRef.current[index] = el)} className="text-white/90">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{colorizeText(heading)}</h2>
              <p>{colorizeText(content)}</p>
            </div>
          ))}
        </div>

        {/* Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-14 mt-30 place-items-center">
          {creators.map((person, index) => (
            <div
              key={index}
              className="relative w-75 h-96 perspective group"
              onMouseEnter={() => handleUnmute(index)}
              onMouseLeave={() => handleMute(index)}
            >
              <div className="relative w-full h-full transition-transform duration-700 group-hover:rotate-y-180 transform-3d">
                <div className="absolute border-2 inset-0 bg-white/10 rounded-xl shadow-lg flex flex-col items-center justify-center p-4 text-white backface-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover mb-2 border-2 rounded-lg border-white"
                  />
                  <h2 className="text-2xl font-extrabold">{person.name}</h2>
                  <p className="text-lg opacity-80">{person.role}</p>
                </div>

                <div className="absolute inset-0 rounded-xl shadow-lg bg-white/10 backface-hidden md:p-2 border-2 rotate-y-180 overflow-hidden">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="w-full h-full object-cover rounded-xl"
                    src={person.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const creators = [
  {
    name: "Nishay Malhan",
    role: "CO-Founder",
    image: "/images/founder1.jpg",
    video: "/videos/ff1.mp4",
  },
  {
    name: "Abhishek Malhan",
    role: "CO-Founder",
    image: "/images/founder2.jpg",
    video: "/videos/ff3.mp4",
  },
  {
    name: "Mayank Mishra",
    role: "Founder,COO",
    image: "/images/founder3.jpg",
    video: "/videos/ff2.mp4",
  },
  {
    name: "ANKIT MADAAN",
    role: "Founder & CEO",
    image: "/images/founder4.jpg",
    video: "/videos/ff4.mp4",
  },
  {
    name: "AMAN MADAAN",
    role: "CO-Founder,CFO",
    image: "/images/founder5.jpg",
    video: "/videos/ff5.mp4",
  },
];

export default KnowUsPage;
