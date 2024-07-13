const express = require('express');
const router = express.Router();


router.get('/health-check',async (req, res)=>{
    res.status(200).json({'msg':'server is working'});
});

module.exports = router;