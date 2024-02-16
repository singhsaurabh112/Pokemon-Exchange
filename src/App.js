import logo from './assets/pikachu.png';
import NavigationBar from './Components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <body>
      <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <code>Welcome to the Pokemon Exchange</code>
        </h1>
        <div>
          <p>
            <button className='btn btn-warning'>Buy and sell your Pokemons</button>
          </p>
        </div>
      </body>
    </div>
  );
}

export default App;
