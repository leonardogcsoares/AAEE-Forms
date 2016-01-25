describe('AAEE_Form App', function() {

    it('should have a django-rest-framework', function() {
       browser.get('http:localhost:8000/');

       expect(browser.getTitle()).toContain('Django');
   });
});