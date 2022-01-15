import './App.css';
import HeroArea from './Components/HeroArea/HeroArea';
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className='hero'>
        <HeroArea />
      </div>
    </div>
  );
}

export default App;
