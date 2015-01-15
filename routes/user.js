
/*
 * GET users listing.
 */
var mongoose = require('mongoose');
var ads   = require('../model/ads');
exports.list = function(req, res){
  var a = new ads({
    title: 'Title',
    image: 'Image',
    description: 'Description',
    ads_id: 1,
    price: 100,
    position: 1
  });
  a.save(function(err){});
  res.render('index', { title: 'Express', images: []});
};