import React, { useState } from "react";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import "bootstrap/dist/css/bootstrap.css";
import Popup from "./Popup";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { AnonymousContext } from "../ToggleButton/anonymous-context";
import AnonymousToggleButton from "../ToggleButton/AnonymousToggleButton";

function NavBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const goToTrending = () => {
    navigate("/trending");
  };

  const goToProfile = () => {
    navigate(`/profile/${props.user.username}`);
  };

  const goToSettings = () => {
    navigate("/settings");
  };

  const goToHome = () => {
    navigate("/home");
  };

  const goToCreate = () => {
    navigate("/poll/create");
  };

  const goToRecommended = () => {
    navigate("/Recommended");
  };

  const goToMessages = () => {
    navigate("/messages");
  };

  return (
    <div className="NavBar">
      <div className="navbar__left">
        <img
          src={process.env.PUBLIC_URL + "/transparentpolarbear.png"}
          className="navbar__avatar"
          onClick={goToHome}
        />
        {/* <h1 className="nav__homebutton">Pollar</h1> */}

        <div className="nav__searchBar">
          <SearchBar placeholder={"Search"} />
          {/* <SearchBar placeholder="Search..." /> */}
        </div>
      </div>
      <div className="navbar__center">
        <div className="secMenu">
          <p className="nav__trending" onClick={goToTrending}>
            Trending Polls
          </p>

          <p className="nav__create" onClick={goToCreate}>
            Create Poll
          </p>
          <p className="nav__recommended" onClick={goToRecommended}>
            Recommended Polls
          </p>
        </div>
      </div>
      <div className="navbar__right">
        <AnonymousToggleButton />
        <img
          src={process.env.PUBLIC_URL + "/info-icon.png"}
          className="anon__info"
          onClick={togglePopup}
        />
        <img
          src={process.env.PUBLIC_URL + "/messages.png"}
          className="msgbttn"
          onClick={goToMessages}
        />
        <img
          src={process.env.PUBLIC_URL + "/notif_icon .png"}
          className="notifications__icon"
        />
        <div className="navbar__dropdown">
          <Dropdown>
            <Dropdown.Toggle variant="white" size="lg">
              &#9776;
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#" onClick={goToProfile}>
                User Profile
              </Dropdown.Item>
              <Dropdown.Item href="/Settings" onClick={goToSettings}>
                Settings
              </Dropdown.Item>
              <Dropdown.Item href="#" onClick={props.signOut}>
                Sign Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {isOpen && <Popup />}

    </div>
  );
}
export default NavBar;
