const announcement = require('../repository/announcement');
const reference = require('../repository/reference');
const question = require('../repository/question');
const createAt = require('../function/createAt')
const { v4: uuidv4 } = require('uuid');
const createData = [];

module.exports = {
  findList: (req, res) => {
    const { id } = req.params
    const { page } = req.query
    if (id === 'reference') {
      if (page === '1') {
        return res.status(200).json(reference.slice(0, 10 - announcement.length));
      }
      if (page === '2') {
        return res.status(200).json(reference.slice(10 - announcement.length, (10 - announcement.length) + 10 * (page - 1)));
      }
      return res.status(200).json(reference.slice((10 - announcement.length) + 10 * (page - 2), (10 - announcement.length) + 10 * (page - 1)));
    }
    if (id === 'question') {
      if (page === '1') {
        return res.status(200).json(question.slice(0, 10 - announcement.length));
      }
      if (page === '2') {
        return res.status(200).json(question.slice(10 - announcement.length, (10 - announcement.length) + 10 * (page - 1)));
      }
      return res.status(200).json(question.slice((10 - announcement.length) + 10 * (page - 2), (10 - announcement.length) + 10 * (page - 1)));
    }
    if (id === 'announcement') return res.status(200).json(announcement);
    if (id === 'announcementLength') return res.status(200).json(announcement.length);
    if (id === 'referenceLength') return res.status(200).json(reference.length);
    if (id === 'questionLength') return res.status(200).json(question.length);
  },
  addList: (req, res) => {
    console.log(req.body)
    const { title, content, author } = req.body
    const data = {
      id: uuidv4(),
      title,
      content,
      author,
      createAt: createAt(),
      view: 0
    }
    createData.push(data)
    return res.status(200).json(data)
  }
};
