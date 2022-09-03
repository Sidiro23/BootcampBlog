import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Homepage from './components/Homepage/Homepage'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Comment from './components/Comment/Comment'
import Blog from './components/Blog/Blog';
import Login from './components/LogIn/LogIn'
// import Signup from './components/SignUp/SignUp'
// import Login from './components/LogIn/LogIn'
//import Signup from './components/SignUp/SignUp'

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div>
          <NavBar/>
        </div>
        <div className="container">
          <Login />
          <Homepage />
          <Blog />
          <Comment />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;