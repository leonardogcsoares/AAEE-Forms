exports.config = {
    framework: "jasmine",
    seleniumAddress: "http://localhost:4444/wd/hub",
    specs: ['functional_tests.js'],
    files: [
        '../../bower_components/angular/angular.min.js',
        '../../bower_components/angular-mocks/angular-mocks.js',
        '../../bower_components/angular-resource/angular-resource.min.js',
        '../../bower_components/angular-route/angular-route.min.js',
        '../app.js',
        '../controllers/*.js',
        '../directives/*.js',
        '../factories/*.js'
    ],
    capabilities: {
        browserName: 'firefox'
    },
    baseUrl: "http://localhost:8000"
}