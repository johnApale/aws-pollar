import React, { useState, useEffect } from "react";
import "./Poll.css"
import { DataStore } from "aws-amplify";
import { Poll, Sex, UserInformation } from "../../models";

function AnswerPoll(props) {
  const [creatorInfo, setCreatorInfo] = useState([]);
  const [creator, setCreator] = useState([]);
  const [postData, setPostData] = useState([]);
  const [post, setPost] = useState([]);
  const [answers, setAnswers] = useState([]);
  


  useEffect(async () => {
    setPostData(
      await DataStore.query(Poll, (p) => 
        p.id("eq", "942c8a6e-1cd1-4077-aa5b-6eb0d4f3dd77")
      )
    );
    postData.map((val, key) => {
      setPost({
        id: val.id,
        userInformationID: val.userInformationID,
        title: val.title,
        pollUserInformation: val.UserInformation,
        description: val.description,
        answerList: val.answerChoices,
        likes: val.likes,
        views: val.views,

      });
    });

    
    //setAnswers(post.answerChoices);

  
    // setCreatorInfo(
    //   await DataStore.query(UserInformation, (u) =>
    //     u.id("eq", post.userInformationID)
    //   )
    // );
    // creatorInfo.map((val, key) => {
    //   setCreator({
    //     id: val.id,
    //     username: val.username,
    //   });
    // });

  });

  const getCreator = async () =>{
    setCreatorInfo(
      await DataStore.query(UserInformation, (u) => u.id("eq", post.userInformationID))
    );
    creatorInfo.map((val, key) => {
      setCreator({
        id: val.id,
        username: val.username,
      });
    });

    return creator.username;
  }

  // const queryData = async () => {
  //   const models = await DataStore.query(Poll, (p) =>
  //     p.id("eq", "942c8a6e-1cd1-4077-aa5b-6eb0d4f3dd77")
  //   );
    
  //   setPost(models);
  // };



  
  return (
      <body>
      <div class = "form">
        <form class = "answerPoll">


      
        <span class = "username">
          <p1> Creator: {post.userInformationID}</p1>
        </span>

      
        <br/><h1>Title:{post.title}</h1>

      
        <div class = "description">
          <p2> Description: {post.description}</p2><br></br>
        </div>

      
        <div class = "pollOptions">
          <label class = "options"> 
            <input type = "radio" name = "radio" id = "option1"></input>
            <span class = "selectOption">option1:{post.answerList[0]}</span>
          </label><br/>
          <label class = "options"> 
            <input type = "radio" name = "radio" id = "option2"/>
            <span class = "selectOption">option2:{post.answerList[1]}</span>
          </label><br/>
          <label class = "options"> 
            <input type = "radio" name = "radio" id = "option3"/>
            <span class = "selectOption">option3</span>
          </label><br/>
          <label class = "options"> 
            <input type = "radio" name = "radio" id = "option4"/>
            <span class = "selectOption">option4</span>
          </label><br/>
          <label class = "options"> 
            <input type = "radio" name = "radio" id = "option5"/>
            <span class = "selectOption">option5</span>
          </label><br/>
          <label class = "options"> 
            <input type = "radio" name = "radio" id = "option6"/>
            <span class = "selectOption">option6</span>
          </label><br/>
          <label class = "options"> 
            <input type = "radio" name = "radio" id = "option7"/>
            <span class = "selectOption">option7</span>
          </label><br/>
          <label class = "options"> 
            <input type = "radio" name = "radio" id = "option8"/>
            <span class = "selectOption">option8</span>
          </label><br/>
        </div>
      <div class = "pollVote">
        <br/><input type = "submit" id = "submitAns" value = "Vote"/>
      </div>
    </form>
  </div>
  <br/><div class = "userOptions" >
    <button type = "button" id = "likeBttn"> Like: {post.likes}</button>
    <button type = "button" id = "changeAns"> Change Answer </button>
    <button type = "button" id = "removeAns"> Remove Answer</button>
    <button type = "button" id = "shareBttn"> Share </button>
  </div>
  </body>
  );
}

export default AnswerPoll;
