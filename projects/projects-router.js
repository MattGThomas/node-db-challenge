const express = require('express')

const Projects = require('./projects-model.js')

const router = express.Router()

router.get('/', (req, res) => {
    Projects.getAllProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(err => {
            res.status(500).json({
                message: 'there was an error getting the projects'
            })
        })
})

router.post('/', (req, res) => {
    const projectData = req.body

    Projects.addProject(projectData)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({
                message: 'there was an error adding the project'
            })
        })
})

router.get('/resources', (req, res) => {
    Projects.getAllResources()
        .then(resources => {
            res.json(resources)
        })
        .catch(err => {
            res.status(500).json({
                message: 'there was an error getting the resources'
            })
        })
})

router.post('/resources', (req, res) => {
    const resource = req.body

    Projects.addResource(resource)
        .then(ids => {
            res.status(201).json({
                created: ids[0]
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'there was an error adding the resource'
            })
        })
})

router.get('/tasks', (req, res) => {
    Projects.getAllTasks()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            res.status(500).json({
                message: 'there was an error getting the tasks'
            })
        })
})

router.post('/taks', (req, res) => {
    const task = req.body

    Projects.addTask(task)
        .then(ids => {
            res.status(201).json({
                crated: ids[0]
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'there was an error adding the task'
            })
        })
})

module.exports = router