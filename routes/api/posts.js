const router = require('express').Router();
const jwt = require('jsonwebtoken');

const delay = 500;

router.get('/', (req, res) => {
  setTimeout(() => {
    const posts = [
      {
        title: 'Redux',
        body: 'slkflasjdlf slkkjflksa slkdjflaks asdlkjflaksdj aslkdjfldksa',
        author: 'casio',
        views: 10,
        recommendation: 3,
        createTime: new Date().toISOString(),
        updateTime: new Date().toISOString()
      },
      {
        title: 'React',
        body: 'slkflasjdlf slkkjflksa slkdjflaks asdlkjflaksdj aslkdjfldksa',
        author: 'casio',
        views: 10,
        recommendation: 3,
        createTime: new Date().toISOString(),
        updateTime: new Date().toISOString()
      },
      {
        title: 'NodeJs',
        body: 'slkflasjdlf slkkjflksa slkdjflaks asdlkjflaksdj aslkdjfldksa',
        author: 'casio',
        views: 10,
        recommendation: 3,
        createTime: new Date().toISOString(),
        updateTime: new Date().toISOString()
      },
    ];
    res.json(posts);
  }, delay);
});

module.exports = router;