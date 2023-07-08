import React, { useContext } from "react";
import "./Intro.css";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import vector1 from '../Assets/Vector1.png';
import vector2 from '../Assets/Vector2.png';
import boy from '../Assets/boy.png';
import { themeContext } from '../../Context';
import { Link } from "react-scroll";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span style={{ color: darkMode ? "white" : "" }}>Hi! I am</span>
            <span>Anup Deka</span>
            <p className="description">
              Web Developer & Competitive Coder. Proficient in front-end
              development using HTML, CSS, JavaScript, and frameworks like
              React. Passionate about solving algorithmic problems and
              participating in coding competitions.
            </p>
          </div>
          <Link spy={true} to="contactme" smooth={true}>
            <button className="btn i-btn">Contact me</button>
          </Link>
          <div className="i-icons">
            <a href="https://www.linkedin.com/in/anup-deka-a61a56217" target="_blank" rel="noreferrer" >
              <Linkedin
                color={darkMode ? "white" : "black"}
                size={"3rem"}
                className="bounce-icon"
              />
            </a>
            <a href="https://www.facebook.com/anup.deka.5099/" target="_blank" rel="noreferrer" >
              <Facebook
                color={darkMode ? "white" : "black"}
                size={"3rem"}
                className="bounce-icon"
              />
            </a>
            <a href="https://github.com/anuprocks" target="_blank" rel="noreferrer" >
              <Gitub
                color={darkMode ? "white" : "black"}
                size={"3rem"}
                className="bounce-icon"
              />
            </a>
          </div>
        </div>

        <div className="i-right">
          <img src={vector1} alt="" className="fade-in" />
          <img src={vector2} alt="" className="fade-in" style={{ animationDelay: "0.5s" }} />
          <img src={boy} alt="" className="fade-in" style={{ animationDelay: "1s" }} />
        </div>
      </div>
    </>
  );
};

export default Intro;
