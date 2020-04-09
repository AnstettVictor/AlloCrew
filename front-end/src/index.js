// == Import : npm
import React from 'react';
import { render } from 'react-dom';

// == Import : local
// Composants
import App from './components/App';
// Store

// == Render
const rootComponent = (
      <App />
);

const target = document.getElementById('root');

render(rootComponent, target);
