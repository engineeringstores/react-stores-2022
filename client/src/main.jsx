import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import configureAppStore, { sagaMiddleware } from './util/store';
import { Provider } from 'react-redux';

const store = configureAppStore();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
