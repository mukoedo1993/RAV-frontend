import React from 'react'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import User from './components/User'
import Account from './components/Account'
import Blog from './components/Blog'

function App() {

  //load the component in the place where we define the Router
  return (
    <Router>
      <div>
        <div>
          <Link to="">Home</Link> |
          <Link to="/account">Account</Link> |
          <Link to="/blog">Blog</Link>
        </div>
        <hr/>
      <Route exact path="/" component={User}  /> 
      <Route path="/account" component={Account}  />
      <Route path="/blog" component={Blog}  />
      </div>

    </ Router>
  ); //exact: so we only need to consider the exact matched path here.
}

export default App;
