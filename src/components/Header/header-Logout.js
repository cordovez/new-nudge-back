import { useNavigate } from "react-router";
import { useContext } from "react";
import Cookies from "js-cookie";
import { unsetToken } from "../../../helpers/auth/auth";

// auth
import { LoggedIn } from "../../../helpers/auth/userContext";
const Logout = () => {
  const { loggedIn, setLoggedIn } = useContext(LoggedIn);

  const navigate = useNavigate();

  const token = Cookies.get("jwt");

  const logout = () => {
    unsetToken();
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <div>Welcome you</div>
      <div className="logout">
        <button onClick={logout}>Log out</button>
      </div>
    </>
  );
};

export default Logout;
