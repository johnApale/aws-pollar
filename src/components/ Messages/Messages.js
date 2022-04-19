import React from "react";
import "./Messages.css";

function Messages() {
  //use createMessages subscription
  return (
    <div className="Messages">
      <div className="messages__box">
        <div className="messages__top">
          <p className="message__user">User</p>
        </div>
        <div className="messages__middle">
          <div className="messages_thread">Message Thread</div>
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
