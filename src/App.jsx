// import NavBar from "./components/NavBar";
// import HeroSection from "./sections/HeroSection";
// import { ScrollSmoother, ScrollTrigger } from "gsap/all";
// import gsap from "gsap";
// import MessageSection from "./sections/MessageSection";
// import FlavorSection from "./sections/FlavorSection";
// import { useGSAP } from "@gsap/react";
// import NutritionSection from "./sections/NutritionSection";
// import BenefitSection from "./sections/BenefitSection";
// import TestimonialSection from "./sections/TestimonialSection";
// import FooterSection from "./sections/FooterSection";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// const App = () => {
//   useGSAP(() => {
//     ScrollSmoother.create({
//       smooth: 3,
//       effects: true,
//     });
//   });

//   return (
//     <main>
//       <NavBar />
//       <div id="smooth-wrapper">
//         <div id="smooth-content">
//           <HeroSection />
//           <MessageSection />
//           <FlavorSection />
//           <NutritionSection />

//           <div>
//             <BenefitSection />
//             <TestimonialSection />
//           </div>

//           <FooterSection />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";

// Components & Sections
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";

// Pages
import ProductPage from "./pages/ProductPage.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import KnowUsPage from "./pages/KnowUsPage.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  }, []);

  return (
    <Router>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <MessageSection />
                  <FlavorSection />
                  <NutritionSection />
                  <BenefitSection />
                  <TestimonialSection />
                  <FooterSection />
                </>
              }
            />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/know-us" element={<KnowUsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
