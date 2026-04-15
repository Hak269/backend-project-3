const mongoose = require('mongoose');

const aircraftSchema = new mongoose.Schema({
    model:{
      type: String,
      required: true,
      unique: true,
    }
    ,
    features:{
        type: Array,
    }
})



module.exports = mongoose.model('Aircraft', aircraftSchema);