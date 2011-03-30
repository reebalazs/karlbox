/*

 Non-mutable state and setup shared between modules.
 */

const {Cc,Ci,Cr} = require("chrome");

// The following is an attempt to defeat PyCharm's syntax
// highlighter, which always splits up the CC,Ci,Cr above.
// By putting the declarations in here, we avoid spreading
// the problem across modules.
exports.cc = Cc;
exports.ci = Ci;
exports.cr = Cr;


exports.dirService = Cc["@mozilla.org/file/directory_service;1"].
        getService(Ci.nsIProperties);
var homeDirFile = exports.dirService.get("Home", Ci.nsIFile);
exports.base_dir = homeDirFile.path + '/karlbox';

// XPCOM local file
exports.nsILocalFile = Cc['@mozilla.org/file/local;1']
            .createInstance(Ci.nsILocalFile);

// XPCOM window mediator
exports.nsIWindowMediator =  Cc['@mozilla.org/appshell/window-mediator;1']
                .getService(Ci.nsIWindowMediator)