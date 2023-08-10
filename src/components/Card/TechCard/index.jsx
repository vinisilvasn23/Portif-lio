import styles from "./styles.module.css";
function TechCard({ name, img }) {
  return (
    <li className={styles.tech__card}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
    </li>
  );
}

export default TechCard;
