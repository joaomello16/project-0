import { useState } from "react";

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
            <button 
            onClick={menos}
            className="bg-red-400 px-4 py-2 text-white hover:bg-red-600 cursor-pointer border border-black rounded" 
            >
                menos
            </button>
            <button
             onClick={mais}
             className="bg-green-500 px-4 py-2 text-white hover:bg-green-600 cursor-pointer border border-black rounded" disabled ={numero >= 15 } 
             >
                mais
            </button>
            </div>
            {numero >= 15 && <p>Numero chegou a 15 botao mais desabilitado!</p>}
            {numero > 10 ? <p>Passou de 10!</p> : <p>Ainda não chegou em 10!</p>}
            {numero === 0 && <p>Esta zerado!</p>}

        </div>
    )
}

export default Contador