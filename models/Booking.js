const mongoose = require('mongoose');


//Booking Schema
const bookingSchema = new mongoose.Schema({
    flight:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Flight',
        required: true
    },
    seat:{
        type:String,
        required: true
    },
    cabinClass:{
        type:String,
        required: true,
        enum:['FirstClass','BusinessClass','EconomyClass']
    },
    price:{
        type:Number,
        min:0,
        required: true
    },
    bookedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    mealPreference:{
        type:String,
        required:true,
        enum:['ChickenMeal','BeefMeal','VegetarianMeal','Snacks']
    }
},  
{timestamps:true}   

);

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;