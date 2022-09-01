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
          <Route path="/about" component={Homepage} />
          <Route path="/portfolio" component={DashBoard} />
          <Route path="/contact" component={Blog} />
          <Route path="/resume" component={Comment} />
        </div>
      </HashRouter>

    );
  }
}

export default Header;