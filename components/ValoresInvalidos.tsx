import styles from "../styles/ValoresInvalidos.module.css"
import Link from "next/link"

export default function ValorInvalido(){
    return (
        <div id={styles.tela}>
            <div className={styles.TestoAviso}>
                <h1>Valores inválidos</h1>
                <p style={{display:"flex", flexDirection: "column"}}>
                    Obs: A quantidade de portas deve ter seu valor entre 3 e 100 portas, 
                    o numero da porta premiada deve estar coerente com a quantidade de portas, 
                    sendo então entre 1 e 100.
                </p>
            </div>
            <div className={styles.botoes}>
                <Link href={"../../"}> 
                    <button>Retornar ao menu do Jogo</button>
                </Link>
            </div>
        </div>
    )
}