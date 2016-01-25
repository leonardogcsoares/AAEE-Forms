describe('AAEE_Form App', function() {

    it('Page should open on index.html', function() {
       browser.get('http:localhost:8000/');

       expect(browser.getTitle()).toContain('AAEE Questionario');
   });

    it('App should have a django-rest-framework api', function() {
        browser.ignoreSynchronization = true;
        browser.get('http:localhost:8000/admin');

        expect(browser.getTitle()).toEqual('Log in | Django site admin');
    });
});