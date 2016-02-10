var app = angular.module('FormApp');

app.directive('userTable', ['FormFactory', function(FormFactory) {
    return {
        restrict: 'E',
        transclude: false,
        scope: {
            persons: '=',
            query: '@'
        },
        templateUrl: '/static/app/directives/user-table.html',
        link: function(scope, element, attrs) {

            scope.checked = function(person) {
                console.log("On checked called");

            FormFactory.setCheckedDiscount(person.id, person.discount, function(user) {
                person.discount = user.discount;
            });
            };
        }
    };
}]);