import React, { useState, useEffect } from "react";
import "./Home.css";
import { UserInformation } from "../../models";
import UserDetails from "../UserDetails/UserDetails";
import { DataStore } from "aws-amplify";

function Home(props) {
  const [popupTrigger, setPopupTrigger] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(async () => {
    try {
      await DataStore.query(UserInformation, (u) =>
        u.username("eq", props.user.username)
      );
    } catch (error) {
      console.log("Error fetching user information, ", error);
      setPopupTrigger(true);
    }
  });
  return (
    <div className="welcome">
      Hello, {props.user.username}!{" "}
      <UserDetails trigger={popupTrigger}></UserDetails>
    </div>
  );
}

export default Home;
