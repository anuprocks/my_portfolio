import React , { useContext } from 'react'
import './Services.css'
import Card from '../Card/Card'
import Resume from '../Services/Resume.pdf'
import photoshop from '../Assets/phot0shop.png'
import videoeditor from '../Assets/videoeditor.png'
import webdev from '../Assets/webdev.png'
import { themeContext } from '../../Context'
import { motion } from "framer-motion";

const Services = () => {
     // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };


  return (
    <>
        <div className="services" id='Services'>
            {/* left side */}
            <div className="awesome">
                {/* dark mode */}
                <span style={{ color: darkMode ? "white" : "" }}>My</span>
                <span>Services</span>
                <span>
                Professional web development, expert photo editing, and skilled video editing services tailored to your needs. Let's bring your digital visions to life!
                </span>
                <a href={Resume} download>
                <button className='btn s-btn'>Download CV</button>
                </a>
                <div className="blur s-blur1" style={{background:"#ABF1ff94"}}></div>
            </div>
            {/* rightside */}
            <div className="cards">
                {/* first card */}
                <motion.div
                initial={{ left: "19rem" }}
                whileInView={{ left: "11rem" }}
                transition={transition}
                >
                    <Card pic={webdev} heading={'Web Developer'} detail = {'Html,Css,NodeJs,Express,Bootstrap,React,Mongodb..'}/>
                </motion.div>
                {/* second card */}
                <motion.div
                initial={{ left: "22rem",top:"12rem" }}
                whileInView={{ left: "-4rem" }}
                transition={transition}
                >
                    <Card pic={photoshop} heading={'Photo Editor'} detail = {'Phtoshop,Canva,Adobelightroom'}/>
                </motion.div>
                {/* third card */}
                <motion.div
                initial={{ left: "19rem",top:"22rem" }}
                whileInView={{ left: "12rem" }}
                transition={transition}
                >
                   <Card pic={videoeditor} heading={'Video Editor'} detail = {'DaVinci Resolve'}  color="rgba(252, 166, 31, 0.45)"/>
                </motion.div>
                <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
            </div>
        </div>
    
    
    </>
  )
}

export default Services