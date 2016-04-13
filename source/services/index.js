import angular from 'angular'

angular.module('App.services', [])

let services = angular.module('App.services')

require('./store')(services)
require('./filter_todo')(services)

export default services
