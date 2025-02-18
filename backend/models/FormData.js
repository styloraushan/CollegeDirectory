// models/FormData.js

const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['Student', 'Faculty', 'Administrator'], // Make sure "Faculty member" is spelled correctly
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    image: {
        type: String,
    },
}, { timestamps: true });

module.exports = mongoose.model('FormData', FormDataSchema);