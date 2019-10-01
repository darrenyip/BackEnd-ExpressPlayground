const express = require('express')
const fs = require('fs')
const router = express.Router()

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))



const getAllUsers = (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'this route is not defined'
    })
}
const getUser = (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'this route is not defined'
    })
}
const createUser = (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'this route is not defined'
    })
}
const updateUser = (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'this route is not defined'
    })
}
const deleteUser = (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'this route is not defined'
    })
}

router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

router
    .route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)

module.exports = router