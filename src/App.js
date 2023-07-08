
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact'
import Footer  from './Components/Footer/Footer';
import { themeContext } from './Context';
import { useContext } from 'react';
import Projects from './Components/Projects/Projects';
import Internships from './Components/Internships/Internships';
import ScrollButton from './Components/Scrollup/Scrollup';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="App"
      style={{
        background: darkMode? 'black':'',
        color: darkMode? 'white':'',
      }}
      > 
        <Navbar/>
        <Intro/>
        <Services/>
        <Projects/>
        <Internships/>
        <Contact/>
        <Footer/>
        <ScrollButton />
      </div>
    </>
  );
}

export default App;
