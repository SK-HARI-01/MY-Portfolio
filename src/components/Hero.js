import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="relative overflow-hidden pt-24 pb-16 md:pt-32"
      onMouseMove={handleMouseMove}
      style={{
        background: `
          radial-gradient(
            circle 200px at ${mousePos.x}px ${mousePos.y}px,
            rgba(147, 51, 234, 0.2),
            transparent 80%
          )
        `,
        transition: "background 0.05s ease-out",
      }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_200%] animate-gradient-x opacity-20 pointer-events-none"></div>

      {/* Particles */}
      <div className="particle particle--1 pointer-events-none"></div>
      <div className="particle particle--2 pointer-events-none"></div>
      <div className="particle particle--3 pointer-events-none"></div>

      {/* Content container */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center md:text-left flex-1"
        >
          <motion.h1
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              HARIHARAN S K
            </span>
          </motion.h1>

          <motion.p
            className="mt-3 text-lg md:text-xl opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Full-Stack Developer • Problem Solver • Lifelong Learner
          </motion.p>

          <motion.p
            className="mt-2 opacity-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            I build fast, beautiful, accessible web apps with modern tech.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            {[
              { href: "#projects", label: "View Projects" },
              { href: "#contact", label: "Contact Me" },
              { href: "https://drive.google.com/file/d/1tlbUmfJHx1NkCzMYBtOaE93eC95Kxs97/view?usp=drivesdk", label: "View Resume", external: true }
            ].map((btn, i) => (
              <motion.a
                key={i}
                href={btn.href}
                target={btn.external ? "_blank" : "_self"}
                rel={btn.external ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto text-center px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:opacity-90 transition-all"
              >
                {btn.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Profile Photo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex-1 w-full flex justify-center"
        >
          <div className="rounded-full p-2 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">
            <div className="glass rounded-full w-80 h-80 md:w-96 md:h-96 overflow-hidden shadow-lg">
              <img
                src={process.env.PUBLIC_URL + "/images/Myphoto.jpg"}
                alt="HARIHARAN S K"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
