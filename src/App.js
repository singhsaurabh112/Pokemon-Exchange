import logo from './assets/pikachu.png';
import './App.css';
import NavigationBar from './Components/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <h1>
          <code>Welcome to the Pokemon Market</code>
        </h1>
        <div>
          <p>
            <code>Buy and sell your Pokemons</code>
          </p>
        </div>
      </body>
    </div>
  );
}

export default App;
