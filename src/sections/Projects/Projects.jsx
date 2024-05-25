import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/image.jpg';
import hipsster from '../../assets/stars.jpg';
import fitLift from '../../assets/season.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Krym-Gaziza/my-ads-board"
          h3="Architectural patterns"
          p="Board App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Krym-Gaziza/my-image-gallery"
          h3="Gallery"
          p="Image_Gallery"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Krym-Gaziza/Movie-Stars"
          h3="Movie"
          p="Stars"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Web"
          p="Season-H"
        />
      </div>
    </section>
  );
}

export default Projects;
