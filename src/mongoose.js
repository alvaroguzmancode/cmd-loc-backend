const mongoose = require('mongoose');

module.exports = function (app) {
  mongoose.Promise = global.Promise;
  mongoose.connect("mongodb://dev:rick@127.0.0.1:27017/cmd_loc", { useNewUrlParser: true,  useCreateIndex: true});

  app.set('mongooseClient', mongoose);
};
