import { FunctionComponent } from 'react';
import { useMediaQuery } from 'react-responsive';
import { EnvironmentType } from '../../Enums';
import './EnvironmentTypePillButton.css';

/** Should be refactored together with WorkTypePillButton.tsx and .css */
const EnvironmentTypePillButton : FunctionComponent<{type: EnvironmentType, text: string}> = props => {
    // Screen size detection
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    
    const getEnvrionmentTypeClass = () => props.type == EnvironmentType.MadeInUnity ? 'pill-button-madein-unity' : 'pill-button-madein-unreal';
    
    return (
        <div className={'pill-button' + ' ' + getEnvrionmentTypeClass()}>
            <div className={isTabletOrMobile ? 'mobile-pill-text' : 'non-mobile-pill-text'}>{props.text}</div>
        </div>
    );
}
export default EnvironmentTypePillButton;

