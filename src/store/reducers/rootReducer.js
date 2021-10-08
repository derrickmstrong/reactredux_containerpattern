import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';

// Combine all reducers and assign shortname
export const rootReducer = combineReducers({
  posts: postsReducer,
});
