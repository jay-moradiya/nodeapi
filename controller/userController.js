const mongoose = require('mongoose');
const { userSchema } = require('../model/userModel');

const user = mongoose.model('demo3data', userSchema)

// post user data
const postUser = (req, res) => {
    const postUserData = new user(req.body);
    postUserData.save((err, data) => {
        if (err) {
            res.send(err)
        }
        res.json(data)
    })
}

// get user data
const getUser = (req, res) => {
    user.find({}, (err, data) => {
        if (err) {
            res.send(err)
        }
        res.json(data)
    })
}

// get user data by Id
const getUserById = (req, res) => {
    user.find({ _id: req.params.userId }, (err, data) => {
        if (err) {
            res.send(err)
        }
        res.json(data)
    })
}

// put user data
const putUser = (req, res) => {
    user.findByIdAndUpdate({ _id: req.params.userId }, req.body, { new: true, useFindAndModify: false }, (err, data) => {
        if (err) {
            res.send(err)
        }
        res.json(data)
    })
}

// delete user data
const deleteUser = (req, res) => {
    user.findByIdAndDelete({ _id: req.params.userId }, (err, data) => {
        if (err) {
            res.send(err)
        }
        res.json(data)
    })
}

module.exports = { postUser, getUser, getUserById, putUser, deleteUser }