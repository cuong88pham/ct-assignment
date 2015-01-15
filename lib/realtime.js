var _ = require('lodash'),
    parse_data = require('./parse_data'),
    ads   = require('../model/ads'),
    async   = require('async');

// Realtime Module
module.exports = function(io) {
  io.of('/ads').on('connection', function (socket) {
    setInterval(function(){
      async.parallel([
        function(callback){
          parse_data.getDataFromUrl('http://chotot.vn/tp-ho-chi-minh', 1, function(images){
            callback(null, images);
          });
        }
      ], function(err, result){
        var item = result[0][0]
        console.log(item);
        socket.emit('get_ads', item);
        socket.broadcast.emit('get_ads', item);
      })
    }, 5000);
  });
}