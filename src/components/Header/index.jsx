import Button from "../Button/Button";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h2>Portifólio</h2>
      <div className={styles.container__tag}>
        <span>Sobre</span>
        <span>Stack</span>
        <span>Projetos</span>
      </div>
      <Button type="button" children={"Contato"} />
    </header>
  );
}

export default Header;
