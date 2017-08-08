import {
  FETCH_CATEGORIES_PENDING,
  FETCH_CATEGORIES_FULFILLED,
  //FETCH_CATEGORIES_REJECTED
} from '../actions'

const initialState = {
  fetching: false,
  fetched: false,
  items: []
}

export function category(state=initialState, action) {
  switch(action.type) {
    case FETCH_CATEGORIES_PENDING:
      return {...state, fetching: true}
    case FETCH_CATEGORIES_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload
      }
    default:
      return state
  }
}
