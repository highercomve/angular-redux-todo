export default function todoShowFactory (ngComponent) {
  ngComponent.directive('todoShow', todoShow)

  function todoShow () {
    return {
      restrict: 'E',  
      templateUrl: 'todo_show/template.html',
      scope: {
        todo: "=",
        onCheck: "=",
        onRemove: "="
      },
      link(scope, element, attrs) {}
    }
  }
}
