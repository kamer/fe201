goog.provide('twitter.Bootstrapper');
goog.require('twitter.Application');
goog.require('twitter.controllers.IndexController');
goog.require('twitter.controllers.SetupController');
goog.require('tart.storage.Storage');




/**
 * Bootstrapper of the example application.
 * @constructor
 */
twitter.Bootstrapper = function() {
    //twitter.localStorage = new tart.storage.Storage();
    new twitter.Application();

};



goog.exportSymbol('twitter.Bootstrapper', twitter.Bootstrapper);

