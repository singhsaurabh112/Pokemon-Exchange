import logo from './assets/pikachu.png';
import './App.css';
import NavigationBar from './Components/NavigationBar';

function App() {
  return (
    <div className="App">
<nav
  className="navbar navbar-expand-lg navbar-dark bg-gradient-dark z-index-3 py-3">
  <div className="container">
    <a className="navbar-brand text-white" href="" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank">
      Argon Dashboard
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navigation">
      <ul className="navbar-nav navbar-nav-hover ms-auto">
        <div className="row">
          <div className="col-auto m-auto">
            <a className="text-white cursor-pointer">
              <i className="fa fa-cog fixed-plugin-button-nav"></i>
            </a>
          </div>
          <div className="col-auto m-auto">
            <div className="dropdown">
              <a className="text-white cursor-pointer" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-bell"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-right px-2 py-3 ms-n4" aria-labelledby="dropdownMenuButton">
                ...
              </ul>
            </div>
          </div>
          <div className="col-auto">
            <div className="bg-white border-radius-lg d-flex me-2">
              <input type="text" className="form-control border-0 ps-3" placeholder="Type here...">
              <button className="btn bg-gradient-primary my-1 me-1">Search</button>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</nav>
<nav
  className="navbar navbar-expand-lg navbar-light bg-white z-index-3 py-3">
  <div className="container">
    <a className="navbar-brand" href="" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank">
      Argon Dashboard
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navigation">
      <ul className="navbar-nav navbar-nav-hover ms-auto">
        <div className="row">
          <div className="col-auto m-auto">
            <a className="cursor-pointer">
              <i className="fa fa-cog fixed-plugin-button-nav"></i>
            </a>
          </div>
          <div className="col-auto m-auto">
            <div className="dropdown">
              <a className="cursor-pointer" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-bell"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-right px-2 py-3 ms-n4" aria-labelledby="dropdownMenuButton">
                ...
              </ul>
            </div>
          </div>
          <div className="col-auto">
            <div className="bg-white border-radius-lg d-flex me-2">
              <input type="text" className="form-control border-0 ps-3" placeholder="Type here...">
              <button className="btn bg-gradient-primary my-1 me-1">Search</button>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</nav>
</div>
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
