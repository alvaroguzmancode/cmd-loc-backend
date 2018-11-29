const app = require('../../src/app');

describe('\'horario\' service', () => {
  it('registered the service', () => {
    const service = app.service('horario');
    expect(service).toBeTruthy();
  });
});
