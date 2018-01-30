/**
 * Created by siroramirez on 23/05/17.
 */
'use strict'


var twitter = require('twitter');
var config = require('../config.json');


var twitterRestClient = new twitter({
     consumer_key: config.twitter_config.consumerKey,
     consumer_secret: config.twitter_config.consumerSecret,
     access_token_key: config.twitter_config.token,
     access_token_secret: config.twitter_config.tokenSecret
});


exports.twitterRestClient = twitterRestClient;
