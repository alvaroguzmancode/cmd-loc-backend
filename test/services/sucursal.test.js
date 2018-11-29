const app = require('../../src/app');

describe('\'sucursal\' service', () => {
  it('registered the service', () => {
    const service = app.service('sucursal');
    expect(service).toBeTruthy();
  });
});
