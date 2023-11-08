import Porta from "../components/Porta"
import PortaModel from "../model/porta"

export default function Home() {

  const p1 = new PortaModel(1)

  return (
    <div style={{display: "flex"}}>
      <Porta selecionada />
      <Porta porta={p1}/>
      <Porta />
    </div>
  )
}
