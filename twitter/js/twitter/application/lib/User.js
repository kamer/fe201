/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 05/07/11
 * Time: 12:14 AM
 * To change this template use File | Settings | File Templates.
 */

/**
 * @fileoverview User class
 */
goog.provide('twitter.lib.User');
goog.require('tart');

/**
 * User class.
 *
 * @constructor
 */

twitter.User = function(username, password, email){
    this.id = tart.getUid();
    this.username = username;
    this.password= password;
    this.email = email;
   /* this.tweets = [];
    this.profile;
    this.followers;*/
};