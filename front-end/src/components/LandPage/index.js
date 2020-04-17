import React from 'react';
import './style.scss';
import bg from 'images/bg.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

const LandPage = () => {
  return (
    <div className="landPage__Container" style={{backgroundImage: `url(${bg})` }}>
      <div className="landpage__filter">
        <div className="landPage__InfoContainer">
          <div className="landPage__Description">
            <p>
            Vivamus suscipit sit amet nulla porta fermentum. Suspendisse vestibulum vitae ex quis sollicitudin. Donec aliquam vitae ipsum eu hendrerit. Morbi vitae mattis ligula. Phasellus ac fermentum tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Rutrum velit nisl at mauris. Vestibulum et elit dictum, condimentum libero fermentum, aliquam mauris. Suspendisse condimentum tincidunt tortor, vel tempor magna euismod ac.</p>
            <p>
            Aenean enim quam, blandit quis turpis quis, imperdiet pellentesque ligula. Vestibulum tristique nibh id enim suscipit, eget lobortis mi iaculis.
            </p>
          </div>
          <Link to="/login"><span className="landPage__button button">Connexion</span></Link>
          <Link to="/register"><span className="landPage__button button">Inscription</span></Link>
        </div>
      </div>
    </div>
  )
};

export default LandPage;