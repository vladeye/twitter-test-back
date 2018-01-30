/**
 * Created by vladeye 29/01/2018.
 */
var twitter_tools = require('../tools/twitter_tools');

exports.getSearchTweets = function(searchData) {
    return new Promise((resolve, reject) => {
        twitter_tools.twitterRestClient.get('search/tweets', searchData, (error, tweets, response) => {
            if (!error) {
                resolve(tweets);
            } else {
                reject(error);
            }
        });
    })
}