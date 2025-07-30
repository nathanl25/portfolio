import { useState } from 'react';
import classes from './Header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Nathan Ly</h1>

      <button
        className={classes.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className={classes.hamburgerLine}></span>
        <span className={classes.hamburgerLine}></span>
        <span className={classes.hamburgerLine}></span>
      </button>

      <nav className={`${classes.nav} ${isMenuOpen ? classes.navOpen : ''}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
