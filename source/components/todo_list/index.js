export default function todoListFactory (ngComponent) {
  ngComponent.directive('todoList', todoList)

  function todoList (TodoFilter) {
    return {
      restrict: 'E',  
      templateUrl: 'todo_list/template.html',
      scope: {
        todos: '=',
        filterBy: '@',
        onCheck: '=',
        onRemove: '='
      },
      link(scope, element, attrs) {
        scope.visibleTodos = () => {
          return TodoFilter.filterTodos(scope.todos, scope.filterBy)
        }
      }
    }
  }
}
