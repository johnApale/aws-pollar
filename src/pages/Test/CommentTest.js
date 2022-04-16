import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { commentsByPoll, getComment } from "../../graphql/queries";
import { createComment } from "../../graphql/mutations";

function CommentTest(props) {
  const [comment, setComment] = useState();
  const [commentData, setCommentData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const commentsModel = await API.graphql(
          graphqlOperation(commentsByPoll, {
            pollID: props.poll,
            sortDirection: "ASC",
          })
        );
        setCommentData(commentsModel);
      } catch (error) {
        console.log("Error fetching comments, ", error);
      }
    }
    fetchData();
  });

  const postComment = () => {
    const newCommentData = {
      content: comment,
      pollID: props.poll,
      userID: props.user,
    };
    async function pushData() {
      try {
        const newComment = await API.graphql(
          graphqlOperation(createComment, { input: newCommentData })
        );
      } catch (error) {
        console.log("Error pushing new comment, ", error);
      }
    }
    pushData();
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.code === "Enter") {
      postComment();
    }
  };

  return (
    <div className="CommentTest">
      {commentData ? <p>Show Comments</p> : <p>No comments</p>}
      <input
        type="text"
        className="comment__input"
        onChange={handleCommentChange}
        onKeyPress={handleEnterPress}
      />
      <button onClick={postComment}>Save Comment</button>
    </div>
  );
}

export default CommentTest;
