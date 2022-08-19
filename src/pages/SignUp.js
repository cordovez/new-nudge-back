import axios from "axios";
import { useState } from "react";
import { setToken } from "../unusedFiles_ref/auth";
import { useNavigate } from "react-router";
const SignUP = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    firstName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const reqBody = {
        username: data.username.toLowerCase(),
        firstName: data.firstName,
        email: data.email,
        password: data.password,
      };

      const res = await axios.post("http://localhost:1337/api/users", reqBody);
      if (res.statusText === "Created") {
        setToken(res.data);
        navigate("/");
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <section>
      <h1>Register as new user</h1>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            onChange={handleChange}
            name="username"
          />

          <input
            type="text"
            placeholder="Email"
            onChange={handleChange}
            name="email"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </section>
  );
};

export default SignUP;
