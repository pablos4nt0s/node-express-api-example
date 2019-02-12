const PostalCode = require('../models/postalcode.model');

const AddressService = {
  // Get addresses by postal code
  GetByPostalCode: async (postalcode) => {
    const result = await PostalCode.find({ cep: postalcode });
    return result;
  },

  // Get addresses by city
  GetByCity: async (city) => {
    const result = await PostalCode.find({ cidade: city });
    return result;
  },
};

module.exports = AddressService;
