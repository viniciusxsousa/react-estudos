import { Conteiner } from './styles'

function Pessoa(props){
    return(
        <Conteiner>
            <img src={props.foto} alt={props.nome}></img>
            <h3>Nome: {props.nome}</h3>
            <p>Idade: {props.idade}</p>
        </Conteiner>
    )
}

export default Pessoa