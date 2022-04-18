import { TextField } from "@aws-amplify/ui-react";
import React, { useState, useEffect } from "react";
import "./messageTest.css";

function messageTest(props){

    // const [user, setUser] = useState([]);
    // const [userData, setUserData] = useState([]); 
    // const [messages, setMessages] = useState([]);

    // const [conversation, setConversation] = useState("");

    // const [content, setContent] = useState("")

    return(
        <div className="messageTest">
            <div className="conversations">
                this is were convorsations are displayed
            </div>
            <div className="current">
                <div className="currentConvo">
                    this is where the messages are displayed
                </div>
                <div className="interaction">
                    <input className="messageBox" placeholder="message"></input>
                    <button className="send">Send</button>
                </div>
            </div>
            
            
        </div>
    );
}

export default messageTest;