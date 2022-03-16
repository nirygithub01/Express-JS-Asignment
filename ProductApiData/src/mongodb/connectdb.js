const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/ProductApiData')
.then(() => {
    console.log('Server Connection set Up Successfully..')
})
.catch((err) => {
    console.log('Server connectivity set-up failed', err)
});
