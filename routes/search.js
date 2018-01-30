/**
 * Created by vladeye 29/01/2018.
 */
var searchDomain = require('../domain/search');

exports.getTweets = function (req, res, next) {
    var searchData = req.body;

    searchDomain.getSearchTweets(searchData)
        .then(tweets => {
            res.send(tweets)
        })
        .catch(err => {
            res.status(400).send(err);
        })
}

