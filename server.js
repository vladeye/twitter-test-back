/**
 * Created by siroramirez on 23/05/17.
 *
 * Based on SPAM Server dvicente@solidear.es on 09/06/2016
 */
'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var twitter = require('twitter');
var twitter_tools = require('./tools/twitter_tools');
var emitter = require('./tools/event_tools');


var cors = require('cors')

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(cors())




if(twitter_tools){

    var routes = require('./routes/routes');

    // configure app to use bodyParser()
    // this will let us get the data from a POST
    app.use(bodyparser.urlencoded({extended: true}));
    app.use(bodyparser.json({limit: '100mb'}));

    routes.assignRoutes(app);

    io.on('connection', function (socket) {
        emitter.emitter.on('new tweetSend', data => {
            socket.emit('tweetSend', data);
        })


    });
    server.listen(3000, () => {
        console.log('Server listening on port 3000');
        console.log('CORS-enabled web server listening on port 3000')

    });
/*
    app.listen(3000, (result) => {
        server = result;
        console.log('Server listening on port 3000');
        console.log('CORS-enabled web server listening on port 3000')
    });
*/

}
