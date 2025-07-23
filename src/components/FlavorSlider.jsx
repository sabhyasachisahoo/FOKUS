import { useGSAP } from "@gsap/react";
import { flavorlists, products } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const FlavorSlider = () => {
  const sliderRef = useRef();

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1500}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavor-section", {
        x: `-${scrollAmount + 1500}px`,
        ease: "power1.inOut",
      });
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor, idx) => {
          // Determine rotation direction: even index = rotate right, odd = rotate left
          const hoverRotate = idx % 2 === 0 ? "group-hover:rotate-[12deg]" : "group-hover:rotate-[-12deg]";
          const matchingProduct = products.find(product =>
    product.title.toLowerCase().includes(flavor.name.trim().toLowerCase())
  );
          return (
            <Link 
             to={matchingProduct ? `/product/${matchingProduct.id}` : "#"}
              key={flavor.name}
              className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation} group`}
            >
              <img
                src={`/images/${flavor.color}-bg.png`}
                alt=""
                className="absolute bottom-0 rounded-r-3xl rounded-l-3xl"
              />

              <img
                src={`/images/${flavor.color}-drink.png`}
                alt=""
                className={`drinks transition-transform duration-300 group-hover:scale-110 ease-in-out ${hoverRotate}`}
              />

              <img
                src={`/images/${flavor.color}-elements.png`}
                alt=""
                className="elements"
              />

              <h1>{flavor.name}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FlavorSlider;
