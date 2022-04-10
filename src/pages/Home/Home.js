import React, { useState, useEffect } from "react";
import "./Home.css";
import UserDetails from "../UserDetails/UserDetails";
import { API, graphqlOperation } from "aws-amplify";
import { getUserInformation } from "../../graphql/queries";

function Home(props) {
  const [popupTrigger, setPopupTrigger] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const userInfoArray = await API.graphql(
          graphqlOperation(getUserInformation, {
            usernameID: props.user.username,
          })
        );

        const userInfo = userInfoArray.data.getUserInformation;
        console.log(userInfo);
        if (!userInfo) {
          setPopupTrigger(true);
        }
      } catch (error) {
        console.log("Error fetching user information, ", error);
      }
    }
    fetchData();
  }, [props.user.username]);
  return (
    <div className="welcome">
      Hello, {props.user.username}!{" "}
      <UserDetails trigger={popupTrigger} user={props.user}></UserDetails>
    </div>
  );
}

export default Home;
