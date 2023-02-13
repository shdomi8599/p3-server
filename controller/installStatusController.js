const installStatusList = require('../repository/installStatusList');

module.exports = {
  findAll: (req, res) => {
    return res.status(200).json(installStatusList);
  }
};
