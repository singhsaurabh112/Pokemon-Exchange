import "./NavigationBar.css";
import logo from "../assets/pikachu.png";
import wallet from "../assets/wallet-filled-money-tool.png";

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white z-index-3 py-3">
      <div className="container">
        <a
          className="navbar-brand"
          href=""
          rel="tooltip"
          title="Designed and Coded by Creative Tim"
          data-placement="bottom"
          target="_blank"
          align="center"
          justify="center"
        >
          <img className="navbar-logo mr-2" src={logo} alt="logo" />
          Pokemon Exchange
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
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
                  <a
                    className="cursor-pointer"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-bell"></i>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-right px-2 py-3 ms-n4"
                    aria-labelledby="dropdownMenuButton"
                  >
                    ...
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="bg-white border-radius-lg d-flex me-2">
                  <input
                    type="text"
                    className="form-control border-0 ps-3 mr-3"
                    placeholder="Type here..."
                  />
                  <button className="btn bg-gradient-primary text-white my-1 me-1">
                    Search
                  </button>
                  <div className="balance-text ml-3 text-dark">
                    <img src={wallet} className="navbar-logo mr-3" />
                    $1000
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
