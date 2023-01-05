import React from "react";
import { useNavigate } from "react-router-dom";

const TeamCard = ({ title, author, code, id }) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-center justify-self-center mx-auto  w-48 rounded-2xl overflow-hidden cursor-default text-center flex-col text-xl bg-amber-400 text-white">
      <div className="h-24 m-2 flex  items-center justify-center">
        <div>
          {title.length > 24
            ? title.slice(0, 24).toUpperCase() + "..."
            : title.toUpperCase()}
        </div>
      </div>
      <div className="mt-2">{author}</div>
      <button
        className="mt-2 hover:bg-indigo-700"
        data-code={code}
        onClick={async (e) => {
          await navigator.clipboard.writeText(e.target.dataset.code);
        }}
      >
        COPY CODE
      </button>
      <button
        data-id={id}
        className="overline mt-2 hover:bg-indigo-700"
        onClick={(e) => {
          navigate("/team?id=" + id);
        }}
      >
        OPEN
      </button>
    </div>
  );
};

export default TeamCard;
