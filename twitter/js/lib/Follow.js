/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 05/07/11
 * Time: 4:20 AM
 * To change this template use File | Settings | File Templates.
 */

/**
 * @fileoverview Follow class
 */
goog.provide('twitter.Follow');
goog.require('tart.getUId');

/**
 * Direct Message class.
 *
 * @constructor
 */

twitter.Follow = function (id, followerId, followingId){
    this.id = tart.getUId();
    this.followerId = followerId;
    this.followingId = followingId;
};