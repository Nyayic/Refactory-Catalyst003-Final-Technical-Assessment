
const bcryptjs = require('bcryptjs')
const mongoose = require('mongoose')

//schema db 
const studentSchema = new mongoose.Schema({
    sur_name:{
        type: String,
        required:'Please Enter Sur name'
    },
    given_name: {
        String,
        required: 'Please Enter given name'
    },
    gender: String,
    dob: String,
    country: String,
    email: {
        type: String,
        required: 'Please Enter Email'
    },
    skills: String,
    projects: String
});

studentSchema.add({email: {type: String, unique:true, required:'Please this email already exists'} })

studentSchema.statics.authenticate = async function(sur_name, given_name){
    const Student = await this.findOne({sur_name:sur_name})
    if(!student){
        throw new Error('Name is required')
    }
    else{
        return student;
    }
}

module.exports = mongoose.model("Student", studentSchema)