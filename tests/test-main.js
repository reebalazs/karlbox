// Suppress console.log spewage in addon code
const env = require("env");
env.log = function () {};


const main = require("main");


exports.test_test_run = function(test) {
  test.pass('Unit test running!');
};

exports.test_id = function(test) {
  test.assert(require('self').id.length > 0);
};


