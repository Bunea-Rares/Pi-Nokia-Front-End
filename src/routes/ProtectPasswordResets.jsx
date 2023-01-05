import { Navigate } from "react-router-dom";

const ProtectPasswordResets = (props) => {
  if (
    window.location.search.includes("token") &&
    window.location.search.includes("email")
  )
    return <Navigate to="/" replace></Navigate>;
  else return props.children;
};

export default ProtectPasswordResets;
