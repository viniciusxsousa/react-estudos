import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'

import { Ul } from './styled'

function Footer(){
    return(
        <footer>
            <Ul>
                <li><FaFacebookSquare/></li>
                <li><FaLinkedin/></li>
                <li><FaGithubSquare/></li>
            </Ul>
        </footer>
    )
}

export default Footer