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

goog.provide('twitter.DirectMessageModel');
goog.require('twitter.DirectMessage');

/**
 * Direct Message Model class. Has utility functions that sends a direct message.
 *
 * @constructor
 */

twitter.DirectMessageModel = function(){
    
};

twitter.DirectMessageModel.prototype.sendDirectMessage = function (from, to, body){
    var directMessage = new DirectMessage(from, to, body);
    localStorage.setObject(directMessage.id,directMessage);

};

twitter.DirectMessageModel.prototype.getInboxByUserId = function (userid){
     var arr = [];
    //bunu direkt user model'dan da cagirabilirsin, simdilik dur
     for (var directMessage in localStorage){
        directMessage = localStorage.getObject(directMessage);
        if (directMessage && directMessage.to.user.id && directMessage.to.user.id==userid){
            arr.push(directMessage);
            
        }
    }
    return arr;

};

twitter.DirectMessageModel.prototype.getSentByUserId = function (userid){
     var arr = [];
        //bunu direkt user model'dan da cagirabilirsin, simdilik dur
         for (var directMessage in LocalStorage){
            directMessage = localStorage.getObject(directMessage);
            if (directMessage && directMessage.from.user.id && directMessage.from.user.id==userid){
                arr.push(directMessage);

            }
        }
        return arr;

};