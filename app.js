const express = require('express');
const morgan = require('morgan');
const bearerTokenParser = require('express-bearer-token');
const verifyToken = require('./modules/verifyToken');

const { port, secretKey } = require('./config');

const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use(bearerTokenParser());

app.use((req, res, next)=>{
    req.config = {        
        secretKey: secretKey
    }
    return next();
});

app.use('/api', verifyToken);

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const productsRouter = require('./routes/api/products');

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/api/products', productsRouter);

app.listen(port, ()=>{
    console.log(`port : ${port}`);
});