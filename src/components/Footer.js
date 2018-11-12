import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="ft text-muted text-center">
        <p>
          {' '}
          &copy;
          {new Date().getFullYear()}
          &nbsp; Shramajeevi Agri Films | All Rights Reserved
        </p>
        {/* <div className="container-fluid">
          <p className="float-left">
            &copy;
            {new Date().getFullYear()}
            &nbsp; Shramajeevi Agri Films | All Rights Reserved
          </p>
          <p className="float-right">Lalala footer lalala</p>
        </div> */}
      </footer>
    );
  }
}
export default Footer;
