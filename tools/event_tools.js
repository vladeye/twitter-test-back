/**
 * Created by vladeye 29/01/2018.
 */

const EventEmitter = require('events');

var myemitter = new EventEmitter();

exports.emitter = myemitter;