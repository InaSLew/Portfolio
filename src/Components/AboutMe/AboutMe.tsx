import './AboutMe.css';
import avatar from '../../Images/avatar.png';

const AboutMe = () => {
    return (
        <section id='about-me' className='about-me-container'>
            <div className='information'>
                <h2>About Me</h2>
                <p>Hello! I am a former web developer turning game developer.</p>
                <p>I enjoy problem solving and seeing a game come to life through the process!</p>
                <p>I also like making mini-games in my free time; if my energy allows with self-drawn art assets as well.</p>
            </div>
            <div className='headshot-container'>
                <img className='head-shot' src={avatar} alt="FILL_ME_IN" />
            </div>
        </section>
    );
}
export default AboutMe;
