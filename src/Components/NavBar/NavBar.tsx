import './NavBar.css';
import avatar from '../../Images/avatar.png';
import {useState} from 'react';
import {useMediaQuery} from 'react-responsive';

const NavBar = () => {
    // Screen size detection
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    // Toggle nav list in tablet or mobile
    const [showNavList, setShowNavList] = useState(false);
    const onClick = () => setShowNavList(!showNavList);

    const HamburgerMenu = () => {
        return (
            <button onClick={onClick} className='hamburger' id="hamburger">
                <span className='material-icons'>menu</span>
            </button>
        );
    }

    const TabletOrMobileNavList = () => {
        return (
            <ul className='nav-list-container-TabletOrMobile set-list-style-to-none'>
                <li><a href="#about-me">About me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact-me">Contact</a></li>
            </ul>
        );
    }

    const DesktopOrLaptopNavList = () => {
        return (
            <ul className='nav-list-container-DesktopOrLaptop set-list-style-to-none'>
                <li><a href="#about-me">About me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact-me">Contact</a></li>
            </ul>
        );
    }
    
    return (
        <div className={isTabletOrMobile ? 'nav-container-TabletOrMobile' : 'nav-container-DesktopOrLaptop'}>
            <img className={isTabletOrMobile ? 'logo-TabletOrMobile' : 'logo-DesktopOrLaptop'} src={avatar} alt="My online avatar, a pink frog with a cupcake on her head" />
            {isTabletOrMobile && showNavList && <TabletOrMobileNavList />}
            {isTabletOrMobile && <HamburgerMenu />}
            {!isTabletOrMobile && <DesktopOrLaptopNavList />}
        </div>
    );
}
export default NavBar;

