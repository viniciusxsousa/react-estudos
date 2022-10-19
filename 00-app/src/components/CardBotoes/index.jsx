import Botoes from "../Botoes"

function CardBotoes(){
    
    function evento01(){
        console.log('Evento 01 disparado!');
    }

    function evento02(){
        console.log('Evento 02 disparado!');
    }


    return(
        <>
            <p>Click para disparar.</p>
            <Botoes evento={evento01} text='Evento 01'></Botoes>
            <Botoes evento={evento02} text='Evento 02'></Botoes>
        </>
    )
}

export default CardBotoes