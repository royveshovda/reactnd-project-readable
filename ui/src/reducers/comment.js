import {
  ADD_COMMENT,
  DELETE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  FETCH_COMMENTS_PENDING,
  FETCH_COMMENTS_FULFILLED
} from '../actions'

const initialState = {
  fetching: false,
  fetched: false,
  items: []
}

export function comment(state=initialState, action) {
  switch(action.type) {
    case FETCH_COMMENTS_PENDING:
      return {...state, fetching: true}
    case FETCH_COMMENTS_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload
      }
    case ADD_COMMENT:
      break
    case DELETE_COMMENT:
      break
    case UPVOTE_COMMENT:
      break
    case DOWNVOTE_COMMENT:
      break

    default:
      return state
  }
}
