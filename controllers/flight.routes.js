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

        if (!flight) {
            return res.status(404).json({ err: "Flight not found" })
        }

        res.status(200).json(flight)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err: "Failed to fetch Flight" })
    }
})

router.delete("/delete/:id",async (req,res) => {
    try {
        const deletedFlight = await Flight.findByIdAndDelete(req.params.id);

        if (!deletedFlight) {
            return res.status(404).json({ err: "Flight not found" })
        }
        
        res.status(200).json(`Deleted Flight model: ${deletedFlight.model}`)

    } catch (err) {
        console.log("Error deleting Flight:", err)
        res.status(500).json({ err: "Failed to delete Flight" })
    }
})

router.put("/update/:id", async (req,res) => {
    try {
        const updatedFlight = await Flight.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (!updatedFlight) {
            return res.status(404).json({ err: "Flight not found" })
        }

        res.status(200).json(updatedFlight)
    } catch (err) {
        console.log("Error updating Flight:", err)
        res.status(500).json({ err: "Failed to update Flight" })
    }
})

module.exports = router;