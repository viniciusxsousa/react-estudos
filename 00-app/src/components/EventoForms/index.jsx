import { useState } from 'react'

function EventoForms(){

    const [user, setUser] = useState();
    const [senha, setSenha] = useState();

    function cadastrar(e){
        e.preventDefault();
        console.log(`Usuário: ${user}`);
        console.log(`Senha: ${senha}`);
    }

    return (
        <form onSubmit={cadastrar}>

            <div>
                <label htmlFor="user">Usuário: </label>
                <input 
                    type="text" 
                    name="user" 
                    id="user" 
                    placeholder="Digite seu usuário" 
                    onChange={(e) => setUser(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="pass">Senha: </label>
                <input 
                    type="password" 
                    id="pass" 
                    name="pass" 
                    placeholder="Digite sua senha: "
                    onChange={(e) => setSenha(e.target.value)}
                />
            </div>

            <input type="submit" value="Cadastrar" />
        </form>
    )
}

export default EventoForms