const router = require('express').Router();
const delay = 500;

const posts = [
    {
        id: 1,
        title: 'Redux',
        body: 'slkflasjdlf slkkjflksa slkdjflaks asdlkjflaksdj aslkdjfldksa',
        author: 'casio',
        category: 'programming',
        views: 10,
        recommendation: 3,
        createTime: new Date().toISOString(),
        updateTime: new Date().toISOString()
    },
    {
        id: 2,
        title: 'React',
        body: 'slkflasjdlf slkkjflksa slkdjflaks asdlkjflaksdj aslkdjfldksa',
        author: 'casio',
        category: 'programming',
        views: 10,
        recommendation: 3,
        createTime: new Date().toISOString(),
        updateTime: new Date().toISOString()
    },
    {
        id: 3,
        title: 'NodeJs',
        body: 'slkflasjdlf slkkjflksa slkdjflaks asdlkjflaksdj aslkdjfldksa',
        author: 'casio',
        category: 'programming',
        views: 10,
        recommendation: 3,
        createTime: new Date().toISOString(),
        updateTime: new Date().toISOString()
    },
    {
        id: 4,
        title: 'D850',
        body: 'slkflasjdlf slkkjflksa slkdjflaks asdlkjflaksdj aslkdjfldksa',
        author: 'casio',
        category: 'free',
        views: 10,
        recommendation: 3,
        createTime: new Date().toISOString(),
        updateTime: new Date().toISOString()
    },
    {
        id: 5,
        title: '58mm f/1.4',
        body: 'slkflasjdlf slkkjflksa slkdjflaks asdlkjflaksdj aslkdjfldksa',
        author: 'casio',
        category: 'free',
        views: 10,
        recommendation: 3,
        createTime: new Date().toISOString(),
        updateTime: new Date().toISOString()
    },
];

router.get('/:category', (req, res, next) => {
    setTimeout(() => {
        console.log(req.user);
        console.log(req.params.category);
        const filteredPosts = posts.filter(post => post.category === req.params.category)
        res.json(filteredPosts);
    }, delay);
});

module.exports = router;