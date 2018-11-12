import React, { Component } from 'react';
import Pages from 'Pages.js';
import 'css/Nav.css';
import logo from 'img/logo.png';
var navimg = false;
class Nav extends Component {
  constructor(props) {
    super(props);
    this.nav_links = Pages;
    this.r_nav = {};
    for (var i = 0; i < this.nav_links.length; i++) this.r_nav['#' + this.nav_links[i][1]] = i;

    // this.state = { active: 0 };
    this.state = { active: 56, toggle: false };
    this.toggle = this.toggle.bind(this);
    this.toggle_flag = false;
    this.setActive = this.setActive.bind(this);
  }
  toggle() {
    this.toggle_flag = !this.toggle_flag;
    document.getElementById('navbarshram').style.display = this.toggle_flag ? 'block' : 'none';
  }
  setActive(e) {
    this.setState({ active: this.r_nav[e.target.getAttribute('href')] });
  }
  render() {
    const { nav_links } = this;
    return (
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="/">
              <h3>
                {navimg ? <img src={logo} style={{ height: '40px' }} alt="Shramajeevi" /> : <span />}
                Shramajeevi
              </h3>
            </a>
            <button className="navbar-toggler" type="button" onClick={this.toggle} aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse collapse_sh navbar-collapse justify-content" id="navbarshram">
              <ul className="navbar-nav ml-auto">
                {this.nav_links.map((e, i) => (
                  <li key={i} className={'nav-item  ' + (this.state.active === i ? 'active' : '')}>
                    <a
                      key={i}
                      onClick={this.toggle}
                      className={'nav-link text-white ' + (this.state.active === i ? 'active' : '')}
                      href={'#' + nav_links[i][1]}
                    >
                      {nav_links[i][0]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
export default Nav;
