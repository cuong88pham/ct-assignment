var mongoose  = require('mongoose'),
    parse_data = require('../lib/parse_data'),
    async   = require('async'),
    _ = require('lodash'),
    Schema    = mongoose.Schema;

var ads_schema = new Schema({
  ads_id: Number,
  title: String,
  image: String,
  price: Number,
  description: String,
  position: Number,
  created_at: Date,
  updated_at: Date

}, {capped: 1024});

ads_schema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

module.exports = mongoose.model('Ads', ads_schema);