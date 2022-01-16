import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Footer from './Components/Footer/Footer';
import HeroArea from './Components/HeroArea/HeroArea';
import NavBar from "./Components/NavBar/NavBar";
import ProjectsArea from './Components/ProjectsArea/ProjectsArea';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div>
      <ScrollToTop />
      <NavBar />
      <div className='hero'>
        <HeroArea />
      </div>
      <AboutMe />
      <ProjectsArea />
      <Footer />
    </div>
  );
}

export default App;
