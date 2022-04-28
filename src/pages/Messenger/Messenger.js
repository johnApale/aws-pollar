import React, { useState, useEffect } from "react";
import "./Messenger.css";
import Messages from "../../components/ Messages/Messages";
import { API, graphqlOperation } from "aws-amplify";
import { conversationsByUser, getConversation } from "../../graphql/queries";
import { useLocation, useNavigate } from "react-router-dom";
import { onCreateConversationUserByUserID } from "../../graphql/subscriptions";

function Messenger(props) {
  const [conversationList, setConversationList] = useState();
  const [newMessage, setNewMessage] = useState(false);
  const [convoID, setConvoID] = useState();
  const [convoUser, setConvoUser] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // clear location state on reload
    navigate(location.pathname, {});

    async function fetchConversations() {
      // // handle if location state exists

      try {
        const conversationModel = await API.graphql(
          graphqlOperation(conversationsByUser, { userID: props.user.username })
        );
        const conversationListData =
          conversationModel.data.conversationsByUser.items;

        for (const element of conversationListData) {
          const users = element.Conversation.conversationUsers.items;
          for (const user of users) {
            if (user.userID !== props.user.username) {
              element.conversationUser = user.userID;
            }
            if (location.state) {
              if (user.userID === location.state.toUser) {
                console.log("test");
                setConvoUser(location.state.toUser);
                setConvoID(element.conversationID);
                openConversation(location.state.toUser, element.conversationID);
              }
            }
          }
        }

        setNewMessage(false);
        setConversationList(conversationListData);

        // console.log(conversationListData[0].Conversation.id);
      } catch (e) {
        console.log(e);
      }
    }
    subscribe();
    fetchConversations();
  }, [props.user.username]);

  function subscribe() {
    API.graphql({
      query: onCreateConversationUserByUserID,
      variables: { userID: props.user.username },
    }).subscribe({
      next: (convo) => {
        const newConvoID =
          convo.value.data.onCreateConversationUserByUserID.Conversation.id;
        console.log(newConvoID);
        fetchConversation(newConvoID);
      },
    });
  }

  async function fetchConversation(id) {
    const convoModel = await API.graphql.graphqlOperation(getConversation, {
      id: id,
    });
    const newConvoData = convoModel.data.getConversation;
    const newConvoUsers =
      convoModel.data.getConversation.conversationUsers.items;
    for (const user of newConvoUsers) {
      if (user.userID !== props.user.username) {
        newConvoData.conversationUser = user.userID;
      }
    }
    setConversationList(...conversationList, newConvoData);
  }
  function openConversation(user, conversationID) {
    setConvoUser(user);
    setConvoID(conversationID);
  }

  return (
    <div className="Messenger">
      <div className="messenger__box">
        <div className="messenger__left">
          <div className="messenger__conversations">
            <div className="messenger__title">Messages</div>
            {/* <button className="new__message" onClick={handleNewMessage}>
              New Message
            </button> */}
          </div>
          <div className="conversation__cards">
            {newMessage && (
              <div className="conversation__card">
                <div className="conversation__user">{convoUser}</div>
              </div>
            )}
            {conversationList &&
              conversationList.map((val, key) => {
                return (
                  <div
                    className="conversation__card"
                    key={key}
                    onClick={() => {
                      openConversation(
                        val.conversationUser,
                        val.conversationID
                      );
                    }}
                  >
                    <div className="conversation__user">
                      {val.conversationUser}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="messenger__messages">
          {newMessage && (
            <Messages user={props.user.username} convoUser={convoUser} />
          )}
          {!newMessage && (
            <Messages
              user={props.user.username}
              convoUser={convoUser}
              conversationID={convoID}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Messenger;
