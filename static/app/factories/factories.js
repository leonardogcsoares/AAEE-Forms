
var app = angular.module('FormApp');

app.factory('UserFactory',['$http', '$resource', function($http, $resource) {

    UserFactory = {};
    var NewUser = $resource('api/save_user');
    
    UserFactory.saveUser = function(person, callback) {
        var newPerson = new NewUser();
        newPerson.data = person;
        newPerson.$save(function(response) {
            // Save success callback
            callback(response);
        });
    };
    
    return UserFactory;
}]);