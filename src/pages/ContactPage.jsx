import React, { useRef } from "react";
import gsap from "gsap";
import leftImage from "../constants/contactpic2.jpg";
import rightImage from "../constants/contactpic3.jpg";

const ContactPage = () => {
  const centerCardRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  const handleMouseMove = (ref) => (e) => {
    const { clientX, clientY } = e;
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.1,
      rotateX,
      rotateY,
      transformPerspective: 800,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (ref, defaultRotation) => () => {
    const element = ref.current;
    if (element) {
      gsap.to(element, {
        duration: 0.1,
        rotateX: 0,
        rotateY: defaultRotation,
        ease: "power3.inOut",
      });
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-bl from-red-400 via-yellow-200 to-green-400 flex items-center justify-center p-8">
      <div className="flex flex-col md:flex-row gap-6 md:gap-20 items-center md:items-stretch w-full max-w-7xl">
        {/* Left Card */}
        <div
          ref={leftCardRef}
          onMouseMove={handleMouseMove(leftCardRef)}
          onMouseLeave={handleMouseLeave(leftCardRef, 18)}
          className="hidden md:flex flex-1 flex-col bg-white/60 backdrop-blur-md border border-white/30 shadow-2xl rounded-3xl p-6 transform rotate-[-8deg] transition-transform duration-500 ease-in-out"
        >
          <img
            src={leftImage}
            alt="Energy Drink"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <div className="text-center font-semibold text-gray-700">
            <h3 className="text-xl font-extrabold mb-2">Energize Your Day</h3>
            <p>
              Power through your busiest hours with our all-natural energy drink
              blend. Infused with vitamins and zero added sugar, it's your
              perfect companion for sustained energy and focus.
            </p>
            <div className="flex-center gap-4 mt-4">
              <a
                href="https://www.youtube.com/@LetsFokuschannel"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn w-12 h-12 hover:scale-110 transition-transform duration-300"
              >
                <img
                  src="./images/yt.svg"
                  alt="YouTube"
                  className="w-full h-full object-contain filter invert opacity-80 hover:opacity-100"
                />
              </a>
              <a
                href="https://www.instagram.com/letsfokus/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn w-12 h-12 hover:scale-110 transition-transform duration-300"
              >
                <img
                  src="./images/insta.svg"
                  alt="Instagram"
                  className="w-full h-full object-contain filter invert opacity-80 hover:opacity-100"
                />
              </a>
              <a
                href="https://www.tiktok.com/@yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn w-12 h-12 hover:scale-110 transition-transform duration-300"
              >
                <img
                  src="./images/tiktok.svg"
                  alt="TikTok"
                  className="w-full h-full object-contain filter invert opacity-80 hover:opacity-100"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Center Card */}
        <div
          ref={centerCardRef}
          onMouseMove={handleMouseMove(centerCardRef)}
          onMouseLeave={handleMouseLeave(centerCardRef, 0)}
          className="w-full md:flex-1 bg-white/60 backdrop-blur-md border border-white/30 shadow-2xl rounded-3xl p-10 contact-clip-path-2 transition-transform duration-500 ease-in-out"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Contact Us
          </h2>
          <form
            action="mailto:bcd51940@gmail.com"
            method="post"
            encType="text/plain"
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded-md bg-white bg-opacity-70 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-4 py-3 rounded-md bg-white bg-opacity-70 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="px-4 py-3 rounded-md bg-white bg-opacity-70 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition duration-300"
            >
              Send Message
            </button>
            <p className="text-center">Feel free to reach us</p>
          </form>
        </div>

        {/* Right Card */}
        <div
          ref={rightCardRef}
          onMouseMove={handleMouseMove(rightCardRef)}
          onMouseLeave={handleMouseLeave(rightCardRef, -18)}
          className="hidden md:flex flex-1 flex-col bg-white/60 backdrop-blur-md border border-white/30 shadow-2xl rounded-3xl p-6 transform rotate-[8deg] transition-transform duration-500 ease-in-out"
        >
          <div className="text-center font-semibold text-gray-700 mb-4">
            <h3 className="text-xl mb-2 font-extrabold">Fuel with Flavor</h3>
            <p>
              Discover bold taste and instant revitalization. Our energy drinks
              are crafted to refresh your body and sharpen your mind — without
              the crash. Feel the power in every sip.
            </p>
            <p className="mt-4">
              Coming soon: limited edition{" "}
              <span className="text-purple-600 font-semibold">
                BERRY THUNDERSTORM
              </span>{" "}
              blend!
            </p>
          </div>
          <img
            src={rightImage}
            alt="Berry Thunderstorm"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
