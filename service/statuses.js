/**
 * Created by vladeye 29/01/2018.
 */

var twitter_tools = require('../tools/twitter_tools');
var params = {screen_name: 'nodejs'};


exports.getUserTimeline = function(userData) {
    return new Promise((resolve, reject) => {
        twitter_tools.twitterRestClient.get('statuses/user_timeline', userData, (error, tweets, response) => {
            if (!error) {
                resolve(tweets);
            } else {
                reject(error);
            }
        });
    })
}

exports.createTweet = function (tweetData) {
    return new Promise((resolve,reject) => {
        twitter_tools.twitterRestClient.post('statuses/update', tweetData, (error, tweet, response) => {
            if (!error) {
                resolve(tweet);
            } else {
                reject(error);
            }
        });
    })
}
