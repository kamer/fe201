/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 05/07/11
 * Time: 12:15 AM
 * To change this template use File | Settings | File Templates.
 */

var Tweet = function(userId, body){
    this.id = tart.getUId();
    this.userId = userId;
    this.body = body;
    this.time = tart.randomTime();
};