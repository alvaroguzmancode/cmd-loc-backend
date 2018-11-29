const app = require('../../src/app');

describe('\'renta\' service', () => {
  it('registered the service', () => {
    const service = app.service('renta');
    expect(service).toBeTruthy();
  });
});
