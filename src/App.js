import logo from './assets/pikachu.png';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Pokemon Exchange</code>
        </p>
        <a
          className="App-link"
        >
          Exchange your Pokemon NFTs.
        </a>
      </header>
    </div>
  );
}

export default App;
