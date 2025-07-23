import React, { useState, useRef } from "react";
import logo from "../constants/data-protection.png";
import logo_with_title from "../constants/benefit-heading.png";
import { Link, useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const cardRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();
    if (name && email && password) {
      navigate("/");
    } else {
      alert("Please fill in all the fields.");
    }
  };

  const triggerConfetti = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height * 0.2) / window.innerHeight;

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { x, y },
      });
    } else {
      confetti();
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center md:flex-row h-screen">
        {/* LEFT SIDE */}
        <div className="hidden w-full md:w-1/2 bg-black opacity-90 text-white md:flex flex-col justify-center items-center p-8 rounded-tr-[80px] rounded-br-[80px]">
          <div className="text-center h-[376px]">
            <div className="flex justify-center mb-12">
              <img
                src={logo_with_title}
                alt="logo"
                className="mb-12 h-44 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-12">
              Already have an account? Sign in now.
            </p>
            <Link
              to={"/login"}
              className="border-2 rounded-lg font-semibold border-white py-2 px-8 hover:bg-white hover:text-black transition"
            >
              SIGN IN
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-[#faeade] p-8">
          <div className="w-full max-w-sm">
            <div className="flex justify-center md:mt-5 mb-4">
              <div className="rounded-full flex pl-10 md:pl-20 items-center justify-center">
                <img src={logo} alt="logo" className="h-40 w-auto md:h-50" />
              </div>
            </div>

            {/* 🎉 Confetti trigger on card hover */}
            <div
              ref={cardRef}
              onMouseEnter={triggerConfetti}
              className="w-full md:w-screen max-w-md mx-auto"
            >
              <div className="p-8 bg-white border border-gray-300 rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-103">
                <h1 className="text-4xl font-medium text-center mb-12">
                  Join Us!
                </h1>

                <p className="text-gray-800 text-center mb-12">
                  Please provide your information to register.
                </p>

                <form onSubmit={handleRegister}>
                  <div className="mb-4">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 transition duration-300"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 transition duration-300"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 transition duration-300"
                      required
                    />
                  </div>

                  <div className="block md:hidden font-semibold mt-5 text-sm">
                    <p>
                      Already have an account?{" "}
                      <Link to="/login" className="text-gray-500 hover:underline">
                        Sign In
                      </Link>
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="mt-5 cursor-pointer w-full font-semibold bg-black text-white py-3 rounded-lg border-2 border-black hover:bg-white hover:text-black transition duration-300"
                  >
                    REGISTER
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
