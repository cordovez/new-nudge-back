// Pages
import { Events, Home, Login, Users, User, SignUp } from "./pages/index";

// Components
import SiteHeader from "./components/authentication/Header";
import Event from "./components/Events/Event";
import DoesNotExist from "./components/doesNotExist";
// libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// context
import { LoggedIn } from "./helpers/auth/userContext";
import { useState } from "react";
//  Apollo client
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  // const { user, loading } = useUser();
  return (
    <Router>
      <ApolloProvider client={client}>
        {/* <UserProvider value={{ user, loading }}> */}
        <LoggedIn.Provider value={{ loggedIn, setLoggedIn }}>
          <SiteHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<User />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<Event />} />

            <Route path="*" element={<DoesNotExist />} />
          </Routes>
        </LoggedIn.Provider>

        {/* </UserProvider> */}
      </ApolloProvider>
    </Router>
  );
}

export default App;
