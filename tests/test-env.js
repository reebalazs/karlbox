const {Cc,Ci,Cr} = require("chrome");
const env = require("env");

exports.test_test_run = function(test) {
  test.pass('Unit test running!');
};

exports.test_chrome_aliases = function(test) {
    // Make sure the chrome aliases work

    // Now test all of them
    test.assertEqual(Cc, env.cc);
    test.assertEqual(Ci, env.ci);
    test.assertEqual(Cr, env.cr);
};

exports.test_base_dir = function(test) {
    // Are we pointed at a directory?
    var dirService = Cc["@mozilla.org/file/directory_service;1"].
            getService(Ci.nsIProperties);
    var homeDirFile = dirService.get("Home", Ci.nsIFile);
    var base_dir = homeDirFile.path + '/karlbox';

    test.assertEqual(base_dir, env.base_dir);
};

exports.test_env_log = function(test) {
    test.assert(env.log);
};
