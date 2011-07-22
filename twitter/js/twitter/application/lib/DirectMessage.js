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
goog.provide('twitter.lib.DirectMessage');
goog.require('tart');


/**
 * Direct Message class.
 *
 * @constructor
 */

twitter.DirectMessage = function(id, fromId, toId, body){
    this.id = tart.getUid();
    this.from = fromId;
    this.to = toId ;
    this.body = body;

};