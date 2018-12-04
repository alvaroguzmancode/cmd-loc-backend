const { populate } = require('feathers-hooks-common');

const populateSchema = {
  include: {
    service: 'colonia',
    nameAs: 'colonia',
    parentField: 'colonia',
    childField: '_id',
    include: {
      service: 'municipio',
      nameAs: 'municipio',
      parentField: 'municipio',
      childField: '_id',
      include: {
        service: 'estado',
        nameAs: 'estado',
        parentField: 'estado',
        childField: '_id'
      }
    }
  }
}

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [
      populate({schema: populateSchema})
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
