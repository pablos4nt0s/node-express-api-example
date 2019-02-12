const mongoose = require('mongoose');

const schemaOptions = {
  collection: 'postalcode',
  timestamps: true,
};

const PostalCodeSchema = new mongoose.Schema({
  rua: {
    type: String,
    required: true,
  },
  cep: {
    type: Number,
    required: true,
  },
  bairros: {
    type: String,
    required: true,
  },
  cidade: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
}, schemaOptions);

const PostalCode = mongoose.model('PostalCode', PostalCodeSchema);

module.exports = PostalCode;
