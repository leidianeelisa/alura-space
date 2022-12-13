import styles from './botao.module.scss'

const Botao = ({children}) => {
  return (
    <button className={styles.botao}>{children}</button>
  )
}

export default Botao;