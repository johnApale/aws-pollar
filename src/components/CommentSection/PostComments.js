import React, { useState, useEffect, useCallback, useContext } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { commentsByPoll } from "../../graphql/queries";
import { createComment } from "../../graphql/mutations";
import "./PostComments.css";

function PostComments(props) {
  const [comment, setComment] = useState();
  const [commentData, setCommentData] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.comments.length > 0) {
      setShow(true);
      setCommentData(props.comments);
    }
  }, []);

  const fetchData = useCallback(async () => {
    const pollID = props.poll.id;
    const commentsModel = await API.graphql(
      graphqlOperation(commentsByPoll, {
        pollID: pollID,
      })
    );
    setCommentData(commentsModel.data.commentsByPoll.items);
    if (commentsModel.data.commentsByPoll.items.length > 0) {
      setShow(true);
    }
  }, []);

  const postComment = () => {
    const newCommentData = {
      content: comment,
      pollID: props.poll.id,
      userID: props.user.username,
    };

    async function pushData() {
      try {
        const newComment = await API.graphql(
          graphqlOperation(createComment, { input: newCommentData })
        );
        fetchData();
      } catch (error) {
        console.log("Error pushing new comment, ", error);
      }
    }
    if (comment) {
      pushData();
      setComment("");
    }
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
    <div className="PostComments">
      {show ? (
        <div className="post_comments">
          {commentData &&
            commentData
              .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
              .map((val, key) => {
                return (
                  <div className="post_comment_cards" key={key}>
                    <p className="post_comment_user">{val.userID}</p>
                    <p className="post_comment_content">{val.content}</p>
                  </div>
                );
              })}
        </div>
      ) : (
        <div className="no__comments">No comments</div>
      )}

      <input
        type="text"
        className="post_comment__input"
        value={comment}
        onChange={handleCommentChange}
        onKeyPress={handleEnterPress}
        placeholder="Write a comment"
      />
    </div>
  );
}

export default PostComments;
