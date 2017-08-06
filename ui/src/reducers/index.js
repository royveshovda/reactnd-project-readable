import { combineReducers } from 'redux'
import { post } from './post'
import { comment } from './comment'

function category (state={}, action) {
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
