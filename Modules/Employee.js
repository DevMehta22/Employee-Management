const mongoose = require('mongoose')


const Employee = new mongoose.Schema({
    Emp_name:{
        type:String,
        // required:true
    },
    Emp_post:{
        type:String,
        required: true
    },
    Emp_ctc:{
        type:String,
        required: true
    },
    date_of_entry:{
        type:Date,
        default:Date.now()
    }

})

module.exports = mongoose.model("Emp_Data",Employee)