import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import Playlist from "./components/Playlist";
import Tracks from "./components/Tracks";
import Search from "./components/Search";
import Music from "./components/Music";
import NotFound from "./components/NotFound";

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active abc" : "";
        return (
          <li className={active}>
            <NavLink to={to} className="my-link">
              {label}
            </NavLink>
          </li>
        );
      }}
    />
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-inverse">
            <a className="navbar-brand" href="">
              MUSIC ECHO
            </a>
            <ul className="nav navbar-nav">
              <MenuLink label="Home" to="/" activeOnlyWhenExact={true} />
              <MenuLink
                label="Category"
                to="/categories"
                activeOnlyWhenExact={true}
              />
              <MenuLink
                label="Playlist"
                to="/playlists/:categoryId"
                activeOnlyWhenExact={true}
              />
              <MenuLink
                label="Tracks"
                to="/tracks/:playlistId"
                activeOnlyWhenExact={true}
              />
              <MenuLink
                label="Music"
                to="/track/:trackId"
                activeOnlyWhenExact={true}
              />
              <MenuLink
                label="Search"
                to="/search"
                activeOnlyWhenExact={true}
              />
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/categories" component={Category} />
            <Route path="/playlists/:categoryId"  component={Playlist} />
            <Route path="/tracks/:playlistId"  component={Tracks} />
            <Route path="/track/:trackId"  component={Music} />
            <Route path="/search" component={Search} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
