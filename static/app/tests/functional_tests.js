describe('AAEE_Form App', function() {


    // NOT USED //
    function hasClass( target, className ) {
        return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
    }
    beforeEach(function() {
        jasmine.addMatchers({
            toHaveClass: function() {
                return {
                    compare: function(actual, expected) {
                        return {
                            pass: actual.getAttribute("class").then(function(classes) {
                                return classes.split(" ").indexOf(expected) !== -1;
                            })
                        };
                    }
                };
            }
        });
    });
    // NOT USED //

    it('App should have a django-rest-framework api', function() {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:8000/admin');

        expect(browser.getTitle()).toEqual('Log in | Django site admin');
    });


    describe('models exist and are validated before submitting', function () {

        beforeEach(function () {
            browser.ignoreSynchronization = true;
            browser.get('http://localhost:8000');
        });

        it('page should open on index.html', function() {
            expect(browser.getTitle()).toContain('AAEE Questionario');
        });

        it('should turn background red if name invalid', function () {
            var inputName = element(by.model('person.fullName')).sendKeys("");
            inputName.sendKeys("\t")

            expect(inputName.getAttribute('class')).toContain("ng-invalid");
        });

        it('should turn background red if telefone invalid', function () {
            var inputTelefone = element(by.model('person.telefone')).sendKeys("aaa");
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

    });

});