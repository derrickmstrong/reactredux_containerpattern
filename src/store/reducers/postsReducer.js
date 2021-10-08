import * as ActionTypes from '../actionTypes'

// Initial State
const initState = {
    isLoading: false,
    data: [],
    error: null
}

// Create reducer to determine the new state after action has been dispatched
export const postsReducer = (state = initState, action) => {
    switch(action.type) {
        case ActionTypes.FETCH_POSTS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case ActionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case ActionTypes.FETCH_POSTS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}