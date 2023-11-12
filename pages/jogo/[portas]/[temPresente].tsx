import Porta from "../../../components/Porta"
import { atualizarPorta, criarPortas } from "../../../functions/porta"
import { useEffect, useState } from "react"
import styles from "../../../styles/Jogo.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import ValoresInvalidos from "../../../components/ValoresInvalidos"

export default function Jogo(){
    const router = useRouter()

    const [valido, setValido] = useState(false)
    const [portas, setPorta] = useState([])

    useEffect(() => {
      const portas = +router.query.portas
      const temPresente = +router.query.temPresente

      const qtdePortasValida = portas >= 3 && portas <= 100
      const temPresenteValido = temPresente >= 1 && temPresente <= portas

      setValido(qtdePortasValida && temPresenteValido)
    }, [portas])

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

    function retornoComValidacao(){
      return (
        <>
          <div className={styles.portas}>
              {renderizarPorta()} 
          </div>
          <div className={styles.botoes}>
              <Link href={"../../"}> 
                  <button>Reiniciar Jogo</button>
              </Link>
          </div>
        </>
      )
    }
    return (
      <div id={styles.jogo}>
        {valido ? retornoComValidacao() : <ValoresInvalidos />}
      </div>
    )  
}