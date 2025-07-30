import classes from './Projects.module.scss';
import projectsData from '../../assets/cardInfo.json';
import Card from '../Card/Card';
const Projects = () => {
  return (
    <section id="projects" className={classes.projects}>
      <h1>Things I've Made</h1>
      <div className={classes.container}>
        {projectsData.projects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>
      {/* Add project components here */}
    </section>
  );
};
export default Projects;
