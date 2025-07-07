import { useState } from "react";
import Botao from './Botao'

function Contador (){

    const [numero, setNumero] = useState(0)

    function mais () {
        setNumero(numero + 1)
    }
    function menos (){
        setNumero(numero - 1)
    }

    return(
        <div className="p-10 bg-amber-200 flex flex-col gap-y-3 rounded-md"> 
            <h1>Contador</h1>
            <p className={`text-8xl 
                ${numero < 0 ? 'text-red-600'  :  numero > 0 ? 'text-green-600' : 'text-black'} `}>
                {numero}
            </p>
            <div className="flex justify-center gap-x-3">
            <Botao onClick={menos} cor="red" >menos</Botao>
            <Botao onClick={mais} cor="green" >mais</Botao>
            
            </div>
            {numero > 10 ? <p>Passou de 10!</p> : <p>Ainda não chegou em 10!</p>}
            {numero === 0 && <p>Esta zerado!</p>}

        </div>
    )
}

export default Contador