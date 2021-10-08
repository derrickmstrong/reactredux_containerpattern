import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Import Provider to provide store access to the entire app
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render(
  // Wrap App with Redux store
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
