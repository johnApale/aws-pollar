import React, { useState, useEffect } from "react";
import "./Poll.css"
import { DataStore } from "aws-amplify";
import { Poll, Sex, UserInformation } from "../../models";

function AnswerPoll(props) {
  const [pollInfo, setPollInfo] = useState([]);

  const queryData = async () => {
    const models = await DataStore.query(Poll, (p) =>
      p.title("contains", "try again")
    );
    console.log(pollInfo);
    setPollInfo(models);
  };
  
  
  return (
    <div onLoad={queryData}>
      <body>
      <div class = "form">
        <form class = "answerPoll">


      
        <span class = "username">
          <p1> creator username</p1>
        </span>

      
        <br/><h1>Title:{pollInfo[1]}</h1>

      
        <div class = "description">
          <p2> poll description</p2><br></br>
        </div>

      
        <div class = "pollOptions">
          <label class = "options"> 
            <input type = "radio" checked = "checked" name = "radio" id = "option1"/>
            <span class = "selectOption"></span>
          </label><br/>
          <label class = "options"> 
            <input type = "radio" checked = "checked" name = "radio" id = "option2"/>
            <span class = "selectOption"></span>
          </label><br/>
          <label class = "options"> 
            <input type = "radio" checked = "checked" name = "radio" id = "option3"/>
            <span class = "selectOption"></span>
          </label><br/>
          <label class = "options"> 
            <input type = "radio" checked = "checked" name = "radio" id = "option4"/>
            <span class = "selectOption"></span>
          </label><br/>
          <label class = "options"> 
            <input type = "radio" checked = "checked" name = "radio" id = "option5"/>
            <span class = "selectOption"></span>
          </label><br/>
          <label class = "options"> 
            <input type = "radio" checked = "checked" name = "radio" id = "option6"/>
            <span class = "selectOption"></span>
          </label><br/>
          <label class = "options"> 
            <input type = "radio" checked = "checked" name = "radio" id = "option7"/>
            <span class = "selectOption"></span>
          </label><br/>
          <label class = "options"> 
            <input type = "radio" checked = "checked" name = "radio" id = "option8"/>
            <span class = "selectOption"></span>
          </label><br/>
        </div>
      <div class = "pollVote">
        <br/><input type = "submit" id = "submitAns" value = "Vote"/>
      </div>
    </form>
  </div>
  <br/><div class = "userOptions" >
    <button type = "button" id = "likeBttn"> Like </button>
    <button type = "button" id = "changeAns"> Change Answer </button>
    <button type = "button" id = "removeAns"> Remove Answer</button>
    <button type = "button" id = "shareBttn"> Share </button>
  </div>
  </body>
  </div>
  );
}

export default AnswerPoll;
