import PortaModel from "../model/porta";

export function criarPortas(qtd: number, selecionada: number): PortaModel[]{
    return Array.from({ length: qtd}, (_, i) => {
        const numero = i + 1
        const temPresente = numero ===selecionada
        return new PortaModel(numero, temPresente)
    })
}

export function atualizarPorta(portas: PortaModel[], portaModificada: PortaModel): PortaModel[]{
    return portas.map(portaAtual => {
        const igualAModificada = portaAtual.numero === portaModificada.numero
 
        if(igualAModificada) {
            return portaModificada
        } else {
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
        }
    })
}