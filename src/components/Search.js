import React, { Component } from "react";

import PlayBack from "./../components/PlayBack";
import"./Search.css";
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            artist: null, //IMPORTANT
            tracks: []
        }
    }


    // MAIN SEARCH FUNCTION
    search() {
        //-----------API SETUP-----------
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        let FETCH_URL = BASE_URL + "q=" + this.state.query + "&type=track&market=US&limit=50&offset=0";


        /*
          accessToken expires every one hour.
          In order to get accessToken start "web-api-auth-examples"
        */
        let accessToken = "BQCUD9CElc8ygYGocH8AX6LHna0AyjVnzAMGtVVB9Zjzk8a9_Cob78xkPeHHt9B4v9xYETsLCEEh16NOqBU3UWDoAa-Nby4JSkFl_qFdj-fPifxnQ5EPKfdCWK6U6FV7TxVTNahr2F54CM5z7OiczEVU3rAcuVrPnt3lDizimNSZZXw3M_m5uGfm_o0";

        let myOptions = {
            method: 'GET',
            headers: {
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
                  tracks: json.tracks.items
                });
            });

    }
    render() {
        return <div className="search">
            <p> Music Spotify Player Search</p>

            <div className="InputGroup">
              <input type="text" placeholder="Search for an track" value={this.state.query} onChange={event => {
                  this.setState({ query: event.target.value });
                }} onKeyPress={event => {
                  if (event.key === "Enter") {
                    this.search();
                  }
                }} />
              <button onClick={() => this.search()}>
                <img src={require("./../img/search.png")} alt="" style={{ width: 25 }} />
              </button>
            </div>

            {this.state.tracks !== null ? <div>


                <PlayBack tracks={this.state.tracks} />
              </div> : <p />}
          </div>;


    }
}
export default Search;