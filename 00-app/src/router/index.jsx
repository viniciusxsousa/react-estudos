import { BrowserRouter, Route, Routes } from "react-router-dom"

import Contato from "../screen/Contato"
import Sobre from "../screen/Sobre"
import Home from "../screen/Home"

function Router (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/Contato" element={<Contato/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router