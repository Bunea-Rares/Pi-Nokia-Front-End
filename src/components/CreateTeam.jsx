import CreateJoinTeamModal from "../ui/modals/CreateJoinTeamModal";
import { useState } from "react";
import post from "../fetch/post";

const CreateTeam = (props) => {
  const [teamName, setTeamName] = useState("");
  const [show, setShow] = useState(false);

  const handleCreateTeam = async (e) => {
    e.preventDefault();

    const response = await post("api/teams", { name: teamName });
  };

  return (
    <li className="">
      <button
        className="block p-2 w-full hover:bg-indigo-700"
        onClick={(e) => {
          setShow(!show);
        }}
      >
        Create a Team
      </button>
      <CreateJoinTeamModal
        handleEvent={handleCreateTeam}
        name={""}
        show={show}
        setShow={setShow}
        setValue={setTeamName}
      />
    </li>
  );
};

export default CreateTeam;
