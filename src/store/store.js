import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';

// Used for setting up Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Create Redux store that takes in all reducers and composeEnhancers which wraps Redux Thunk middleware
export const store = createStore(
  rootReducer,
  // Redux Thunk handles dispatching asynchronous operations and functions
  composeEnhancers(applyMiddleware(thunk))
);
