import React, { useEffect, useState } from "react";
import get from "../fetch/get";

const Comments = ({ teamId, taskId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const comments = await get(
        `/api/teams/${teamId}/tasks/${taskId}/getcomments`
      );
      setComments(comments);
    };
    getComments();
  }, []);

  return (
    <div className="h-96 overflow-scroll">
      {comments?.map((comment, index) => {
        return (
          <div key={index}>
            <div>{comment.authorId}</div>
            <div>{comment.message}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
