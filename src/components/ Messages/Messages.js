import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import // createConversationLink,
// createConversation,
// createMessage,
"../../graphql/mutations";
import { conversationsByUser } from "../../graphql/queries";

import "./Messages.css";

function Messages(props) {
  const getConversation = async () => {
    // const conversationData = await API.graphql(
    //   graphqlOperation(conversationsByUser, { convoLinkUserID: "johndoe" })
    // );
    // console.log(conversationData);
  };
  const sendMessage = async () => {
    // const date = new Date();
    // const conversationData = {
    //   name: "johnapale",
    //   members: ["johnapale", "johndoe"],
    //   // members: [props.sendUser, props.user.username],
    // };
    // try {
    //   const newConversationData = await API.graphql(
    //     graphqlOperation(createConversation, { input: conversationData })
    //   );
    //   const conversationID = newConversationData.data.createConversation.id;
    //   const conversationLink1 = await API.graphql(
    //     graphqlOperation(createConversationLink, {
    //       input: {
    //         convoLinkUserID: "johndoe",
    //         convoLinkConversationID: conversationID,
    //       },
    //     })
    //   );
    //   const conversationLink2 = await API.graphql(
    //     graphqlOperation(createConversationLink, {
    //       input: {
    //         convoLinkUserID: "johnapale",
    //         convoLinkConversationID: conversationID,
    //       },
    //     })
    //   );
    //   const newMessage = await API.graphql(
    //     graphqlOperation(createMessage, {
    //       input: {
    //         author: "johndoe",
    //         content: "hello, john!",
    //         messageConversationID: conversationID,
    //       },
    //     })
    //   );
    // } catch (e) {
    //   console.log("Error sending message", e);
    // }
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
