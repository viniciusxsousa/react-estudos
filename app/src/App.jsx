import Pessoa from './components/Pessoa';

function App() {
  return (
    <div>
      <Pessoa 
        foto='http://via.placeholder.com/150'
        nome='Vinicius sousa'
        idade='23'
      ></Pessoa>

      <Pessoa 
        foto='http://via.placeholder.com/150'
        nome='maria'
        idade='30'
      ></Pessoa>
    </div>
  )
}

export default App
