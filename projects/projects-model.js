const db = require('../data/db-config.js')

module.exports = {
    getAllProjects,
    getProjectById,
    addProject
}

function getAllProjects() {
    return db('projects')
}

function getProjectById(id) {
    return db('projects').where('projects.id', id).first()
}

function addProject(projectData) {
    return db('projects').insert(projectData)
        .then(ids => {
            return getProjectById(ids[0])
        })
}





function getAllResources() {
    return db('resources')
}

function addResource(resource) {
    return db('resources').insert(resource)
}

function getAllTasks() {
    return db('tasks')
        .join('projects', 'tasks.id', 'projects.id')
        .select('tasks.description', 'tasks.notes', 'tasks.completed', 'projects.name', 'projects.description')
        .then(tasks => {
            tasks.map(task => {
                if (task.completed == 1) {
                    task.completed = true;
                } else {
                    task.completed = false;
                    return task
                }
            })
        })
}

function addTask(task) {
    return db('tasks').insert(task)
}
