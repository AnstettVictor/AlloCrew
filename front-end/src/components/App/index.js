import React, {useState} from 'react';
import './style.scss';
import Header from '../Header';
import Footer from '../Footer';
import LandPage from '../LandPage';


const App = () => {

return(
  <>
    <div className="app__header" >
      <Header />
    </ div>
    <div className="app__main">
      <LandPage />
      </div>
    <div className="app__footer">
      <Footer />
    </div>
  </>
)
};

export default App;