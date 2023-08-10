import styles from "./styles.module.css";
import image from "../../../assets/git-icon.png";
function ProjectCard({ name, description }) {
  return (
    <li className={styles.project__card}>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <a href="">Saiba mais</a>
      </div>
      <img src={image} alt="icone github" />
    </li>
  );
}

export default ProjectCard;
