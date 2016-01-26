
describe('formController', function () {

    beforeEach(module('FormApp'));

    var $controller = null;
    var $scope = {};
    var controller = null;

    beforeEach(inject(function (_$controller_, $rootScope) {
        $controller = _$controller_;
        $scope = $rootScope.$new();
        controller = $controller('formController', {$scope: $scope});


    }));

    it('exists', function () {
        expect(controller).not.toBeNull();
    });



});