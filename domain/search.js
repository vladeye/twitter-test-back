/**
 * Created by vladeye 29/01/2018.
 */
var searchService = require('../service/search');
var streamService = require('../service/stream');

exports.getSearchTweets = function(searchData) {
    return new Promise((resolve, reject) => {
        searchService.getSearchTweets(searchData)
            .then(tweets => {
                streamService.getStreamTimeline({
                    city:  searchData['city'],
                    track: searchData['q']
                });
                resolve(tweets);
            })
            .catch(err => {
                reject(err);
            })
    });
};