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
import EditAnnouncement from '../../containers/EditAnnouncement';
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



const App = ({isLogged, loading, fonction}) => {

// Custom Route for connected user
const MembersRoute = ({component}) => {
  if (isLogged){
    return <Route component={component} />
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
        <MembersRoute path="/profile/:id" exact component={Profile} />
        <MembersRoute path="/edit-user/:id" exact component={EditUser} />
        <MembersRoute path="/edit-announcement/:id" exact component={EditAnnouncement} />
        <MembersRoute path="/create-announcement" exact component={CreateAnnouncement} />
        <MembersRoute path="/edit-profile/:id" exact component={EditProfile} />
        <MembersRoute path="/my-announcements" exact component={MyAnnouncements} />
        <MembersRoute path="/search" exact component={Search} />
        <MembersRoute path="/tchat-room" exact component={TchatRoom} />
        <MembersRoute path="/legal-notice" exact component={LegalNotice} />
        <MembersRoute path="/contact" exact component={Contact} />
        <MembersRoute path="/information" exact component={Information} />
        <MembersRoute path="/announcement/:id" exact component={Announcement} /> 
        <MembersRoute path="/faq" exact component={FAQ} />
        <Route path="/*" render={() => (<h1>Not Found</h1>)} />
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