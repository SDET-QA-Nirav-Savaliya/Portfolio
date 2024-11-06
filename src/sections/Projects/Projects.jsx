import styles from './ProjectsStyles.module.css';
import GE_Shopping from '../../assets/GE_Shopping.png';
import iMoveIt from '../../assets/iMoveit.png';
import GoodFood from '../../assets/GoodFood.png';
import iLoadIt from '../../assets/iLoadit.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={GE_Shopping}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Grocery Express"
          p="E-Commarce App"
        />
        <ProjectCard
          src={iMoveIt}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="IMoveIt"
          p="Delivery Management"
        />
        <ProjectCard
          src={GoodFood}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="GoodFood Shopping"
          p="Online Food Service"
        />
        <ProjectCard
          src={iLoadIt}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="iLoadIt"
          p="Real-Time Order Tracking"
        />
      </div>
    </section>
  );
}

export default Projects;
