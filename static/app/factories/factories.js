
var app = angular.module('FormApp');

app.factory('FormFactory',['$http', '$resource', function($http, $resource) {

    FormFactory = {};
    //var NewUser = $resource('/api/forms/:atletica/:id/', {id: "@id" atletica: @atletica}, { // Some how pass the atleticas login so that it only retrieves those specific users
    var NewUser = $resource('/api/forms/:id/', {id: "@id"}, {
        post: {method: 'POST'},
        query: {method: 'GET', isArray: true},
        checked: {method: 'PUT', params:{discount:true}}
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

    FormFactory.getAllUsers = function(callback) {
        var persons = null;

        NewUser.query(function (users) {
            callback(users);
        });
    };

    FormFactory.setCheckedDiscount = function(id, checked, callback) {
        console.log("inside setCheckedDiscount");
        NewUser.get({id: id}, function(user) {
            user.discount = checked;
            user.$checked(function(user, putResponseHeaders) {
                callback(user);
            });
        });

    };

    return FormFactory;
}]);