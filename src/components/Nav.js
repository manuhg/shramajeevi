import React, { Component } from 'react';
import 'css/Nav.css';

class Nav extends Component {
  render() {
    return (
      // <header>
      //   <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom box-shadow">
      //     <div className="container d-flex justify-content-between">
      //       <h5 className="text-dark mr-md-auto font-weight-normal">
      //         <strong style={{ color: 'rgb(61, 177, 8)' }}>Shramajeevi</strong>
      //       </h5>
      //       <nav className="my-2 my-md-0 mr-md-3">
      //         <a className="p-2 text-light" href="#h">
      //           Home
      //         </a>
      //         <a className="p-2 text-light" href="#a">
      //           About
      //         </a>
      //         <a className="p-2 text-light" href="#v">
      //           Videos
      //         </a>
      //         <a className="p-2 text-light" href="#c">
      //           Clients
      //         </a>
      //         <a className="p-2 text-light" href="#co">
      //           Contact
      //         </a>
      //       </nav>
      //     </div>
      //   </div>
      // </header>
      <header id="nav_bar" className="masthead bg-dark mb-auto fixed-top">
        <div className="inner">
          <h3 className="masthead-brand text-light text-center navbrand_color">Shramajeevi</h3>
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link text-light active" href="#home">
              Home
            </a>
            <a className="nav-link text-light" href="#about">
              About
            </a>
            <a className="nav-link text-light" href="#videos">
              Videos
            </a>
            <a className="nav-link text-light" href="#clients">
              Clients
            </a>
            <a className="nav-link text-light" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>
    );
  }
}
export default Nav;
/* <div className="navbar navbar-dark bg-dark box-shadow">
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
      </div>  */
