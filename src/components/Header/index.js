import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { unsetToken } from "../../../unusedFiles_ref/auth";
import { useContext } from "react";

// components
import Login from "./header-Login";
import Logout from "./header-Logout";
// auth
import { LoggedIn } from "../../../helpers/auth/userContext";

const SiteHeader = () => {
  const { loggedIn } = useContext(LoggedIn);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div className="header-logo">
        <Link to="/">
          <h1>Logo</h1>
        </Link>
      </div>
      {!loggedIn ? <Login /> : <Logout />}
    </div>
  );
  // return token ? (
  //   <>
  //     <div className="header-logo">
  //       <Link to="/">
  //         <h1>Logo</h1>
  //       </Link>
  //     </div>
  //     <div>
  //       <p>You are logged in</p>
  //     </div>
  //     <div className="logout">
  //       <button onClick={logout}>Log out</button>
  //     </div>
  //   </>
  // ) : (
  //   <>
  //     <div className="header-logo">
  //       <Link to="/">
  //         <h1>Logo</h1>
  //       </Link>
  //     </div>
  //     <div>
  //       <p>Please Log in</p>
  //     </div>
  //     <div className="sign-in">
  //       <Link to="/login">
  //         <button>Log In</button>
  //       </Link>
  //     </div>
  //     <div className="sign-up">
  //       <Link to="/signup">
  //         <button>create an account</button>
  //       </Link>
  //     </div>
  //   </>
  // );
};

export default SiteHeader;
