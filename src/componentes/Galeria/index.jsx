import Tags from "../Tags";
import styles from "./galeria.module.scss";
import fotos from "./fotos.json";
import Cards from "./Cards";
import { useState } from "react";

const Galeria = () => {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map((valor) => valor.tag))];

  const filtrarFotos = (tag) => {
    const fotosFiltradas = fotos.filter(foto => {
      return foto.tag === tag;
    });
    
    setItens(fotosFiltradas);
  }
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens}></Tags>
      <Cards itens={itens} styles={styles}></Cards>
    </section>
  );
};

export default Galeria;
