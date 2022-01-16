import './Card.css';
import {useMediaQuery} from 'react-responsive';
import {FunctionComponent} from 'react';
import Project from '../../Project';

const Card: FunctionComponent<{project: Project}> = props => {
    // Screen size detection
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    
    return (
        <div className={isTabletOrMobile ? 'mobile-card' : 'non-mobile-card'}>
            <img src={props.project.img} alt={props.project.imgAltText} />
        </div>
    );
}
export default Card;
