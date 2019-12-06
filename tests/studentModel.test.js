const mongoose = require('mongoose')
const Student = require('../models/studentModel')

// create test suit
describe('student model test', () => {
        beforeAll(async () => {
            try{
                await mongoose.connect('mongodb://localhost:27017/test-student', {useNewUrlParser: true, useUnifiedTopology: true})
                await Student.deleteMany({})
            }
            catch (err) {
                console.log('database error', +err)
            }
        })
        test('should be able to save to the database', async() => {
            const student = new Student({'sur_name':'Fanny'})
            await student.save() //async & await

            const items = await Student.find({}) 
             expect(items.length).toBe(1)
           
        })
        
        afterEach(async () => {
            try{
                await Student.deleteMany({})
            }
            catch (err) {
                console.log('database error', +err)
            }
            

        })

})