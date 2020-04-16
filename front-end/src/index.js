// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

// == Import : local
// Composants
import App from './components/App';
// Store

// == Render
const rootComponent = (
  <Router>
      <App />
  </Router> 
     
);

const target = document.getElementById('root');

render(rootComponent, target);
