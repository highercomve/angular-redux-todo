export default function todoFormFactory (ngComponent) {
  ngComponent.directive('todoForm', todoForm)

  function todoForm () {
    return {
      restrict: 'E',  
      templateUrl: 'todo_form/template.html',
      scope: {
        onSubmit: "="
      },
      link(scope, element, attrs) {
        scope.text = ''
        scope.errors = []
        scope.createTodo = createTodo 

        function createTodo () {
          if (scope.text !== '') {
            scope.onSubmit(scope.text)
            scope.text = ''
            scope.errors = []
          } else {
            scope.errors = ['You must write a Task']
          }
        }
      }
    }
  }
}
