const { v4: uuidv4 } = require('uuid');

const announcement = require('../repository/announcement');
const reference = require('../repository/reference');
let question = require('../repository/question');

const createAt = require('../function/createAt')

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
    const { title, content, author, password } = req.body
    const data = {
      id: uuidv4(),
      title,
      content,
      author,
      createAt: createAt(),
      password,
      view: 0
    }
    question.unshift(data)
    return res.status(201).json(data)
  },
  deleteList: (req, res) => {
    const { id } = req.params
    question = question.filter(x => x.id !== id)
    return res.status(204).json(id)
  },
  patchList: (req, res) => {
    const { id } = req.params
    //서버에서 조회수 업데이트용
    if (!isNaN(Object.keys(req.body)[0])) {
      question = question.map(x => {
        if (x.id === id) {
          x.view = Number(Object.keys(req.body)[0]);
        }
        return x
      })
      return res.status(204)
    }
    //글 수정 작업용
    const { title, content } = req.body
    question = question.map(x => {
      if (x.id === id) {
        x.title = title;
        x.content = content;
      }
      return x
    })

    return res.status(204)
  },
};
