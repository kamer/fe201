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
goog.provide('twitter.lib.Follow');
goog.require('tart');

/**
 * Direct Message class.
 *
 * @constructor
 */

twitter.Follow = function (followerId, followingId){
    this.id = tart.getUid();
    this.followerId = followerId;
    this.followingId = followingId;
};