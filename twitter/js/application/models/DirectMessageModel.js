/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 05/07/11
 * Time: 1:17 AM
 * To change this template use File | Settings | File Templates.
 */

/**
 * @fileoverview DirectMessage Model class that deals with messaging between users.
 */

goog.provide('twitter.models.DirectMessageModel');
goog.require('twitter.lib.DirectMessage');
goog.require('tart.storage.Storage');


/**
 * Direct Message Model class. Has utility functions that sends a direct message.
 *
 * @constructor
 */

twitter.DirectMessageModel = function(){
    
};

/**
 * Stores a direct message to local storage with from, to and body information.
 * @param {string} from
 * @param {string} to
 * @param {string} body
 */
twitter.DirectMessageModel.prototype.sendDirectMessage = function (from, to, body){
    var directMessage = new twitter.DirectMessage(from, to, body);
    twitter.localStorage.set(directMessage.id,directMessage);

};

/**
 * Returns all direct messages sent to a particular user. Gets data from local storage.
 * @param {number} userId
 * @return {Array.<DirectMessage>}
 */

twitter.DirectMessageModel.prototype.getInboxByUserId = function (userId){
     var arr = [];
    //bunu direkt user model'dan da cagirabilirsin, simdilik dur
     for (var directMessage in localStorage){
        directMessage = twitter.localStorage.get(directMessage);
        if (directMessage && directMessage.to.user.id && directMessage.to.user.id==userId){
            arr.push(directMessage);
            
        }
    }
    return arr;

};

/**
 * Returns all direct messages sent from a particular user. Gets data from local storage. 
 * @param {number} userId
 */

twitter.DirectMessageModel.prototype.getSentByUserId = function (userId){
     var arr = [];
        //bunu direkt user model'dan da cagirabilirsin, simdilik dur
         for (var directMessage in localStorage){
            directMessage = twitter.localStorage.get(directMessage);
            if (directMessage && directMessage.from.user.id && directMessage.from.user.id==userId){
                arr.push(directMessage);

            }
        }
        return arr;

};