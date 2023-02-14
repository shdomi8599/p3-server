const photoCategori = require('../repository/photoCategori');
const installStatusList = require('../repository/installStatusList');

const categoriCount = (name) => {
  if (name === '전체목록') {
    return installStatusList.length
  }
  return installStatusList.filter(x => x.categori.includes(name)).length
}

module.exports = {
  findAll: (req, res) => {
    return res.status(200).json(photoCategori);
  },
  findCount: (req, res) => {
    const { id } = req.params;
    return res.status(200).json(categoriCount(id));
  }
};
