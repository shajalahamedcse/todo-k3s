const express = require('express');
const dotenv = require('dotenv');
const todocontroller = require('./todocontroller')

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.post('/task',todocontroller.addTask);


app.listen(port,()=>{
    console.log(`Todo service is running at port: ${port}`)
})