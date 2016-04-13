import { filterTodos, filters } from '../reducers/visibility_filter'

export default function TodoFilterFactory (ngComponent) {
  ngComponent.factory('TodoFilter', TodoFilter)

  function TodoFilter () {
    return {
      filterTodos,
      filters
    }
  }
}
