angular.module('NavDirective',[]).directive('navtop', function() {
  return {
    restrict: 'E',    // E -> element
    templateUrl: 'templates/directives/navtop.html'
  };
})

angular.module('TestDirective',[]).directive('test', function() {
	return {
		restrist: 'A',
		templateUrl: 'templates/directives/test.html'
	};
});

