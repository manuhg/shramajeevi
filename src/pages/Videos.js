import React, { Component } from 'react';
import titles from 'Titles';
import playlists from 'Playlists';
class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = { langIndex: 0 };
    this.languages = ['english', 'kannada', 'hindi'];
  }
  setLanguageIndex(langIndex) {
    this.setState({ langIndex });
    /*document.getElementById(this.languages[langIndex]).style.backgroundColor='#17a2b8';
      document.getElementById(this.languages[langIndex]).style.color='white';*/
  }
  render() {
    const currentIndex = this.state.langIndex;
    const currentLanguage = this.languages[currentIndex];
    var playlist = playlists[currentLanguage];
    return (
      <section id="videos" className="section_">
        <br />
        <div className="album py-5 ">
          {/* bg-light  */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-center text-white">
                <h1 className="title_portion">
                  <strong>Our Videos</strong>
                </h1>
              </div>
            </div>
            <br />

            <div className="row text-center">
              <div className="col-12 fp">
                <div style={{ padding: '5px' }} className="btn-group" role="group" aria-label="languages">
                  <button
                    id="english"
                    onClick={e => this.setLanguageIndex(0)}
                    type="button"
                    className={'btn btn-primary btngrp_langs btn-' + (currentIndex !== 0 ? 'warning' : 'success')}
                  >
                    English
                  </button>
                  <button
                    id="kannada"
                    onClick={e => this.setLanguageIndex(1)}
                    type="button"
                    className={'btn btn-primary btngrp_langs btn-' + (currentIndex !== 1 ? 'warning' : 'success')}
                  >
                    <h4>ಕನ್ನಡ</h4>
                  </button>
                  <button
                    id="hindi"
                    onClick={e => this.setLanguageIndex(2)}
                    type="button"
                    className={'btn btn-primary btngrp_langs btn-' + (currentIndex !== 2 ? 'warning' : 'success')}
                  >
                    <h4>हिंदी</h4>
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              {titles[currentLanguage].map((e, i) => (
                <div key={i} className="py-2 col-4 col-md-3 col-lg-2 text-center">
                  <div style={{ borderRadius: '0' }} className="card mb-4 box-shadow">
                    <a
                      href={'https://www.youtube.com/watch?v=' + e[2] + '&list=' + playlist}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className="card-img-top" src={e[0]} alt={e[1]} />
                      <div style={{ padding: '5px' }}>
                        <p className={'card-text text-center vid_captions' + (currentIndex !== 0 ? ' kahi ' : '')}>
                          {e[1]}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Videos;
