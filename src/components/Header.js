import React, { Component } from "react";

class Header extends Component {
    render() {
        return <section className="header">
            <div className="page-flows">
              <span className="flow">
                <i className="ion-chevron-left" />
              </span>
              <span className="flow">
                <i className="ion-chevron-right disabled" />
              </span>
            </div>

            <div className="user">
              <div className="user__notifications">
                <i className="ion-android-notifications" />
              </div>
              <div className="user__inbox">
                <i className="ion-archive" />
              </div>
              <div className="user__info">
                <span className="user__info__name">
                  <a href="http://localhost:8888"> Login to Spotify </a>
                  <span className="first mr-3">Nguyễn</span>
                  <span className="last">Hoạt</span>
                </span>
                <span className="user__info__img ml-3">
                  <img src="https://uphinhnhanh.com/images/2018/09/18/real-madrid-logo-icon-256.png" alt="" className="img-responsive" />
                </span>
              </div>
              <div className="user__actions" />
            </div>
          </section>;
    }
}
export default Header;