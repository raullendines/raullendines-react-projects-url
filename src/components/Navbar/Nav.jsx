import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomLanguageDropdown } from './LanguageDropdown';

const Nav = ({ languages }) => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = t('navLinks', { returnObjects: true });

  return (
    <nav className="bg-primary">
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-4">
            <div className="md  w-full bg-primary">
              <ul className="flex gap-10 flex-row items-center text-center">
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

          <CustomLanguageDropdown
            languages={languages} 
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
