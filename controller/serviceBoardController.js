const announcement = require('../repository/announcement');
const reference = require('../repository/reference');
const question = require('../repository/question');

module.exports = {
  findList: (req, res) => {
    const { id } = req.params
    if (id === 'announcement') return res.status(200).json(announcement);
    if (id === 'reference') return res.status(200).json(reference);
    if (id === 'question') return res.status(200).json(question);
  }
};
