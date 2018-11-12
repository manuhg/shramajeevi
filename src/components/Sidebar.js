import agdial from 'img/agdial.png';
import youtube from 'img/youtube.jpg';
import React, { Component } from 'react';

//       ['https://video.shramajeevi.com', 'Buy Agri Videos'],
// const links = [
//   ['https://agdial.in', 'AgDial'],
//   ['https://www.youtube.com/user/ShramajeeviAgriFilms', 'Watch Agri Videos'],
//   ['https://shramajeeviimages.com', 'Download Images'],
//   ['https://shramajeewiki.com', 'Read Agri Articles'],
// ];

class Sidebar extends Component {
  render() {
    return (
      <div className="album py-5 bg-light sidebar mzpz">
        <div className="row">
          <div className="col-12 text-center text-black">
            <h3>Shramajeevi's Online Presence</h3>
          </div>
        </div>
        <br />
        <div className="container-fluid mzpz">
          <div className="row fp">
            <div className="col-sm-5 col-md-4 offset-1 fcc">
              <div style={{ borderRadius: '0' }} className="card mb-4 box-shadow">
                <a className="mzpz" target="_blank" rel="noopener noreferrer" href="https://agdial.in">
                  <table style={{ width: '100%' }}>
                    <tr>
                      <td>
                        <div className="home_icon agdial_logo">
                          <strong>AgDial</strong>
                        </div>
                      </td>
                      <td className="tdtxt">
                        <div className="agdt">The Digital Agriculture Directory</div>
                      </td>
                    </tr>
                  </table>
                </a>
              </div>
            </div>
            <div className="col-sm-5 col-md-4 offset-1 fcc">
              <div style={{ borderRadius: '0' }} className="card mb-4 box-shadow">
                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/ShramajeeviAgriFilms">
                  <table style={{ width: '100%' }}>
                    <tr>
                      <td>
                        <div className="home_icon youtube_logo">
                          <img src={youtube} alt="Shramajeevi on Yotutube" />
                        </div>
                      </td>
                      <td className="tdtxt">Shramajeevi on youtube</td>
                    </tr>
                  </table>
                </a>
              </div>
            </div>
            <div className="col-sm-5 col-md-4 offset-1 fcc">
              <div style={{ borderRadius: '0' }} className="card mb-4 box-shadow">
                <a target="_blank" rel="noopener noreferrer" href="https://shramajeeviimages.com">
                  <table style={{ width: '100%' }}>
                    <tr>
                      <td>
                        <div className="home_icon shramimgs_logo">
                          <h1>I</h1>
                        </div>
                      </td>
                      <td className="tdtxt">Shramajeevi Images</td>
                    </tr>
                  </table>
                </a>
              </div>
            </div>
            <div className="col-sm-5 col-md-4 offset-1 fcc">
              <div style={{ borderRadius: '0' }} className="card mb-4 box-shadow">
                <a target="_blank" rel="noopener noreferrer" href="https://shramajeewiki.com">
                  <table style={{ width: '100%' }}>
                    <tr>
                      <td>
                        <div className="home_icon wiki_logo">
                          <h1>W</h1>
                        </div>
                      </td>
                      <td className="tdtxt">ShramajeeWiki</td>
                    </tr>
                  </table>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;
