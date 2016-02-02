
angular.module('FormApp.controllers', [])
    .controller('formController', ['$scope', '$location', 'FormFactory',function($scope, $location, FormFactory) {

        $scope.person = {};
        $scope.responseStatus = 0;

        $scope.submitUser = function () {
                FormFactory.saveUser($scope.person, function(response) {
                        // Callback

                        // if response is successful:
                        $location.path('/confirmation').replace();
                });
        };

//        $scope.$watch('responseStatus', function(newVal, oldVal, scope) {
//            if(newValue === 200) {
//                scope.clearInputsFromScreen();
//            }
//            else
//                scope.responseStatus = 0;
//        });


}]);