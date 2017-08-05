import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducers'
import logger from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(logger)
  )
)

export default store
