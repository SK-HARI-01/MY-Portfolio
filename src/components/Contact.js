import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

const PUB_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'XiY4Uh18MdKmr1L0K';
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_netuhkp';
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_pb238l9';

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setIsSending(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUB_KEY);
      setStatus('✅ Message sent! I will get back to you soon.');
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus('❌ Something went wrong. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={onSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="glass p-6 rounded-2xl backdrop-blur-lg bg-white/10 dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-200 space-y-4"
        >
          <input
            name="from_name"
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary hover:bg-white/10 dark:hover:bg-gray-600 transition"
            required
          />
          <input
            name="reply_to"
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary hover:bg-white/10 dark:hover:bg-gray-600 transition"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary hover:bg-white/10 dark:hover:bg-gray-600 transition"
            required
          ></textarea>

          <button
            type="submit"
            disabled={isSending}
            className={`w-full md:w-auto mt-2 px-6 py-3 rounded-xl bg-primary text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-transform duration-200 ${
              isSending && 'opacity-70 cursor-not-allowed'
            }`}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>

          {status && <p className="mt-2 text-sm opacity-80">{status}</p>}
        </motion.form>

        {/* Connect / Social Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="glass p-6 rounded-2xl backdrop-blur-lg bg-white/10 dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col justify-center items-center"
        >
          <h3 className="font-semibold text-lg">Let’s connect</h3>
          <p className="opacity-90 mt-2 text-center"> 
            I’m open to work, internships, and exciting collaborations. Let’s chat!
          </p>
          <div className="mt-6 flex gap-6 text-3xl">
            <a href="mailto:skhariharan2005@gmail.com" className="hover:text-primary transition-colors duration-200">
              <FiMail />
            </a>
            <a href="https://www.linkedin.com/in/hariharan-s-k" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200">
              <FiLinkedin />
            </a>
            <a href="https://www.instagram.com/_._sk_hari_._/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200">
              <FaInstagram />
            </a>
            <a href="https://github.com/SK-HARI-01" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200">
              <FiGithub />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
