import React, { Component } from "react";
import Headers from './Header';
import Navigator from './Navigation';
class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      artist: [],
      tracks: [],
      albums: [],
      categories: [],
      playlists: []
    }; //IMPORTANT
  }

  async componentDidMount() {
    const { categoryId } = this.props.match.params;
    await this.showPlaylist(categoryId);
  }
  showPlaylist(categoryId) {
    //-----------API SETUP-----------
    const BASE_URL = `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists?`;
    let FETCH_URL = BASE_URL + "q=" + this.state.query + "country=VN&limit=50";

    /*
          accessToken expires every one hour.
          In order to get accessToken start "web-api-auth-examples"
        */
    let accessToken = "BQCUD9CElc8ygYGocH8AX6LHna0AyjVnzAMGtVVB9Zjzk8a9_Cob78xkPeHHt9B4v9xYETsLCEEh16NOqBU3UWDoAa-Nby4JSkFl_qFdj-fPifxnQ5EPKfdCWK6U6FV7TxVTNahr2F54CM5z7OiczEVU3rAcuVrPnt3lDizimNSZZXw3M_m5uGfm_o0";

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
          playlists: json.playlists.items
        });
      });
  }



  render() {
    return (
      <div>
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
                    <div className="artist__info__type">Ant</div>
                    <div className="artist__info__name">Playlist</div>
                  </div>
                </div>
              </div>
              <div className="artist__content">
                {this.state.playlists.map((playlist, index) => (
                  // <Link to={`/tracks/${playlist.id}`}>
                  <div key={index} className="artist__content_load">
                    <img
                      src={playlist.images[0].url}
                      alt=""
                      onClick={() => {
                        this.props.history.push(`/tracks/${playlist.id}`);
                      }}
                    />
                    <br />
                    <a>{playlist.name}</a>
                  </div>
                  // </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Playlist;