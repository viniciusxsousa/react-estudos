function RendeLista({lista}){
    return(
        <div>
            <h2>Lista de coisas boas</h2>
            {lista.length > 0 ? (
            lista.map((elemento, indice) => (
                <p key={indice}>{elemento}</p>
            ))) : (
                <p>Não há itens na lista</p>
            )}
        </div>
    )
}

export default RendeLista