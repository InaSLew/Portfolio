import './Header.css';
import HeroArea from './HeroArea/HeroArea';
import NavBar from './NavBar/NavBar';

const Header = () => {
    return (
        <header className="hero">
            <NavBar />
            <HeroArea />
        </header>
    );
}
export default Header;
