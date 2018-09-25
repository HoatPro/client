import React, { Component } from "react";
import Overview from "./Overview";
import Headers from "./Header";
import ArtistHeader from "./ArtistHeader";
import Navigator from "./Navigation";
import Spotify from "spotify-web-api-js";
const spotifyWebApi = new Spotify();
class Home extends Component {
    constructor() {
        super();
        const params = this.getHashParams();
        const token = params.access_token;
        this.state = {
            loggedIn: token ? true : false,
            nowPlaying: {
                name: 'Not Checked',
                albumArt: ''
            }
        }
        if (token) {
            spotifyWebApi.setAccessToken(token);
            spotifyWebApi.addToMySavedAlbums(token);
        }
    }
    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q);
        }
        return hashParams;
    }
    getNowPlaying() {
        spotifyWebApi.getMyCurrentPlaybackState()
            .then((response) => {
                this.setState({
                    nowPlaying: {
                        name: response.item.name,
                        image: response.item.album.images[0].url
                    }
                });
            })
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
              <ArtistHeader />
              <div className="artist__content">

                                    <Overview />

              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}
export default Home;
