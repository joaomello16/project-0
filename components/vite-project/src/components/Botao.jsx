function Botao ({onClick, children, cor = 'blue'}){
    const cores = {
        red: 'bg-red-400 hover:bg-red-600',
        blue: 'bg-blue-500 hover:bg-blue-600',
        green: 'bg-green-500 hover:bg-green-600'
    }
    return(
        <button
        onClick={onClick}
        className={`px-4 py-2 text-white border border-black rounded cursor-pointer ${cores[cor]}`}
        >
            {children}
        </button>
    )
}
export default Botao