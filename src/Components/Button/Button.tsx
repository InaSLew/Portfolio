import { FunctionComponent } from 'react';
import './Button.css';

const Button : FunctionComponent<{id : string}> = props => {
    return (
        <div className='button'><a href={props.id}>About me</a></div>
    );
}
export default Button;
