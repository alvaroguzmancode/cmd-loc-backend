const app = require('../../src/app');

describe('\'colonia\' service', () => {
  it('registered the service', () => {
    const service = app.service('colonia');
    expect(service).toBeTruthy();
  });
});
