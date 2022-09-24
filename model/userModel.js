const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fName: {
        type: String,
        required: 'enter first name'
    },
    lName: {
        type: String,
        required: 'enter last name'
    },
    email: {
        type: String
    },
    password: {
        type: Number
    }
})

module.exports = { userSchema }