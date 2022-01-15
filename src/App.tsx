import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import HeroArea from './Components/HeroArea/HeroArea';
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className='hero'>
        <HeroArea />
      </div>
      <AboutMe />
    </div>
  );
}

export default App;
