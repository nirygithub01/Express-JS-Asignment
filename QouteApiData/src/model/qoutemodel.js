const mongoose= require('mongoose');


const QouteDataSchema = new mongoose.Schema({

    qoute: {
        type: String,
        require:true,
        maxlength :  200
    },

    author: {
        type:String,
        require:true
    },
});

const QouteData = new mongoose.model('QouteData', QouteDataSchema);

module.exports = QouteData;