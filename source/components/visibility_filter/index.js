export default function todoFilterFactory (ngComponent) {
  ngComponent.directive('todoFilter', todoFilter)

  function todoFilter (TodoFilter) {
    return {
      restrict: 'E',  
      templateUrl: 'visibility_filter/template.html',
      scope: {
        filterBy: '@',
        onFilter: '='
      },
      link(scope, element, attrs) {
        scope.filters = TodoFilter.filters
      }
    }
  }
}
