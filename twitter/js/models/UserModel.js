/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 05/07/11
 * Time: 12:03 AM
 * To change this template use File | Settings | File Templates.
 */

/**
 * @fileoverview User Model class that deals with posting
 */

goog.provide('twitter.UserModel');
goog.require('twitter.User');
goog.require('twitter.Session');
goog.require('tart.storage.Storage');

/**
 * User Model class. Has utility functions that manage user actions.
 *
 * @constructor
 */

twitter.UserModel = function(){

};

twitter.UserModel.prototype.createUser = function(username, password, email){
       var user = new twitter.User(username, password, email);
        twitter.localStorage.set(user.id,user);
        
    };

twitter.UserModel.prototype.removeUser = function(userId){
    for (var userkey in localStorage){
        var user = twitter.localStorage.get(userkey);
        if (user && user.id && user.id == userId){
            localStorage.removeItem(userkey);
            return true;
        }
    }
    return false;
};

twitter.UserModel.prototype.login = function(username, password){
    //var user = new User(username, password);
    for (var u in localStorage){
        var user = twitter.localStorage.get(u);
        if (user && user.username && user.password && user.username == username && user.password == password){
            var session = new twitter.Session(user.id);
            twitter.localStorage.set("session", session);
            return true;
        }
    }

    return false;
};

twitter.UserModel.prototype.logout = function(){
    localStorage.removeItem("session");

};

twitter.UserModel.prototype.getUserById = function(userId){
     for (var user in localStorage){
        user = twitter.localStorage.get(user);
        if (user && user.id && user.id == userId){
            return user;
        }
    }
    return false;
};

twitter.UserModel.prototype.getUserByUsername = function(username){
    for (var user in localStorage){
        user = twitter.localStorage.get(user);
        if (user && user.username &&user.username == username){
            return user;
        }
    }
    return false;
};
