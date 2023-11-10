import Porta from "../components/Porta"
import { atualizarPorta, criarPortas } from "../functions/porta"
import { useState } from "react"
import styles from "../styles/Jogo.module.css"
import Link from "next/link"

export default function Jogo(){
    const [portas, setPorta] = useState(criarPortas(3, 2))

    function renderizarPorta(){
      return portas.map(porta => {
        return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPorta(atualizarPorta(portas, novaPorta))}/>
  
      })
    }
    return (
      <div id={styles.jogo}>
        <div className={styles.portas}>
            {renderizarPorta()} 
        </div>
        <div className={styles.botoes}>
            <Link href={"/"}> 
                <button>Reiniciar Jogo</button>
            </Link>
        </div>
      </div>
    )  
}