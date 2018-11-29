const sucursal = require('./sucursal/sucursal.service.js');
const consultorio = require('./consultorio/consultorio.service.js');
const renta = require('./renta/renta.service.js');
const horario = require('./horario/horario.service.js');
const colonia = require('./colonia/colonia.service.js');
const municipio = require('./municipio/municipio.service.js');
const estado = require('./estado/estado.service.js');
const coloniaHasSucursal = require('./colonia_has_sucursal/colonia_has_sucursal.service.js');
const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(sucursal);
  app.configure(consultorio);
  app.configure(renta);
  app.configure(horario);
  app.configure(colonia);
  app.configure(municipio);
  app.configure(estado);
  app.configure(coloniaHasSucursal);
  app.configure(users);
};
