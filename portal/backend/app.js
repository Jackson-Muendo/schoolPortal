const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors')
const bodyparser =require('body-parser');
const app = express();
const studentschema = require('./models/studentschema')
app.use(bodyparser.json())
app.use(cors());
//pCv72tSM3t3EWYFz
//mongoose.connect('mongodb+srv://jack:OLVuKqM91Eiio0Wy@cluster0.7ufhcmr.mongodb.net/schoolportal?retryWrites=true&w=majority&appName=Cluster0')
mongoose.connect('mongodb+srv://jackmwexh1225:pCv72tSM3t3EWYFz@cluster0.cke2djk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{console.log('connected to the database')})
.catch((error)=>{console.log(error)})

app.post('/api/addstudent',(req,res,next)=>{
    const student = new studentschema({
        name: req.body.name,
        nemis:req.body.nemis,
        admission:req.body.admission,
        studentclass: req.body.studentclass,
        dateofbirth:req.body.Date,
        parentsfullname: req.body.parentsfullname,
        contact: req.body.contact,
        marks: { Mathematics: null, Science: null, English: null, Intergrated: null,Social: null,Religious: null,Creative: null,Agriculture: null,PreTechnical: null,Kiswahili: null}
    })
    res.status(201).json({
        message : 'saved',
        student :student
    })
    student.save()
})

app.use('/api/view-students',(req,res,next)=>{
    const students = [
        { name: 'John Doe', studentclass: 'Grade 1', rollNumber: '001', marks: { Mathematics: null, Science: null, English: null, Intergrated: null,Social: null,Religious: null,Creative: null,Agriculture: null,PreTechnical: null,Kiswahili: null} },
        { name: 'Jane Smith', studentclass: 'Grade 2', rollNumber: '002', marks: { Mathematics: null, Science: null, English: null, Intergrated: null,Social: null,Religious: null,Creative: null,Agriculture: null,PreTechnical: null,Kiswahili: null}  },
        { name: 'Alice Johnson', studentclass: 'Grade 1', rollNumber: '003', marks: { Mathematics: null, Science: null, English: null, Intergrated: null,Social: null,Religious: null,Creative: null,Agriculture: null,PreTechnical: null,Kiswahili: null} },
        { name: 'Charlie Davis', studentclass: 'Grade 3', rollNumber: '005', marks: { Mathematics: null, Science: null, English: null, Intergrated: null,Social: null,Religious: null,Creative: null,Agriculture: null,PreTechnical: null,Kiswahili: null}  },
        { name: 'Bob Brown', studentclass: 'Grade 4', rollNumber: '004', marks: { Mathematics: null, Science: null, English: null, Intergrated: null,Social: null,Religious: null,Creative: null,Agriculture: null,PreTechnical: null,Kiswahili: null}  },
        { name: 'Bob Brown', studentclass: 'Grade 5', rollNumber: '004', marks: { Mathematics: null, Science: null, English: null, Intergrated: null,Social: null,Religious: null,Creative: null,Agriculture: null,PreTechnical: null,Kiswahili: null}  },
        { name: 'Bob Brown', studentclass: 'Grade 6', rollNumber: '004', marks: { Mathematics: null, Science: null, English: null, Intergrated: null,Social: null,Religious: null,Creative: null,Agriculture: null,PreTechnical: null,Kiswahili: null}  },
        { name: 'Bob Brown', studentclass: 'Grade 7', rollNumber: '004', marks: { Mathematics: null, Science: null, English: null, Intergrated: null,Social: null,Religious: null,Creative: null,Agriculture: null,PreTechnical: null,Kiswahili: null}  },
        { name: 'Bob Brown', studentclass: 'Grade 8', rollNumber: '004', marks: { Mathematics: null, Science: null, English: null, Intergrated: null,Social: null,Religious: null,Creative: null,Agriculture: null,PreTechnical: null,Kiswahili: null}  },
        
        // Add more students as needed
      ];
studentschema.find()
.then((documents)=>{
    console.log(documents)
    res.status(200).json({
        message: 'posts fetched succesfully',
        students : documents});
})  
      
// res.status(200).json({
//     message: 'posts fetched succesfully',
//     students:students
    
// })
console.log(students)
})



module.exports = app
