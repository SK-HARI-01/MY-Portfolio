import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';
import { useRef, useEffect } from 'react';
import './Projects.css';

const data = [
  { title: 'E-Commerce Website', desc: 'Fast, responsive React e-commerce frontend delivering smooth cross-device user experience.', stack: ['React'], demo: 'https://sk-hari-01.github.io/Orgo-Veggies/', code: 'https://github.com/SK-HARI-01/Orgo-Veggies'},
  { title: 'Banking System ', desc: 'Full-stack banking app for customers to manage accounts, perform transactions securely, with AWS deployment for scalability.', stack: ['Java','Spring Boot','Mysql','AWS EC2'], demo: 'https://example.com/project-two', code: 'https://github.com/SK-HARI-01/Simple-Banking-System'},
  { title: 'Image Classification Model', desc: 'Built a CNN image classifier (~70% accuracy) and experimented with ML techniques to optimize performance.', stack: ['Python','Tensorflow'], demo: 'https://example.com/project-three', code: 'https://github.com/username/project-three'},
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-50px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden'); // reverse animation on scroll up
  }, [inView, controls]);

  return (
    <div className="projects-container max-w-6xl mx-auto px-4 pb-2">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center flex items-center justify-center gap-3"
      >
        <motion.span
          initial={{ rotate: -15, scale: 0 }}
          animate={inView ? { rotate: 0, scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
        >
          <FiFolder className="text-primary text-4xl" />
        </motion.span>
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div ref={ref} className="projects-grid">
        {data.map((p, idx) => (
          <motion.article
            key={p.title}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            transition={{ delay: idx * 0.15 }}
            className="project-card dark:bg-gray-800 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform"
          >
            <div className="project-content">
              <h3 className="project-name dark:text-white text-gray-900">{p.title}</h3>
              <p className="project-desc dark:text-gray-300 text-gray-600">{p.desc}</p>

              <div className="stack-container">
                {p.stack.map(s => (
                  <span key={s} className="stack-tag dark:text-gray-200 text-gray-800">{s}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-demo text-white">
                  <FiExternalLink /> Visit
                </a>
                <a href={p.code} target="_blank" rel="noopener noreferrer" className="btn btn-code text-black">
                  <FiGithub /> Code
                </a>
              </div>
            </div>
            <div className="hover-bar-center"></div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
