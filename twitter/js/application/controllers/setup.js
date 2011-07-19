/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 14/07/11
 * Time: 5:20 AM
 * To change this template use File | Settings | File Templates.
 */

goog.require('twitter.UserModel');
goog.require('twitter.TweetModel');
goog.require('twitter.DirectMessageModel');
goog.require('twitter.FollowManager');
goog.require('tart.string');
goog.require('tart.date');
//goog.require('tart');
goog.provide('twitter.setup');


twitter.setup = function() {
    var userModel = new twitter.UserModel(),
        tweetModel = new twitter.TweetModel(),
        directMessageModel = new twitter.DirectMessageModel(),
        followManager = new twitter.FollowManager(),
        users = {},
        userData = [
            {
                username: "bulentersoy",
                password: "bulentersoy",
                email: "bulent@ersoy.com"
            },
            {
                username: "hilalcebeci",
                password: "hilalcebeci",
                email: "hilal@cebeci.com"
            },
            {
                username: "ibrahimtatlises",
                password: "ibrahimtatlises",
                email: "ibrahim@tatlises.com"
            },
            {
                username: "ericadams",
                password: "ericadams",
                email: "eric@adams.com"
            },
            {
                username: "jackshephard",
                password: "jackshephard",
                email: "jack@shephard.com"
            }
        ];

    localStorage.clear();

    for (var i = 0, l = userData.length; i < l; i++) {
        var user = userData[i], size = Math.round(Math.random() * 5) + 2;

        user = userModel.createUser(user.username, user.password, user.email);

        for (var j = 0; j < size; j++) {
            tweetModel.postTweet(user, tart.string.loremIpsum());
        }
    }

    users.bulentersoy = userModel.getUserByUsername("bulentersoy");
    users.hilalcebeci = userModel.getUserByUsername("hilalcebeci");
    users.ibrahimtatlises = userModel.getUserByUsername("ibrahimtatlises");
    users.ericadams = userModel.getUserByUsername("ericadams");
    users.jackshephard = userModel.getUserByUsername("jackshephard");

    followManager.createFollow(users.bulentersoy, users.ericadams);
    followManager.createFollow(users.bulentersoy, users.jackshephard);

    followManager.createFollow(users.hilalcebeci, users.ibrahimtatlises);
    followManager.createFollow(users.hilalcebeci, users.ericadams);
    followManager.createFollow(users.hilalcebeci, users.bulentersoy);

    followManager.createFollow(users.ibrahimtatlises, users.bulentersoy);
    followManager.createFollow(users.ibrahimtatlises, users.hilalcebeci);
    followManager.createFollow(users.ibrahimtatlises, users.jackshephard);

    followManager.createFollow(users.ericadams, users.hilalcebeci);
    followManager.createFollow(users.ericadams, users.ibrahimtatlises);

    followManager.createFollow(users.jackshephard, users.ibrahimtatlises);
    followManager.createFollow(users.jackshephard, users.hilalcebeci);
    followManager.createFollow(users.jackshephard, users.bulentersoy);

    directMessageModel.sendDirectMessage(users.bulentersoy, users.ericadams, tart.string.loremIpsum());
    directMessageModel.sendDirectMessage(users.bulentersoy, users.jackshephard, tart.string.loremIpsum());
    directMessageModel.sendDirectMessage(users.bulentersoy, users.jackshephard, tart.string.loremIpsum());
    directMessageModel.sendDirectMessage(users.bulentersoy, users.hilalcebeci, tart.string.loremIpsum());
    directMessageModel.sendDirectMessage(users.bulentersoy, users.hilalcebeci, tart.string.loremIpsum());

    directMessageModel.sendDirectMessage(users.hilalcebeci, users.ericadams, tart.string.loremIpsum());
    directMessageModel.sendDirectMessage(users.hilalcebeci, users.jackshephard, tart.string.loremIpsum());
    directMessageModel.sendDirectMessage(users.hilalcebeci, users.bulentersoy, tart.string.loremIpsum());
    directMessageModel.sendDirectMessage(users.hilalcebeci, users.ericadams, tart.string.loremIpsum());
    directMessageModel.sendDirectMessage(users.hilalcebeci, users.ericadams, tart.string.loremIpsum());

    directMessageModel.sendDirectMessage(users.ericadams, users.hilalcebeci, tart.string.loremIpsum());
    directMessageModel.sendDirectMessage(users.ericadams, users.ibrahimtatlises, tart.string.loremIpsum());
    directMessageModel.sendDirectMessage(users.ericadams, users.hilalcebeci, tart.string.loremIpsum());
    directMessageModel.sendDirectMessage(users.ericadams, users.jackshephard, tart.string.loremIpsum());

    directMessageModel.sendDirectMessage(users.jackshephard, users.ericadams, tart.string.loremIpsum());
    directMessageModel.sendDirectMessage(users.jackshephard, users.bulentersoy, tart.string.loremIpsum());
    directMessageModel.sendDirectMessage(users.jackshephard, users.ibrahimtatlises, tart.string.loremIpsum());
    directMessageModel.sendDirectMessage(users.jackshephard, users.ibrahimtatlises, tart.string.loremIpsum());
    directMessageModel.sendDirectMessage(users.jackshephard, users.ibrahimtatlises, tart.string.loremIpsum());

    directMessageModel.sendDirectMessage(users.ibrahimtatlises, users.hilalcebeci, tart.string.loremIpsum());
    directMessageModel.sendDirectMessage(users.ibrahimtatlises, users.bulentersoy, tart.string.loremIpsum());
    directMessageModel.sendDirectMessage(users.ibrahimtatlises, users.hilalcebeci, tart.string.loremIpsum());
    directMessageModel.sendDirectMessage(users.ibrahimtatlises, users.hilalcebeci, tart.string.loremIpsum());
    directMessageModel.sendDirectMessage(users.ibrahimtatlises, users.ericadams, tart.string.loremIpsum());

};

goog.exportSymbol('twitter.setup', twitter.setup);