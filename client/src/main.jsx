import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//import configureAppStore, { sagaMiddleware } from './util/store';
import { Provider } from 'react-redux';

//const store = configureAppStore();

import configureAppStore, { sagaMiddleware } from './store';
import { Provider } from 'react-redux';
import collectionsSaga from './state/collections/saga';
import productSaga from './state/product/saga';
import productsSaga from './state/productCollection/saga';

const store = configureAppStore();

sagaMiddleware.run(collectionsSaga);
sagaMiddleware.run(productSaga);
sagaMiddleware.run(productsSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
