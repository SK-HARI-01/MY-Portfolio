import React from "react";
import { motion } from "framer-motion";
import { FaUserAlt } from "react-icons/fa";
import { FiSettings } from 'react-icons/fi';

const skills = [
  { name: "Java", src: "./images/java.png" },
  { name: "Python", src: "./images/python.png" },
  { name: "JavaScript", src: "./images/java-script.png" },
  { name: "Spring Boot", src: "./images/Spring_Boot.svg" },
  { name: "React", src: "./images/react.png" },
  { name: "MySQL", src: "./images/mysql.png" },
  { name: "AWS", src: "./images/aws.png" },
  { name: "REST API", src: "./images/api.png" },
];

export default function About() {
  return (
    <div className="flex justify-center items-center py-2 pb-2">
      <motion.div
        className="max-w-5xl w-full p-8 rounded-2xl glass backdrop-blur-lg bg-white/10 dark:bg-gray-800 shadow-lg border border-white/20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Icon + Title */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 120 }}
          className="flex justify-center mb-4"
        >
          <FaUserAlt className="text-4xl text-blue-400" />
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Catchy Summary */}
        <motion.p
          className="mt-4 opacity-90 text-lg text-center leading-relaxed max-w-3xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I’m a Full Stack Developer turning complex problems into scalable,
          secure, and high-performance web solutions. Experienced in Java, Python,
          React, MySQL, and AWS. Passionate about creating smooth user experiences
          and impactful applications.
        </motion.p>

        {/* Education */}
        {/* <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">Education</h3>
          <ul className="text-center space-y-2 text-gray-700 dark:text-gray-200">
            <li>
              <strong>BE Computer Science Engineering</strong> — Government College of Engineering, Erode (Expected 2026)
            </li>
            <li>
              <strong>Higher Secondary (HSC)</strong> — Ramakrishna Mission Vidyalaya Matric Hr. Sec. School, Villupuram, 2022 | CGPA: 8.14, Percentage: 87.6
            </li>
          </ul>
        </motion.div> */}

        {/* Skills Icons */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          
          <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
            <FiSettings className="text-primary text-3xl" />
            Skills
          </h3>

          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center text-center group"
              >
                <img
                  src={skill.src}
                  alt={skill.name}
                  loading="lazy"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-md"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
