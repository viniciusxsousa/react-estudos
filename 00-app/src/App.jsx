import { useState } from 'react'

import DefNome from './components/DefNome';
import Saudacao from './components/Saudacao';

function App() {

  const [nome, setNome] = useState();

  return (
    <>
     <h1>Renderização por lista</h1>
     <DefNome set={setNome}></DefNome>
     <Saudacao nome={nome}></Saudacao>
    </>
  )
}

export default App
