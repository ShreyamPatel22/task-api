import prisma from '../config/db.js';

export async function findAll(completedFilter) {
  return prisma.task.findMany({
    where: completedFilter === undefined ? undefined : { completed: completedFilter },
  });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
