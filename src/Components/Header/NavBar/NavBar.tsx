import './NavBar.css';
import avatar from '../../avatar.png';

// Note: on refactor list

const NavBar = () => {
    return (
        <div className="nav">
            <img className="logo" src={avatar} alt="Ina Shen-Lewander's avatar"/>
            <ul id="nav-list">    
                <li><a href="#about-me">About me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact-me">Contact</a></li>
            </ul>
            <button className="hamburger" id="hamburger">
                <span className="material-icons">menu</span>
            </button>
        </div>
    );
}
export default NavBar;

