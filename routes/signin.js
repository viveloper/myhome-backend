const router = require('express').Router();
const jwt = require('jsonwebtoken');

const delay = 500;

router.get('/', (req, res) => {
  res.json({
    title: 'signin',
    desc: 'hello signin'
  });
});

router.post('/', (req, res) => {
  setTimeout(() => {
    if (req.body.email === 'viveloper@google.com' && req.body.password === '123456') {
      const { secretKey } = req.config;
      jwt.sign(
        {
          email: 'viveloper@google.com',
          username: 'viveloper'
        },
        secretKey,
        {
          expiresIn: '7d',
          issuer: 'velopert.com',
          subject: 'userInfo'
        },
        (err, token) => {
          if (err) {
            const reason = {
              message: 'token creation failure.'
            }
            res.status(401).json(reason);
          }
          else {
            const user = {
              email: 'viveloper@google.com',
              username: 'viveloper',
              token
            }
            res.json(user);
          }
        }
      )
    }
    else {
      const reason = {
        message: 'email or password is wrong.'
      }
      res.status(401).json(reason);
    }
  }, delay)
});

module.exports = router;