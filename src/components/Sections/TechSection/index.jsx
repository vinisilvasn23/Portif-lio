import TechLists from "../../List/TechLists";
import styles from "./styles.module.css";

function TechSection() {
  return (
    <section className={styles.section__tech}>
      <h2>Tecnologias</h2>
      <ul>
        <TechLists />
      </ul>
    </section>
  );
}

export default TechSection;
