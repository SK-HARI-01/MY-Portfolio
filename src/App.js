import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }, []);

  return (
    <div className="min-h-screen bg-radial-fade">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about" className="section"><About /></section>
        <section id="projects" className="section"><Projects /></section>
        <section id="certificates" className="section"><Certificates /></section>
        <section id="roadmap" className="section"><Roadmap /></section>
        <section id="contact" className="section"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
