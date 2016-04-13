import { combineReducers, createStore } from 'redux'
import todos from './todos'
import visibilityFilter from './visibility_filter'

const reducer = combineReducers({
  todos,
  visibilityFilter
})

const store = createStore(reducer)

export default store
