const router = require('express').Router();
const jwt = require('jsonwebtoken');
const delay = 500;

const users = [
    {
        email: 'casio@chova.com',
        username: 'casio',
        password: '123456'
    },
    {
        email: 'hayanagirl@chova.com',
        username: 'hayanagirl',
        password: '123456'
    }
];

router.get('/', (req, res, next) => {
    res.send(`hello from signin`);
});

router.post('/', (req, res, next) => {
    const { email, password } = req.body;
    const { secretKey } = req.config;

    setTimeout(() => {
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            jwt.sign(
                {
                    email: user.email,
                    username: user.username
                },
                secretKey,
                {
                    expiresIn: '7d',
                    issuer: 'velopert.com',
                    subject: 'userInfo'
                },
                (err, token) => {
                    if (!err) {                        
                        res.json({
                            email: user.email,
                            username: user.username,
                            token
                        });
                    }
                    else {
                        res.status(401).json({
                            message: 'token creation failure.'
                        });
                    }
                }
            )
        }
        else {
            res.status(401).json({
                message: 'email or password is wrong.'
            });
        }
    }, delay);
});

module.exports = router;