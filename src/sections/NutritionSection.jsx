import React, { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { nutrientLists } from "../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const NutritionSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [lists, setLists] = useState(nutrientLists);

  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const btnRef = useRef(null);

  useEffect(() => {
    if (isMobile) {
      setLists(nutrientLists.slice(0, 3));
    } else {
      setLists(nutrientLists);
    }
  }, [isMobile]);

  useGSAP(() => {
    const titleSplit = SplitText.create(".nutrition-title", {
      type: "chars",
    });
    const paragraphSplit = SplitText.create(".nutrition-section p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top center",
      },
    });
    contentTl
      .from(titleSplit.chars, {
        yPercent: 100,
        stagger: 0.02,
        ease: "power2.out",
      })
      .from(paragraphSplit.words, {
        yPercent: 300,
        rotate: 3,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
      });

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 80%",
      },
    });

    titleTl.to(".nutrition-text-scroll", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
      ease: "power1.inOut",
    });
  });

  // Magnetic button handlers
  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    const deltaX = e.clientX - btnCenterX;
    const deltaY = e.clientY - btnCenterY;

    const maxTranslate = 15;

    // Distance from cursor to button center
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    // Normalize distance so translation stays within maxTranslate
    const moveX = (deltaX / distance) * Math.min(distance, maxTranslate);
    const moveY = (deltaY / distance) * Math.min(distance, maxTranslate);

    setTransform({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
  };

  return (
    <section className="nutrition-section relative">
      <img
        src="/images/slider-dip.png"
        alt=""
        className="w-full object-cover z-10 absolute -top-20"
      />
      <img
        src="/images/20250719_1543_Tropical Beverage Redesign_remix_01k0h2kd9jf3yv9h72nvrxd36w.png"
        alt=""
        className="big-img object-fill"
      />

      <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
        <div className="relative inline-block md:translate-y-20">
          <div className="general-title relative flex flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title pt-10 pb-5">No Crash Zone</h1>
            </div>
            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="nutrition-text-scroll p-3 place-self-start"
            >
              <div className="bg-[#44cadf] pb-5 md:pt-0 pt-3 md:px-5 px-3">
                <h2 className="text-[#FDF6EC]">Brain Fuel</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-xs max-w-md">
            <p className="-ml-5 text-lg md:text-left text-balance font-paragraph md:pt-30 pt-0">
              Fokus Hydration blends coconut water and essential nutrients like
              vitamins, creatine, and ginseng—zero sugar, pure energy.
            </p>
            <button
              ref={btnRef}
              onClick={() => {
                alert(
                  "😬 You had ONE job... and it was not to click.\n🚨 Self-control level: 0/10. You clicked it anyway!"
                );
                window.open("https://www.youtube.com/shorts/hYFJdB0YEYg", "_blank");
                alert("😂😂SORRY");
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `translate(${transform.x}px, ${transform.y}px)`,
                transition: "transform 0.1s ease-out",
              }}
              className="-ml-5 bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-3 rounded-full shadow-md transition duration-300 border border-white"
            >
              <span className="opacity-30">Don't</span> Click Me
            </button>
          </div>
        </div>

        <div className="nutrition-box">
          <div className="list-wrapper">
            {lists.map((nutrient, index) => (
              <div key={index} className="relative flex-1 col-center">
                <div>
                  <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                  <p className="font-paragraph text-sm mt-2">up to</p>
                  <p className="text-2xl md:text-4xl tracking-tighter font-bold">
                    {nutrient.amount}
                  </p>
                </div>

                {index !== lists.length - 1 && (
                  <div className="spacer-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
