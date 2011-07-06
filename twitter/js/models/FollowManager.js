/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 05/07/11
 * Time: 2:00 AM
 * To change this template use File | Settings | File Templates.
 */

/**
 * @fileoverview Follow Manager class that deals with following actions
 */

goog.provide('twitter.FollowManager');
goog.require('twitter.Follow');

/**
 * Follow Manager class. Has utility functions that handles following actions and logs followers.
 *
 * @constructor
 */

twitter.FollowManager = function(){

};

twitter.FollowManager.prototype.createFollow = function(followerId, followingId){
    var follow = new Follow (followerId, followingId);
    localStorage.setObject(follow.id, follow);
};

/**
 * Returns users that a specific user follows by userid
 * @param {number} userId A user id. This method uses this id to find a user, and then fetches that user's followers.
 * @return {Array.<User>} Followers of the given user. 
 */

twitter.FollowManager.prototype.getFollowingByUserId = function(userId){
     var arr = [];
     for (var following in localStorage){
        following = localStorage.getObject(following);
        if (following && following.userId && following.userId == userId){
            arr.push(following);
            //following.push(UserModel.getUserById(follow.followingId));
        }
    }
    return arr;

};

twitter.FollowManager.prototype.getFollowersByUserId = function(userId){
    var arr = [];
       for (var follower in localStorage){
          follower = localStorage.getObject(follower);
          if (follower && follower.userId && follower.userId == userId){
              arr.push(follower);
          }
      }
      return arr;

};

