#!/usr/bin/env node
'use strict';

var request = require('request');
setInterval(function(){
    request({ method: 'GET',
      url: process.argv[3]
    }, function (error, response, body) {
        
    });
}, process.argv[2]);
