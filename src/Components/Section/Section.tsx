import { FunctionComponent } from 'react';
import IContent from '../../Interfaces/IContent';
import './Section.css';


const Section : FunctionComponent<{ id: string, content: IContent }> = (props) => {
    return (
        <section id={props.id}>
            {props.content}
        </section>
    );
}
export default Section;
