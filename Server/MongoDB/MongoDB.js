const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

const uri = '';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function addTodo(todoData) {
    try {
        await client.connect();
        const db = client.db('todolist');
        const todosCollection = db.collection('todos');
        const result = await todosCollection.insertOne(todoData);
        return result;
    } finally {
        await client.close();
    }
}

async function getTodos(userId) {
    try {
      await client.connect();
      const db = client.db('todolist');
      const todosCollection = db.collection('todos');
  
      const todos = await todosCollection.find({ userId }).toArray();
      return todos;
    } finally {
      await client.close();
    }
  }

async function signup(userData) {
    try {
        await client.connect();
        const db = client.db('todolist');
        const usersCollection = db.collection('users');
       
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hashedPassword;

        const result = await usersCollection.insertOne(userData);
        return result;
    } finally {
        await client.close();
    }
}

async function login(email, password) {
    try {
        await client.connect();
        const db = client.db('todolist');
        const usersCollection = db.collection('users');

        const user = await usersCollection.findOne({ email });

        if (user && await bcrypt.compare(password, user.password)) {
            return true; // Successful login
        } else {
            return false; // Incorrect credentials
        }
    } finally {
        await client.close();
    }
}

// Other methods for todo operations

module.exports = { signup, login, addTodo, getTodos};
