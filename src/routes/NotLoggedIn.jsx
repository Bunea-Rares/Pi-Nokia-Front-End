import { Navigate } from "react-router-dom";

const NotLoggedIn = (props) => {
  return !localStorage.getItem("user-token") ? (
    props.children
  ) : (
    <Navigate to="/" replace></Navigate>
  );
};

export default NotLoggedIn;
