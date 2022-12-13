import home from "../../assets/icones/home.png";
import maisCurtidas from "../../assets/icones/mais-curtidas.png";
import maisVistas from "../../assets/icones/mais-vistas.png";
import novas from "../../assets/icones/novas.png";
import surpreendaMe from "../../assets/icones/surpreenda-me.png";
import styles from "./menu.module.scss";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={home} alt="Ícone de início"></img>
          <a href="#">Início</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisCurtidas} alt="Ícone de mais curtidas"></img>
          <a href="#">Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisVistas} alt="Ícone de mais vistas"></img>
          <a href="">Mais vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={novas} alt="Ícone de novas"></img>
          <a href="#">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpreendaMe} alt="Ícone de surpreenda-me"></img>
          <a href="#">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;