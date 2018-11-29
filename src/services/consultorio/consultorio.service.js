// Initializes the `consultorio` service on path `/consultorio`
const createService = require('feathers-mongoose');
const createModel = require('../../models/consultorio.model');
const hooks = require('./consultorio.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/consultorio', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('consultorio');

  service.hooks(hooks);
};
