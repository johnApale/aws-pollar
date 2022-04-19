import React, { useState, useEffect, useCallback } from "react";
import { API, graphqlOperation } from "aws-amplify";
import "./messageTest.css";

function MessageTest(props){

    // const [user, setUser] = useState([]);
    // const [userData, setUserData] = useState([]); 
    // const [messages, setMessages] = useState();
    const [convoData, setConvoData] = useState();
    const [show, setShow] = useState(false);

    // const setData = () =>{
    //     setConvoData("this is a message");
    // }

    // const [conversation, setConversation] = useState("");

    // const [content, setContent] = useState("")

    useEffect(()=> {
        setShow(false);

    });


    return(
        <div className="messageTest">
            <div className="conversations">
                this is were convorsations are displayed
            </div>
            <div className="current">
                {show ? (
                    <div className="currentConvo">
                        {" "}
                        {convoData &&
                        convoData.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map((val, key) => {
                        return (
                            <div className="messageCard" key={key}>
                                <p className="message_user">{val.userID}</p>
                                <p className="message_content">{val.content}</p>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p className="convo_none"> this is where the messages are displayed</p>
            )}
                <div className="interaction">
                    <input className="messageBox" placeholder="message"></input>
                    <button className="send">Send</button>
                </div>
            </div>
        </div>
    );
}

export default MessageTest;