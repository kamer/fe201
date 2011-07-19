/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 14/07/11
 * Time: 5:18 AM
 * To change this template use File | Settings | File Templates.
 */

goog.require('twitter.setup');
goog.require('twitter.index');
goog.require('tart.storage.Storage');
goog.provide('twitter');

twitter.localStorage = new tart.storage.Storage();
