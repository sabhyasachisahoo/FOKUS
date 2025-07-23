import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <section className="footer-section">
      <div className="relative flex flex-row">
        <img src="/images/N03.png" alt="" className="absolute opacity-20 w-full blur-xs" />
        <img src="/images/N04.png" alt="" className="absolute opacity-20 w-full" />
        <img src="/images/N07.png" alt="" className="absolute opacity-20 w-full" />
      </div>

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">#FOKUSKARO</h1>
        </div>

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src="./images/yt.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="./images/insta.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="./images/tiktok.svg" alt="" />
          </div>
        </div>

        <div className="mt-20 md:px-10 font-bold px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-xl">
          <div className="flex items-center md:gap-26 gap-5">
            <div>
              <Link to="/product" className="hover:underline">
                FOKUS Flavors
              </Link>
            </div>
            <div>
              <Link to="/product" className="md:pb-3 block hover:underline hover:scale-105 transition-transform duration-200">
                Shop
              </Link>
              <Link to="/product" className="md:pb-3 block hover:underline hover:scale-105 transition-transform duration-200">
                Order
              </Link>
              <Link to="/returns" className="md:pb-3 block hover:underline hover:scale-105 transition-transform duration-200">
                Return Policy
              </Link>
            </div>
            <div>
              <Link to="/contact" className="md:pb-3 block hover:underline hover:scale-105 transition-transform duration-200">
                Customer Service
              </Link>
              <Link to="/contact" className="md:pb-3 block hover:underline hover:scale-105 transition-transform duration-200">
                Contacts
              </Link>
              <Link to="https://github.com/sabhyasachisahoo" target="_blank" className="md:pb-3 block hover:underline hover:scale-105 transition-transform duration-200">
                Thirsty Talk
              </Link>
            </div>
          </div>

          <div className="md:max-w-lg">
            <p>Get Exclusive Early Access and Stay Informed About Product Updates, Events, and More!</p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-sans placeholder:text-[#999999]"
              />
              <img src="/images/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>

        <div className="copyright-box">
          <p>Copyright © 2025, Fokus Beverages Private Limited. </p>
          <div className="flex items-center gap-7">
            <Link to="/policy" className="block hover:underline hover:scale-105 transition-transform duration-200">
              Privacy Policy
            </Link>
            <Link to="/termsofservice" className="block hover:underline hover:scale-105 transition-transform duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
