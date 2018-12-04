// municipio-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const municipio = new Schema({
    name: { type: String, required: true },
    estado: {type: Schema.Types.ObjectId, ref: 'estado'}
  }, {
    timestamps: true
  });

  return mongooseClient.model('municipio', municipio);
};
