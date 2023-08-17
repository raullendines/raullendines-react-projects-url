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
          
          <NavLinks selectedLanguage={selectedLanguage} /> {/* Pass selectedLanguage */}
          
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
