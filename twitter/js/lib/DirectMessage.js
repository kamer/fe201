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
goog.require('tart');


/**
 * Direct Message class.
 *
 * @constructor
 */

twitter.DirectMessage = function(id, from, to, body){
    this.id = tart.getUid();
    this.from = from;
    this.to = to ;
    this.body = body;

};