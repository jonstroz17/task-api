import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
    const { completed = null } = req.query;
    const options = { completed };
    
    const tasks = await taskService.getAllTasks(options);
    res.json(tasks);
}

export async function createTask(req, res, next) {
    const { title, completed } = req.body;
    const task = await taskService.createTask({ title, completed });
    res.status(201).json(task);
}
