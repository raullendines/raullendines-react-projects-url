import React, { useState } from 'react';
import { CustomLanguageDropdown } from './LanguageDropdown';

const Nav = ({ languages }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language

  const navLinks = {
    es: [
      {
        text: 'Home',
        path: 'home',
      },
      {
        text: 'Acerca de',
        path: 'about',
      },
      {
        text: 'Proyectos',
        path: 'projects',
      },
    ],
    en: [
      {
        text: 'Home',
        path: 'home',
      },
      {
        text: 'About',
        path: 'about',
      },
      {
        text: 'Projects',
        path: 'projects',
      },
    ],
    ca: [
      {
        text: 'Inici',
        path: 'home',
      },
      {
        text: 'Sobre nosaltres',
        path: 'about',
      },
      {
        text: 'Projectes',
        path: 'projects',
      },
    ],
  }[selectedLanguage];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <nav className="bg-primary">
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-4">
          {/* Your logo and menu button */}
          <button
            type="button"
            className={`text-white md:hidden ${isOpen ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded={isOpen ? 'true' : 'false'}
            onClick={() => setOpen(!isOpen)}
          >
            <span className="block" aria-hidden="true"></span>
            <span className="block" aria-hidden="true"></span>
            <span className="block" aria-hidden="true"></span>
          </button>
          
          {isOpen && (
            <div className="md:hidden absolute top-0 left-0 w-full bg-primary">
              <ul className="flex flex-col items-center">
                {navLinks.map((link, index) => (
                  <li key={index} className="my-2">
                    <a
                      href={`#${link.path}`}
                      className="text-white"
                      onClick={() => setOpen(false)}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <CustomLanguageDropdown
            languages={languages} 
            defaultLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
