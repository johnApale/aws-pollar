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
  const [message, setMessage] = useState("");
  
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
    // const conversationData = await API.graphql(
    //   graphqlOperation(conversationsByUser, { convoLinkUserID: "johndoe" })
    // );
    // console.log(conversationData);
  };
  const sendMessage = async () => {
    const time = formatDate();
    // if{
// if convo isnt made yet
    // }
    try{
      const conversationData = await API.graphql(graphqlOperation(createConversation, {input: {createdAt: time,}}));
      const newConversationID = conversationData.data.createConversation.id;
      // create user 1
      const conversationUser1 = await API.graphql(graphqlOperation(createConversationUser,{input: {conversationID: newConversationID, userID: location.state.fromUser}})); 
      // create user 2
      const conversationUser2 = await API.graphql(graphqlOperation(createConversationUser,{input: {conversationID: newConversationID, userID: location.state.toUser}}));
      const messageData = await API.graphql(graphqlOperation(createMessage, {input: {conversationID: newConversationID, userID: location.state.fromUser, content: message}}));
    }
    catch (e){
      console.log(e)
    }
    

    //still need to add users and message to convorsation
    //still need to figure out how to determine if this conversation exists already or not
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
            onChange={setMessage}
          />
          <button className="message__send" onClick={getConversation}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Messages;
