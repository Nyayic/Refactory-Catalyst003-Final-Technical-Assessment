
const bcryptjs = require('bcryptjs')
const mongoose = require('mongoose')

//schema db 
const studentSchema = new mongoose.Schema({
    sur_name:{
        type: String,
        required:'Please Enter sur name'
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


//authenticate input against database
// registerSchema.statics.authenticate = async function (user_name, password) {
//     const user = await this.findOne({ user_name: user_name })
//     if (!user) {
//         throw new Error('User not found.');
//     }
//     const match = await bcrypt.compare(password, user.password)
//     if (match) {
//         return user;
//     }
// }

module.exports = mongoose.model("Student", studentSchema)