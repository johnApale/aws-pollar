import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { messagesByConversation } from "../../graphql/queries";

import "./Messages.css";
import {
  createConversation,
  createConversationUser,
  createMessage,
} from "../../graphql/mutations";
import { onCreateMessageByConversationID } from "../../graphql/subscriptions";
import { useNavigate } from "react-router-dom";

function Messages({ user, convoUser, conversationID }) {
  const [convoID, setConvoID] = useState();
  const [messageList, setMessageList] = useState();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    API.graphql({
      query: onCreateMessageByConversationID,
      variables: { conversationID: conversationID },
    }).subscribe({
      next: (convo) => {
        const newConvoID = convo.value.data.onCreateMessageByConversationID;
        setMessageList((messageList) => [...messageList, newConvoID]);
      },
    });
  }, [convoUser]);

  useEffect(() => {
    async function getMessages() {
      try {
        const conversationData = await API.graphql(
          graphqlOperation(messagesByConversation, {
            conversationID: conversationID,
          })
        );
        console.log(conversationData);
        setMessageList([...conversationData.data.messagesByConversation.items]);
      } catch (e) {
        console.log("error fetching messages, ", e);
      }
    }
    if (conversationID) {
      getMessages();
    }
  }, [convoUser, conversationID]);

  const handleSendMessage = () => {
    async function createNewConversation() {
      const time = formatDate();
      let newConversationID = "";
      // create conversation
      try {
        const conversationData = await API.graphql(
          graphqlOperation(createConversation, { input: { createdAt: time } })
        );
        newConversationID = conversationData.data.createConversation.id;

        try {
          // create user 1
          const conversationUser1 = await API.graphql(
            graphqlOperation(createConversationUser, {
              input: {
                conversationID: newConversationID,
                userID: user,
              },
            })
          );

          // create user 2
          const conversationUser2 = await API.graphql(
            graphqlOperation(createConversationUser, {
              input: {
                conversationID: newConversationID,
                userID: convoUser,
              },
            })
          );
        } catch (e) {
          console.log("Error making user conversation, ", e);
        }
      } catch (e) {
        console.log("Error creating conversation, ", e);
      }
      setConvoID(newConversationID);
      createMessageData(newConversationID);
    }

    async function createMessageData(converID) {
      const messageData = {
        content: message,
        userID: user,
        conversationID: converID,
      };
      try {
        const messageModel = API.graphql(
          graphqlOperation(createMessage, { input: messageData })
        );
      } catch (e) {
        console.log("Error sending message, ", e);
      }
      setMessage("");
    }
    if (conversationID) {
      console.log(conversationID);
      // console.log("Existing");
      createMessageData(conversationID);
    } else {
      // console.log("New");
      createNewConversation();
    }
  };

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

  const stringDate = (iso) => {
    const date = new Date(iso);
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

  function goToUser(username) {
    navigate(`/profile/${username}`);
  }

  return (
    <div className="Messages">
      <div className="messages__box">
        <div className="messages__top">
          <p
            className="message__user"
            onClick={() => {
              goToUser(convoUser);
            }}
          >
            {convoUser}
          </p>
        </div>
        <div className="messages__middle">
          <div className="messages__thread">
            {messageList &&
              messageList
                .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
                .map((val, key) => {
                  return (
                    <>
                      {val.userID === user ? (
                        <div className="message__right" key={key}>
                          <div className="message__bubble">
                            <div className="message__content">
                              {val.content}
                            </div>
                          </div>
                          <div className="message__created">
                            {stringDate(val.createdAt)}
                          </div>
                        </div>
                      ) : (
                        <div className="message__left" key={key}>
                          <div className="message__bubble__left">
                            <div className="left__content">{val.content}</div>
                          </div>
                          <div className="left__message__created">
                            {stringDate(val.createdAt)}
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
          </div>
        </div>
        <div className="messages__bottom">
          <input
            type="text"
            className="message__input"
            value={message}
            placeholder="Write a message"
            onKeyPress={(event) => {
              if (event.code === "Enter") {
                handleSendMessage();
              }
            }}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
          <button
            className="message__send"
            onClick={() => {
              handleSendMessage();
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Messages;
