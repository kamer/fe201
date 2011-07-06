/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 05/07/11
 * Time: 12:19 AM
 * To change this template use File | Settings | File Templates.
 */

var ProfileModel = function(){

};

ProfileModel.prototype.createProfile = function(bio, photoUrl, location){
    var profile = new Profile(bio, photoUrl, location);
    localStorage.setObject(profile.id, profile);

};

ProfileModel.prototype.getProfileByUserId = function(userId){
     for (var profile in localStorage){
        profile = localStorage.getObject(profile);
        if (profile && profile.userId && profile.userId == userId){
            return profile;
        }
    }
    return false;

};

ProfileModel.prototype.editProfileByUserId = function(userId, bio, photoUrl, location){
    
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
