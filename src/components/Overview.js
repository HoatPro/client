import React, { Component } from "react";
import './Overview.css';
class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            artist: null,
            tracks: [],
            albums: [],
            categories: []
        }; //IMPORTANT

    }

    async componentDidMount() {
        await this.showRelease();
        await this.showVN();
    }
    // MAIN SEARCH FUNCTION
 showRelease() {
        //-----------API SETUP-----------
     const BASE_URL = 'https://api.spotify.com/v1/browse/new-releases?';
     let FETCH_URL = BASE_URL + 'q=' + this.state.query + 'limit=30&offset=0';


        /*
          accessToken expires every one hour.
          In order to get accessToken start "web-api-auth-examples"
        */
     let accessToken = "BQBKyFJyV4TfuSiXSRJi3wAycovdAfkdH6rS0CuIq6DkHyVtry1bhRx79JNh7nQvfaRphefh8Jn2ZE1hebRHlOHa0LB7wZZwUACZ8QE3SC_jJL1UgtvWtvZbF1K9_UQ83RcewazVauHHJPmmlK4M6NtPAtt81RzSGig3n4mvdIqbmc2AaKBKpy-yUeA";

     let myOptions = {
         method: 'GET',
         headers: {
             "Content-Type":"application/json",
             'Authorization': 'Bearer ' + accessToken
         },
         mode: 'cors',
         cache: 'default'
     };

     // FETCH!!!!
     fetch(FETCH_URL, myOptions)
         .then(response => response.json())
         .then(json => {

             this.setState({ albums: json.albums.items });
         });
    }
    showVN() {
        //-----------API SETUP-----------
        const BASE_URL = "https://api.spotify.com/v1/browse/categories?";
        let FETCH_URL = BASE_URL + "q=" + this.state.query + "country=VN&locale=sv_VN&limit=50";


        /*
          accessToken expires every one hour.
          In order to get accessToken start "web-api-auth-examples"
        */
        let accessToken = "BQBKyFJyV4TfuSiXSRJi3wAycovdAfkdH6rS0CuIq6DkHyVtry1bhRx79JNh7nQvfaRphefh8Jn2ZE1hebRHlOHa0LB7wZZwUACZ8QE3SC_jJL1UgtvWtvZbF1K9_UQ83RcewazVauHHJPmmlK4M6NtPAtt81RzSGig3n4mvdIqbmc2AaKBKpy-yUeA";

        let myOptions = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + accessToken
            },
            mode: 'cors',
            cache: 'default'
        };

        // FETCH!!!!
        fetch(FETCH_URL, myOptions)
            .then(response => response.json())
            .then(json => {

                this.setState({
                    categories: json.categories.items
                });
            });
    }
    render() {
        return <div className="overview">
            <div className="overview__artist">
              {/* Mới Phát Hành*/}
              <div className="section-title">Mới phát hành</div>

              {this.state.albums.map((album, index) => {
                    return <div key={index} className="section-title_load">
                    <img src={album.images[1].url} alt="" />
                    <br />
                    <a href={album.external_urls.spotify}>
                      {album.name}
                    </a>
                    <br />
                    <a href={album.artists[0].external_urls.spotify}>
                      {album.artists[0].name}{" "}
                    </a>
                  </div>;
              })}
            </div>
            <div className="overview__related">
              <div className="section-title">Nhạc Việt Nam</div>
              <div className="related-artists">
                <a href="" className="related-artist">
                        <div className="related-artist__load">
                    {this.state.categories.map((category, index) => (
                                <div key={index} className="related-artist_elm">
                                    <img src={category.icons[0].url} alt="" />
                        <br />
                        <p>{category.name}</p>
                      </div>
                    ))}
                  </div>
                  <span className="related-artist__name" />
                </a>
              </div>
            </div>
          </div>;
    }
}
        export default Overview;