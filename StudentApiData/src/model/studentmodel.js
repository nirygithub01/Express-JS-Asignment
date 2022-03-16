const mongoose = require('mongoose');

const StudentDataSchema = new mongoose.Schema({
    
       studentFirstName:{
            type:String,
            require:true,
            maxlength:30
        },
        studentLastName:{
            type:String,
            require:true,
            maxlength:30
        },
    collegeName:{
         type:String,
         require:true,
         maxlength:100
    },

    course:{
        type:String,
        require:true
    },

    location:{
    type:String,
    require:true

    },
        state:{
            type:String,
            require:true,
            maxlength:40
        },
       country: {
        type:String,
        require:true,
        maxlength:40
      },

emailid:{
    type:String,
    require:true
},
moblie:{
    type:Number,
    requre:true,
},
admissionfee:{
    type:Number,

},


});

const StudentData = new mongoose.model('StudentData', StudentDataSchema ) ;


module.exports=StudentData;