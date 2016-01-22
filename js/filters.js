var AppFilters = angular.module('AppFilters', []);

AppFilters .filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
