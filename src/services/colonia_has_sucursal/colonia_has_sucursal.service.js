// Initializes the `colonia_has_sucursal` service on path `/colonia-has-sucursal`
const createService = require('feathers-mongoose');
const createModel = require('../../models/colonia_has_sucursal.model');
const hooks = require('./colonia_has_sucursal.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/colonia-has-sucursal', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('colonia-has-sucursal');

  service.hooks(hooks);
};
