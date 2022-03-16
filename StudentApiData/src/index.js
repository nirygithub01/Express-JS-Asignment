/**Import Of Express File */
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

/**Import path */

const path= require('path');

/**Import of other file */
const mongodb = require ('./mongodb/connect');
const StudentData = require('./model/studentmodel');

/**MiddleWare connection establish */
app.use(express.json());
//app.use(express.urlencoded({extended:false}))


app.get('/', (req, res) => {
    res.send('Hello express Js world');
});

app.post('/student', async(req, res) => {
    
    try{
        const studentdata= new StudentData({

            studentFirstName:req.body.studentFirstName, // + ' ' + req.body.studentLastName,
            studentLastName:req.body.studentLastName,
            course:req.body.course,
            collegeName:req.body.collegeName,
            location:req.body.location,
            state:req.body.state,
            country:req.body.country,
            mobile :req.body.mobile,
            emailid:req.body.emailid
        });

        const student =await studentdata.save();
        res.status(201).send(student);
        //console.log(student);
    }
    catch(error){
        res.status(404).send("Page Not Found !")
    }

   //res.send('Hello express Js world');
  
   /** 
   res.json( student=[
    {
    studentFirstName:"Rakesh",
    studentLastName:"Kumar"
   },
   {
       collegeName:"IIT"
   },
   {
       location:"Bombay",
   },

]);*/
});
app.get('/getStudentDetail', async(req, res) => {
    
    try{
        const name = req.params.name;
        const findData = await StudentData.find({_name})
        res.status(201).send(findData);
    }catch(err) {
        res.status(404).send("Not found")
    }
});

/**Update of single data */

app.put('/updateStudentData/:_id', async(req, res) => {
    try {
        const _id= req.params.id;
         
        const updatestudentdata  = await StudentData.Update (_id, req.body, {new:true})
        res.status(201).send(updatestudentdata);
    }catch(err) {
        res.status(500).send(err)
    }
});

app.put('/updateStudentData/:_id', async(req, res) => {
    try {
        const _id= req.params.id;
         
        const updatestudentdata  = await StudentData.findByIdAndUpdate (_id, req.body, {new:true})
        res.status(201).send(updatestudentdata);
    }catch(err) {
        res.status(500).send(err)
    }
});




/**Delete Request */

app.delete('/updateStudentData/:_id', async(req, res) => {
    try {
        const _id= req.params.id;
         
        const deletestudentdata  = await StudentData.Update (_id);
       res.status(201).send(deletestudentdata);
    }catch(err) {
        res.status(500).send(err)
    }
});
app.listen(port, (req, res) => {
 //res.send (`Server is running on this port ${port}`);
 console.log(`Server is running on this port ${port}`);

});