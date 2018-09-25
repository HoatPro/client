import React, { Component } from "react";
import Headers from "./Header";
import Navigator from "./Navigation";
import "./Tracks.css";
class Tracks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      artist: [],
      tracks: [],
      albums: [],
      categories: [],
      playlists: [],
      items: []
    }; //IMPORTANT
  }
  async componentDidMount() {
    const { playlistId } = this.props.match.params;
    await this.showTracks(playlistId);
  }
  showTracks(playlistId) {
    //-----------API SETUP-----------
    const BASE_URL = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?`;
    let FETCH_URL = BASE_URL + "q=" + this.state.query + "market=ES&limit=50";

    /*
          accessToken expires every one hour.
          In order to get accessToken start "web-api-auth-examples"
        */
    let accessToken =
      "BQAD_zrLjc0Y9wKEyKshwz9GVM5esNqKnMtWPQtQOJpkxgEBlIYG1d7-cW44yTXJ0sl1PfCEk7ey1QgrGLnIWwkmhdntjXsHW5SLVTTGXstQKZYY2UkcpgNHZCbQDr5ECNA3koPi3R2yBbIwcHIMUrAvBTtILenJX7cebcnM5Xmqf-iGqW3F7Nra4T8";

    let myOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken
      },
      mode: "cors",
      cache: "default"
    };

    // FETCH!!!!
    fetch(FETCH_URL, myOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({
          items: json.items
        });
      });
  }
  async componentWillReceiveProps(nextProps) {
    if (nextProps.playlistId !== this.props.playlistId) {
      await this.showCategory(nextProps.playlistId);
    }
  }

  render() {
    return (
      <div className="Tracks">
        <Headers />
        <section className="content">
          <div className="content__left">
            <Navigator />
            <section className="playlist">
              <a href="">
                <i className="fa fa-plus-circle newplaylist " />
                New Playlist
              </a>
            </section>
          </div>
          <div className="content__middle">
            <div className="artist is-verified">
              <div className="artist__header">
                <div className="artist__info">
                  <div className="profile__img" />
                  <div className="title_info">
                    <div className="artist__info__type">Music</div>
                    <div className="artist__info__name">Tracks </div>
                  </div>
                </div>
              </div>
              <div className="artist__content">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <td>Tên Albums</td>
                      <td>Bài hát</td>
                      <td>Nghệ sĩ</td>
                      <td>Track ID</td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.items.map((item, index) => (
                      <tr
                        key={index}
                        onClick={() => {
                          this.props.history.push(`/track/${item.track.id}`);
                        }}
                      >
                        <td>{item.track.album.name}</td>
                        <td>{item.track.name}</td>
                        <td>{item.track.album.artists[0].name}</td>
                        <td>{item.track.id}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Tracks;
