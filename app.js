const express = require('express');
const morgan = require('morgan');
const bearerTokenParser = require('express-bearer-token');
const verifyToken = require('./modules/verifyToken');
const cors = require('cors');

const { port, secretKey } = require('./config');

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(bearerTokenParser());

app.use((req, res, next) => {
    req.config = {
        secretKey: secretKey
    }
    return next();
});

app.use('/api', verifyToken);

const indexRouter = require('./routes/index');
const signinRouter = require('./routes/signin');
const postsRouter = require('./routes/api/posts');

app.use('/', indexRouter);
app.use('/signin', signinRouter);
app.use('/api/posts', postsRouter);

app.listen(port, () => {
    console.log(`port : ${port}`);
});