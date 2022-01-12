import './NavBar.css';

const NavBar = () => {
    return (
        <div className="nav">
            <img className="logo" src="src/images/avatar.png" alt="Ina Shen-Lewander's avatar"/>
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

