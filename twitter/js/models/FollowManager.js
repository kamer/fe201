/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 05/07/11
 * Time: 2:00 AM
 * To change this template use File | Settings | File Templates.
 */

var FollowManager = function(){

};

FollowManager.prototype.createFollow = function(followerId, followingId){
    var follow = new Follow (followerId, followingId);
    localStorage.setObject(follow.id, follow);
};

FollowManager.prototype.getFollowingByUserId = function(userId){
     var arr = [];
     for (var following in localStorage){
        following = localStorage.getObject(following);
        if (following && following.userId && following.userId == userId){
            arr.push(following);
        }
    }
    return arr;

};

FollowManager.prototype.getFollowersByUserId = function(userId){
    var arr = [];
       for (var follower in localStorage){
          follower = localStorage.getObject(follower);
          if (follower && follower.userId && follower.userId == userId){
              arr.push(follower);
          }
      }
      return arr;

};

