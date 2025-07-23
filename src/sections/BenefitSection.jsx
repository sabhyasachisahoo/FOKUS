import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";
import VideoPinSection from "../components/VideoPinSection";
import { Link } from "react-router-dom";

const BenefitSection = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  });

  return (
    <section className="benefit-section">
      <img
        src="/images/slider-dip.png"
        alt=""
        className="w-full object-cover z-10 absolute -top-20"
      />
      <img
        src="/images/benefit-heading.png"
        alt="Right Decoration"
        className="absolute left-0 bottom-0 md:ml-0.5 md:top-20 md:block md:w-100 md:h-auto w-[120px] ml-1 top-10 block opacity-80"
      />

      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p className="text-slate-700 font-bold">
            Recharge Right:
            <br />
            Dive Into the Benefits of Choosing FOKUS
          </p>

          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"Recover & Refuel"}
              color={"#faeade"}
              bg={"#c88e64"}
              className={"first-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Hydration + Natural Energy"}
              color={"#222123"}
              bg={"#faeade"}
              className={"second-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Boosts Mood & Fokus"}
              color={"#faeade"}
              bg={"#7F3B2D"}
              className={"third-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"100% recyclable packaging"}
              color={"#2E2D2F"}
              bg={"#FED775"}
              className={"fourth-title"}
              borderColor={"#222123"}
            />
          </div>

          <div className="md:mt-0 mt-10 relative z-50">
            <Link to="/know-us">
              <button className="-ml-5 font-semibold py-2 px-3 rounded-full shadow-md cursor-pointer animate-bounce hover:animate-none transition duration-300">
                Know More...
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative overlay-box">
        <VideoPinSection />
      </div>
    </section>
  );
};

export default BenefitSection;
