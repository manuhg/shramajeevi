import React, { Component } from 'react';
import Plant from 'img/plant.png';
//    const buttons = [
//       ['https://shramajeevi.com', 'Shramajeevi'],
//       ['https://www.youtube.com/user/ShramajeeviAgriFilms', 'Watch Agri Videos'],
//       ['https://video.shramajeevi.com', 'Buy Agri Videos'],
//       ['https://shramajeeviimages.com', 'Download Images'],
//       ['https://shramajeewiki.com', 'Read Agri Articles'],
//     ];

class Home extends Component {
  render() {
    return (
      <div>
        <section id="home" className="home">
          <h3>Home</h3>
          <img src={Plant} alt="Plant" style={{ height: '50vh' }} />
        </section>
      </div>
    );
  }
}
export default Home;
