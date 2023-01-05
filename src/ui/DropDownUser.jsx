import { useState } from "react";
import JoinTeam from "../components/JoinTeam";
import CreateTeam from "../components/CreateTeam";

const DropDownUser = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div>
      <div className="bg-amber-400 text-white rounded-3xl hover:bg-indigo-700">
        <button
          className="p-2 rounded-3xl"
          onClick={(event) => {
            setShowDropDown(!showDropDown);
          }}
        >
          Howdy, {localStorage.getItem("username").toUpperCase()}!
        </button>
      </div>
      {showDropDown && (
        <div className="absolute rounded-none text-center mt-2 bg-amber-400 overflow-hidden text-white rounded-xl  hover:cursor-pointer">
          <ul>
            <JoinTeam />
            <CreateTeam />
            <li className="p-2 hover:bg-indigo-700">Settings</li>
            <li className="p-2 hover:bg-indigo-700">
              <button
                onClick={(e) => {
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                Log out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownUser;
