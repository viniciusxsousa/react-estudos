import ItemLista from '../ItemLista'

function Lista(){
    return(
        <>
            <ul>
               <ItemLista marca='ferrari' anoLancamento={2000} ></ItemLista>
               <ItemLista marca='fiat' anoLancamento={2000} ></ItemLista>
               <ItemLista anoLancamento={3000}></ItemLista>
            </ul>
        </>
    )
}

export default Lista