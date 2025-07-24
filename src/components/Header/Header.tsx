import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>My Portfolio</h1>
      <nav className={classes.nav}>
        {/* <ul> */}
        {/* <li> */}
        <a href="#home">Home</a>
        {/* </li> */}
        {/* <li> */}
        {/* </li> */}
        {/* <li> */}
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        {/* </li> */}
        {/* <li> */}
        <a href="#contact">Contact</a>
        {/* </li> */}
        {/* </ul> */}
      </nav>
    </header>
  );
};

export default Header;
