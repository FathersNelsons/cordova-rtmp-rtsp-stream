cordova.define("cordova-rtsp-rtmp-stream.VideoStream", function(require, exports, module) {
'use strict';

var exec = require('cordova/exec');

var videoStreamer = {};

videoStreamer.streamRTSP = function(uri, success, failure) {
    // fire
    exec(
        success,
        failure,
        'VideoStream',
        'streamRTSP',
        [uri]
    );
};

videoStreamer.streamRTSPAuth = function(uri, username, password, success, failure) {
    // fire
    exec(
        success,
        failure,
        'VideoStream',
        'streamRTSPAuth',
        [uri, username, password]
    );
};

videoStreamer.streamRTMP = function(uri, success, failure) {
    // fire
    exec(
        success,
        failure,
        'VideoStream',
        'streamRTMP',
        [uri]
    );
};

videoStreamer.streamRTMPAuth = function(uri, username, password, success, failure) {
    // fire
    exec(
        success,
        failure,
        'VideoStream',
        'streamRTMPAuth',
        [uri, username, password]
    );
};

videoStreamer.streamStop = function(success, failure) {
    // fire
    exec(
        success,
        failure,
        'VideoStream',
        'streamStop',
        []
    );
};

module.exports = videoStreamer;
});
