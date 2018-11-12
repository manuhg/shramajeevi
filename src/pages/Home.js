import React, { Component } from 'react';
import logo from 'img/logo.png';

// import agdial from 'img/agdial.png';
// import youtube from 'img/youtube.png';

//       ['https://video.shramajeevi.com', 'Buy Agri Videos'],
// const links = [
//   ['https://agdial.in', 'AgDial'],
//   ['https://www.youtube.com/user/ShramajeeviAgriFilms', 'Watch Agri Videos'],
//   ['https://shramajeeviimages.com', 'Download Images'],
//   ['https://shramajeewiki.com', 'Read Agri Articles'],
// ];

class Home extends Component {
  render() {
    return (
      <section id="home" className="home">
        {/* <div className="soil_home" /> */}
        <div className="fp" style={{ height: '100%' }}>
          <div className="container text-center">
            <div className="row">
              <div className="col-12 text-center mzpz">
                <img src={logo} style={{ height: '120px' }} alt="Shramajeevi" />
                <h2>Digital Platform for Agriculture</h2>
                <h5>Since 2004</h5>
              </div>
            </div>
            {/*<div style={{ width: '100%' }} className="row fp">
              <div className="col-md-10 offset-md-6">
                <div className="container text-center">
                  <div className="row">
                    <div className="col-4 mzpz fcc">
                      <a target="_blank" rel="noopener noreferrer" href="https://agdial.in">
                        <div className="home_icon">
                          <img src={agdial} alt="AgDial" />
                        </div>
                      </a>
                    </div>
                    <div className="col-4 mzpz fcc">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/user/ShramajeeviAgriFilms"
                      >
                        <div className="home_icon">
                          <img src={youtube} alt="Shramajeevi on Yotutube" />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4 mzpz fcc">
                      <a target="_blank" rel="noopener noreferrer" href="https://shramajeeviimages.com">
                        <div className="home_icon shramimgs_logo">
                          <h1>I</h1>
                        </div>
                      </a>
                    </div>
                    <div className="col-4 mzpz fcc">
                      <a target="_blank" rel="noopener noreferrer" href="https://shramajeewiki.com">
                        <div className="home_icon wiki_logo">
                          <h1>W</h1>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         */}
          </div>
        </div>
      </section>
    );
  }
}
export default Home;
