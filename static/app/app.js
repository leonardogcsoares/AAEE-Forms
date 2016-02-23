
var app = angular.module('FormApp', [
    'ngRoute',
    'FormApp.controllers',
    'ngResource',
    'ngMaterial'
]);

app.config(function ($resourceProvider, $routeProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;
        // long format due to Django
        $routeProvider.
            //when('/', {
            //    templateUrl: 'static/app/directives/login.html'
            //}).
            when('/', {
                templateUrl: 'static/app/partials/questionaire.html',
                controller: 'formController'
            }).
            when('/confirmation', {
                templateUrl: 'static/app/partials/questionaire-confirmation.html'
            }).
            when('/main', {
                templateUrl: 'static/app/partials/main-search.html',
                controller: 'userTableController'
            }).
            otherwise({
                redirectTo: '/'
            });

    });




