import angular from 'angular'

angular.module('App.components', [])

const components = angular.module('App.components')

require('./todo_form')(components)
require('./todo_list')(components)
require('./todo_show')(components)
require('./todos')(components)
require('./visibility_filter')(components)

export default components
