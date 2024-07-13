const { axios } = require('axios');
const express = require('express');
const router = express.Router();
const TODO_SERVICE_URL = process.env.TODO_SERVICE_URL;

router.get('/health-check',async (req, res)=>{
    res.status(200).json({'msg':'server is working'});
});

router.post('/api/v1/task',async (req,res)=>{
    try{
        const response = await axios.post(`${TODO_SERVICE_URL}/task`,req.body);
        res.json(response.data);
    }catch(error){
        res.status(5000).send(error.message);
    }
});

module.exports = router;