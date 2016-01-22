'use strict';

/* Controllers */

var AppControllers = angular.module('AppControllers', []);

AppControllers.controller('scotchController', function($scope) {
   
    $scope.message = 'test';  
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});
// our controller for the phone-list
// =============================================================================
AppControllers.controller('PhoneListCtrl', ['$scope', '$http','Phone',
  function($scope, $http,Phone) {	  
    $scope.orderProp = 'age';
    $scope.phones =[];
    Phone.query().then(function(data){
      $scope.phones =data.data;
    });
	
  }]);
  
AppControllers.controller('PhoneDetailCtrl', ['$scope','$http', '$stateParams', 'Phone',
  function($scope,$http, $stateParams, Phone) {
	 console.log($stateParams.id);
	 Phone.querydetail($stateParams.id).then(function(data){
	  $scope.phone=data.data;
      $scope.mainImageUrl =data.data.images[0];

    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
	  console.log(imageUrl);
    };
		  
  }]);
  
// our controller for the form
// =============================================================================
AppControllers.controller('formController', function($scope) {
     
    // we will store all of our form data in this object
    $scope.formData = {};
	$scope.saved = {};
    $scope.reset=function(){
		$scope.formData=angular.copy($scope.saved);
	};
	$scope.update=function(formData){
		$scope.saved=angular.copy(formData);
	};
	$scope.isUnchanged=function(formData){
		return angular.equals(formData,$scope.saved);
	};
    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');
    };
    $scope.reset();
});