const { MongoClient,ObjectId  } = require('mongodb');
const bcrypt = require('bcrypt');
require('dotenv').config(); 

// Update the MONGODB_URI to point to your MongoDB Compass instance
const uri = "Your connection string";


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function addTodo(todoData) {
    let connection;
    try {
        connection = await client.connect();
        const db = connection.db('TodoList');
        const todosCollection = db.collection('Todos');
        const result = await todosCollection.insertOne(todoData);
        return result;
    } finally {
        if (connection) {
            connection.close();
        }
    }
}

async function FindTodo(userID) {
    let connection;
    try {
        connection = await client.connect();
        const db = connection.db('TodoList');
        const todosCollection = db.collection('Todos');
        const todos = await todosCollection.find({ userID }).toArray();
        return todos;
    } finally {
        if (connection) {
            connection.close();
        }
    }
}

async function getTodos(userId) {
    let connection;
    try {
        connection = await client.connect();
        const db = connection.db('TodoList');
        const todosCollection = db.collection('Todos');
        const todos = await todosCollection.toArray();
        return todos;
    } finally {
        if (connection) {
            connection.close();
        }
    }
}

async function signup(userData) {
    let connection;
    try {
        connection = await client.connect();
        const db = connection.db('TodoList');
        const usersCollection = db.collection('Users');       
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hashedPassword;
        const result = await usersCollection.insertOne(userData);
        return result;
    } finally {
        if (connection) {
            connection.close();
        }
    }
}

async function login(email, password) {
    let connection;
    try {
        connection = await client.connect();
        const db = connection.db('TodoList');
        const usersCollection = db.collection('Users');
        const user = await usersCollection.findOne({ email });
        if (user && await bcrypt.compare(password, user.password)) {
            return true; 
        } else {
            return false;
        }
    } finally {
        if (connection) {
            connection.close();
        }
    }
}

process.on('SIGINT', () => {
    client.close().then(() => {
        console.log('MongoDB connection closed.');
        process.exit(0);
    });
});


async function getUserByEmail(email) {
    let Connection;
    try {
        Connection=await client.connect();
        const db = client.db('TodoList');
        const usersCollection = db.collection('Users');
        const user = await usersCollection.findOne({ email });
        return user;
    } finally {
        Connection.close();
    }
}

async function getTodoById(todoId) {
    let Connection;
    try {
     
        Connection=await client.connect();
        const db = client.db('TodoList');
        const todosCollection = db.collection('Todos');      
        const objectId = new ObjectId(todoId);
        const todo = await todosCollection.findOne({ _id: objectId });       
        return todo;
    } catch (error) {
        console.error(error);
        throw error;
    }finally {
        Connection.close();
    }
}


async function deleteTodo(todoId) {
    console.log(todoId)
    let connection;
    try {
        connection = await client.connect();
        const db = connection.db('TodoList');
        const todosCollection = db.collection('Todos');
        const objectId = new ObjectId(todoId);
        const result = await todosCollection.deleteOne({ _id: objectId });
        return result;
    } finally {
        if (connection) {
            connection.close();
        }
    }
}

async function updateTodo(todoId, updatedTodoData) {
    let connection;
    try {
        connection = await client.connect();
        const db = connection.db('TodoList');
        const todosCollection = db.collection('Todos');
       
        const result = await todosCollection.updateOne({ _id: todoId }, { $set: updatedTodoData });
        return result;
    } finally {
        if (connection) {
            connection.close();
        }
    }
}


module.exports = { getTodoById,signup,deleteTodo,updateTodo, login, addTodo, getTodos,FindTodo,getUserByEmail };
