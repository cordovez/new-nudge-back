// import { createContext, useContext, useEffect, useState } from "react";
// import { getUserFromLocalCookie } from "./auth";

// // 1. null userState
// let userState;

// //  2. createContext
// const User = createContext({ user: null, loading: false });

// // 3. UserProvider() encapsulates and returns User.Provider (3c)
// export const UserProvider = ({ value, children }) => {
//   // 3a. defining user from the {value} passed in
//   const { user } = value;

//   // 3b. as a sideEffect, assign user to userState if userState is null and there is a user
//   useEffect(() => {
//     if (!userState && user) {
//       userState = user;
//     }
//   }, []);

//   // 3c.
//   return <User.Provider value={value}>{children}</User.Provider>;
// };

// // 4. useUser then becomes the context (2)
// export const useUser = () => useContext(User);
// // *********************************
// // 6. useFetchUser is the function that brings it all together?
// export const useFetchUser = () => {
//   // 6a. defining the data it will return:
//   const [data, setUser] = useState({
//     user: userState || null,
//     loading: userState === undefined,
//   });

//   // 6b. as a side Effect escape if userState exists
//   useEffect(() => {
//     if (userState !== undefined) {
//       return;
//     }

//     // 6c. isMounted true as default and set user, then unMount
//     let isMounted = true;
//     const resolveUser = async () => {
//       const user = await getUserFromLocalCookie();
//       if (isMounted) {
//         setUser({ user, loading: false });
//       }
//     };
//     resolveUser();

//     return () => {
//       isMounted = false;
//     };
//     // * but why no dependency?
//   }, []);
//   // 7. data is returned
//   return data;
// };
