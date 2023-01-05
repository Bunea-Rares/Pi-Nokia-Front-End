import React, { useState } from "react";
import CreateTaskModal from "../ui/modals/CreateTaskModal";
import post from "../fetch/post";

const CreateTask = ({ teamId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
    const data = { title, description, priority, status };

    const response = await post("/api/teams/" + teamId + "/tasks", data);
  };
  return (
    <div>
      <button
        onClick={() => setShow(!show)}
        className="fixed right-0 bottom-0 w-12 h-12 text-white rounded-full m-5 overflow-hidden hover:bg-indigo-600 bg-amber-300  text-3xl"
      >
        +
      </button>

      <CreateTaskModal
        show={show}
        setPriority={setPriority}
        setShow={setShow}
        setTitle={setTitle}
        setDescription={setDescription}
        setStatus={setStatus}
        handleEvent={handlePost}
      />
    </div>
  );
};

export default CreateTask;
