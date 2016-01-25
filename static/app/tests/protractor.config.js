exports.config = {
    framework: "jasmine2",
    seleniumAddress: "http://localhost:4444/wd/hub",
    specs: ['functional_tests.js'],
    capabilities: {
        browserName: 'firefox'
    }
}