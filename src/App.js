// Pages
import { Events, Home, Login, Users, User, SignUp } from "./pages/index";

// Components
import SiteHeader from "./components/siteheader";
import Event from "./components/Events/Event";
import DoesNotExist from "./components/doesNotExist";
// libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//  Apollo client
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<Event />} />
          <Route path="*" element={<DoesNotExist />} />
        </Routes>
      </ApolloProvider>
    </Router>
  );
}

export default App;
