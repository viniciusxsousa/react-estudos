import React from 'react'

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

function Home(){
    return(
        <div>
            <Nav></Nav>
            <h1>Tela Principal</h1>
            <p>Conteúdo da página</p>
            <Footer></Footer>
        </div>
    )
}

export default Home