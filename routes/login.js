const router = require('express').Router();
const jwt = require('jsonwebtoken');

const users = [
    {
        email: 'casio@naver.com',
        password: '123456'
    },
    {
        email: 'casio2@naver.com',
        password: '654321'
    }
];

router.get('/', (req, res, next) => {
    res.send(`hello from login`);
});

router.post('/', (req, res, next) => {
    
    const {email, password} = req.body;

    const { secretKey } = req.config;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        jwt.sign(
            {
                email: user.email,
            },
            secretKey,
            {
                expiresIn: '7d',
                issuer: 'velopert.com',
                subject: 'userInfo'
            },
            (err, token) => {
                res.json({
                    status: 'success',
                    token: token
                });
            }
        )        
    }
    else {
        res.json({
            status: 'fail',
            token: ''
        });
    }
});

module.exports = router;