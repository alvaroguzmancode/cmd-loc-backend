const app = require('../../src/app');

describe('\'municipio\' service', () => {
  it('registered the service', () => {
    const service = app.service('municipio');
    expect(service).toBeTruthy();
  });
});
