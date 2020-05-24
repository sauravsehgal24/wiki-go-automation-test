const Mocha = require('mocha')

var mocha = new Mocha({
reporter: 'mochawesome',
reporterOptions: {
    reportFilename: 'WikiGoApp-SmokeTestReport',
    quiet: true,
    html:true,
    json:true,
    charts: true
}
});

module.exports = mocha



