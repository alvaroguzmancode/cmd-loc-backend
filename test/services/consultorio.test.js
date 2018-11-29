const app = require('../../src/app');

describe('\'consultorio\' service', () => {
  it('registered the service', () => {
    const service = app.service('consultorio');
    expect(service).toBeTruthy();
  });
});
