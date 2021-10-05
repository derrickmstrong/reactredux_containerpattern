import axios from 'axios';
import * as ActionTypes from '../actionTypes';

export const fetchPosts = () => async (dispatch, getState) => {
  dispatch({
    type: ActionTypes.FETCH_POSTS_LOADING,
  });

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts432`
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
