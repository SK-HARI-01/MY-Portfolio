import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-6xl px-4 py-3 mt-4 
        glass rounded-2xl flex items-center justify-between 
        shadow-md backdrop-blur-md border border-white/10 
        transition-all duration-300 hover:shadow-lg"
      >
        {/* Logo */}
        <div
          onClick={() => scrollTo('home')}
          className="cursor-pointer font-bold text-lg tracking-wide hover:scale-[1.05] transition-transform duration-200"
        >
          <span className="text-primary">Hariharan S K </span>Portfolio
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {['home', 'about', 'projects','certificates', 'roadmap', 'contact'].map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="capitalize opacity-90 hover:opacity-100 hover:text-primary transition-colors duration-200"
            >
              {link}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button
            onClick={() => setOpen(o => !o)}
            className="px-3 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-200"
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mx-4 mt-2 glass rounded-xl p-4 flex flex-col gap-2 shadow-lg transition-all duration-300">
          {['home', 'about', 'skills', 'projects', 'roadmap', 'contact'].map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="capitalize py-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
