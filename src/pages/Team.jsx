import React, { useEffect, useState } from "react";
import get from "../fetch/get";
import CreateTask from "../components/CreateTask";
import TaskCard from "../ui/TaskCard";
import { useNavigate } from "react-router-dom";

const Team = (props) => {
  const [tasks, setTasks] = useState({});
  const [fetched, setFetched] = useState(false);
  const [members, setMembers] = useState({});
  const query = window.location.search.valueOf("id");
  const params = new URLSearchParams(query);
  const id = params.get("id");
  const navigate = useNavigate();
  const [membersName, setMembersName] = useState([]);

  const getAuthorName = (authorId) => {};

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await get("/api/teams/" + id + "/tasks");
      const members = await get("/api/teams/" + id + "/members");
      setTasks(tasks);
      setMembers(members);
      return members;
    };
    getTasks().then((members) => {
      const membersName = [];
      members.forEach((userToTeam) => {
        membersName.push(userToTeam.user.username);
      });
      setMembersName(membersName);
    });
  }, [id]);
  console.log(membersName);

  return (
    <div>
      <CreateTask teamId={id} />
      <div className="w-full flex flex-col justify-center items-center mt-12">
        {tasks.tasks?.map((task) => {
          return (
            <TaskCard
              key={task.id}
              id={task.id}
              teamId={id}
              title={task.title}
              priority={task.priority}
              description={task.description}
              author={task.authorId}
              assignedTo={task.assignedId}
              createdAt={task.createAt}
              comments={task.comments}
              onClick={(e) => {
                navigate(`${id}/task/${task.id}`, {
                  state: { task: task, membersName: membersName },
                });
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Team;
