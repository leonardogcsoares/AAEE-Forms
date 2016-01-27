exports.config = {
    framework: "jasmine",
    seleniumAddress: "http://localhost:4444/wd/hub",
    specs: ['functional_tests.js'],
    files: [
        '../../Scripts/angular.min.js',
        '../../Scripts/angular-mocks.js',
        '../../Scripts/angular-resource.js',
        '../../Scripts/angular-route.js',
        '../app.js'
    ],
    capabilities: {
        browserName: 'firefox'
    },
    baseUrl: "http://localhost:8000"
}