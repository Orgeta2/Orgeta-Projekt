//console.log("Server is running...");
const express = require('express');
const dotenv = require ('dotenv').config();
const port = process.env.PORT|| 8000;
const app = express();

app.use('/api/tasks', require('./routes/taskRouter'))
  

app.listen(port, () => console.log (`Server listening on ${port}`));