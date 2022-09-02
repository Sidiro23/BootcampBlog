import React, {Component} from "react";
import {Route, Redirect, HashRouter} from "react-router-dom";
import Homepage from './components/Homepage/Homepage'
import DashBoard from './components/Dashboard/Dashboard'
import NavBar from './components/NavBar/Navbar'
import Blog from './components/Blog/Blog'
import Comment from './components/Comment/Comment'









class Header extends Component {
  render(){
    return (
      <HashRouter>
        <header>
          <NavBar />
        </header>

        <div className="content">
          <Route exact path="/" render={()=> <Redirect to="/Homepage" />} />
          <Route path="/Homepage" component={Homepage} />
          <Route path="/Dashboard" component={DashBoard} />
          <Route path="/Blog" component={Blog} />
          <Route path="/Comment" component={Comment} />
        </div>
      </HashRouter>

    );
  }
}

export default Header;