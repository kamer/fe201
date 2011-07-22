/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 05/07/11
 * Time: 12:19 AM
 * To change this template use File | Settings | File Templates.
 */


/**
 * @fileoverview Profile Model class that deals with users' profile
 */

goog.provide('twitter.models.ProfileModel');
goog.require('twitter.lib.Profile');
goog.require('tart.storage.Storage');

/**
 * Profile Model class. Has utility functions that get and manipulate user data
 *
 * @constructor
 */

twitter.ProfileModel = function(){

};

twitter.ProfileModel.prototype.createProfile = function(bio, photoUrl, location, userId){
    var profile = new twitter.Profile(bio, photoUrl, location, userId);
    twitter.localStorage.set(profile.id, profile);

};

twitter.ProfileModel.prototype.getProfileByUserId = function(userId){
     for (var profile in localStorage){
        profile = twitter.localStorage.get(profile);
        if (profile && profile.userId && profile.userId == userId){
            return profile;
        }
    }
    return false;

};

twitter.ProfileModel.prototype.editProfileByUserId = function(userId, bio, photoUrl, location){
    
    for (var profile in localStorage){
        profile = twitter.localStorage.get(profile);
        if (profile && profile.userId && profile.userId == userId){
            profile.bio = bio;
            profile.photoUrl = photoUrl;
            profile.location = location;
            twitter.localStorage.set(profile.id, profile);
        }
    }
    return false;

};
