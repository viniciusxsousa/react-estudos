function EventoForms(){

    function envio(e){
        e.preventDefault();
        console.log('olá');
    }

    return (
        <form onSubmit={envio}>
            <div>
                <input type="text"  placeholder="Insira um texto"/>
            </div>
            <div>
                <input type="submit" value="Enviar" />
            </div>
        </form>
    )
}

export default EventoForms