goog.provide('twitter.Bootstrapper');
goog.require('twitter.Application');



/**
 * Bootstrapper of the example application.
 * @constructor
 */
ttnet.Bootstrapper = function() {
    new twitter.Application();
    twitter.localStorage = new tart.storage.Storage();
};

goog.exportSymbol('twitter.Bootstrapper', twitter.Bootstrapper);

