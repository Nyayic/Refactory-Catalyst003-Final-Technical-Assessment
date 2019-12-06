const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

const router = express.Router(); 


router.get('/', (req, res) => {
    router.render('student_form')
    
})

// router.post("/", (req, res) => { 
//     const register = new Student(req.body);
//     Student.save()
//     .then(item => {
//         Student.find().then(
//              items =>{ 
//                  res.render('student_details', {students:items}); 
//              })
            
//        })
//       .catch(err => {
//         res.status(500).send("Unable to save to database");
//       });
// })


// app.post('/student_form',
//   passport.authenticate('local'),
//   function(req, res) {
   
//     res.redirect('/student_details/' + req.student.sur_name);
//   });

router.get('/', async(req, res) => {
    if(req.session.student){
        const items = await Student.find();
        res.render('student_details', {students: items})
    }
    else{
        console.log('Enter Student details')
    }
        
})

module.exports = router;