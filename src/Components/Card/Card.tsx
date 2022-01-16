import './Card.css';
import {useMediaQuery} from 'react-responsive';
import {FunctionComponent, useState} from 'react';
import Project from '../../Project';
import WorkTypePillButton from '../PillButton/WorkTypePillButton';
import EnvironmentTypePillButton from '../PillButton/EnvironmentTypePillButton';

const Card: FunctionComponent<{project: Project}> = props => {
    // Screen size detection
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' });
    const [showCardDetail, setShowCardDetail] = useState(false);

    const onCardClicked = () => setShowCardDetail(!showCardDetail);

    const getCardClass = () => {
        if (isTabletOrMobile && !showCardDetail) return 'mobile-card';
        else if (isTabletOrMobile && showCardDetail) return 'mobile-card-expand';
        else if (!isTabletOrMobile && !showCardDetail) return 'non-mobile-card';
        else return 'non-mobile-card-expand';
    }

    const CardDetail = () => {
        return (
            <div>
                <hr />
                {props.project.details.map((x,i) => <p key={i} className='sub-text'>{x}</p>)}
                <ul>
                    {props.project.responsibleAreas.map((x,i) => <li key={i} className='sub-text card-detail-list-item'>{x}</li>)}
                </ul>
                <p className='sub-text'><a className='project-link' href={props.project.playDemoLink} target="_blank">Play here</a></p>
                <p className='sub-text'><a className='project-link' href={props.project.repoLink} target="_blank">Project repo here</a></p>
            </div>
        );
    }
    
    return (
        <div onClick={onCardClicked} className={getCardClass()}>
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
