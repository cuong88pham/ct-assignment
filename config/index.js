var config = {
  development: {
    mode: 'development',
    port: 3000,
    db: {
      host: '127.0.0.1',
      port: 27017
    }
  },
  production: {
    mode: 'production',
    port: 80,
    db: {
      host: '127.0.0.1',
      port: 27017
    }
  }
}

module.exports = function(mode){
  return config[mode || process.env.PORT || 'development'] || config.development
}