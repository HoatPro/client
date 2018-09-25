import React, { Component } from "react";
class Root extends Component {
    render() {
        return <section className="navigation">
            {/* Main */}
            <div className="navigation__list">
              <div className="fa fa-home navigation__list__header " role="button">
                Home
              </div>
              <div className="collapse in" id="main">
                <a href="" className="navigation__list__item">
                  <i className="ion-ios-browsers" />
                  <span>NỔI BẬT</span>
                </a>
                <a href="" className="navigation__list__item">
                  <i className="ion-person-stalker" />
                  <span>PODCAST</span>
                </a>
                <a href="" className="navigation__list__item">
                  <i className="ion-radio-waves" />
                  <span>BẢNG XẾP HẠNG</span>
                </a>
                <a href="" className="navigation__list__item">
                  <i className="ion-radio-waves" />
                  <span>THỂ LOẠI VÀ TÂM TRẠNG</span>
                </a> <a href="" className="navigation__list__item">
                  <i className="ion-radio-waves" />
                  <span>BẢN MỚI PHÁT HÀNH</span>
                    </a>  <a href="" className="navigation__list__item">
                        <i className="ion-radio-waves" />
                        <span>KHÁM PHÁ</span>
                    </a>
              </div>
            </div>
            {/* / */}
            {/* Your Music */}
            <div className="navigation__list">
              <div className="fa fa-music navigation__list__header" role="button">
                Your Music
              </div>
              <div className="collapse in" id="yourMusic">
                <a href="" className="navigation__list__item">
                  <i className="ion-headphone" />
                  <span>PLAYLIST</span>
                </a>
                <a href="" className="navigation__list__item">
                  <i className="ion-ios-musical-notes" />
                  <span>DAILY MIX CỦA BẠN</span>
                </a>
                <a href="" className="navigation__list__item">
                  <i className="ion-person" />
                  <span>BÀI HÁT YÊU THÍCH</span>
                </a>
                <a href="" className="navigation__list__item">
                  <i className="ion-document" />
                  <span>ALBUM</span>
                </a>
                <a href="" className="navigation__list__item">
                  <i className="ion-document" />
                  <span>NGHỆ SĨ</span>
                </a>
                <a href="" className="navigation__list__item">
                  <i className="ion-document" />
                  <span>PODCAST</span>
                </a>
              </div>
            </div>
            {/* / */}
            {/* Playlists */}
            <div className="navigation__list">
              <div className="fa fa-list-alt pd-5 navigation__list__header" href="#playlists">
                Playlists
              </div>
              <div className="collapse in" id="playlists">
                <a href="" className="navigation__list__item">
                  <i className="ion-ios-musical-notes" />
                  <span>Pop Classics</span>
                </a>
                <a href="" className="navigation__list__item">
                  <i className="ion-ios-musical-notes" />
                  <span>Love Songs</span>
                </a>
                <a href="" className="navigation__list__item">
                  <i className="ion-ios-musical-notes" />
                  <span>Hipster</span>
                </a>
                <a href="" className="navigation__list__item">
                  <i className="ion-ios-musical-notes" />
                  <span>New Music Friday</span>
                </a>
                <a href="" className="navigation__list__item">
                  <i className="ion-ios-musical-notes" />
                  <span>Techno Poppers</span>
                </a>
                <a href="" className="navigation__list__item">
                  <i className="ion-ios-musical-notes" />
                  <span>Summer Soothers</span>
                </a>
                <a href="" className="navigation__list__item">
                  <i className="ion-ios-musical-notes" />
                  <span>Hard Rap</span>
                </a>
                <a href="" className="navigation__list__item">
                  <i className="ion-ios-musical-notes" />
                  <span>Pop Rap</span>
                </a>
                <a href="" className="navigation__list__item">
                  <i className="ion-ios-musical-notes" />
                  <span>5 Stars</span>
                </a>
                <a href="" className="navigation__list__item">
                  <i className="ion-ios-musical-notes" />
                  <span>Dope Dancin</span>
                </a>
                <a href="" className="navigation__list__item">
                  <i className="ion-ios-musical-notes" />
                  <span>Sleep</span>
                </a>
              </div>
            </div>
            {/* / */}
          </section>;
    }
}
export default Root;