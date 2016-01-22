var AppServices = angular.module('AppServices', []);

AppServices.service('Phone', function($http){

  		this.query=function(){
			return $http({
				method:'Get',
				url:'phones/phones.json'
			})
		};

		this.querydetail=function(id){
			/* return $http({
				method:'Get',
				url:'phones/motorola-xoom.json'
			}) */
			/* return $http.get('phones/motorola-xoom.json'); */
			
			var url='phones/'+id+'.json';
			return $http.get(url);
		};

 
  });