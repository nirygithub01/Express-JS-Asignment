const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/QouteApiData')
.then(() => {
    console.log('Databadse connection Establish successfully...');
})
.catch((err) => {
  console.log('connection setup is failed', err);
});