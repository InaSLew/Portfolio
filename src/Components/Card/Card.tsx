import './Card.css';
import {useMediaQuery} from 'react-responsive';
import {FunctionComponent} from 'react';
import Project from '../../Project';
import WorkTypePillButton from '../PillButton/WorkType/WorkTypePillButton';
import EnvironmentTypePillButton from '../PillButton/EnvironmentType/EnvironmentTypePillButton';

const Card: FunctionComponent<{project: Project}> = props => {
    // Screen size detection
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    
    return (
        <div className={isTabletOrMobile ? 'mobile-card' : 'non-mobile-card'}>
            <img className='project-image' src={props.project.img} alt={props.project.imgAltText} />
            <h3>{props.project.gameTitle}</h3>
            <WorkTypePillButton type={props.project.workType} text={props.project.workTypeText} />
            <EnvironmentTypePillButton type={props.project.environmentType} text={props.project.environmentTypeText} />
            <p className='sub-text'>{props.project.intro}</p>
        </div>
    );
}
export default Card;
