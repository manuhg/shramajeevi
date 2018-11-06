import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div>
        <header>
          {/* <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <a href="#" className="navbar-brand d-flex align-items-center md-auto">
            <strong>Shramajeevi</strong>
          </a>
          <nav className="my-2 my-md-0 mr-md-3">
        <a className="p-2 text-light" href="#">Home</a>
        <a className="p-2 text-light" href="#">About</a>
        <a className="p-2 text-light" href="#">Videos</a>
        <a className="p-2 text-light" href="#">Clients</a>
        <a className="p-2 text-light" href="#">Contact</a>
      </nav>
        </div>
      </div>  */}

          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom box-shadow">
            <div className="container d-flex justify-content-between">
              <h5 className="text-light mr-md-auto font-weight-normal">Shramajeevi</h5>
              <nav className="my-2 my-md-0 mr-md-3">
                <a className="p-2 text-light" href="#h">
                  Home
                </a>
                <a className="p-2 text-light" href="#a">
                  About
                </a>
                <a className="p-2 text-light" href="#v">
                  Videos
                </a>
                <a className="p-2 text-light" href="#c">
                  Clients
                </a>
                <a className="p-2 text-light" href="#co">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default Nav;
