import logo from './assets/pikachu.png';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Pokemon Exchange</code>
         <br/> Exchange your Pokemon NFTs.
        </p>
      </header>
    </div>
  );
}

export default App;
