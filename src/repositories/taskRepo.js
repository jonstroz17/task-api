import prisma from '../config/db.js';

export async function findAll({ completed }) {
    const conditions = {};
    
    if (completed !== null) {
        let value;

        if (completed === "true") value = true;
        else value = false;
        
        conditions.completed = value;
    }
    
    return prisma.task.findMany({ where: conditions });
}

// Create a new task
export async function create(data) {
    return prisma.task.create({
        data,
    });
}
