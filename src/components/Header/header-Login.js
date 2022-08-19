import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>Please ...</div>
      <Link to="/login">
        <button>Log In</button>
      </Link>
      <p>or</p>
      <Link to="/signup">
        <button>create an account</button>
      </Link>
    </>
  );
};

export default Login;
