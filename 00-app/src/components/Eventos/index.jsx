function Eventos({contador}){

    function exemplo(){
        console.log(`Contador: ${contador}`);
    }

    return(
        <div>
            <p>Click para disparar o evento!</p>
            <button onClick={exemplo}>Ativar</button>
        </div>
    )
}

export default Eventos