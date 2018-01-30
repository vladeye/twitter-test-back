/**
 * Created by vladeye 29/01/2018.
 */

var twitter_tools = require('../tools/twitter_tools');

var emitter = require('../tools/event_tools');





exports.getStreamTimeline = function(streamData) {
    console.log(streamData);
    return new Promise((resolve, reject) => {
        twitter_tools.twitterRestClient.stream('statuses/filter', {track: streamData['track']}, (stream) => {
            stream.on('data', (tweet) => {
                if (tweet['user']['location'].toString() === streamData['city'].toString()){
                    emitter.emitter.emit('new tweetSend', {
                        id: tweet['id'],
                        text: tweet['text'],
                        username: tweet['user']['name'],
                        screen_name: tweet['user']['screen_name'],
                        date: tweet['created_at'],
                        profile_image_url: tweet['user']['profile_image_url']
                    });
                }
            });

            stream.on('error', (error) => {
                //console.log(error);
            })
        });
    })
}