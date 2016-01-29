
var app = angular.module('FormApp', [
    'ngRoute',
    'FormApp.controllers',
    'ngResource'
]);

app.config(function ($resourceProvider, $routeProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;
        // long format due to Django
        $routeProvider.
            when('/', {
                templateUrl: 'static/app/partials/questionaire.html',
                controller: 'formController'
            }).
            when('/confirmation', {
                templateUrl: 'static/app/partials/questionaire-confirmation.html',
                controller: 'confirmationController'
            }).
            otherwise({
                redirectTo: '/'
            });

    });




