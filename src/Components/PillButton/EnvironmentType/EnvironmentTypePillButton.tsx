import { FunctionComponent } from 'react';
import { EnvironmentType } from '../../../Enums';
import './EnvironmentTypePillButton.css';



const EnvironmentTypePillButton : FunctionComponent<{type: EnvironmentType, text: string}> = props => {
    
    const getEnvrionmentTypeClass = () => props.type == EnvironmentType.MadeInUnity ? 'pill-button-madein-unity' : 'pill-button-madein-unreal';
    
    return (
        <div className={'pill-button' + ' ' + getEnvrionmentTypeClass()}>{props.text}</div>
    );
}
export default EnvironmentTypePillButton;

