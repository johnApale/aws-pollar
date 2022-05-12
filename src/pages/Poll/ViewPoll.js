import React, { useState, useEffect, useRef, useContext } from "react";
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
} from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import {
  getPoll,
  getUserAnswer,
  getLike,
  answerByPoll,
  listUserAnswers,
} from "../../graphql/queries";
import {
  createLike,
  deleteLike,
  createUserAnswer,
  deleteUserAnswer,
  updateUserAnswer,
  updatePoll,
} from "../../graphql/mutations";
import CommentSection from "../../components/CommentSection/CommentSection";
import "./ViewPoll.css";
import { AnonymousContext } from "../../components/ToggleButton/anonymous-context";

function ViewPoll(props) {
  const [poll, setPoll] = useState([]);
  const [answerCount, setAnswerCount] = useState();
  const [answerButton, setAnswerButton] = useState("Vote");
  const [like, setLike] = useState("Like");
  const [likeCount, setLikeCount] = useState();
  const [totalCount, setTotalCount] = useState({});
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();

  const { anonymous } = useContext(AnonymousContext);
  useEffect(() => {
    async function fetchData() {
      try {
        const pollData = await API.graphql(
          graphqlOperation(getPoll, { id: id })
        );
        const newPoll = pollData.data.getPoll;
        newPoll.categoryLength = newPoll.categories.length;
        setLikeCount(newPoll.like.items.length);
        setPoll(newPoll);
        const count = newPoll.views + 1;
        fetchCalculateVotes(newPoll);
        try {
          const addView = await API.graphql(
            graphqlOperation(updatePoll, { input: { id: id, views: count } })
          );
        } catch (error) {
          console.log("Update error: ", error);
        }
      } catch (error) {
        console.log(error);
      }
      try {
        const answerData = await API.graphql(
          graphqlOperation(answerByPoll, { pollID: id })
        );
        setAnswerCount(answerData.data.answerByPoll.items.length);
      } catch (e) {
        console.log(e);
      }
    }

    async function fetchCalculateVotes(poll) {
      let totals = {};
      // get answers for poll
      let pollAnswerModel = [];
      try {
        pollAnswerModel = await API.graphql(
          graphqlOperation(listUserAnswers, { filter: { pollID: { eq: id } } })
        );
        pollAnswerModel = pollAnswerModel.data.listUserAnswers.items;
      } catch (e) {
        console.log("Error, ", e);
      }

      for (let i = 0; i < poll.answerChoices.length; i++) {
        let answer = poll.answerChoices[i];
        const count = pollAnswerModel.filter((choice) => {
          if (choice.answer === answer) {
            return true;
          }
          return false;
        }).length;
        totals[answer] = Math.round((count / pollAnswerModel.length) * 100);
      }
      setTotalCount(totals);
    }

    async function fetchAnswer() {
      try {
        const answerData = await API.graphql(
          graphqlOperation(getUserAnswer, {
            pollID: id,
            userID: props.user.username,
          })
        );
        setCurrentAnswer(answerData.data.getUserAnswer.answer);
        if (answerData.data.getUserAnswer) {
          setAnswerButton("Change Vote");
        } else {
          setAnswerButton("Vote");
        }
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchLike() {
      try {
        const likeData = await API.graphql(
          graphqlOperation(getLike, {
            pollID: id,
            userID: props.user.username,
          })
        );
        if (likeData.data.getLike) {
          setLike("Unlike");
        }
      } catch (error) {
        console.log("Error fetching likes, ", error);
      }
    }

    fetchData();
    fetchAnswer();
    calculateVotes();
    fetchLike();
  }, [id, props.user.username]);

  async function handleAnswer(option) {
    const answerData = {
      pollID: id,
      userID: props.user.username,
      answer: option,
    };

    if (currentAnswer === null) {
      // create answer
      try {
        const newAnswer = await API.graphql(
          graphqlOperation(createUserAnswer, { input: answerData })
        );
        setAnswerCount(answerCount + 1);
        setCurrentAnswer(newAnswer.data.createUserAnswer.answer);
      } catch (error) {
        console.log("Error submitting answer, ", error);
      }
      calculateVotes();
    } else if (currentAnswer === option) {
      // delete answer
      try {
        const removeAnswer = await API.graphql(
          graphqlOperation(deleteUserAnswer, {
            input: { pollID: id, userID: props.user.username },
          })
        );
        alert("Your answer has been removed.");
        setAnswerCount(answerCount - 1);
        setCurrentAnswer(null);
      } catch (error) {
        console.log("Delete error, ", error);
      }
    } else {
      // update answer
      try {
        const updatedAnswer = await API.graphql(
          graphqlOperation(updateUserAnswer, { input: answerData })
        );
        setCurrentAnswer(updatedAnswer.data.updateUserAnswer.answer);
      } catch (error) {
        console.log("Update error, ", error);
      }
      calculateVotes();
    }
  }

  const handleLike = async (event) => {
    event.preventDefault();
    const answerData = {
      pollID: id,
      userID: props.user.username,
    };
    if (like === "Like") {
      try {
        const addLike = await API.graphql(
          graphqlOperation(createLike, { input: answerData })
        );
        setLike("Unlike");
        setLikeCount(likeCount + 1);
        NotificationManager.success(
          "You have liked this user's post.",
          "Liked"
        );
      } catch (error) {
        console.log("Delete error, ", error);
      }
    } else {
      try {
        const removeLike = await API.graphql(
          graphqlOperation(deleteLike, { input: answerData })
        );
        setLike("Like");
        setLikeCount(likeCount - 1);
      } catch (error) {
        console.log("Delete error, ", error);
      }
    }
  };

  async function calculateVotes() {
    let totals = {};
    // get answers for poll
    let pollAnswerModel = [];
    try {
      pollAnswerModel = await API.graphql(
        graphqlOperation(listUserAnswers, { filter: { pollID: { eq: id } } })
      );
      pollAnswerModel = pollAnswerModel.data.listUserAnswers.items;
    } catch (e) {
      console.log("Error, ", e);
    }

    for (let i = 0; i < poll.answerChoices.length; i++) {
      let answer = poll.answerChoices[i];
      const count = pollAnswerModel.filter((choice) => {
        if (choice.answer === answer) {
          return true;
        }
        return false;
      }).length;
      totals[answer] = Math.round((count / pollAnswerModel.length) * 100);
    }
    setTotalCount(totals);
  }

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
          <div className="poll__top-mid">
            <p className="poll__created">{formatDate(poll.createdAt)}</p>
            <li />
            {answerCount === 1 ? (
              <p className="poll__answer_count">{answerCount} vote</p>
            ) : (
              <p className="poll__answer_count">{answerCount} votes</p>
            )}
          </div>
        </div>
        <h3 className="poll__title">{poll.title}</h3>
        <p className="poll__description">{poll.description}</p>

        <p className="poll__categories">
          {poll.categoryLength > 0 && <p> Categories: {poll.categories}</p>}
        </p>

        <div className="poll__options">
          {anonymous === true && poll.disclaimer === true ? (
            <>
              {poll.answerChoices?.map((option, key) => {
                return (
                  <div className="anon__poll__option" key={key}>
                    {" "}
                    {option}
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {poll.answerChoices?.map((option, key) => {
                return (
                  <>
                    {currentAnswer === option ? (
                      <div
                        className="current__poll__option"
                        key={key}
                        onClick={() => handleAnswer(option)}
                      >
                        {" "}
                        {option}
                        {currentAnswer && (
                          <div className="poll__percentage">
                            {totalCount[option]}%
                          </div>
                        )}
                      </div>
                    ) : (
                      <div
                        className="poll__option"
                        key={key}
                        onClick={() => handleAnswer(option)}
                      >
                        {" "}
                        {option}
                        {currentAnswer && (
                          <div className="poll__percentage">
                            {totalCount[option]}%
                          </div>
                        )}
                      </div>
                    )}
                  </>
                );
              })}
            </>
          )}
        </div>
        {anonymous === true && poll.disclaimer === true ? null : <></>}

        <div className="poll__bottom">
          <div className="bottom__left">
            <p className="poll__likes">Likes: {likeCount}</p>
            <li />
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
      {currentAnswer ? (
        <CommentSection user={props.user.username} poll={poll.id} />
      ) : (
        ""
      )}
    </div>
  );
}

export default ViewPoll;
