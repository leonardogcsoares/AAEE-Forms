
angular.module('FormApp.controllers', [])
    .controller('formController', function($scope) {

        $scope.person = {};

        $scope.submitForm = function () {
                console.log("submitForm called");
        };

});