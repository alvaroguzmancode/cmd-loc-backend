// Initializes the `renta` service on path `/renta`
const createService = require('feathers-mongoose');
const createModel = require('../../models/renta.model');
const hooks = require('./renta.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/renta', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('renta');

  service.hooks(hooks);
};
