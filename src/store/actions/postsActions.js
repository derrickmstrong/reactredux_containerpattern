import axios from 'axios';
import * as ActionTypes from '../actionTypes';

// Create asynchronous action to dispatch Loading/Success/Fail state (as appropiate)
export const fetchPosts = () => async (dispatch, getState) => {
  // Dispatch Loading state
  dispatch({
    type: ActionTypes.FETCH_POSTS_LOADING,
  });
  // Create try/catch block to check for Success or Error and dispatch results of current state
  try {
    // await axios response
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    dispatch({
      type: ActionTypes.FETCH_POSTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_POSTS_FAILED,
      payload: error,
    });
  }
};
