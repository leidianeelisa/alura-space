import Cabecalho from 'componentes/Cabecalho';
import Galeria from 'componentes/Galeria';
import Menu from 'componentes/Menu';
import Populares from 'componentes/Populares';
import banner from './banner.png';
import styles from './paginaInicial.module.scss';

const PaginaInicial= () => {
  return (
    <>
      <Cabecalho></Cabecalho>
      <main className={styles.main}>
        <section className={styles.principal}>
        <Menu></Menu>
        <div className={styles.principal__imagem}>
          <h1>A galeria mais completa do espaço</h1>
          <img src={banner} alt="A imagem da terra vista do espaço"></img>
        </div>
        </section>
        <div className={styles.galeria}>
          <Galeria></Galeria>
          <Populares></Populares>
        </div>
      </main>
    </>
  )
}

export default PaginaInicial;