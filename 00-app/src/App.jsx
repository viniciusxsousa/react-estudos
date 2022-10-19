import RendeLista from "./components/RendeLista";

function App() {

  const itensLista = ['jogar', 'comer', 'dormir'];

  return (
    <>
     <h1>Renderização por lista</h1>
      <RendeLista lista={itensLista}></RendeLista>
      <RendeLista lista={[]}></RendeLista>
    </>
  )
}

export default App
