import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const NavLinks = ({ selectedLanguage, navLinks }) => {
  
  return (
    <div className={`hidden md:flex items-center space-x-4`}>
      {navLinks.map((navLink) => {

        return (
          <NavLink
            key={navLink.path}
            className={'nav-text'}
            to={navLink.to}
          >
            {navLink.text}
          </NavLink>
        );
      })}
    </div>
  );
};
