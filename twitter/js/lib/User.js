/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 05/07/11
 * Time: 12:14 AM
 * To change this template use File | Settings | File Templates.
 */

var User = function(username, password, email){
    this.id = tart.getUId();
    this.username = username;
    this.password= password;
    this.email = email;
    this.tweets = [];
    this.profile;
    this.followers;
};