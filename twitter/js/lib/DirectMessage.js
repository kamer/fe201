/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 05/07/11
 * Time: 12:16 AM
 * To change this template use File | Settings | File Templates.
 */

/**
 * @fileoverview DirectMessage class
 */
goog.provide('twitter.DirectMessage');
goog.require('tart.getUId');
goog.require('tart.randomTime');

/**
 * Direct Message class.
 *
 * @constructor
 */

twitter.DirectMessage = function(id, from, to, body){
    this.id = tart.getUId();
    this.from = from;
    this.to = to ;
    this.body = body;

};