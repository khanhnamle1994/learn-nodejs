var configValues = require('./config');

module.exports = {
  getDbConnectionString: function() {
    return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds131492.mlab.com:31492/nodetodosample';
  }
}
