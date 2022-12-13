import logo from './logo.png';
import search from './search.png';
import styles from './cabecalho.module.scss';

const Cabecalho = () => {
  return(
    <header className={styles.cabecalho}>
      <img src={logo} alt="Logo do Alura Space"></img>
      <div className={styles.cabecalho__container}>
        <input className={styles.cabecalho__input} type="text" placeholder="O que você procura?"></input>
        <img src={search} alt="Ícone de busca"></img>
      </div>
    </header>
  )
}

export default Cabecalho;