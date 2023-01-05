import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import post from "../fetch/post";
import Comments from "../ui/Comments";

const Task = (props) => {
  const location = useLocation();
  const { task, membersName, author } = location.state;
  const { teamId, id } = useParams();
  const [comment, setComment] = useState("");
  const date = new Date(task.createAt);

  console.log(membersName);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await post(`/api/teams/${teamId}/tasks/${id}/addcomment`, {
      message: comment,
    });
    setComment("");
    e.target.reset();
  };

  const status = ["NOT_ASSIGNED", "IN_PROGRESS", "QA", "DONE"].filter(
    (e) => e != task.status
  );
  const priority = ["LOW", "MEDIUM", "HIGH", "CRITICAL"].filter(
    (e) => e != task.priority
  );

  return (
    <div className="flex p-2 h-max overflow-hidden">
      <div className="w-3/5 bg-amber-300 m-2 rounded-2xl" data-id={id}>
        <form>
          <div className="p-2">{task.title}</div>
          <div className="p-2">
            <label htmlFor="status">Status: </label>
            <select id="status" name="status">
              <option value={task.status}>{task.status}</option>
              {status.map((status, index) => {
                return (
                  <option key={index} value={status}>
                    {status}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="p-2">
            <label htmlFor="priority">Priority: </label>
            <select id="priority" name="priority">
              <option value={task.priority}>{task.priority}</option>
              {priority.map((priority, index) => {
                return (
                  <option key={index} value={status}>
                    {priority}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="p-2">
            Author: {author?.user.username.toUpperCase()}
          </div>
          <div className="p-2">
            <label htmlFor="assignedTo">Assigned to: </label>
            <select id="assignedTo" name="assignedTo">
              <option value={task.priority}>{task.priority}</option>
              {priority.map((priority, index) => {
                return (
                  <option key={index} value={status}>
                    {priority}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="p-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            atque harum in magnam natus ratione tempora voluptatum! Ad at
            debitis deleniti dicta, enim esse illum neque odio, quibusdam
            reiciendis tempora!
            {task.description}
          </div>
          <div className="p-2">Create at: {`${date.toDateString()}`}</div>
        </form>
      </div>
      <div className="m-2 flex flex-col justify-between">
        <div>
          <h3 className="w-full text-center">Comments:</h3>
          <Comments teamId={task.teamId} taskId={task.id} />
        </div>
        <form action="" className="flex" onSubmit={handleSubmit}>
          <textarea
            className="block p-2.5 w-full text-sm rounded-lg border border-amber-300"
            name="comment"
            id="comment"
            cols="20"
            rows="2"
            placeholder="Add a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button className="p-2 m-2 bg-amber-300 rounded-2xl">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Task;
