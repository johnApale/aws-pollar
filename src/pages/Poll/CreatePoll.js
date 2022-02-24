import React, { useState } from "react";
import "./CreatePoll.css";
import { DataStore } from "aws-amplify";
import { Poll } from "../../models";
import { USER } from "@aws-amplify/datastore/lib-esm/util";
//import {API, graphqlOperation} from 'aws-amplify';
//import {createPoll, updatePoll, deletePoll, createPollAnswers, updatePollAnswers, deletePollAnswers} from './graphql/mutations';

function CreatePoll() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [summary, setSummary] = useState("");
  const [disclaimer, setDisclaimer] = useState(true);
  const [makePub, setMakePub] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answers, setAnswers] = useState([]);

  //makePub = false;
  //disclaimer, createPoll date, Answers as an array of strings

  const createPollFe = async() => {
    addAnswer();

    await DataStore.save(
      new Poll({
        id: id,
        useerInformationID: USER.id,
        title: title,
        publicity: makePub,
        disclaimer: disclaimer,
        description: summary,
        categories: category,
        answerChoices: answers

      })
    )

  };

  const addAnswer = () => {
    setAnswers([
      answer1,
      answer2,
      answer3,
      answer4,
      answer5,
      answer6,
      answer7,
      answer8,
    ]);
  };

  return (
    <div className="CreatePoll">
      <form className="poll_form">
        <h1>Create A Poll</h1>
        <p>Title</p>
        <input
          type="text"
          className="title"
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
        <p>Poll Options</p>
        <input
          type="checkbox"
          className="makePublic"
          onClick={(event) => {
            setMakePub(!makePub);
          }}
        />
        Make Public
        <input
          type="checkbox"
          className="disclaimer"
          onClick={(event) => {
            setDisclaimer(!disclaimer);
            if (disclaimer == true) {
              alert(
                "We take precautions to protect your information when engaging in activity within our site. By providing us with your information, you consent to our collection, use, and disclosure of that information that you voluntarily give us through Pollar. By agreeing to these terms, your information will be collected for the analytics of this poll."
              );
            }
          }}
        />
        Disclaimer
        <input
          type="submit"
          className="submit"
          value="Create Poll"
          onClick={(e) => {
            createPollFe();
          }}
        />
      </form>
    </div>
  );
}

export default CreatePoll;
