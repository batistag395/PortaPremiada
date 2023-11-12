import Cartao from "../components/Cartao";
import styles from "../styles/Formulario.module.css"
import Link from "next/link"
export default function Formulario() {

  return (
    <div className={styles.formulario}>
      <div style={{backgroundColor: "green", padding: "20px"}}>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao/>
      </div>
      <div>
        <Cartao/>
        <Cartao bgcolor="#28a085">
          <Link href={"/jogo/4/2"}>
           <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
