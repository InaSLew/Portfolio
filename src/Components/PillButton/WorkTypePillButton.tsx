import { FunctionComponent } from 'react';
import { useMediaQuery } from 'react-responsive';
import { WorkType } from '../../Enums';
import './WorkTypePillButton.css';

/** Should be refactored together with EnvironmentTypePillButton.tsx and .css */
const WorkTypePillButton : FunctionComponent<{type: WorkType, text: string}> = props => {
    // Screen size detection
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    
    const getWorkTypeClass = () => {
        return props.type === WorkType.Independent ? 'pill-button-project-independent' :
        props.type === WorkType.SchoolProject ? 'pill-button-school-project' : 
        'pill-button-project-game-jam';
    }
    
    return (
        <div className={'pill-button' + ' ' + getWorkTypeClass()}>
            <div className={isTabletOrMobile ? 'mobile-pill-text' : 'non-mobile-pill-text'}>{props.text}</div>
        </div>
    );
}
export default WorkTypePillButton;

