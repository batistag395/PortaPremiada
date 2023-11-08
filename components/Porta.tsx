import styles from "../styles/Porta.module.css"
import PortaModel from "../model/porta"

interface PortaProps{
    porta: PortaModel
}

export default function Porta(props: PortaProps){

    const {porta} = props

    const selecionada = porta.selecionada ? styles.selecionada : ''
    
    return (
        <div className={styles.area}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                <div className={styles.porta}>
                    <div className={styles.numero}>
                        3
                    </div>
                    <div className={styles.macaneta}></div>
                </div>
            </div>
            <div className={styles.chao}>

            </div>
        </div>
    )
}