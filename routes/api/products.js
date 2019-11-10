const router = require('express').Router();

const products = [
    {
        name: 'D850',
        category: 'Camera',
        price: '2,910,000'
    },
    {
        name: 'D810',
        category: 'Camera',
        price: '1,870,000'
    }
];

router.get('/', (req, res, next) => {    
    console.log(req.user);
    res.json(products);    
});

module.exports = router;