import React, { useEffect } from "react";
import "./Messenger.css";
import Messages from "../../components/ Messages/Messages";

function Messenger(props) {
  useEffect(() => {});

  return (
    <div className="Messenger">
      <div className="messenger__box">
        <div className="messenger__conversations">
          <div className="messenger__title">Messages</div>
        </div>

        <div className="messenger__messages">
          <Messages />
        </div>
      </div>
    </div>
  );
}

export default Messenger;
