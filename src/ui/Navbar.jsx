import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import DropDownUser from "./DropDownUser";

const Navbar = (props) => {
  const [show, setShow] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/signin") setShow(false);
  }, [location.pathname]);

  return (
    <div className="flex justify-between align-baseline p-2 mx-2">
      <div>
        <h2 className="tracking-widest text-2xl text-amber-400 hover:cursor-default">
          Chewbacca
        </h2>
      </div>
      {localStorage.getItem("username") ? (
        <DropDownUser></DropDownUser>
      ) : (
        show && <Link to={"/signin"}>Sign In!</Link>
      )}
    </div>
  );
};

export default Navbar;
