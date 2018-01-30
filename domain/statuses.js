/**
 * Created by vladeye 29/01/2018.
 */
var statusesService = require('../service/statuses');

exports.getUserTimeline = function(userData) {
    return new Promise(function(resolve, reject) {
        statusesService.getUserTimeline(userData)
            .then(user => {
                resolve(user);
            })
            .catch(err => {
                reject(err);
            })
    });
};


exports.createTweet = function(tweetData) {
    return new Promise(function(resolve, reject) {
        statusesService.createTweet(tweetData)
            .then(tweet => {
                resolve(tweet);
            })
            .catch(err => {
                reject(err);
            })
    });
};