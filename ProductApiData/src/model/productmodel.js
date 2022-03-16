const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({

    product: {
        type: String,
        require:true
    },
    price:{
        type:Number ,
        reuire:true
    }
});


const ProductData = new mongoose.model('ProductData', ProductSchema);

module.exports= ProductData;