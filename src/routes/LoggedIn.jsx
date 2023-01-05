import { Navigate } from "react-router-dom";

const LoggedIn = (props) => {
  return localStorage.getItem("user-token") ? (
    props.children
  ) : (
    <Navigate to="/" replace></Navigate>
  );
};

export default LoggedIn;
