import React from 'react';
import { NavLink } from 'react-router-dom';


export const NavLinks = ({ selectedLanguage }) => {
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
  };
  
  return (
    <div className={`hidden md:flex items-center space-x-4`}>
      {console.log(selectedLanguage)}
      {console.log(navLinks[selectedLanguage])}
      {navLinks[selectedLanguage].map((navLink) => (
        <NavLink key={navLink.path} className={'nav-text'} to={navLink.to} exact>
          {navLink.text}
        </NavLink>
      ))}
    </div>
  );
};
