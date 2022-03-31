import React, { useState, useEffect, useRef } from "react";
import "./Poll.css";
import { Auth, DataStore } from "aws-amplify";
import { Poll, Sex, UserInformation } from "../../models";
import { useNavigate, useSearchParams } from "react-router-dom";
import Notification from "C:/GitHub/aws-pollar/src/pages/Notifications/Notifications"
import receiveNotification from "C:/GitHub/aws-pollar/src/App"

function AnswerPoll(props) {
  const nav = useNavigate();
  const [numAnswers, setNumAnswer] = useState();
  const [postData, setPostData] = useState([]);
  const [post, setPost] = useState([]);
  const [searchParams] = useSearchParams();
  const [like, setLike] = useState(false);
  const id = searchParams.get("id");
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);
  const [userInfo, setUserInfo] = useState(null);
  //const timer = setTimeout(() => console.log('Initial timeout!'), 10000);

  useEffect(async () => {
    try {
      const model = await DataStore.query(Poll, (p) => p.id("eq", id));
      setPostData(model);

      Auth.currentUserInfo().then((userInfo) => {
        setUserInfo(userInfo)
      })
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function copyToClip() {
    await navigator.clipboard.writeText(window.location.href);
    setCopySuccess("Copied");
    alert("URL copied!");
  }

  async function removeAlert() {
    alert("Your answer has been removed.");
  }

  const myNotif = new Notification();
  
  async function likeButton(){
    setLike(!like)
    const originalList = DataStore.query(LikedPost, x => x.userInformationID(eq, userInfo.username))
    //retrive this user's list of liked posts

    if (!like)
    {
      await DataStore.save(
        Poll.copyOf(originalList, updatedList => {
          updatedList.likedPosts.remove(id);
        })
      )

      await DataStore.save(
        Poll.copyOf(model, updatedPoll => {
          updatedPoll.likes = model.likes - 1;
        })
      )
    }

    if (like)
    {
      await DataStore.save(
        LikedPost.copyOf(originalList, updatedList => {
          updatedList.likedPosts.append(id);
        })
      )

      await DataStore.save(
        Poll.copyOf(model, updatedPoll => {
          updatedPoll.likes = model.likes + 1;
        })
      )
    }
  }

  return (
    <body>
      <div class="form">
        <form class="answerPoll">
          {postData.map((val, key) => {
            return (
              <>
                <span class="username">
                  <p1> Creator: {val.UserInformation.username}</p1>
                </span>
                <br />
                <h1>{val.title}</h1>
                <div class="description"></div>
                <div class="pollOptions">
                  <label class="options">
                    <input type="radio" name="radio" id="option1"></input>
                    <span class="selectOption">{val.answerChoices[0]}</span>
                  </label>
                  <br />
                  <label class="options">
                    <input type="radio" name="radio" id="option2" />
                    <span class="selectOption">{val.answerChoices[1]}</span>
                  </label>
                  <br />
                  {val.answerChoices[2] !== "" && (
                    <>
                      <label class="options">
                        <input type="radio" name="radio" id="option3" />
                        <span class="selectOption">{val.answerChoices[2]}</span>
                      </label>
                      <br />
                    </>
                  )}
                  {val.answerChoices[3] !== "" && (
                    <>
                      <label class="options">
                        <input type="radio" name="radio" id="option4" />
                        <span class="selectOption">{val.answerChoices[3]}</span>
                      </label>
                      <br />
                    </>
                  )}
                  {val.answerChoices[4] !== "" && (
                    <>
                      <label class="options">
                        <input type="radio" name="radio" id="option5" />
                        <span class="selectOption">{val.answerChoices[4]}</span>
                      </label>
                      <br />
                    </>
                  )}
                  {val.answerChoices[5] !== "" && (
                    <>
                      <label class="options">
                        <input type="radio" name="radio" id="option6" />
                        <span class="selectOption">{val.answerChoices[5]}</span>
                      </label>
                      <br />
                    </>
                  )}
                  {val.answerChoices[6] !== "" && (
                    <>
                      <label class="options">
                        <input type="radio" name="radio" id="option7" />
                        <span class="selectOption">{val.answerChoices[6]}</span>
                      </label>
                      <br />
                    </>
                  )}
                  {val.answerChoices[7] !== "" && (
                    <>
                      <label class="options">
                        <input type="radio" name="radio" id="option8" />
                        <span class="selectOption">{val.answerChoices[7]}</span>
                      </label>
                      <br />
                    </>
                  )}
                </div>
                <div class="pollVote">
                  <br />
                  <input
                    type="submit"
                    id="submitAns"
                    value="Vote"
                    onClick={(event) => {
                      nav("/");
                    }}
                  />
                </div>
              </>
            );
          })}
        </form>
      </div>
      <br />
      <div class="userOptions">
        <button onClick={likeButton} type="button" id="likeBttn">
          {" "}
          {like && "Like: "} {!like && "Unlike: "} {post.likes} {" "}
        </button>
        <button type="button" id="changeAns">
          {" "}
          Change Answer{" "}
        </button>
        <button onClick={removeAlert} type="button" id="removeAns">
          {" "}
          Remove Answer{" "}
        </button>
        <button onClick={copyToClip} type="button" id="shareBttn">
          {" "}
          Share{" "}
        </button>
      </div>
    </body>
  );
}

export default AnswerPoll;
