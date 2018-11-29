const app = require('../../src/app');

describe('\'estado\' service', () => {
  it('registered the service', () => {
    const service = app.service('estado');
    expect(service).toBeTruthy();
  });
});
