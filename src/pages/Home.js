import React, { Component } from 'react';
import agdial from 'img/agdial.png';
import youtube from 'img/youtube.png';

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
      <section id="home" className="home section_">
        <div className="soil_home" />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <div className="container text-center">
            <div className="row">
              <div className="col-12 text-center mzpz">
                <h1>Online Platform for Agriculture</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-2 col-sm-3" />
              <div className="col-2 offset-1">
                <a href="https://agdial.in">
                  <div className="home_icon">
                    <img src={agdial} alt="AgDial" />
                  </div>
                </a>
              </div>
              <div className="col-2 offset-1">
                <a href="https://www.youtube.com/user/ShramajeeviAgriFilms">
                  <div className="home_icon">
                    <img src={youtube} alt="Shramajeevi on Yotutube" />
                  </div>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-12" />
            </div>
            <div className="row">
              <div className="col-2 col-sm-3" />
              <div className="col-2 offset-1">
                <a href="https://shramajeeviimages.com">
                  <div className="home_icon shramimgs_logo">
                    <h1>I</h1>
                  </div>
                </a>
              </div>
              <div className="col-2 offset-1">
                <a href="https://shramajeewiki.com">
                  <div className="home_icon wiki_logo">
                    <h1>W</h1>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Home;
