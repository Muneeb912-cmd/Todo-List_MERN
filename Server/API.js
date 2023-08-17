const express = require('express');
const router = express.Router();
const mongodb = require('./MongoDB/MongoDB');


router.post('/addTodo', async (req, res) => {
    try {
        const todoData = req.body;
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
        const result = await mongodb.login(email, password);
        if (result) {
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

router.get('/getTodos', async (req, res) => {
    try {
        const userId = req.user._id; // Assuming user information is available in req.user
        const todos = await mongodb.getTodos(userId);
        res.json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
});



module.exports = router;