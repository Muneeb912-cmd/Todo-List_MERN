const express = require('express');
const router = express.Router();
const mongodb = require('./MongoDB/MongoDB');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/addTodo',authenticateUser, async (req, res) => {
    try {
        const userId = req.user._id;
        const todoData = req.body;
        todoData.userID = userId;
        const result = await mongodb.addTodo(todoData);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

router.post('/signup', async (req, res) => {
    try {
        const userData = req.body;
        const result = await mongodb.signup(userData);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await mongodb.getUserByEmail(email);

        if (user && await bcrypt.compare(password, user.password)) {            
            const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });          
            res.json({ message: 'Login successful', token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
});



function authenticateUser(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.user = { _id: decoded.userId }; 
    next();
  });
}

// Use the middleware to protect routes
router.get('/getTodos', authenticateUser, async (req, res) => {
  try {
    const userId = req.user._id;
    const todos = await mongodb.FindTodo(userId);
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

router.delete('/deleteTodo/:todoId', authenticateUser, async (req, res) => {
  try {
      const todoId = req.params.todoId;
      const userId = req.user._id;     
      const todo = await mongodb.getTodoById(todoId);    
      if (!todo || todo.userID !== userId) {
          return res.status(404).json({ message: 'Todo not found' });
      }

      const result = await mongodb.deleteTodo(todoId);
      res.json(result);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
  }
});

router.put('/updateTodo/:todoId', authenticateUser, async (req, res) => {
  try {
      const todoId = req.params.todoId;
      const userId = req.user._id;
      const updatedTodoData = req.body;

      const todo = await mongodb.getTodoById(todoId);

      if (!todo || todo.userID !== userId) {
          return res.status(404).json({ message: 'Todo not found' });
      }

      const result = await mongodb.updateTodo(todoId, updatedTodoData);
      res.json(result);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
  }
});


module.exports = router;
