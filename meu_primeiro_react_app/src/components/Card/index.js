import { useState } from "react";

//usestate serve para criar componentes, funções, efeitos dinâmicos e animações
const Card = () =>{
    
    const [valor, setValor] = useState(0)
    
    function Adicionar(){
        setValor (valor + 1)
    }

    function Remover(){
        setValor (valor - 1)
    }

    return(
        <div class="card">
            <div class="card-header">
                Meu primeiro Card
            </div>
            <div class="card-body">
                <button 
                    type="button" 
                    class="btn btn-danger"
                    onClick={Remover}
                    >
                    Remover
                </button>
                <button 
                    type="button" 
                    class="btn btn-success"
                    onClick={Adicionar}
                >
                Adicionar
                </button>
                <p>{valor}</p>
            </div>
        </div>
    )
}

export default Card;