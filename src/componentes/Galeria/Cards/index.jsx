
import favorito from './favorito.png';
import open from './open.png';

const Cards = ({itens, styles}) => {
  return (
    <ul className={styles.galeria__cards}>
      {itens.map((item) => {
        return (
          <li key={item.id} className={styles.galeria__card}>
            <img
              className={styles.galeria__imagem}
              src={item.imagem}
              alt={item.titulo}
            ></img>
            <p className={styles.galeria__descricao}>{item.titulo}</p>
            <div>
              <p>{item.creditos}</p>
              <span>
                <img src={favorito} alt="icone coração de curtir"></img>
                <img src={open} alt="icone de abrir modal"></img>
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Cards;
