import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiFramer } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="mt-1 py-6 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm opacity-80 gap-2 md:gap-0">
        <p>
          © <span>{new Date().getFullYear()}</span> Hariharan S K
        </p>
        <p className="flex items-center gap-2">
          Built with <FaReact className="text-blue-500" /> React • <SiFramer className="text-pink-500" /> Framer Motion
        </p>
      </div>
    </footer>
  );
}
