import './App.css';

import Conversor from './components/conversor'

function App() {
  return (
    <div className="App">
      <h2>Conversor de moedas</h2>
      <div className='Row'>
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>      
      <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
    </div>
  );
}

export default App;
