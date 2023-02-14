const installStatusList = require('../repository/installStatusList');
const imgFilter = (name) => {
  const result = []
  let imgGroup = []
  let dataArr = installStatusList.filter(x => x.categori.includes(name))
  if (name === '전체목록') dataArr = installStatusList
  for (let data of dataArr) {
    imgGroup.push(data)
    if (imgGroup.length === 4) {
      result.push(imgGroup)
      imgGroup = []
    }
    if (dataArr.indexOf(data) === dataArr.length - 1 && imgGroup.length > 0) {
      result.push(imgGroup)
    }
  }
  return result
}

module.exports = {
  findAll: (req, res) => {
    return res.status(200).json(installStatusList);
  },
  findImg: (req, res) => {
    const { id } = req.params
    return res.status(200).json(imgFilter(id));
  }
};
