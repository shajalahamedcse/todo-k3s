const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/',routes);

app.listen(port,()=>{
    console.log(`API Gatway is running at port: ${port}`)
})