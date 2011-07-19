goog.provide('twitter.Bootstrapper');
goog.require('twitter.Application');
goog.require('twitter.controllers.IndexController');
goog.require('twitter.controllers.SetupController');




/**
 * Bootstrapper of the example application.
 * @constructor
 */
twitter.Bootstrapper = function() {
    new twitter.Application();
    twitter.localStorage = new tart.storage.Storage();
};

goog.exportSymbol('twitter.Bootstrapper', twitter.Bootstrapper);

