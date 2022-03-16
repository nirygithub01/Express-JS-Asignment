const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/StudentDataApp')
.then(() =>{
    console.log('Connection Establish successfully');
})
.catch((error) => {
    console.log(error);
});
