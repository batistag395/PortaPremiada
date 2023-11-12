import Porta from "../../../components/Porta"
import { atualizarPorta, criarPortas } from "../../../functions/porta"
import { useEffect, useState } from "react"
import styles from "../../../styles/Jogo.module.css"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Jogo(){
    const router = useRouter()

    const [portas, setPorta] = useState([])

    useEffect(() => {
      const portas = +router.query.portas
      const temPresente = +router.query.temPresente
      setPorta(criarPortas(portas, temPresente))
    }, [router?.query])

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
            <Link href={"../../"}> 
                <button>Reiniciar Jogo</button>
            </Link>
        </div>
      </div>
    )  
}