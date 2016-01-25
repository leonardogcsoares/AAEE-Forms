
angular.module('FormApp.controllers', [])
    .controller('formController', function($scope) {

        $scope.isValidTextEntry = function (input) {
            if (input === "" || input === " ")
                return false;

            return true;
        }

});