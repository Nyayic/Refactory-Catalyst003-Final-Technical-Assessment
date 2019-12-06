const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

const router = express.Router(); 
const  Student = require('../model/studentModel')


router.get('/', (req, res) => {
    res.render('student_form')
})





module.exports = router;