import {
  ADD_COMMENT,
  DELETE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from '../actions'

const initialState = {
  fetching: false,
  fetched: false,
  items: []
}

export function comment(state=initialState, action) {
  switch(action.type) {
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
