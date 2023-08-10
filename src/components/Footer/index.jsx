import whatsapp from "../../assets/whatsapp-icon.png";
import github from "../../assets/github-icon.png";
import linkedin from "../../assets/linkedin-icon.png";
import { user } from "../../data/user";
import styles from "./styles.module.css";
import "../../styles/globalStyles.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content__icons}>
        <h2>Contato</h2>
        <img src={whatsapp} alt="icone whatsapp" />
        <img src={github} alt="icone github" />
        <img src={linkedin} alt="icone linkedin" />
      </div>
      <p>Todos os direitos reservados - {user}</p>
    </footer>
  );
}

export default Footer;
