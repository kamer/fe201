/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 05/07/11
 * Time: 1:16 AM
 * To change this template use File | Settings | File Templates.
 */

/**
 * @fileoverview Tweet Model class that deals with posting 
 */

goog.provide('twitter.TweetModel');
goog.require('twitter.Tweet');
goog.require('tart.storage.Storage');

/**
 * Tweet Model class. Has utility functions that sends a tweet.
 *
 * @constructor
 */

twitter.TweetModel = function(){

};

/**
 *
 * @param userId
 */

twitter.TweetModel.prototype.getTweetsByUserId = function(userId){
     var arr = [];
    //bunu direkt user model'dan da cagirabilirsin, simdilik dur 
     for (var tweet in localStorage){
        tweet = twitter.localStorage.get(tweet);
        if (tweet && tweet.userId && tweet.userId == userId){
            arr.push(tweet);
        }
    }
    return arr;
};

twitter.TweetModel.prototype.postTweet = function(user, body){
    var tweet = new twitter.Tweet(user.id, body);
    twitter.localStorage.set(tweet.id,tweet);
};

twitter.TweetModel.prototype.removeTweet = function(tweetId){
    for (var tweetkey in localStorage){
        var tweet = twitter.localStorage.get(tweetkey);
        if (tweet && tweet.id && tweet.id == tweetId){
        localStorage.removeItem(tweetkey);
        return true;
        }
    }
    return false;

};

