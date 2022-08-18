// import axios from "axios";
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// const LogIn = ({ setActiveUser, setLoggedIn }) => {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await axios.get(
//       `http://localhost:1337/users-details?email=${email}&password=${password}`
//     );
//     if (res.data.length === 0) {
//       setErrorMessage("Incorrect Email or password");
//     } else {
//       setActiveUser(res.data);
//       setLoggedIn(true);
//       navigate.push("/");
//     }
//   };
//   return (
//     <section>
//       <div>
//         <form action="" onSubmit={(e) => handleSubmit(e)}>
//           <input
//             type="text"
//             placeholder="Email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {errorMessage && (
//             <p>
//               {errorMessage},<Link to="/signup"> Signup </Link>instead
//             </p>
//           )}
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default LogIn;
