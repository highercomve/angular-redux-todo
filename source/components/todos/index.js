export default function todoAppFactory (ngComponent) {
  ngComponent.directive('todoApp', todoApp)

  function todoApp (Store) {
    return {
      restrict: 'E',  
      templateUrl: 'todos/template.html',
      scope: {
        state: "=?"
      },
      link(scope, element, attrs) {
        // scope bindings
        scope.onFilterHandler = filterHandler
        scope.onCheckHandler = checkHandler
        scope.onSubmitHandler = submitHandler
        scope.onRemoveHandler = removeHandler
        scope.state = Store.getState()
          
        // "private" methods and vaiables
        const unsubscribe = Store.subscribe(updateState)

        function updateState () {
          scope.state = Store.getState()
        }

        // this actions can be easylly moved to a factory and then attach to this scope
        function filterHandler (filter) {
          Store.dispatch({ type: "SET_VISIBILITY_FILTER", filter: filter })
        }

        function checkHandler (index) {
          Store.dispatch({ type: "TOGGLE_TODO", index: index })
        }

        function submitHandler (value) {
          Store.dispatch({ type: "ADD_TODO", text: value })
        }

        function removeHandler (index)  {
          Store.dispatch({ type: "REMOVE_TODO", index: index })
        }

        scope.$on("$destroy", unsubscribe)
      }
    }
  }
}
