import { FunctionComponent } from "react";
import './Button.css';


const Button : FunctionComponent<{ buttonLabel: string, buttonLink: string }> = props => {
    const buttonLabel = props.buttonLabel;
    const buttonLink = props.buttonLink;

    return (
        <div className="button"><a href={buttonLink}>{buttonLabel}</a></div>
    );
}
export default Button;
