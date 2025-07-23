import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const MessageSection = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });
    const secMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });
    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });
    gsap.to(secMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
      },
    });
    revealTl.to(".msg-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    });

    const paragraphTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top center",
      },
    });
    paragraphTl.from(paragraphSplit.words, {
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01,
    });
  });

  return (
    <section className="message-content relative flex flex-col">
      <div className="container mx-auto flex-center py-28 pb-10 relative">
        <div className="w-full h-full flex items-center justify-between relative">
          {/* Left Image */}
          <img
            src="/images/mdl1.png"
            alt="Left Decoration"
            className="hidden md:block absolute left-0 bottom-0 w-130 h-auto -translate-x-1/4"
            style={{ zIndex: 1 }}
          />

          <div className="msg-wrapper flex-1">
            <h1 className="first-message">No sugar. No compromise. Ever.</h1>

            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="msg-text-scroll"
            >
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className="text-amber-200">Stay ready</h2>
              </div>
            </div>

            <h1 className="second-message">Level up your every moment</h1>
          </div>

          {/* Right Image */}
          <img
            src="/images/mdl2.png"
            alt="Right Decoration"
            className="hidden md:block absolute right-0 bottom-0 w-130 h-auto translate-x-1/4"
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
      {/* Move the message below the container */}
      <div className="flex-col md:mt-10 mt-10
      md:mb-20">
        <div className="max-w-lg px-10  flex-center overflow-hidden">
          <p>
            Power up your focused fire and charge into the chaos of life
            with Fokus — where every sip sparks clean energy, sharp
            thinking, and unstoppable vibes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
