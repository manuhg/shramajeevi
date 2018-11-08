import React, { Component } from 'react';
import Pages from 'Pages.js';
import 'css/Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.nav_links = Pages;
    this.r_nav = {};
    for (var i = 0; i < this.nav_links.length; i++) this.r_nav['#' + this.nav_links[i][1]] = i;

    // this.state = { active: 0 };
    this.state = { active: 56 };
    this.setActive = this.setActive.bind(this);
  }
  setActive(e) {
    this.setState({ active: this.r_nav[e.target.getAttribute('href')] });
  }
  render() {
    const { nav_links } = this;
    return (
      <header id="nav_bar" className="masthead bg-dark mb-auto fixed-top">
        <div className="inner">
          <h3 className="masthead-brand text-light text-center navbrand_color">Shramajeevi</h3>
          <nav className="nav nav-masthead justify-content-center">
            {this.nav_links.map((e, i) => (
              <a
                key={i}
                // onClick={e => this.setActive(e)}
                className={'nav-link text-light ' + (this.state.active === i ? 'active' : '')}
                href={'#' + nav_links[i][1]}
              >
                {nav_links[i][0]}
              </a>
            ))}
          </nav>
        </div>
      </header>
    );
  }
}
export default Nav;
