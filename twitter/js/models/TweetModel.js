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
        tweet = localStorage.getObject(tweet);
        if (tweet && tweet.userId && tweet.userId == userId){
            arr.push(tweet);
        }
    }
    return arr;
};

TweetModel.prototype.postTweet = function(user, body){
    var tweet = new Tweet(user, body);
    localStorage.setObject(tweet.id,tweet);
};

TweetModel.prototype.removeTweet = function(tweetId){
    for (var tweetkey in localStorage){
        tweet = localStorage.getObject(tweetkey);
        if (tweet && tweet.id && tweet.id == tweetId){
        localStorage.removeItem(tweetkey);
        return true;
        }
    }
    return false;

};

