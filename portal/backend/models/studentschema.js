const mongoose = require('mongoose');

const studentschema = new mongoose.Schema({
    name: String,
    nemis: String,
    admission:String,
    studentclass: String,
    dateofbirth:Date,
    parentsfullname: String,
    contact: String,
    marks:Object,
})

const Student = mongoose.model('Student',studentschema)

module.exports = Student