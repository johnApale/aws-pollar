import React, { useState, useEffect, useRef } from "react";
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
} from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { getPoll, getUserAnswer, getLikes } from "../../graphql/queries";
import {
  createLikes,
  deleteLikes,
  createUserAnswer,
  deleteUserAnswer,
  updateUserAnswer,
  updatePoll,
} from "../../graphql/mutations";
import "./ViewPoll.css";

function ViewPoll(props) {
  const [poll, setPoll] = useState([]);
  const [answer, setAnswer] = useState();
  const [answerButton, setAnswerButton] = useState("Vote");
  const [like, setLike] = useState("Like");
  const [likeCount, setLikeCount] = useState();
  const [currentAnswer, setCurrentAnswer] = useState();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const pollData = await API.graphql(
          graphqlOperation(getPoll, { id: id })
        );
        const newPoll = pollData.data.getPoll;
        newPoll.categoryLength = newPoll.categories.length;
        setLikeCount(newPoll.likes.items.length);
        setPoll(newPoll);
        const count = newPoll.views + 1;
        try {
          const addView = await API.graphql(
            graphqlOperation(updatePoll, { input: { id: id, views: count } })
          );
          console.log(pollData);
        } catch (error) {
          console.log("Update error: ", error);
        }
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
        if (answerData.data.getUserAnswer) {
          setAnswerButton("Change Vote");
        } else {
          setAnswerButton("Vote");
        }

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
    if (answerButton === "Vote") {
      try {
        const newAnswer = await API.graphql(
          graphqlOperation(createUserAnswer, { input: answerData })
        );
        console.log(newAnswer);
        setCurrentAnswer(newAnswer.data.createUserAnswer);
        setAnswerButton("Change Vote");
      } catch (error) {
        console.log("Error submitting answer, ", error);
      }
    }
    if (answerButton === "Change Vote") {
      try {
        const updatedAnswer = await API.graphql(
          graphqlOperation(updateUserAnswer, { input: answerData })
        );
        setCurrentAnswer(updatedAnswer.data.updateUserAnswer);
      } catch (error) {
        console.log("Update error, ", error);
      }
    }
  };

  const removeAnswer = async (event) => {
    event.preventDefault();
    const answerData = {
      pollID: id,
      userID: props.user.username,
    };
    try {
      const removeAnswer = await API.graphql(
        graphqlOperation(deleteUserAnswer, { input: answerData })
      );
      alert("Your answer has been removed.");
      setAnswerButton("Vote");
      setCurrentAnswer(null);
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
        setLikeCount(likeCount + 1);
      } catch (error) {
        console.log("Delete error, ", error);
      }
    } else {
      try {
        const removeLike = await API.graphql(
          graphqlOperation(deleteLikes, { input: answerData })
        );
        setLike("Like");
        setLikeCount(likeCount - 1);
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

  function goToUser(username) {
    navigate(`/profile/${username}`);
  }

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const updatedDate = date.toLocaleDateString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return updatedDate;
  };

  return (
    <div className="view__poll">
      <div className="poll__details">
        <div className="poll__top">
          <p className="poll__username" onClick={() => goToUser(poll.userID)}>
            {poll.userID}
          </p>
          <p className="poll__created">{formatDate(poll.createdAt)}</p>
        </div>
        <h3 className="poll__title">{poll.title}</h3>
        <p className="poll__description">{poll.description}</p>

        <p className="poll__categories">
          {poll.categoryLength > 0 && <p> Categories: {poll.categories}</p>}
        </p>

        <div className="poll__options">
          {poll.answerChoices?.map((option, key) => {
            return (
              <div className="poll__option" key={key}>
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
        <br />
        {currentAnswer ? <p>Current Answer: {currentAnswer.answer}</p> : null}
        <br />
        <div className="poll__buttons">
          <button className="answer__button" onClick={handleAnswer}>
            {answerButton}
          </button>
          {currentAnswer ? (
            <button
              className="delete__button"
              onClick={removeAnswer}
              type="button"
              id="removeAns"
            >
              {" "}
              Delete Answer
            </button>
          ) : null}
        </div>

        <div className="poll__bottom">
          <div className="bottom__left">
            <p className="poll__likes">Likes: {likeCount}</p>
            <p className="poll__views">Views: {poll.views}</p>
          </div>
          <div className="bottom__right">
            <button className="like__button" onClick={handleLike}>
              {like}{" "}
            </button>
            <button onClick={copyToClip} type="button" id="shareBttn">
              {" "}
              Share{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPoll;
