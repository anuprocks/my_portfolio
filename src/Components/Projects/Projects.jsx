import React ,{ useContext }from 'react'
import './Projects.css'
import project1 from '../Assets/project1.jpg'
import TextUtils from "../Assets/textutils.jpg"
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
        <img src={TextUtils} alt="" />
        <h2>TextUtils</h2>
        <p> A versatile online tool that effortlessly converts text between lowercase and uppercase. Count the words in your text and estimate the reading time to optimize your communication.</p>
        <a href="https://anuprocks.github.io/TextUtils/" target='_blank'> <span style={{ color: darkMode ? "white" : "" }}>Visit</span></a>
        </div>
        
    </div>
    </>
  )
}

export default Projects