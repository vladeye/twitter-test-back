/**
 * Created by vladeye 29/01/2018.
 */
var streamDomain = require('../domain/stream');

exports.getStreamTweets = function (req, res, next) {
    var searchData = req.body;

    streamDomain.getStreamTimeline(searchData)
        .then(tweets => {
            res.send(tweets)
        })
        .catch(err => {
            res.status(400).send(err);
        })
}