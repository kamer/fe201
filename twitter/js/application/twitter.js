/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 14/07/11
 * Time: 5:18 AM
 * To change this template use File | Settings | File Templates.
 */

goog.require('tart.mvc');
goog.require('twitter.controllers.SetupController');
goog.require('twitter.controllers.IndexController');
goog.require('tart.storage.Storage');
goog.provide('twitter.Application');


/**
 * @constructor
 * @extends {tart.mvc.Application}
 */
twitter.Application = function() {
    goog.base(this);
};

goog.inherits(twitter.Application, tart.mvc.Application);


twitter.Application.prototype.localStorage = new tart.storage.Storage();

