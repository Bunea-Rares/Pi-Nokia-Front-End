import CreateJoinTeamModal from "../ui/modals/CreateJoinTeamModal";
import { useState } from "react";
import post from "../fetch/post";

const JoinTeam = (props) => {
  const [teamId, setTeamid] = useState("");
  const [show, setShow] = useState(false);

  const handleJoinTeam = async (e) => {
    e.preventDefault();

    const response = await post("/api/join", { code: teamId });
  };

  return (
    <li className="">
      <button
        className="block p-2 w-full hover:bg-indigo-700"
        onClick={(e) => {
          setShow(!show);
        }}
      >
        Join a Team
      </button>
      <CreateJoinTeamModal
        handleEvent={handleJoinTeam}
        name={"JOIN"}
        show={show}
        setShow={setShow}
        setValue={setTeamid}
      />
    </li>
  );
};

export default JoinTeam;
