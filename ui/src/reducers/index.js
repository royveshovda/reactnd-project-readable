import { combineReducers } from 'redux'

function category (state={}, action) {
  switch(action.type) {
    default :
      return state
  }
}

function post (state={}, action) {
  switch(action.type) {
    default :
      return state
  }
}

function comment (state={}, action) {
  switch(action.type) {
    default :
      return state
  }
}

export default combineReducers({
  category,
  post,
  comment
})
