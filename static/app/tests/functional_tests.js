describe('AAEE_Form App', function() {

    //// USE "STORY TELLING" TO TEST FUNCTIONALITY OF THE WEBSITE.
    // USE COMMENTS TO TELL THAT STORY


    // Edith wants to see if the app has a django-rest-framework,
    // she access the DRF Admin website.
//    it('App should have a django-rest-framework api', function() {
//        browser.ignoreSynchronization = true;
//        browser.get('http://localhost:8000/admin');
//
//        expect(browser.getTitle()).toEqual('Log in | Django site admin');
//    });


    // Now Edith wants to open the main page of the website and fill out the questionaire.
    describe('Default partial view', function () {

        it('it should open on default partial view questionaire', function () {
            browser.ignoreSynchronization = true;
            browser.get('http://localhost:8000/');

            expect(browser.isElementPresent(by.id('myForm'))).toBe(true);

        });

    });


    // Edith types all the inputs wrongly and sees the input fields going red and messages popping
    // up telling her she needs to correctly fill the fields before submitting.
    describe('models exist and are validated before submitting', function () {

//        beforeEach(function () {
//            browser.ignoreSynchronization = true;
//            browser.get('http://localhost:8000');
//        });

        browser.ignoreSynchronization = true;
        browser.get('http://localhost:8000');

        it('page should open on index.html', function() {
            expect(browser.getTitle()).toContain('AAEE Questionario');
        });

        it('should turn background red if name invalid', function () {
            var inputName = element(by.model('person.fullName')).sendKeys("");
            inputName.sendKeys("\t")

            expect(inputName.getAttribute('class')).toContain("ng-invalid");
        });

        it('should turn background red if telefone invalid', function () {
            var inputTelefone = element(by.model('person.telephone')).sendKeys("aaa");
            inputTelefone.sendKeys("\t")

            expect(inputTelefone.getAttribute('class')).toContain("ng-invalid");
        });

        it('should turn background red if email invalid', function () {
            var email = element(by.model('person.email')).sendKeys("something");
            email.sendKeys("\t");

            expect(email.getAttribute('class')).toContain('ng-invalid');
        });

        it('should turn background red if facebook link invalid', function () {
            var facebook = element(by.model('person.facebookLink')).sendKeys("something");
            facebook.sendKeys("\t");

            expect(facebook.getAttribute('class')).toContain('ng-invalid');
        });

        it('should turn background red if semester invalid', function () {
            var semester = element(by.model('person.semester')).sendKeys("something");
            semester.sendKeys("\t");

            expect(semester.getAttribute('class')).toContain('ng-invalid');
        });

        it('should turn background red if suburb invalid', function () {
            var suburb = element(by.model('person.suburb')).sendKeys("");
            suburb.sendKeys("\t");

            expect(suburb.getAttribute('class')).toContain('ng-invalid');
        });

        it('should turn background red if city invalid', function () {
            var city = element(by.model('person.city')).sendKeys("");
            city.sendKeys("\t");

            expect(city.getAttribute('class')).toContain('ng-invalid');
        });
    });

    describe('on confirmation of submission, should go to confirmation view', function () {

        browser.ignoreSynchronization = true;
        browser.get('http://localhost:8000');


        // Clears all text from input fields
        beforeEach(function () {
            element(by.model('person.fullName')).clear();
            element(by.model('person.telephone')).clear();
            element(by.model('person.email')).clear();
            element(by.model('person.sex')).clear();
            element(by.model('person.facebookLink')).clear();
            element(by.model('person.course')).clear();
            element(by.model('person.semester')).clear();
            element(by.model('person.suburb')).clear();
            element(by.model('person.city')).clear();

        });

        // Edith fills out the fields correctly this time and clicks submit, she is then taken to a confirmation
        // screen that tells her, that her submission was successful.
        it('should pass to confirmation view if submit successful', function () {
            element(by.model('person.fullName')).sendKeys('Leonardo Soares');
            element(by.model('person.telefone')).sendKeys('031997196566');
            element(by.model('person.email')).sendKeys('leonardogcsoares93@gmail.com');
            element(by.model('person.sex')).sendKeys('m');
            element(by.model('person.facebookLink')).sendKeys('https://www.facebook.com/leonardogcsoares');
            element(by.model('person.course')).sendKeys('e');
            element(by.model('person.semester')).sendKeys('9');
            element(by.model('person.suburb')).sendKeys('Coracao Eucaristico');
            element(by.model('person.city')).sendKeys('Belo Horizonte');

            element(by.id('submitButton')).click();

            expect(browser.getCurrentUrl()).toContain('confirmation');

        });


    });

});