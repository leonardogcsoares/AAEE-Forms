var app = angular.module('FormApp');

app.directive('userTable', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            persons: '=data'
        },
        templateUrl: 'user-table.html'
    };
});