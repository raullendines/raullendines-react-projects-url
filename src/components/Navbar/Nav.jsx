import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { CustomLanguageDropdown } from './LanguageDropdown';
import { NavLinks } from './NavLinks';

const Nav = () => {
  const { lang } = useParams();
  const [isOpen, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(lang || 'en');
  const languages = ['en', 'ca', 'es'];

  const location = useLocation();
  const navigate = useNavigate();
  const handleLanguageChange = (selectedLang) => {
    const newPath = `/${selectedLang}${location.pathname.replace(/\/[a-z]+(?=\/|$)/, '')}`;
    navigate(newPath);
  };
  
  useEffect(() => {
    setSelectedLanguage(lang || 'en');
  }, [lang]);
  
  

  /* const navLinks = [
    {
      text: 'Home',
      to: `/${selectedLanguage}`,
      path: '',
    },
    {
      text: 'About',
      to: `/${selectedLanguage}/about`,
      path: 'about',
    },
    {
      text: 'Projects',
      to: `/${selectedLanguage}/projects`,
      path: 'projects',
    },
  ]; */

  // navLinks.js
  const navLinks = {
    es: [
      {
        text: 'Home',
        to: `/${selectedLanguage}`,
        path: '',
      },
      {
        text: 'Acerca de',
        to: `/${selectedLanguage}/about`,
        path: 'about',
      },
      {
        text: 'Proyectos',
        to: `/${selectedLanguage}/projects`,
        path: 'projects',
      },
    ],
    en: [
      {
        text: 'Home',
        to: `/${selectedLanguage}`,
        path: '',
      },
      {
        text: 'About',
        to: `/${selectedLanguage}/about`,
        path: 'about',
      },
      {
        text: 'Projects',
        to: `/${selectedLanguage}/projects`,
        path: 'projects',
      },
    ],
    ca: [
      {
        text: 'Inici',
        to: `/${selectedLanguage}`,
        path: '',
      },
      {
        text: 'Sobre nosaltres',
        to: `/${selectedLanguage}/about`,
        path: 'about',
      },
      {
        text: 'Projectes',
        to: `/${selectedLanguage}/projects`,
        path: 'projects',
      },
    ],
  }[selectedLanguage];

  return (
    <nav className="bg-primary">
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <NavLink to={`/${selectedLanguage}`} exact>
              <img src="/images/logo_raul_blanco.svg" alt="Logo" className="h-8 w-8" />
            </NavLink>
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
          </div>
          
          <NavLinks 
            selectedLanguage={selectedLanguage} 
            navLinks={navLinks} 
          />
          
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
