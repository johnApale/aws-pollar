import { API, graphqlOperation } from "aws-amplify";
import React, { useCallback, useEffect, useState } from "react";
import { conversationsByUser } from "../../graphql/queries";
import "./Messages.css";

function Messages(props) {
  const[convoData, setConvoData] = useState();
  const fetchData = useCallback(async () => {
    const user = props.user.username;
    const convosModel = await API.graphql(
      //i think i need to use convorsation link somehow?
      graphqlOperation(conversationsByUser,{
        user: user,
      })
    );
    setConvoData(convosModel.data.conversationsByUser);
    console.log(convoData);
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  },[fetchData]);
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
          <button className="message__send">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Messages;
