/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 14/07/11
 * Time: 5:23 AM
 * To change this template use File | Settings | File Templates.
 */

goog.require('twitter.models.UserModel');
goog.require('twitter.models.FollowManager');
goog.require('twitter.models.TweetModel');
goog.require('twitter.models.DirectMessageModel');
goog.require('twitter.models.ProfileModel');
goog.require('tart');
goog.require('tart.storage.Storage');
goog.provide('twitter.controllers.IndexController');


twitter.index = function (){
var log = function (username, password){
    var userModel = new twitter.UserModel();
    var loggedIn = userModel.login(username, password);
    console.log("sadasdsd");
    if (loggedIn){return true;}
};

$(document).ready(function() {
    var $loginForm = $("<form name='login'>");
    var $username = $("<input type='text' id='user'>");
    var $password = $("<input type='password' id='pass'>");
    var $button = $("<button type='submit'>");
    $button.html("Sign in");

    $loginForm.append($username).append($password);
    $("body").append($loginForm).append($button);

    $button.click(function(){
        console.log("clicked");
        var logingStatus = log($username.val(), $password.val());
        //Login successful
        if (logingStatus){
         //  var followManager = new FollowManager();
           //var user = new UserModel();
           //var followersList = followManager.getFollowersByUserId(user.getUserById(user.id));
            alert('Signed in');
        }
        //Login not successful
        else{
            alert('Oops! Problem signing in');
        }
    });
});

};
goog.exportSymbol('twitter.controllers.IndexController', twitter.index);
