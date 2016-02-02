
var app = angular.module('FormApp');

app.factory('FormFactory',['$http', '$resource', function($http, $resource) {

    FormFactory = {};
    var NewUser = $resource('/api/forms/:id', {id: "@id"}, {
        post: {method: 'POST'},
        checked: {method: 'POST', params:{discount:true}}
    });
    
    FormFactory.saveUser = function(person, callback) {
        var newPerson = new NewUser(person);
        newPerson.$post(function(response) {
            // Success callback
            callback(response);
        }, function(error) {
            callback(response);
        });
    };

    return FormFactory;
}]);