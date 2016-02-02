
var app = angular.module('FormApp');

app.factory('FormFactory',['$http', '$resource', function($http, $resource) {

    FormFactory = {};
    var NewUser = $resource('/api/forms/:id', {id: "@id"}, {
        post: {method: 'POST'},
        query: {method: 'GET', isArray: true},
        checked: {method: 'POST', params:{discount:true}}
    });
    
    FormFactory.saveUser = function(person, callback) {
        var newPerson = new NewUser(person);
        newPerson.$post(function(response) {
            // Success callback
            response.status = 200;
            callback(response);
        }, function(error) {
            response.status = 400;
            callback(response);
        });
    };

    FormFactory.getUsers = function(callback) {
        var persons = null;

        NewUser.query(function (users) {
            callback(users);
        });
    }

    FormFactory.setCheckedDiscount = function(id, checked, callback) {
        NewUser.get({id: id}, function(user) {
            user.discount = checked;
            user.$save(function(user, putResponseHeaders) {
                callback(user);
            });
        });

    }

    return FormFactory;
}]);