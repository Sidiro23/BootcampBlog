import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { setContext } from "@apollo/client/link/context";
import Homepage from "./components/Homepage";
import SingleBlog from "./components/SingleBlog";
import DashBoard from "./components/DashBoard";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Resources from "./components/Resources";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="header">
        <Header />
      </div>
      <div className="appBody">
        <div className="navBar">
          <NavBar />
        </div>
        <Router>
          <div className="paths">
          <Routes>
            {/* <div className="homePage"> */}
             
                <Route path="/" element={<Homepage />} />
              {/* </Routes> */}
            {/* </div> */}
            {/* <div className="dashboard"> */}
              {/* <Routes> */}
                <Route path="/dashboard" element={<DashBoard />} />
              {/* </Routes> */}
            {/* </div>
            <div className="signup"> */}
              {/* <Routes> */}
                <Route path="/signup" element={<SignUp />} />
              {/* </Routes> */}
            {/* </div>
            <div className="login"> */}
              {/* <Routes> */}
                <Route path="/login" element={<Login />} />
              {/* </Routes> */}
            {/* </div>
            <div className="resources"> */}
              {/* <Routes> */}
                <Route path="/resources" element={<Resources />} />
              {/* </Routes> */}
            {/* </div>
            <div className="signout"> */}
              {/* <Routes> */}
                <Route path="/Logout" element={<Logout />} />
              {/* </Routes> */}
            {/* </div>
            <div className="singleblog"> */}
              {/* <Routes> */}
                <Route path="/blogs/:blogId" element={<SingleBlog />} />
                </Routes>
            {/* </div> */}
         
          </div>
        </Router>
      </div>

      <Footer />
    </ApolloProvider>
  );
}

export default App;
