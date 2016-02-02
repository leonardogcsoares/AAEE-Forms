
angular.module('FormApp.controllers', [])
    .controller('formController', ['$scope', '$location', 'FormFactory',function($scope, $location, FormFactory) {

        $scope.person = {};

        $scope.submitUser = function () {
                FormFactory.saveUser($scope.person, function(response) {

                    if(response.status === 200)
                        $location.path('/confirmation');
                });
        };


    }])
    .controller('userTableController', ['$scope', 'FormFactory', function($scope, FormFactory) {

        $scope.persons = null;

        FormFactory.getUsers(function(persons) {
            $scope.persons = persons;
            console.log($scope.persons);
        });

        $scope.checked = function(person) {
            console.log("On checked called");

//            FormFactory.setCheckedDIscount(person.id, person.discount, function(user) {
//                person.discount = user.discount;
//            });
        };

    }]);