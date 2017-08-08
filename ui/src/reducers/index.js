import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { post } from './post'
import { comment } from './comment'
import { category } from './category'

export default combineReducers({
  router: routerReducer,
  category,
  post,
  comment
})
