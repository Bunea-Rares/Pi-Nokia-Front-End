import React from "react";

const TaskCard = ({
  title,
  author,
  assignedTo,
  createdAt,
  description,
  id,
  priority,
  status,
  comments,
  teamId,
  onClick,
}) => {
  return (
    <div
      className="w-3/5 m-2 bg-amber-300 rounded-2xl overflow-hidden hover:cursor-pointer"
      data-id={id}
      onClick={onClick}
    >
      <div className="p-2">{title}</div>
      <div className="p-2">Status: {status}</div>
      <div className="p-2">Priority: {priority}</div>
      <div className="p-2">Author: {author}</div>
      <div className="p-2">
        Assigned to: {assignedTo ? assignedTo : "Not Assigned"}
      </div>
      <div className="p-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque
        harum in magnam natus ratione tempora voluptatum! Ad at debitis deleniti
        dicta, enim esse illum neque odio, quibusdam reiciendis tempora!
        {description}
      </div>
      <div className="p-2">Create at: {createdAt}</div>
    </div>
  );
};

export default TaskCard;
