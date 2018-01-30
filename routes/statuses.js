/**
 * Created by vladeye 29/01/2018.
 */
var statusesDomain = require('../domain/statuses');

exports.userTimeline = function (req, res, next) {
    var userData = req.body;


    statusesDomain.getUserTimeline(userData)
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(400).send(err);
        })
}


exports.createTweet = function (req, res, next) {
    var tweetData = req.body;


    statusesDomain.createTweet(tweetData)
        .then(tweet => {
            res.send(tweet)
        })
        .catch(err => {
            res.status(400).send(err);
        })
}