const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const api=require('./API')
const app = express();


app.use(cors()); 
app.use(bodyParser.json());

//Routings
app.post('/api/addTodo', api.addTodo);
app.post('/api/signup', api.signup);
app.post('/api/login', api.login);
app.post('/api/getTodos', api.getTodos);

// Server Port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

