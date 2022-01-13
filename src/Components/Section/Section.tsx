import { FunctionComponent } from 'react';
import './Section.css';


const Section : FunctionComponent<{ id: string }> = (props) => {
    return (
        <section className="sub-section" id={props.id}>
          <div className="information">
              <h2>About Me</h2>
              <p>Hello! I am a former web developer turning game developer.</p>
              <p>I enjoy problem solving and seeing a game come to life through the process!</p>
              <p>I also like making mini-games in my free time; if my energy allows with self-drawn art assets as well.</p>
          </div>
          <div className="headshot-container">
              <img className="headshot" src="src/images/avatar.png" alt="Ina Shen-Lewander's avatar"/>
          </div>
      </section>
    );
}
export default Section;
