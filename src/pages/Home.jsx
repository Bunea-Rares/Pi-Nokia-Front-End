import React, { useEffect, useState } from "react";
import get from "../fetch/get";
import userStatus from "../components/userStatus";
import TeamCard from "../ui/TeamCard";

const Home = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchTeams = async () => {
      const data = await get("/api/teams");
      setData(data);
    };
    fetchTeams();
  }, []);
  return (
    <div className="grid mt-12 grid-cols-2 gap-12 justify-center md:grid-cols-4">
      {userStatus() &&
        data.teams?.map((team, index) => {
          return (
            <TeamCard
              key={index}
              code={team.team.code}
              title={team.team.name}
              author={team.team.ownerId}
              id={team.team.id}
            />
          );
        })}
    </div>
  );
};

export default Home;
