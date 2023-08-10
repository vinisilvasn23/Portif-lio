import ProjectsList from "../../List/ProjectsLists";
import styles from "./styles.module.css";

function ProjectSection() {
  return (
    <section className={styles.section__project}>
      <h2>Projetos</h2>
      <ul>
        <ProjectsList />
      </ul>
    </section>
  );
}

export default ProjectSection;
