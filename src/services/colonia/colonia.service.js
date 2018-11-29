// Initializes the `colonia` service on path `/colonia`
const createService = require('feathers-mongoose');
const createModel = require('../../models/colonia.model');
const hooks = require('./colonia.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/colonia', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('colonia');

  service.hooks(hooks);
};
