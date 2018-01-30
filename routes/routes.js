/**
 * Created by vladeye 29/01/2018.
 */
var statuses = require('./statuses');
var search = require('./search');

var stream = require('./stream');

exports.assignRoutes = function (app) {
    app.post('/api/v1.0/statuses/user_timeline', statuses.userTimeline);

    app.post('/api/v1.0/search/tweets', search.getTweets);

    app.post('/api/v1.0/statuses/filter', stream.getStreamTweets);

    app.post('/api/v1.0/statuses/create', statuses.createTweet);
}