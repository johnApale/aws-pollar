import React from "react";
import "./Recommended.css";
import { useNavigate } from "react-router-dom";

function RecommendedPolls() {
    

  return (
    <div className="polls">
      {/* <img src="/1.png" className="poll_avatar" /> */}
      <a className="poll_link">
        {" "}
        
      </a>
      <p className="liked_username"></p>
      <p className="description"> </p>
      <p className="pollDate"></p>
      <p className="pollCategory"></p>
    </div>
  );
}

export default RecommendedPolls;