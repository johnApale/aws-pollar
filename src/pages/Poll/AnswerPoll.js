import React, { useState, useEffect, useRef } from "react";
import "./AnswerPoll.css";
import { API, graphqlOperation } from "aws-amplify";
import { getPoll } from "../../graphql/queries";
import { useNavigate, useSearchParams } from "react-router-dom";

function AnswerPoll(props) {
  const nav = useNavigate();
  const [poll, setPoll] = useState({});
  const [searchParams] = useSearchParams();
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
    fetchData();
  }, [id]);

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

  async function likeButton() {
    if (likeButtonState === "Like: ") {
      likeButtonState.replace("Like:", "Unlike:");
    } else {
      likeButtonState.replace("Unlike:", "Like:");
    }
  }

  return (
    <body>
      <div class="form">
        <form class="answerPoll">
          <span class="username">
            <p1> Creator: {poll.userID}</p1>
          </span>
          <br />
          <h1>{poll.title}</h1>
          <div class="description"></div>
          <div className="pollOptions">
            {poll.answerChoices?.map((option) => {
              return (
                <div className="pollOption">
                  <input type="radio" name="radio" id={option}></input>
                  <li key={option}> {option}</li>
                </div>
              );
            })}
          </div>

          {/* <div class="pollOptions">
            <label class="options">
              <input type="radio" name="radio" id="option1"></input>
              <span class="selectOption">{poll.answerChoices[0]}</span>
            </label>
            <br />
            <label class="options">
              <input type="radio" name="radio" id="option2" />
              <span class="selectOption">{poll.answerChoices[1]}</span>
            </label>
            <br />
            {poll.answerChoices[2] === "" && (
              <>
                <label class="options">
                  <input type="radio" name="radio" id="option3" />
                  <span class="selectOption">{poll.answerChoices[2]}</span>
                </label>
                <br />
              </>
            )}
            {poll.answerChoices[3] === "" && (
              <>
                <label class="options">
                  <input type="radio" name="radio" id="option4" />
                  <span class="selectOption">{poll.answerChoices[3]}</span>
                </label>
                <br />
              </>
            )}
            {poll.answerChoices[4] === "" && (
              <>
                <label class="options">
                  <input type="radio" name="radio" id="option5" />
                  <span class="selectOption">{poll.answerChoices[4]}</span>
                </label>
                <br />
              </>
            )}
            {poll.answerChoices[5] === "" && (
              <>
                <label class="options">
                  <input type="radio" name="radio" id="option6" />
                  <span class="selectOption">{poll.answerChoices[5]}</span>
                </label>
                <br />
              </>
            )}
            {poll.answerChoices[6] === "" && (
              <>
                <label class="options">
                  <input type="radio" name="radio" id="option7" />
                  <span class="selectOption">{poll.answerChoices[6]}</span>
                </label>
                <br />
              </>
            )}
            {poll.answerChoices[7] === "" && (
              <>
                <label class="options">
                  <input type="radio" name="radio" id="option8" />
                  <span class="selectOption">{poll.answerChoices[7]}</span>
                </label>
                <br />
              </>
            )}
          </div> */}
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
        </form>
      </div>
      <br />
      <div class="userOptions">
        <button onClick={likeButton} type="button" id="likeBttn">
          {" "}
          {/* {likeButtonState} {poll.likes}{" "} */}
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
