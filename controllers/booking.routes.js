const router = require('express').Router();
const Booking = require('../models/Booking');
const verifyToken = require('../middleware/verify-token');

//routes 

// Create

router.post('/', verifyToken, async(req,res)=>{
    try{
        console.log(req.user);
        req.body.bookedBy = req.user._id;
        const createdBooking = await Booking.create(req.body);
        res.status(201).json(createdBooking)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err);
    }
})

//All Bookings

router.get('/', async(req,res)=>{
    try{
        const allBookings = await Booking.find().populate('bookedBy flight');
        res.json(allBookings);
    }
    catch(err){
        console.log(err)
        res.status(500).json(err);
    }
})

//one Booking ID

router.get('/:id', async(req,res)=>{
    try{
        const foundBooking = await Booking.findById(req.params.id).populate('bookedBy flight');
        res.json(foundBooking);
    }
    catch(err){
        console.log(err)
        res.status(500).json(err);
    }
})

//Update Booking

router.put('/:id',verifyToken,async(req,res)=>{
    try{
        const foundBooking = await Booking.findById(req.params.id)
        if(!foundBooking.bookedBy.equals(req.user._id)){
            return res.status(403).json({err:'Unauthorized access to update the Booking'})
        }
        const bookingUpdate = await Booking.findByIdAndUpdate(req.params.id,req.body,{new: true})
        res.json(bookingUpdate);
    }
    catch(err){
        console.log(err)
        res.status(500).json(err);
    }
})

//Delete Booking

router.delete('/:id',verifyToken,async(req,res)=>{
    try{
        const foundBooking = await Booking.findById(req.params.id);

        if(!foundBooking.bookedBy.equals(req.user._id)){
            return res.status(403).json({err:'Unauthorized access to delete the Booking'})
        }
        const bookingDelete = await Booking.findByIdAndDelete(req.params.id);
        res.json(bookingDelete);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;