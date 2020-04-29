//import Yarn
import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

//import local
import './style.scss';

//import Components
import LandPage from '../LandPage';
import Register from '../../containers/Register';
import Login from '../../containers/Login';

import Header from '../../containers/Header';
import Home from '../../containers/Home';
import Profile from '../../containers/Profile';
import Search from '../../containers/Search';

import EditProfile from '../../containers/EditProfile';
import EditUser from '../../containers/EditUser';

import MyAnnouncements from '../../containers/MyAnnouncements';
import CreateAnnouncement from '../../containers/CreateAnnouncement'
import TchatRoom from '../../containers/TchatRoom';

import Footer from '../Footer';
import LegalNotice from '../LegalNotice';
import Contact from '../Contact';
import Information from '../Information';
import Announcement from '../../containers/Announcement';
import FAQ from '../FAQ';

import PAGE404 from '../PAGE404';



const App = ({isLogged, loading}) => {

// Custom Route for connected user
const MembersRoute = (props) => {
  if (isLogged){
    return <Route {...props} component={props.component} />
  }
  return <Redirect to="/" />
}

// Custom Route for non connected user
const NonMembersRoute = ({component}) => {
  if (!isLogged){
    return <Route component={component} />
  }
  return <Redirect to="/home" />
}

return(
  <>
    <div className="app__header" >
      <Header />
    </ div>
    <div className="app__main">   
      {/* Routes */}
      <Switch>
        <NonMembersRoute path="/" exact component={LandPage} />
        <NonMembersRoute path="/register" exact component={Register} />
        <NonMembersRoute path="/login" exact component={Login} />
        <MembersRoute path="/home" component={Home} />
        <MembersRoute path="/profile" exact component={Profile} />
        <MembersRoute path="/profile/:id" exact component={Profile} />
        <MembersRoute path="/edit-user" exact component={EditUser} />
        <MembersRoute path="/edit-announcement/:id" exact component={CreateAnnouncement} />
        <MembersRoute path="/create-announcement" exact component={CreateAnnouncement} />
        <MembersRoute path="/edit-profile" exact component={EditProfile} />
        <MembersRoute path="/my-announcements" exact component={MyAnnouncements} />
        <MembersRoute path="/search" exact component={Search} />
        <MembersRoute path="/tchat-room/:id" exact component={TchatRoom} />
        <Route path="/legal-notice" exact component={LegalNotice} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/information" exact component={Information} />
        <MembersRoute path="/announcement/:id" exact component={Announcement} /> 
        <Route path="/faq" exact component={FAQ} />
        <Route path="/*" component={PAGE404} />
      </Switch>
    </div>
    <div className="app__footer">
      <Footer />
    </div>
    {loading && <div className="loading"><p>Chargement...</p></div>}
  </>
)
};

export default App;