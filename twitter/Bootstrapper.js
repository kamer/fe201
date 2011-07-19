goog.provide('twitter.Bootstrapper');
goog.require('twitter.Application');



/**
 * Bootstrapper of the example application.
 * @constructor
 */
ttnet.Bootstrapper = function() {
    new twitter.Application();
};

goog.exportSymbol('twitter.Bootstrapper', twitter.Bootstrapper);
