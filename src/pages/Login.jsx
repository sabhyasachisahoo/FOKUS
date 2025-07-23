import React, { useState, useRef } from "react";
import logo from "../constants/data-protection.png";
import logo_with_title from "../constants/benefit-heading.png";
import { Link, useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const cardRef = useRef(null); // Ref for card

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/");
    } else {
      alert("Please fill in both email and password fields.");
    }
  };

  const triggerConfetti = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height * 0.2) / window.innerHeight; // 20% from top of card

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { x, y },
      });
    } else {
      // fallback if card not found
      confetti();
    }
  };

  return (
    <div className="flex flex-col justify-center md:flex-row h-screen">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex bg-[#faeade] items-center justify-center p-8 relative">
        <div className="max-w-sm w-full">
          <div className="flex justify-center md:mt-5 mb-4">
            <div className="rounded-full pl-10 md:pl-20 flex items-center justify-center">
              <img src={logo} alt="logo" className="h-40 w-auto md:h-50" />
            </div>
          </div>

          {/* Login Card (trigger confetti on hover) */}
          <div
            ref={cardRef}
            onMouseEnter={triggerConfetti}
            className="w-full md:w-screen max-w-md mx-auto"
          >
            <div className="p-8 bg-white border border-gray-300 rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-103">
              <h1 className="text-4xl font-medium text-center mb-12">
                Welcome Back !!
              </h1>

              <p className="text-gray-800 text-center mb-12">
                Please enter your credentials to log in
              </p>

              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <input
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 transition duration-300"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 transition duration-300"
                  />
                </div>

                <Link
                  to={"/password/forgot"}
                  className="block mb-4 font-semibold text-sm text-gray-700 hover:underline"
                >
                  Forgot Password?
                </Link>

                <div className="block md:hidden font-semibold mt-5 text-sm">
                  <p>
                    New to our platform?{" "}
                    <Link
                      to={"/register"}
                      className="text-gray-500 hover:underline"
                    >
                      Register
                    </Link>
                  </p>
                </div>

                <button
                  type="submit"
                  className="mt-5 w-full cursor-pointer font-semibold bg-black text-white py-3 rounded-lg border-2 border-black hover:bg-white hover:text-black transition duration-300"
                >
                  SIGN IN
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden w-full md:w-1/2 bg-black opacity-90 text-white md:flex flex-col justify-center items-center p-8 rounded-tl-[80px] rounded-bl-[80px]">
        <div className="text-center h-[400px]">
          <div className="flex justify-center mb-12">
            <img
              src={logo_with_title}
              alt="logo"
              className="mb-12 h-44 w-auto"
            />
          </div>
          <p className="text-gray-300 mb-12">New to our platform? Sign up now.</p>
          <Link
            to={"/register"}
            className="border-2 mt-5 border-white px-8 w-full font-semibold bg-black text-white py-2 rounded-lg hover:bg-white hover:text-black transition"
          >
            REGISTER HERE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
