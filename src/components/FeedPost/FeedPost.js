import React, { useState, useEffect, useCallback } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { commentsByPoll } from "../../graphql/queries";
import { createComment } from "../../graphql/mutations";
import { useNavigate, createSearchParams } from "react-router-dom";
import "./FeedPost.css";
import PostComments from "../CommentSection/PostComments";

function FeedPost(props) {
  const [viewComments, setViewComments] = useState("View Comments");
  const [comment, setComment] = useState();
  const [commentData, setCommentData] = useState();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const val = props.val;
  const user = props.user;

  useEffect(() => {
    fetchData();
  }, []);

  const showComments = async () => {
    if (viewComments === "View Comments") {
      fetchData();
      if (commentData) {
        setShow(true);
        setViewComments("Hide Comments");
      }
    } else {
      fetchData();
      setShow(false);
      setViewComments("View Comments");
    }
  };

  const fetchData = async () => {
    const pollID = props.val.id;
    const commentsModel = await API.graphql(
      graphqlOperation(commentsByPoll, {
        pollID: pollID,
      })
    );
    setCommentData(commentsModel.data.commentsByPoll.items);
  };

  function goToUser(username) {
    navigate(`/profile/${username}`);
  }

  function goToPoll(pollID) {
    navigate({
      pathname: "/poll/view",
      search: `?${createSearchParams({ id: pollID })}`,
      replace: true,
    });
  }

  return (
    <div className="FeedPost">
      <div className="home__card">
        <div className="homecard__top">
          <div className="homecard__image"></div>
          <div className="homecard__info">
            <div
              className="homecard__user"
              onClick={() => goToUser(val.userID)}
            >
              {val.userID}
            </div>
            <div className="homecard__date">{val.time}</div>
          </div>
        </div>
        <div className="homecard__middle">
          <div className="homecard__question" onClick={() => goToPoll(val.id)}>
            {val.title}
          </div>
          <div className="homecard__question-answers">
            {val.userAnswers.items.length} answers
          </div>
        </div>
        <div className="homecard__bottom">
          <div className="homecard__stats">
            {val.like.items.length} Likes{"  "}
            {val.views} Views
          </div>
          <div className="homecard__comments" onClick={showComments}>
            {viewComments}
          </div>
        </div>
        <div className="homecard__comments-section">
          {show && commentData && (
            <PostComments poll={val} user={user} comments={commentData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default FeedPost;
