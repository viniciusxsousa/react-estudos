import { useState } from 'react'

function Condicional(){

    const [email, setEmail] = useState();
    const [emailUser, setEmailUser] = useState();

    function cadastrarEmail(e){
        e.preventDefault();
        setEmailUser(email);
    }

    function limparEmail(){
        setEmailUser('');
    }

    return(
        <div>
            <form onSubmit={cadastrarEmail} >
                <input 
                    type="email" 
                    placeholder="Digite seu e-mail..." 
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input type="submit" value="Cadastrar" />
            </form>
            {emailUser && (
                <div>
                    <p>O email do usuário é {email}</p>
                    <button onClick={limparEmail}>Limpar</button>
                </div>
            )}
        </div>
    )
}

export default Condicional