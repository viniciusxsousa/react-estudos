import PropTypes from 'prop-types';

function ItemLista({marca, anoLancamento}){
    return(
        <>
            <li> {marca} - {anoLancamento} </li>
        </>
    )
}

ItemLista.propTypes = {
    marca: PropTypes.string,
    anoLancamento: PropTypes.number
};

ItemLista.defaultProps = {
    marca: 'Não informado',
}


export default ItemLista