var routerApp = angular.module('routerApp', ['ui.router','AppControllers','AppDirectives','AppFilters','AppServices']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'templates/partial-home.html'
        })
        
        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'templates/partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        
        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'templates/partial-about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': { 
                    templateUrl: 'templates/table-data.html',
                    controller: 'scotchController'
                },
				 'columnThree@about': { 
                    templateUrl: 'templates/phone-list.html',
                    controller: 'PhoneListCtrl'
                }
            }
            
        })
		 .state('about.detail', {
           url: '/detail',
		   views: {
             
            'columnTwo@about': { templateUrl: 'templates/detail.html', },
             
            }
        })
		.state('about.phonedetail',{
			url:'/phonedetail/:id',
			views:{
				'columnThree@about':{
					templateUrl: 'templates/phone-detail.html',
					/* template: 'Look I am a column!' , */
					controller: 'PhoneDetailCtrl'}
				}
		})
		
		// route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'templates/form.html',
            controller: 'formController'
        })
         
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'templates/form-profile.html'
        })
         
        // url will be /form/interests
        .state('form.interests', {
            url: '/interests',
            templateUrl: 'templates/form-interests.html'
        })
         
        // url will be /form/payment
        .state('form.payment', {
            url: '/payment',
            templateUrl: 'templates/form-payment.html'
        });
        
});




