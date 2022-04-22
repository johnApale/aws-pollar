import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import // createConversationLink,
// createConversation,
// createMessage,
"../../graphql/mutations";
import { conversationsByUser } from "../../graphql/queries";

import "./Messages.css";
import { createConversation, createConversationUser, createMessage } from "../../graphql/mutations";
import { Route, useLocation } from "react-router-dom";

function Messages(props) {
  const location = useLocation();
  const [conversationID, setConversationID] = useState();
  const [user1Convos, setUser1Convos] = useState([]);
  const [message, setMessage] = useState("");
  const [userName1, setUserName1] = useState("");
  const [userName2, setUserName2] = useState("");
  
  useEffect(() => {
    console.log(formatDate());
  },[]);

  const formatDate = () => {
    const date = new Date();
    const updatedDate = date.toLocaleDateString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const updatedTime = date.toLocaleTimeString("en-US", {
      timezone: "America/Los_Angeles",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      seconds: "numeric",
    });

    const time = updatedDate + " at " + updatedTime;
    return time;
  };
  

  // create Conversation, need to get ConversationID
  const createConvo = () =>{


  }

  // create ConversationUser

  // create ConversationUser

  
  // onSendMessage
    // create Message
  const getConversation = async () => {
    const user1 = location.state.fromUser;
    const user2 = location.state.toUser;
    let commonID = 0;
    
    
    try{
      const user1Convos = await API.graphql(graphqlOperation(conversationsByUser, {userID:  user1}));
      const user2Convos = await API.graphql(graphqlOperation(conversationsByUser, { userID: user2}));
      
      
      for (let i = 0; i < user1Convos.data.conversationsByUser.items.length; i++){
        for(let k = 0; k < user2Convos.data.conversationsByUser.items.length; k ++){
          if(user1Convos.data.conversationsByUser.items[i].conversationID == user2Convos.data.conversationsByUser.items[k].conversationID){
            commonID = user1Convos.data.conversationsByUser.items[i].conversationID;
          }
        }
      }

      console.log(commonID);
      
      
    }catch (e){
      console.log(e);
    }
    
    return commonID;
  };
  const sendMessage = async (convoID) => {
    
    const time = formatDate();
    
    
    if(convoID == 0){
      try{
        const conversationData = await API.graphql(graphqlOperation(createConversation, {input: {createdAt: time,}}));
        const newConversationID = conversationData.data.createConversation.id;
        // create user 1
        const conversationUser1 = await API.graphql(graphqlOperation(createConversationUser,{input: {conversationID: newConversationID, userID: location.state.fromUser}})); 
        // create user 2
        const conversationUser2 = await API.graphql(graphqlOperation(createConversationUser,{input: {conversationID: newConversationID, userID: location.state.toUser}}));
        const messageData = await API.graphql(graphqlOperation(createMessage, {input: {conversationID: String(newConversationID), userID: location.state.fromUser, content: message}}));
        
      }
      catch (e){
        console.log(e);
        
      }
    }else{
      try{
        const messageData = await API.graphql(graphqlOperation(createMessage, {input: {conversationID: String(convoID), userID: location.state.fromUser, content: message}}));
      }
      catch (e){
        console.log(e);
      }
      
    }
    
  };

  const send = async () =>{
    const convoID = getConversation();

    setTimeout(() => { sendMessage(convoID)  }, 2000);

  };
  //use createMessages subscription
  return (
    <div className="Messages">
      <div className="messages__box">
        <div className="messages__top">
          <p className="message__user">User</p>
        </div>
        <div className="messages__middle">
          <div className="messages__thread">Message Thread</div>
        </div>
        <div className="messages__bottom">
          <input
            type="text"
            className="message__input"
            placeholder="Write a message"
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
          <button className="message__send" onClick={send}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Messages;
