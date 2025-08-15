import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { FaAward } from 'react-icons/fa';

const certificates = [
  { id: 1, title: "Java Programming Certification", img: "/images/Java-crt.png" },
  { id: 2, title: "TCS Code Vita Participation", img: "/images/Tcs-crt.png" },
  // { id: 3, title: "Cloud Computing Certification", img: "/images/Cloud-crt.jpg" }
];

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <div id="certificates" className="max-w-6xl mx-auto px-4 py-0">
      
      {/* Heading with animated icon */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center flex items-center justify-center gap-3"
      >
        <motion.span
          initial={{ rotate: -15, scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
        >
          <FaAward className="text-primary text-4xl" />
        </motion.span>
        Certificates & Achievements
      </motion.h2>

      {/* Certificates Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative group glass backdrop-blur-lg bg-white/10 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.03] transition-transform cursor-pointer"
            onClick={() => setSelected(cert.img)}
          >
            <img 
              src={cert.img} 
              alt={cert.title} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg dark:text-white">{cert.title}</h3>
            </div>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="px-4 py-2 bg-primary text-white rounded-lg flex items-center gap-2">
                <FiExternalLink /> View Certificate
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for full view */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.img
              initial={{ rotateY: 90, scale: 0.8, opacity: 0 }}
              animate={{ rotateY: 0, scale: 1, opacity: 1 }}
              exit={{ rotateY: 90, scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={selected}
              alt="Certificate"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
