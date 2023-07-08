import React, { useContext } from 'react';
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import { Link } from 'react-scroll';
import { themeContext } from '../../Context';

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className={`n-wrapper ${darkMode ? 'dark-mode' : ''}`}>
        <div className="n-left">
          <div className="n-name">Anup Deka</div>
          <Toggle />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul>
              <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
                <li>Home</li>
              </Link>
              <Link spy={true} to="projects" smooth={true}>
                <li>Projects</li>
              </Link>
              <Link spy={true} to="internships" smooth={true}>
                <li>Internships</li>
              </Link>
              <Link spy={true} to="Services" smooth={true}>
                <li>Services</li>
              </Link>
            </ul>
          </div>
          {/* <Link spy={true} to="contactme" smooth={true}>
            <button className="btn">Contact me</button>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
