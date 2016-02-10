
angular.module('FormApp.controllers', [])
    .controller('formController', ['$scope', '$location', 'FormFactory',function($scope, $location, FormFactory) {

        $scope.sexes = ('F M').split(' ').map(function(sex) {
            return sex;
        });

        $scope.courses = ('Engenharia Eletrica,Engenharia Mecanica,Engenharia de Producao,' +
        'Engenharia de Minas,Engenharia Metalurgica,Engenharia Civil,Engenharia de Controle e Automacao,' +
        'Engenharia de Sistemas,Engenharia Ambiental').split(',').map(function(course) {
            return course;
        });

        $scope.person = {};

        $scope.submitUser = function () {
            console.log("Is being called");
                FormFactory.saveUser($scope.person, function(response) {
                    if(response.status === 200)
                        $location.path('/confirmation');
                });
        };


    }])
    .controller('userTableController', ['$scope', 'FormFactory', function($scope, FormFactory) {

        $scope.persons = null;

        FormFactory.getAllUsers(function(persons) {
            $scope.persons = persons;
        });

    }]);