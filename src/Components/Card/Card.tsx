import './Card.css';
import {useMediaQuery} from 'react-responsive';
import {FunctionComponent, useState} from 'react';
import Project from '../../Project';
import WorkTypePillButton from '../PillButton/WorkTypePillButton';
import EnvironmentTypePillButton from '../PillButton/EnvironmentTypePillButton';

const Card: FunctionComponent<{project: Project}> = props => {
    // Screen size detection
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const [showCardDetail, setShowCardDetail] = useState(false);

    const onCardClicked = () => {
        setShowCardDetail(!showCardDetail);
        console.log('Card ' + props.project.gameTitle + ' clicked');
    }

    const CardDetail = () => {
        return (
            <div className={isTabletOrMobile ? 'mobile-project-card-detail' : 'non-mobile-project-card-detail'}>
                <hr />
                {props.project.details.map((x,i) => <p key={i} className='sub-text'>{x}</p>)}
            </div>
        );
    }
    
    return (
        <div onClick={onCardClicked} className={isTabletOrMobile ? 'mobile-card' : 'non-mobile-card'}>
            <img className={isTabletOrMobile ? 'mobile-project-image' : 'non-mobile-project-image'} src={props.project.img} alt={props.project.imgAltText} />
            <h3>{props.project.gameTitle}</h3>
            <WorkTypePillButton type={props.project.workType} text={props.project.workTypeText} />
            <EnvironmentTypePillButton type={props.project.environmentType} text={props.project.environmentTypeText} />
            <p className='sub-text'>{props.project.intro}</p>
            {showCardDetail && <CardDetail />}
        </div>
    );
}

export default Card;
