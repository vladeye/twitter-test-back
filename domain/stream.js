/**
 * Created by vladeye 29/01/2018..
 */
var streamService = require('../service/stream');

exports.getStreamTimeline = function(streamData) {
    return new Promise(function(resolve, reject) {
        streamService.getStreamTimeline(streamData)
            .then(stream => {
                resolve(stream);
            })
            .catch(err => {
                reject(err);
            })
    });
};