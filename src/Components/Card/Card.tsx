import './Card.css';
import img from '../../Images/crystalMountainThumbnail.png';
import {useMediaQuery} from 'react-responsive';

const Card = () => {
    // Screen size detection
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    
    return (
        <div className={isTabletOrMobile ? 'mobile-card' : 'non-mobile-card'}>
            <img src={img} alt="" />
        </div>
    );
}
export default Card;
