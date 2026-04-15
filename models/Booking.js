const mongoose = require('mongoose');


//Booking Schema
const bookingSchema = new mongoose.Schema({
    passengerName:{
        type:String,
        required:true
    },
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
    bookedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    mealPreference:{
        type:String,
        required:true,
        enum:['ChickenMeal','BeefMeal','VegetarianMeal','Snacks']
    },
    isRoundTrip:{
        type:Boolean,
        default: false
    },
    returnDate:{
        type:Date
    },

},  
{timestamps:true}   

);

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;