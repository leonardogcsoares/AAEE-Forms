
angular.module('FormApp.controllers', [])
    .controller('formController', ['$scope', 'UserFactory', function($scope, UserFactory) {

        $scope.person = {};

        $scope.submitUser = function () {        
                UserFactory.saveUser($scope.person, function(response) {
                        // Callback
                        $scope.responseStatus = response.status;
                });
        };

}]);