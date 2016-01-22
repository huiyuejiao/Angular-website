var AppDirectives = angular.module('AppDirectives', []);

AppDirectives.directive('spoint', function() {
  return {
    restrict: 'CEA',
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      var fibonacci = [1, 2, 3, 4,5];
      ctrl.$parsers.unshift(function(viewValue) {
        if (fibonacci.indexOf(parseInt(viewValue)) >= 0) {
          ctrl.$setValidity('point', true);
          return viewValue;
        } else {
          ctrl.$setValidity('point', false);
          return undefined;
        }
      });
    }
  };
});

AppDirectives.directive('fieldError', function($timeout) {
  return {
    template: '<div ng-show="se" ng-transclude></div>',
    restrict: 'EAC',
    transclude: true,
    scope: {
      'for': '='
    },
    link: function(scope) {
      scope.$watch('{v: for.$invalid, d: for.$dirty}| json', function(v, ov) {
        v = JSON.parse(v);
        scope.se = v.v && v.d;
      });
    }
  };
});