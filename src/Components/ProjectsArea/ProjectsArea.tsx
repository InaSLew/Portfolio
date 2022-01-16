import {useMediaQuery} from 'react-responsive';
import Card from '../Card/Card';
import './ProjectsArea.css';
import projectData from '../../ProjectData';

const ProjectsArea = () => {
    // Screen size detection
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    
    return (
        <section id='projects' className='projects-container'>
            <h2>Projects</h2>
            <div className={isTabletOrMobile ? 'mobile-project-cards-container' : 'non-mobile-project-cards-container'}>
                {projectData.map(p => <Card key={p.key} project={p} />)}
            </div>
        </section>
    );
}
export default ProjectsArea;
