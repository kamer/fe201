/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 05/07/11
 * Time: 12:03 AM
 * To change this template use File | Settings | File Templates.
 */

var UserModel = function(){

};

UserModel.prototype.createUser = function(username, password, email){
       var user = new User(username, password, email);
        localStorage.setObject(user.id,user);
        
    };

UserModel.prototype.removeUser = function(userId){
    for (var userkey in localStorage){
        user = localStorage.getObject(userkey);
        if (user && user.id && user.id == userId){
            localStorage.removeItem(userkey);
            return true;
        }
    }
    return false;
};

UserModel.prototype.login = function(username, password){
    //var user = new User(username, password);
    for (var user in localStorage){
        user = localStorage.getObject(user);
        if (user && user.username && user.password && user.username == username && user.password == password){
            var session = new Session(user.id);
            localStorage.setObject("session", session);
            return true;
        }
    }

    return false;
};

UserModel.prototype.logout = function(){
    localStorage.removeItem(session);

};

UserModel.prototype.getUserById = function(userId){
     for (var user in localStorage){
        user = localStorage.getObject(user);
        if (user && user.id && user.id == userId){
            return user;
        }
    }
    return false;
};

UserModel.prototype.getUserByUsername = function(username){
    for (var user in localStorage){
        user = localStorage.getObject(user);
        if (user && user.username &&user.username == username){
            return user;
        }
    }
    return false;
};
