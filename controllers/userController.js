const fs = require('fs')

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))



exports.getAllUsers = (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'this route is not defined'
    })
}
exports.getUser = (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'this route is not defined'
    })
}
exports.createUser = (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'this route is not defined'
    })
}
exports.updateUser = (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'this route is not defined'
    })
}
exports.deleteUser = (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'this route is not defined'
    })
}