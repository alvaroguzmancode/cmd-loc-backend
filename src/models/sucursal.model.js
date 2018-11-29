// sucursal-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const sucursal = new Schema({

    colonia_id: {
      type:  Schema.Types.ObjectId,
      required: true,
      ref: 'colonia'
    },

    text: { type: String, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('sucursal', sucursal);
};