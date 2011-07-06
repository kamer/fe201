/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 05/07/11
 * Time: 12:13 AM
 * To change this template use File | Settings | File Templates.
 */

/**
 * @fileoverview Profile class
 */
goog.provide('twitter.DirectMessage');
goog.require('tart.getUId');


/**
 * Profile class.
 *
 * @constructor
 */

twitter.Profile = function (bio, photoUrl, location, userId){
    this.id = tart.getUId();
    this.userId = userId;
    this.bio = bio;
    this.photoUrl = photoUrl;
    this.location = location;

};