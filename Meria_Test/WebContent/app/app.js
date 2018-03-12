
    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'app/pages/home.html',
                controller  : 'mainController'
            })
              // route for the login page
            .when('/login', {
                templateUrl : 'app/pages/login.html',
                controller  : 'loginController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'app/pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'app/pages/contact.html',
                controller  : 'contactController'
            });
    });


