import { Link } from "react-router-dom";

function Nav(){
    return(
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/sobre'>Sobre</Link></li>
                <li><Link to='/contato'>Contato</Link></li>
            </ul>
        </div>
    )
}

export default Nav