import { useMediaQuery } from 'react-responsive';
import Card from '../Card/Card';
import './Projects.css';

const Projects = () => {
    // Screen size detection
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    
    return (
        <section id='projects' className='projects-container'>
            <h2>Projects</h2>
            <div className={isTabletOrMobile ? 'mobile-project-cards-container' : 'non-mobile-project-cards-container'}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    );
}
export default Projects;
