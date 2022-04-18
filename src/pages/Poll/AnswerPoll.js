import React, { useState, useEffect, useRef } from "react";
import "./AnswerPoll.css";
import { API, graphqlOperation } from "aws-amplify";
import Notification from "../Notifications/Notifications";
import {createNotification} from "../Notifications/Notifications";
import {NotificationContainer, NotificationManager} from "react-notifications";
import {myNotif} from "../../App";
import { getLikes, getPoll, getUserAnswer } from "../../graphql/queries";
import {
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import {
  createLikes,
  deleteLikes,
  createUserAnswer,
  deleteUserAnswer,
  updateUserAnswer,
} from "../../graphql/mutations";

function AnswerPoll(props) {
  const navigate = useNavigate();
  const [poll, setPoll] = useState({});
  const [searchParams] = useSearchParams();
  const [answer, setAnswer] = useState();
  const [currentAnswer, setCurrentAnswer] = useState();
  const [like, setLike] = useState("Like");
  const id = searchParams.get("id");
  //const timer = setTimeout(() => console.log('Initial timeout!'), 10000);

  useEffect(() => {
    async function fetchData() {
      try {
        const pollData = await API.graphql(
          graphqlOperation(getPoll, { id: id })
        );
        console.log(pollData.data);
        setPoll(pollData.data.getPoll);
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchAnswer() {
      try {
        const answerData = await API.graphql(
          graphqlOperation(getUserAnswer, {
            pollID: id,
            userID: props.user.username,
          })
        );
        setCurrentAnswer(answerData.data.getUserAnswer);
        console.log(answerData.data.getUserAnswer);
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchLike() {
      try {
        const likeData = await API.graphql(
          graphqlOperation(getLikes, {
            pollID: id,
            userID: props.user.username,
          })
        );
        if (likeData.data.getLikes) {
          setLike("Unlike");
        }
      } catch (error) {
        console.log("Error fetching likes, ", error);
      }
    }
    fetchData();
    fetchAnswer();
    fetchLike();
  }, [id]);

  const handleAnswer = async (event) => {
    event.preventDefault();
    const answerData = {
      pollID: id,
      userID: props.user.username,
      answer: answer,
    };
    console.log(answerData);
    try {
      const newAnswer = await API.graphql(
        graphqlOperation(createUserAnswer, { input: answerData })
      );
      console.log(newAnswer);
      navigate({
        pathname: "/poll/view",
        search: `?${createSearchParams({ id: id })}`,
        replace: true,
      });
    } catch (error) {
      console.log("Error submitting answer, ", error);
    }
  };

  const updateAnswer = async (event) => {
    event.preventDefault();
    const answerData = {
      pollID: id,
      userID: props.user.username,
      answer: answer,
    };
    console.log(answerData);
    try {
      const updatedAnswer = await API.graphql(
        graphqlOperation(updateUserAnswer, { input: answerData })
      );
      navigate({
        pathname: "/poll/view",
        search: `?${createSearchParams({ id: id })}`,
        replace: true,
      });
    } catch (error) {
      console.log("Update error, ", error);
    }
  };

  const removeAnswer = async (event) => {
    event.preventDefault();
    const answerData = {
      pollID: id,
      userID: props.user.username,
      answer: answer,
    };
    try {
      const removeAnswer = await API.graphql(
        graphqlOperation(deleteUserAnswer, { input: answerData })
      );
      alert("Your answer has been removed.");
      navigate({
        pathname: "/poll/view",
        search: `?${createSearchParams({ id: id })}`,
        replace: true,
      });
    } catch (error) {
      console.log("Delete error, ", error);
    }
  };

  const handleLike = async (event) => {
    event.preventDefault();
    const answerData = {
      pollID: id,
      userID: props.user.username,
    };
    if (like === "Like") {
      try {
        const addLike = await API.graphql(
          graphqlOperation(createLikes, { input: answerData })
        );
        setLike("Unlike");
      } catch (error) {
        console.log("Delete error, ", error);
      }
    } else {
      try {
        const removeLike = await API.graphql(
          graphqlOperation(deleteLikes, { input: answerData })
        );
        setLike("Like");
      } catch (error) {
        console.log("Delete error, ", error);
      }
    }
  };

  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  async function copyToClip() {
    await navigator.clipboard.writeText(window.location.href);
    setCopySuccess("Copied");
    alert("URL copied!");
  }

  async function removeAlert() {
    alert("Your answer has been removed.");
  }

  let likeButtonState = "Like: ";
  poll.likes = 0;

  async function likeButton() {
    setLike(!like)

    if (!like) {
      likeButtonState.replace("Like: 0", "Unlike: 1");
      poll.likes += 1;
    } 
    
    else {
      NotificationManager.success('A user liked your post.', 'Liked');
      likeButtonState.replace("Unlike: 1", "Like: 0");
      poll.likes -= 1;
    }
  }

  return (
    <div className="answer__poll">
      <div className="form">
        <form className="answerPoll">
          <span className="answer__username">
            <p> Creator: {poll?.userID}</p>
          </span>
          <br />
          <h1>{poll.title}</h1>
          <div className="description"></div>
          <div className="pollOptions">
            {poll.answerChoices?.map((option, key) => {
              return (
                <div className="pollOption" key={key}>
                  <input
                    type="radio"
                    name="options"
                    value={option}
                    onChange={(event) => {
                      setAnswer(event.target.value);
                    }}
                  ></input>
                  <li key={option}> {option}</li>
                </div>
              );
            })}
          </div>
          <div className="pollVote">
            <br />
            {currentAnswer ? (
              <p>Current Answer: {currentAnswer.answer}</p>
            ) : null}
            <br />
            {currentAnswer ? (
              <button className="submitAns" onClick={updateAnswer}>
                Change Answer
              </button>
            ) : (
              <button className="submitAns" onClick={handleAnswer}>
                Vote
              </button>
            )}
          </div>
        </form>
      </div>
      <br />
      <div className="userOptions">
        <button className="likeButton" onClick={handleLike}>
          {like}
        </button>
        <button onClick={removeAnswer} type="button" id="removeAns">
          {" "}
          Remove Answer{" "}
        </button>
        <button onClick={copyToClip} type="button" id="shareBttn">
          {" "}
          Share{" "}
        </button>
      </div>
    </div>
  );
}

export default AnswerPoll;
