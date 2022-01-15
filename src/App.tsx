import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Footer from './Components/Footer/Footer';
import HeroArea from './Components/HeroArea/HeroArea';
import NavBar from "./Components/NavBar/NavBar";
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div>
      <NavBar />
      <div className='hero'>
        <HeroArea />
      </div>
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
