/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 05/07/11
 * Time: 4:21 AM
 * To change this template use File | Settings | File Templates.
 */

var Session = function (userId) {
    this.id = tart.getUId();
    this.userId=userId;
};