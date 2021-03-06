import React, { Component } from "react";
import Headers from "./Header";
import Navigator from "./Navigation";
import "./Music.css";

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "", artists: [], tracks: [], albums: [], categories: [], playlists: []};
  }
  async componentDidMount() {
    const { trackId } = this.props.match.params;
    await this.showMusics(trackId);
  }

  showMusics(trackId) {
    //-----------API SETUP-----------
    const BASE_URL = `https://api.spotify.com/v1/tracks?ids=${trackId}&market=ES`;
   // let FETCH_URL = BASE_URL + "q=" + this.state.query + "market=ES";

    /*
              accessToken expires every one hour.
              In order to get accessToken start "web-api-auth-examples"
            */
    let accessToken = "BQBKyFJyV4TfuSiXSRJi3wAycovdAfkdH6rS0CuIq6DkHyVtry1bhRx79JNh7nQvfaRphefh8Jn2ZE1hebRHlOHa0LB7wZZwUACZ8QE3SC_jJL1UgtvWtvZbF1K9_UQ83RcewazVauHHJPmmlK4M6NtPAtt81RzSGig3n4mvdIqbmc2AaKBKpy-yUeA";

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
    fetch(BASE_URL, myOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({ tracks: json.tracks });
      });
  }
  render() {
    return <div className="Tracks">
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
                    <div className="artist__info__name">PLAY </div>
                  </div>
                </div>
              </div>
              <div className="artist__content">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <td>Tên bài hát</td>
                      <td>Nghệ sĩ</td>
                      <td>Play</td>
                    </tr>
                  </thead>
                <tbody>

                  {this.state.tracks.map((track, index) =>
                  {
                    if (track.preview_url) {
                     return <tr key={index}>
                        <td>{track.name}</td>
                        <td>{track.artists[0].name}</td>
                        <td>
                          <audio src={track.preview_url} controls="controls" />
                        </td>
                      </tr>;
                    } else {
                      return <tr key={index}>
                          <td>{track.name}</td>
                          <td>{track.artists[0].name}</td>
                          <td>
                          Bài hát thuộc bản quyền của nhạc sĩ,không cho phép nghe free.
                          </td>
                        </tr>;
                    }
                 }
                  )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>;
  }
}
export default Music;
