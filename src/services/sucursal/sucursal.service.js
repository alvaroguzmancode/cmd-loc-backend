// Initializes the `sucursal` service on path `/sucursal`
const createService = require('feathers-mongoose');
const createModel = require('../../models/sucursal.model');
const hooks = require('./sucursal.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sucursal', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('sucursal');

  service.hooks(hooks);
};
