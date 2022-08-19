import axios from "axios";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// auth imports
import { LoggedIn } from "../helpers/auth/userContext";
import { setToken } from "../unusedFiles_ref/auth";

const { REACT_APP_PUBLIC_STRAPI_URL } = process.env;

const Login = () => {
  const navigate = useNavigate();

  // for auth purposes:
  const { setLoggedIn } = useContext(LoggedIn);

  const [data, setData] = useState({ identifier: "", password: "" });
  // const { user, loading } = useUser();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post(
      `${REACT_APP_PUBLIC_STRAPI_URL}/auth/local`,
      {
        identifier: data.identifier,
        password: data.password,
      }
    );
    setToken(response.data);
    setLoggedIn(true);
    navigate("/events");
  };
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <p>Please log in with the email and password you used to register.</p>
        <div>
          <label htmlFor="email">
            <input
              className="form-input"
              type="email"
              name="identifier" // Strapi auth requires and 'identifier'
              placeholder="email"
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label htmlFor="password">
          <div>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              required
            />
          </div>
        </label>
        <div className="button-submit">
          <input type="submit" />
        </div>
      </form>
    </>
  );
};

export default Login;
