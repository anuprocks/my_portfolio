import React ,{ useContext }from 'react'
import './Projects.css'
import project1 from '../Assets/project1.jpg'
import project2 from "../Assets/photonew.png"
import { themeContext } from '../../Context';


const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
        <div className="head"><h1>My Projects</h1></div>
    <div className="ProjectContainer" id='projects'>
        <div className="project">
         <img src={project1} alt="" />
       
         <span style={{ color: darkMode ? "white" : "" }}><h2>QuipChat</h2></span>
         <p>Experience seamless communication with our intuitive chat app. Connect, share, and collaborate with friends and colleagues effortlessly.</p>
         <a href="https://quipchat.netlify.app/"> <span style={{ color: darkMode ? "white" : "" }}>Visit</span></a>
        </div>
        <div className="project">
        <img src={project2} alt="" />
        <h2>triSocialApp</h2>
        <p>Elevate your social media experience. Embrace a fresh digital community on our platform, designed for seamless sharing, vibrant interactions, and enriched connections. Join us in shaping the next era of online socializing.</p>
        <a href="https://trisocialapp.netlify.app/" target='_blank' rel="noreferrer"> <span style={{ color: darkMode ? "white" : "" }}>Visit</span></a>
        </div>
        
    </div>
    </>
  )
}

export default Projects