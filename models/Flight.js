const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    airLine:{
        type:String,
        required: true
    },
    aircraft:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Aircraft"
        
    },
    airport: String,
    availableseats:{
        type:Array,
    },
    destination:{
        type:String,
        required:true
    },
    departure:{
        type:String,
        required: true
    },
    arrival:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        min:0,
        required:true
    }
})

module.exports = mongoose.model('Flight', flightSchema);