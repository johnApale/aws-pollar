import React, { useState } from "react";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import "bootstrap/dist/css/bootstrap.css";
import Popup from "./Popup";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const goToProfile = () => {
    navigate(`/profile/${props.user.username}`);
  };

  const goToSettings = () => {
    navigate('/Settings');
  };

  return (
    <div className="NavBar">
      <div className="Center">
        <div
          style={{
            display: "inline-block",
            width: 700,
            padding: 30,
            position: "relative",
            top: "-25px",
            left: "290px",
          }}
        >
          <Dropdown>
            <Dropdown.Toggle variant="white" size="lg">
              &#9776;
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#" onClick={togglePopup}>
                Anonymous Mode
              </Dropdown.Item>
              <Dropdown.Item href="#" onClick={goToProfile}>
                User Profile
              </Dropdown.Item>
              <Dropdown.Item href="/Settings" onClick={goToSettings}>Settings</Dropdown.Item>
              <Dropdown.Item href="#" onClick={props.signOut}>
                Sign Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

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
        </div>

        <div className="secMenu">
          <ul>
            <a href="/trending" className="trending">
              Trending Polls
            </a>

            <a href="/Poll/Create" className="create">
              Create Poll
            </a>

            <a href="/Random" className="random">
              Random Polls
            </a>
          </ul>
        </div>

        {isOpen && (
          <Popup
            content={
              <>
                <p className="anon_title">Anonymous Mode</p>
                <div className = "mode_description">
                <p>
                  What you do on Pollar is private, your activity won't affect
                  your account.{" "}
                </p>
                </div>
                <p className = "Mode_On_Desc"> Turn On Anonymous Mode</p>
                <form>
                <input type = "checkbox" id = "anonymous_on" value = "anonymous" className="anonymousMode_On"></input>
                <input type = "submit" id = "submit_mode" className = "submit_anon"></input>
                </form>
              </>

            }
            handleClose={togglePopup}
          />
        )}
      </div>
    </div>
  );
}
export default NavBar;

