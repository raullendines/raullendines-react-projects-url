import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const NavLinks = ({ selectedLanguage, navLinks }) => {
  const location = useLocation();

  const isProjectsOrAboutActive = navLinks
    .filter(navLink => navLink.path === 'projects' || navLink.path === 'about')
    .some(navLink => location.pathname.endsWith(navLink.path));

  return (
    <div className={`hidden md:flex items-center space-x-4`}>
      {navLinks.map((navLink) => {

      

        return (
          <NavLink
            key={navLink.path}
            className={'text-white'}
            to={navLink.to}
          >
            {navLink.text}
          </NavLink>
        );
      })}
    </div>
  );
};
