/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 05/07/11
 * Time: 12:15 AM
 * To change this template use File | Settings | File Templates.
 */

/**
 * @fileoverview Tweet class
 */
goog.provide('twitter.Tweet');
goog.require('tart');
goog.require('tart.date');

/**
 * Tweet class.
 *
 * @constructor
 */

twitter.Tweet = function(userId, body){
    this.id = tart.getUid();
    this.userId = userId;
    this.body = body;
    this.time = tart.date.randomTimeInInterval(new goog.date.Interval(-1));
};