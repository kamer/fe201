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
//goog.provide('twitter');
goog.provide('twitter.Application');



/**
 * @constructor
 * @extends {tart.mvc.Application}
 */
twitter.Application = function() {

    goog.base(this);
    
};

goog.inherits(twitter.Application, tart.mvc.Application);

/**
 * @inheritDoc
 */
twitter.Application.prototype.initRouting = function() {
    var router = this.getRouter();
    router.addRoute(new tart.mvc.uri.Route({
        name: 'homeIndex',
        format: 'home/index/',
        controller: twitter.controllers.IndexController,
      //  action: twitter.controllers.IndexController.indexAction
    }));

};