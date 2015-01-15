
/*
 * GET home page.
 */
var parse_data = require('../lib/parse_data'),
    async   = require('async');
exports.index = function(req, res){
  parse_data.getDataFromUrl('http://chotot.vn/tp-ho-chi-minh', 5, function(images){
    res.render('index', { title: 'Lastest Ads', images: images});
  });
};