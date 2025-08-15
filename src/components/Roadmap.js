import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCheckCircle, FiCircle, FiTool, FiAward, FiMap, FiCpu, FiDatabase, FiServer, FiCode 
} from 'react-icons/fi';

const steps = [
  { 
    icon: <FiCpu />, 
    title: 'Python Basics', 
    desc: 'Learned Python syntax, data types, and control flow for problem-solving.', 
    done: true 
  },
  { 
    icon: <FiCode />, 
    title: 'Java', 
    desc: 'Learned OOP concepts, exception handling, and core Java fundamentals.', 
    done: true 
  },
  { 
    icon: <FiTool />, 
    title: 'Web Development', 
    desc: 'Built responsive web interfaces using HTML, CSS, JavaScript, and React.', 
    done: true 
  },
  { 
    icon: <FiServer />, 
    title: 'Java Web Development', 
    desc: 'Developed Spring Boot applications, built REST APIs, designed MySQL databases, and deployed on AWS EC2.', 
    done: true 
  },
  { 
    icon: <FiCheckCircle />, 
    title: 'CI/CD', 
    desc: 'Automated deployment pipelines and continuous integration for web applications.', 
    done: false 
  },
];

// Container variants for staggered animation
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

// Card fade + slide-up variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Roadmap() {
  const completed = steps.filter(s => s.done).length;
  const pct = Math.round((completed / steps.length) * 100);

  return (
    <div className="max-w-6xl mx-auto px-4 py-0">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3"
      >
        <FiMap className="text-primary text-4xl" />
        Roadmap
      </motion.h2>

      {/* Glass container */}
      <motion.div
        className="glass p-4 rounded-2xl backdrop-blur-lg bg-white/10 dark:bg-gray-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Progress bar */}
        <div className="mb-6 flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-semibold mb-2"
          >
            {pct}%
          </motion.span>
          <div className="h-3 w-full md:w-3/4 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: pct + '%' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-primary to-secondary"
            />
          </div>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`rounded-xl p-6 flex flex-col items-center text-center border 
                          ${s.done 
                            ? 'bg-white/10 dark:bg-gray-800 border-white/20 shadow-md' 
                            : 'bg-gradient-to-br from-gray-200/30 to-gray-100/20 dark:from-gray-700/30 dark:to-gray-600/20 border-white/10 shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-200'
                          }`}
            >
              <div className={`text-4xl mb-2 ${s.done ? 'text-primary' : 'text-yellow-400 dark:text-yellow-300'}`}>
                {s.icon}
              </div>
              <h4 className="mt-2 font-semibold text-lg dark:text-white">{s.title}</h4>
              <p className="text-sm opacity-90 mt-1 dark:text-gray-200">{s.desc}</p>
              <div className="mt-3 text-sm inline-flex items-center gap-2 dark:text-gray-200">
                {s.done 
                  ? <><FiCheckCircle className="text-green-400"/> Done</> 
                  : <><FiCircle className="text-yellow-400"/> Upcoming</>}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
