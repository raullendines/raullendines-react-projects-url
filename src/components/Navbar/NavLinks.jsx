import { NavLink } from 'react-router-dom';

export const NavLinks = ({ selectedLanguage, navLinks }) => {
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
          to={navLink.to}
          exact={navLink.exact}
          isActive={(match, location) => isActive(match, location)} // Move isActive inside NavLink
        >
          {navLink.text}
        </NavLink>
      ))}
    </div>
  );
};
