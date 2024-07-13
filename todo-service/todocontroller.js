const redis = require('redis');
const {v4: uuidv4} = require('uuid');

const client = redis.createClient({
    url: process.env.REDIS_URL
})

client.connect();

addTask = async(req,res)=>{
    try{
        const task = req.body.task;
        const taskId = uuidv4();
        await client.hSet('tasks',taskId,task);
        res.send({id: taskId, task});

    }catch(error){
        res.status(500).send(error.message);
    }
}

module.exports={addTask}