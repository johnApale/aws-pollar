import React from "react";
import "./Home.css"

function Home(props) {
  return (
  <div className="welcome"  >
    Hello, {props.user.username}!
  </div>);
}

export default Home;
