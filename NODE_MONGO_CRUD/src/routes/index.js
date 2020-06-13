const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req,res)=>{
    const tasks = await Task.find();
    res.render('index', {
        tasks
    });
});

router.post('/add', async (req,res)=> {
    const task = new Task (req.body);
    await task.save();
    res.send('Recibido');
});

module.exports = router;
