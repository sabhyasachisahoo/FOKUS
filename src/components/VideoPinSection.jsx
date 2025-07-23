import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoPinSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
          onUpdate: (self) => {
            // Show play button again when user scrolls back up
            if (self.progress < 0.1) {
              setIsVideoPlaying(false);
            }
          },
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  }, []);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      setIsVideoPlaying(true);
      gsap.to(wrapperRef.current, {
        clipPath: "circle(100% at 50% 50%)",
        duration: 1,
        ease: "power2.out",
      });
      video.muted = isMuted;
      video.play();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <section className="vd-pin-section relative">
      <div
        ref={wrapperRef}
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
        }}
        className="size-full video-box relative"
      >
        <video
          ref={videoRef}
          src="/videos/pin-video.mp4"
          playsInline
          muted={isMuted}
          loop
          autoPlay
          className="w-full h-full object-cover"
        />

        {/* Play Button and Spinner */}
        {!isVideoPlaying && (
          <div
            onClick={handlePlay}
            className="abs-center md:scale-100 scale-200 cursor-pointer z-20"
          >
            <img src="/images/circle-text.svg" alt="" className="spin-circle" />
            <div className="play-btn">
              <img
                src="/images/play.svg"
                alt="Play"
                className="size-[3vw] ml-[.5vw]"
              />
            </div>
          </div>
        )}

        {/* Mute Button */}
        {isVideoPlaying && (
          <button
            onClick={toggleMute}
            className="fixed top-15 right-8 cursor-pointer z-30 bg-black font-bold text-white px-8 py-2 rounded-full text-lg animate-bounce transition"
          >
            {isMuted ? "Unmute" : "Mute"}
          </button>
        )}
      </div>
    </section>
  );
};

export default VideoPinSection;
