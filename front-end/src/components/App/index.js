//import Yarn
import React from 'react';
import {
  Switch,
  Route,
  useParams,
} from "react-router-dom";

//import local
import './style.scss';
import exemple from './exemple.json';

//import Components
import Header from '../Header';
import Footer from '../Footer';
import LandPage from '../LandPage';
import Register from '../Register';
import Login from '../Login';
import Home from '../../containers/Home';
import Profile from '../../containers/Profile';
import Search from '../../containers/Search';
import EditProfile from '../../containers/EditProfile';
import EditAnnouncement from '../../containers/EditAnnouncement'
import TchatRoom from '../TchatRoom';
import MyAnnouncements from '../MyAnnouncements';
import EditUser from '../EditUser';
import LegalNotice from '../LegalNotice';
import Contact from '../Contact';
import Information from '../Information';
import Announcement from '../../containers/Announcement';
import FAQ from '../FAQ';



const App = () => {

return(
  <>
    <div className="app__header" >
      <Header />
    </ div>
    <div className="app__main">
      
      {/* Routes */}
      <Switch>
        <Route path="/" exact component={LandPage} />
        <Route path="/home" component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/profile/:id" exact component={Profile} />
        <Route path="/edit-user" exact component={EditUser} />
        <Route path="/edit-announcement/:id" exact component={EditAnnouncement} />
        <Route path="/edit-profile/:id" exact component={EditProfile} />
        <Route path="/my-announcements" exact component={MyAnnouncements} />
        <Route path="/search" exact component={Search} />
        <Route path="/tchat-room" exact component={TchatRoom} />
        <Route path="/legal-notice" exact component={LegalNotice} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/information" exact component={Information} />
        <Route path="/announcement/:id" exact component={Announcement} /> 
        <Route path="/faq" exact component={FAQ} />
      </Switch>
    </div>
    <div className="app__footer">
      <Footer />
    </div>
  </>
)
};

export default App;