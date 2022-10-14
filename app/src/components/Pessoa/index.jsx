function Pessoa(props){
    return(
        <div>
            <img src={props.foto} alt={props.nome}></img>
            <h3>Nome: {props.nome}</h3>
            <p>Idade: {props.idade}</p>
        </div>
    )
}

export default Pessoa