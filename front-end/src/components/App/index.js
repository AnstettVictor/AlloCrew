import React, {useState} from 'react';
import './style.scss';
import exemple from './exemple.json';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from '../Header';
import Footer from '../Footer';
import LandPage from '../LandPage';
import Register from '../Register';
import Login from '../Login';
import Home from '../Home';
import Profile from '../Profile';
import Search from '../Search';

console.log(exemple);

const App = () => {

return(
  <>
    <div className="app__header" >
      <Header />
    </ div>
    <div className="app__main">
      <Switch>
        <Route path="/" exact component={LandPage} />
        <Route path="/home" component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/search" exact component={Search} />
        <Route path="/profile" exact component={Profile} />



      </Switch>
    </div>
    <div className="app__footer">
      <Footer />
    </div>
  </>
)
};

export default App;