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

goog.provide('twitter.ProfileModel');
goog.require('twitter.Profile');

/**
 * Profile Model class. Has utility functions that get and manipulate user data
 *
 * @constructor
 */

twitter.ProfileModel = function(){

};

twitter.ProfileModel.prototype.createProfile = function(bio, photoUrl, location){
    var profile = new Profile(bio, photoUrl, location);
    localStorage.setObject(profile.id, profile);

};

twitter.ProfileModel.prototype.getProfileByUserId = function(userId){
     for (var profile in localStorage){
        profile = localStorage.getObject(profile);
        if (profile && profile.userId && profile.userId == userId){
            return profile;
        }
    }
    return false;

};

twitter.ProfileModel.prototype.editProfileByUserId = function(userId, bio, photoUrl, location){
    
    for (var profile in localStorage){
        profile = localStorage.getObject(profile);
        if (profile && profile.userId && profile.userId == userId){
            profile.bio = bio;
            profile.photoUrl = photoUrl;
            profile.location = location;
            localStorage.setObject(profile.id, profile);
        }
    }
    return false;

};
