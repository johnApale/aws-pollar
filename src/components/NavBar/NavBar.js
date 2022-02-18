import React from "react";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";

function NavBar(props) {
  return (
    <div className="NavBar">
      <div className="homebttn">
        <ul>
          <a href="/home" className="homebutton">
            <h1>Pollar</h1>
          </a>
        </ul>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/transparentpolarbear.png"}
        className="avatar1"
      />
      <div className="searchBar">
        <SearchBar placeholder="Search..." />
      </div>
      <div className="buttons">
        <a href="/messages">
          <img
            src={process.env.PUBLIC_URL + "/messages.png"}
            className="msgbttn"
          />
        </a>
        <a href="/notifications">
          <img
            src={process.env.PUBLIC_URL + "/notif_icon .png"}
            className="notifications"
          />
        </a>
        <button className="signout__button" onClick={props.signOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
}
export default NavBar;
