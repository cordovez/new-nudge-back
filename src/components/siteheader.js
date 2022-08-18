import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { unsetToken } from "../helpers/auth/auth";
const SiteHeader = () => {
  const navigate = useNavigate();

  const token = Cookies.get("jwt");

  const logout = () => {
    unsetToken();
    navigate("/");
  };
  return token ? (
    <>
      <div className="header-logo">
        <Link to="/">
          <h1>Logo</h1>
        </Link>
      </div>
      <div></div>
      <div className="logout">
        <button onClick={logout}>Log out</button>
      </div>
    </>
  ) : (
    <>
      <div className="header-logo">
        <Link to="/">
          <h1>Logo</h1>
        </Link>
      </div>
      <div className="sign-in">
        <Link to="/login">
          <button>Log In</button>
        </Link>
      </div>
      <div className="sign-up">
        <Link to="/signup">
          <button>create an account</button>
        </Link>
      </div>
    </>
  );
};

export default SiteHeader;
