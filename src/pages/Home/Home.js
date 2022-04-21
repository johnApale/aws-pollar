import React, { useState, useEffect } from "react";
import "./Home.css";
import UserDetails from "../UserDetails/UserDetails";
import { API, graphqlOperation } from "aws-amplify";
import { getUserInformation } from "../../graphql/queries";

function Home(props) {
  const [popupTrigger, setPopupTrigger] = useState(false);
  const [show, setShow] = useState(true);
  const [placeholder, setPlaceholder] = useState("Ask a question");

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
        setPlaceholder(`Ask a question, ${userInfo.firstName}`);
        if (!userInfo) {
          setPopupTrigger(true);
        }
      } catch (error) {
        console.log("Error fetching user information, ", error);
      }
    }
    fetchData();
  }, [props.user.username]);

  function goToUser() {}

  function goToPoll() {}

  function handleLike() {}

  function openComments() {}

  return (
    <div className="Home">
      <div className="home__feed">
        <div className="home__post">
          <div className="post__left"></div>
          <input
            type="text"
            className="post__input"
            placeholder={placeholder}
          />
        </div>
        <div className="home__cards">
          {show ? (
            <div className="home__card">
              <div className="homecard__top">
                <div className="homecard__image"></div>
                <div className="homecard__info">
                  <div className="homecard__user">johndoe</div>
                  <div className="homecard__date">
                    April 12, 2022 at 12:45PM
                  </div>
                </div>
              </div>
              <div className="homecard__middle">
                <div className="homecard__question">
                  What is your favorite color?
                </div>
                <div className="homecard__question-answers">0 answers</div>
              </div>
              <div className="homecard__bottom">
                <div className="homecard__stats">0 Likes{"  "}12 Views</div>
                <div className="homecard__comments">View Comments</div>
              </div>
            </div>
          ) : (
            <div className="home__nothing">Nothing to show on feed</div>
          )}
        </div>
      </div>
      <UserDetails trigger={popupTrigger} user={props.user}></UserDetails>
    </div>
  );
}

export default Home;
