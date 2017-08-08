import {
  FETCH_POSTS_PENDING,
  FETCH_POSTS_FULFILLED,
  //FETCH_POSTS_REJECTED,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST
} from '../actions'

const initialState = {
  fetching: false,
  fetched: false,
  items: []
}

export function post(state=initialState, action) {
  switch(action.type) {
    case FETCH_POSTS_PENDING:
      return {...state, fetching: true}
    case FETCH_POSTS_FULFILLED:
      console.log('Posts: ', action.payload)
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload
      }
    case ADD_POST:
      break
    case UPDATE_POST:
      break
    case DELETE_POST:
      break
    case UPVOTE_POST:
      break
    case DOWNVOTE_POST:
      break
    default:
      return state
  }
}
