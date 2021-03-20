import React, { Component } from 'react';
import 'css/App.css';
import 'css/styles.css';

import Nav from 'components/Nav';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';

import Home from 'pages/Home';
import About from 'pages/About';
import Clients from 'pages/Clients';
import Videos from 'pages/Videos';
import Contact from 'pages/Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
  }

  render() {
    return (
      <div>
        <Nav />
        <Home />
        <Sidebar />
        <About />
        {/*<Clients />*/}
        {/*<Videos />*/}
        <Contact />
        <Footer />
      </div>
    );
  }

  updateDimensions() {
    var w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

    this.setState({ width, height });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }
}

export default App;
