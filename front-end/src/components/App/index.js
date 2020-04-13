import React from 'react';
import './style.scss';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';


const App = () => (
  <>
    <div className="app__header" >
      <Header />
    </ div>
    <div className="app__main">
      <Home />
    </div>
    <div className="app__footer">
      <Footer />
    </div>
  </>
)
;

export default App;