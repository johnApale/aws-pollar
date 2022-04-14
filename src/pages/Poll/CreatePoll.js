import React, { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import "./CreatePoll.css";
import { API, graphqlOperation } from "aws-amplify";
import { createPoll } from "../../graphql/mutations";
//import {createPoll, updatePoll, deletePoll, createPollAnswers, updatePollAnswers, deletePollAnswers} from './graphql/mutations';

function CreatePoll(props) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [summary, setSummary] = useState("");
  const [disclaimer, setDisclaimer] = useState(false);
  const [makePub, setMakePub] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const answers = [];

  const createPollFe = async (event) => {
    // gets current data
    let date = new Date();
    event.preventDefault();
    addAnswer();
    console.log(makePub);
    console.log(disclaimer);

    // create object for poll
    const pollInfo = {
      userID: props.user.username,
      title: title,
      publicity: makePub,
      disclaimer: disclaimer,
      description: summary,
      answerChoices: answers,
      categories: [category],
      views: 0,
      // iso 8601 date time format
      timeStart: date.toISOString(),
      timeEnd: date.toISOString(),
    };
    try {
      const newPoll = await API.graphql(
        graphqlOperation(createPoll, { input: pollInfo })
      );
      navigate({
        pathname: "/poll/view",
        search: `?${createSearchParams({ id: newPoll.data.createPoll.id })}`,
        replace: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addAnswer = () => {
    if (answer1.length > 0) {
      answers.push(answer1);
    }
    if (answer2.length > 0) {
      answers.push(answer2);
    }
    if (answer3.length > 0) {
      answers.push(answer3);
    }
    if (answer4.length > 0) {
      answers.push(answer4);
    }
    if (answer5.length > 0) {
      answers.push(answer5);
    }
    if (answer6.length > 0) {
      answers.push(answer6);
    }
    if (answer7.length > 0) {
      answers.push(answer7);
    }
    if (answer8.length > 0) {
      answers.push(answer8);
    }
  };

  return (
    <div className="CreatePoll">
      <form className="poll_form" onSubmit={createPollFe}>
        <h1>Create A Poll</h1>
        <p>Title</p>
        <input
          type="text"
          className="create__title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          required
        />
        <p>Category</p>
        <input
          type="text"
          className="category"
          onChange={(event) => {
            setCategory(event.target.value);
          }}
          required
        />
        <p>Summary</p>
        <input
          type="text"
          className="desription"
          onChange={(event) => {
            setSummary(event.target.value);
          }}
        />
        <p>Answer Options</p>
        <div className="answerOptions">
          <input
            type="text"
            className="answer1"
            placeholder="Answer Choice #1"
            required
            onChange={(event) => {
              setAnswer1(event.target.value);
            }}
          />
          <input
            type="text"
            className="answer2"
            placeholder="Answer Choice #2"
            required
            onChange={(event) => {
              setAnswer2(event.target.value);
            }}
          />
        </div>
        <div className="collapsible">
          {isOpen && (
            <div className="moreAnswers">
              <input
                type="text"
                className="answer3"
                placeholder="Answer Choice #3"
                onChange={(event) => {
                  setAnswer3(event.target.value);
                }}
              />
              <input
                type="text"
                className="answer4"
                placeholder="Answer Choice #4"
                onChange={(event) => {
                  setAnswer4(event.target.value);
                }}
              />
              <input
                type="text"
                className="answer5"
                placeholder="Answer Choice #5"
                onChange={(event) => {
                  setAnswer5(event.target.value);
                }}
              />
              <input
                type="text"
                className="answer6"
                placeholder="Answer Choice #6"
                onChange={(event) => {
                  setAnswer6(event.target.value);
                }}
              />
              <input
                type="text"
                className="answer7"
                placeholder="Answer Choice #7"
                onChange={(event) => {
                  setAnswer7(event.target.value);
                }}
              />
              <input
                type="text"
                className="answer8"
                placeholder="Answer Choice #8"
                onChange={(event) => {
                  setAnswer8(event.target.value);
                }}
              />
            </div>
          )}
          <input
            type="button"
            className="addAnswer"
            value="Add More Answers"
            onClick={(event) => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
        <div className="create__options">
          {" "}
          <p>Poll Options</p>
          <input
            type="checkbox"
            className="makePublic"
            onChange={(event) => {
              setMakePub(!makePub);
            }}
          />{" "}
          Make Public
          <input
            type="checkbox"
            className="disclaimer"
            onChange={(event) => {
              setDisclaimer(!disclaimer);
              if (disclaimer === true) {
                alert(
                  "We take precautions to protect your information when engaging in activity within our site. By providing us with your information, you consent to our collection, use, and disclosure of that information that you voluntarily give us through Pollar. By agreeing to these terms, your information will be collected for the analytics of this poll."
                );
              }
            }}
          />{" "}
          Disclaimer
          <br></br>
        </div>

        <button type="submit" className="submit" value="Create Poll">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePoll;
