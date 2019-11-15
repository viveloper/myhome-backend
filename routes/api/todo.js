var router = require('express').Router();
var Todo = require('../../models/todo.model');

/* Todo CRUD */

// GET All Todo List
router.get('/', (req, res, next) => {
  const author = req.query.author;  
  if(!author){
    // All Todo
    Todo.find()
    .then(todoList => res.json(todoList))
    .catch(err => res.status(400).json('Error: ' + err));
  }
  else {
    // filter Todo
    (async () => {          
      const todoList = await Todo.find({
        author: author
      });
      res.json(todoList);
    })();
  }    
});

// GET Todo List by author
router.get('/:author', (req, res, next) => {
  (async () => {
    const author = req.params.author;
    const todoList = await Todo.find({
      author: author
    });
    res.json(todoList);
  })();
});

// CREATE Todo
router.post('/', (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const completed = req.body.completed;

  const todo = new Todo({
    title,
    author,
    completed
  });
  (async () => {
    try {
      const savedTodo = await todo.save();
      res.status(201).json({
        success: true,
        message: 'Todo added.',
        todo: savedTodo
      });
    }
    catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'Failed to add todo.'
      });
    }
  })();
});

//  DELETE Todo
router.delete('/:id', (req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(() => res.json({
      success: true,
      message: 'Todo deleted.'
    }))
    .catch(error => {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'Failed to delete todo.'
      })
    });
});

// UPDATE Todo
router.put('/:id', (req, res) => {
  (async () => {
    try {
      const todo = await Todo.findById(req.params.id);
      todo.title = req.body.title;
      todo.author = req.body.author;
      todo.completed = req.body.completed;

      const updatedTodo = await todo.save();
      res.json({
        success: true,
        message: 'Todo updated.'
      });
    }
    catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'Failed to update todo.'
      });
    }
  })();
});

module.exports = router;