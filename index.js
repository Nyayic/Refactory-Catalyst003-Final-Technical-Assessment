const express = require('express');
const pug = require('pug')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require("mongoose");
const router = express.Router(); 
const app = express();


app.set('view engine','pug')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


//mongoose 

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/student",{useNewUrlParser:true, useUnifiedTopology: true});

//routes
const studentRoutes = require('./routes/studentRoutes')
app.use('student_form', studentRoutes)

app.listen(3000, function(){
    console.log('listening on 3000') 
})