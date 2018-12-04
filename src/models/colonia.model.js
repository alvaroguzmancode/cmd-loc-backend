// colonia-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const colonia = new Schema({
    name: { type: String, required: true },
    municipio: {type: Schema.Types.ObjectId, ref: 'municipio'}
  }, {
    timestamps: true
  });

  return mongooseClient.model('colonia', colonia);
};
