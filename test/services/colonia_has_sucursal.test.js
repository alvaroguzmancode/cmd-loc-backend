const app = require('../../src/app');

describe('\'colonia_has_sucursal\' service', () => {
  it('registered the service', () => {
    const service = app.service('colonia-has-sucursal');
    expect(service).toBeTruthy();
  });
});
