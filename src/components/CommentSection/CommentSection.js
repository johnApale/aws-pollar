import React, { useState, useEffect, useCallback } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { commentsByPoll } from "../../graphql/queries";
import { createComment } from "../../graphql/mutations";
import "./CommentSection.css";

function CommentSection(props) {
  const [comment, setComment] = useState();
  const [size, setSize] = useState(0);
  const [commentData, setCommentData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);

  const fetchData = useCallback(async () => {
    const pollID = props.poll;
    const commentsModel = await API.graphql(
      graphqlOperation(commentsByPoll, {
        pollID: pollID,
      })
    );
    setCommentData(commentsModel.data.commentsByPoll.items);
    setIsLoading(false);
    if (commentsModel.data.commentsByPoll.items.length > 0) {
      setShow(true);
    }
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

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

  if (isLoading) {
    return <div className="CommentTest">Loading...</div>;
  }

  return (
    <div className="CommentTest">
      <input
        type="text"
        className="comment__input"
        value={comment}
        onChange={handleCommentChange}
        onKeyPress={handleEnterPress}
        placeholder="Write a comment"
      />
      <div className="comments">
        {commentData ? (
          commentData
            .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
            .map((val, key) => {
              return (
                <div className="comment_cards" key={key}>
                  <p className="comment_user">{val.userID}</p>
                  <p className="comment_content">{val.content}</p>
                </div>
              );
            })
        ) : (
          <p className="comment_none"> No Comments</p>
        )}
      </div>
    </div>
  );
}

export default CommentSection;
