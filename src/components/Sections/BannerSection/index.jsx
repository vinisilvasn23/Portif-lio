import { username } from "../../../data/user";
import Button from "../../Button/Button";
import image from "../../../assets/banner-img.png";
import styles from "./styles.module.css";

function BannerSection() {
  return (
    <section className={styles.section__banner}>
      <div>
        <p className={styles.user__name}>{username}</p>
        <h2>Bem vindo ao meu portfólio</h2>
        <p className={styles.text__phrase}>Uma frase interessante sobre mim</p>
        <Button type="button" children={"Saiba mais"} />
      </div>
      <div>
        <img src={image} alt="imagem do banner" />
      </div>
    </section>
  );
}

export default BannerSection;
