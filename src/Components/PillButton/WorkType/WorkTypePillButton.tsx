import { FunctionComponent } from 'react';
import { WorkType } from '../../../Enums';
import './WorkTypePillButton.css';


const WorkTypePillButton : FunctionComponent<{type: WorkType, text: string}> = props => {
    
    const getWorkTypeClass = () => {
        return props.type == WorkType.Independent ? 'pill-button-project-independent' :
        props.type == WorkType.SchoolProject ? 'pill-button-school-project' : 
        'pill-button-project-game-jam';
    }
    
    return (
        <div className={'pill-button' + ' ' + getWorkTypeClass()}>{props.text}</div>
    );
}
export default WorkTypePillButton;

