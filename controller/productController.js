const productData = require('../repository/productData');

module.exports = {
    findAll: (req, res) => {
      return res.status(200).json(productData);  
    }
};
