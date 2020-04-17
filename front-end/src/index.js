// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';

// == Import : local
// Composants
import App from './components/App';
// Store
import store from './Redux/store';
// == Render
const rootComponent = (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router> 
     
);

const target = document.getElementById('root');

render(rootComponent, target);
