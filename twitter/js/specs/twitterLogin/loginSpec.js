/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 08/07/11
 * Time: 12:05 AM
 * To change this template use File | Settings | File Templates.
 */

var twitter = {};
twitter.UserModel = function(){

};
twitter.UserModel.prototype.checkForLoginMessage = function(){
    var data=localStorage.getObject("session");
    if (data) {$("<div>")}
    return data;
};
describe("Twitter", function () {
	describe("Login", function () {
		it("Is user session exists output will be hello userName", function () {
            var userModel = new twitter.UserModel();
            localStorage.setObject("session", "bulentersoy");
            var userData = userModel.checkForLoginMessage();
            var output = $("#welcomeMessage").html();
            expect(output).toEqual("hello userName");


            

	});
	});
});



jasmine.getEnv()['addReporter'](new jasmine.TrivialReporter());
jasmine.getEnv()['execute']();
