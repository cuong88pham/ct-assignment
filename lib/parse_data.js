var request = require('request'),
    async   = require('async'),
    _ = require('lodash'),
    cheerio = require('cheerio');

// Parse Data Module
module.exports = {
  // Get data from chotot homepage
  getDataFromUrl: function(url, number,cb) {
    async.parallel([
      function(callback){
        request({url: url, encoding: 'utf-8'},
          function(err, res, body){
          callback(null, body);
        });
      }
    ],
    function(err, results){
      // Load html from web
      var $ = cheerio.load(results[0]),
          images = [],
          ids    = [];
      // Fetch data from html

      $('img.thumbnail').each(function(i, elem){
        if(i < number){
          var src = $(this).attr('src').replace('listing_thumbs', 'wm_images');
          var ads_id = $(this).parent().attr('href');
          ads_id = _.first(_.last(ads_id.split('-')).split('.'));
          if(images.indexOf(src) == -1){
            images.push({src: src, id: ads_id});
          }
        }
      });
      return cb(images);
    });
  }
};
