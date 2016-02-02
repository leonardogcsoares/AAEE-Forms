var app = angular.module('FormApp');

app.directive('userTable', function() {
    return {
        restrict: 'E',
        transclude: false,
        scope: {
            persons: '=',
            checked: '&'
        },
        templateUrl: '/static/app/directives/user-table.html'
    };
});