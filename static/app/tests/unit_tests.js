
describe('Form App', function () {

    beforeEach(module('FormApp'));
    
    var $controller = null;
    var $scope = {};
    var controller = null;
    var factory = null
    var $httpBackend = null

    beforeEach(inject(function (_$controller_, $rootScope, $injector) {
        $controller = _$controller_;
        //$scope = $rootScope.$new();
        controller = $controller('formController', {$scope: $scope});
        factory = $injector.get('UserFactory');
        $httpBackend = $injector.get('$httpBackend');
    }));
    
    it('controller should exist', function () {
        expect(controller).not.toBeNull();
    });
        
    it('factory should exist', function() {
        expect(factory).not.toBeNull();
    });
    
    it('when user data is being submitted, factory save user should be called', function() {
        spyOn($scope, 'submitUser').and.callThrough();
        spyOn(factory, 'saveUser');
        
        $scope.submitUser();
        expect(factory.saveUser).toHaveBeenCalled();
    });
    
    it('should send a post request to save user and return callback success (200)', function() {
       $httpBackend.whenPOST('api/save_user').respond({status: 200});
       spyOn(factory, 'saveUser').and.callThrough();
       spyOn($scope, 'submitUser').and.callThrough();
       var callback = jasmine.createSpy();
       var userData = {}
        
       $scope.submitUser({}, callback)
       //factory.saveUser(userData, callback);
       $httpBackend.flush();
       
       expect($scope.responseStatus).toEqual(200);
    });
    
    it('should send a post request to save user and return error callback (400)', function() {
       $httpBackend.whenPOST('api/save_user').respond({status: 400});
       spyOn(factory, 'saveUser').and.callThrough();
       spyOn($scope, 'submitUser').and.callThrough();
       var callback = jasmine.createSpy();
        
       $scope.submitUser({}, callback)
       $httpBackend.flush();
       
       expect($scope.responseStatus).not.toEqual(200);
    });
    
    it('should lead user to the next page if callback response success', function() {
        
    });
    
    
    
    
    
});