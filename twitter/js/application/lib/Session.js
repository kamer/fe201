/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 05/07/11
 * Time: 4:21 AM
 * To change this template use File | Settings | File Templates.
 */

/**
 * @fileoverview Session class
 */
goog.provide('twitter.lib.Session');
goog.require('tart');


/**
 * Session class.
 *
 * @constructor
 */

twitter.Session = function (userId) {
    this.id = tart.getUid();
    this.userId = userId;
};