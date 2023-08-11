// Nav.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
const LangDropdown = ({ selectedLanguage, languages, handleLanguageChange }) => (
  <div>
    <select
      className="text-white"
      value={selectedLanguage}
      onChange={(e) => {
        const selectedLang = e.target.value;
        handleLanguageChange(selectedLang);
      }}
    >
      {languages.map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </select>
  </div>
);

const NavLinks = ({ selectedLanguage, navLinks }) => {
  const isActive = (match, location) => {
    if (!match) {
      return false;
    }
    const currentLang = location.pathname.split('/')[1];
    return currentLang === selectedLanguage;
  };

  return (
    <div className={`hidden md:flex items-center space-x-4`}>
      {navLinks.map((navLink) => (
        <NavLink
          key={navLink.path}
          className={`text-white`}
          activeClassName={`font-bold`}
          isActive={(match, location) => isActive(match, location)}
          to={navLink.to}
          exact={navLink.exact}
        >
          {navLink.text}
        </NavLink>
      ))}
    </div>
  );
};

const Nav = () => {
  const { lang } = useParams();
  const [isOpen, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(lang || 'en'); // Set a default language if lang is not available
  const languages = ['en', 'ca', 'es'];

  const location = useLocation();
  const navigate = useNavigate();

  const handleLanguageChange = (selectedLang) => {
    const newPath = location.pathname.replace(/\/[a-z]+(?=\/|$)/, `/${selectedLang}`);
    navigate(newPath);
  };

  useEffect(() => {
    setSelectedLanguage(lang || 'en');
  }, [lang]);

  const navLinks = [
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
  ];

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
          
          
          <NavLinks selectedLanguage={selectedLanguage} navLinks={navLinks} />

          <LangDropdown selectedLanguage={selectedLanguage} languages={languages} handleLanguageChange={handleLanguageChange} />
          
        </div>
      </div>
    </nav>
  );
};

export default Nav;

