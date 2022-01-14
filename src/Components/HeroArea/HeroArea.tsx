import './HeroArea.css';
import {useMediaQuery} from 'react-responsive';

const HeroArea = () => {
    // Screen size detection
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <div className={isTabletOrMobile ? 'mobile-container' : 'container'}>
            <div className='hero-text'>
                <h1>Ina Shen-Lewander</h1>
                <p>Game developer</p>
            </div>
        </div>
    );
}
export default HeroArea;
