// == Import : npm
import React, {useEffect} from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, useLocation} from 'react-router-dom';
import { Provider } from 'react-redux';

// == Import : local
// Composants
import App from './containers/App';
// Store
import store from './Redux/store';
// == Render

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const rootComponent = (
  <Router>
    <Provider store={store}>
      <ScrollTop /> 
        <App />
    </Provider>
  </Router> 
     
);

const target = document.getElementById('root');

render(rootComponent, target);
