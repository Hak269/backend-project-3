const router = require('express').Router()
const Flight = require("../models/Flight")

router.post("/create", async (req,res) => {
    try {
        const createdFlight = await Flight.create(req.body)
        res.status(201).json(createdFlight)
    } catch (err) {
        console.log("Error create Flight:", err)
        res.status(500).json({ err: "Failed to create Flight" })
    }
    
})

router.get("/",async(req,res)=>{
    try {
        const allFlights = await Flight.find()
        res.status(200).json(allFlights)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err: "Failed to fetch Flights" })
    }
})

router.get("/:id",async(req,res)=>{
    try {
        const flight = await Flight.findById(req.params.id)
        res.status(200).json(flight)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err: "Failed to fetch Flight" })
    }
})

router.delete("/:id",async (req,res) => {
    try {
        const deletedFlight = await Flight.findByIdAndDelete(req.params.id);
        res.status(200).json(`Deleted Flight: ${deletedFlight.airLine} to ${deletedFlight.destination}`);

    } catch (err) {
        console.log("Error deleting Flight:", err)
        res.status(500).json({ err: "Failed to delete Flight" })
    }
})

router.put("/:id/update", async (req,res) => {
    try {
        const updatedFlight = await Flight.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedFlight)
    } catch (err) {
        console.log("Error updating Flight:", err)
        res.status(500).json({ err: "Failed to update Flight" })
    }
})

module.exports = router;