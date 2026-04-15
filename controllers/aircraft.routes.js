const router = require('express').Router()
const Aircraft = require("../models/Aircraft")

router.post("/create", async (req,res) => {
    try {
        const createdAircraft = await Aircraft.create(req.body)
        res.status(201).json(createdFlight)
    } catch (error) {
        console.log("Error create Aircraft:", error)
        res.status(500).json({ error: "Failed to create Aircraft" })
    }
    
})

router.get("/",async(req,res)=>{
    try {
        const allAircrafts = await Aircraft.find()
        res.status(200).json(allAircrafts)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Failed to fetch Aircrafts" })
    }
})

router.get("/:id",async(req,res)=>{
    try {
        const aircraft = await Aircraft.findById(req.params.id)
        res.status(200).json(aircraft)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Failed to fetch Aircraft" })
    }
})

router.get("/:id/delete",async (req,res) => {
    try {
        const deletedAircraft = await Aircraft.findByIdAndDelete(req.params.id);
        res.status(200).json(`Deleted Aircraft model: ${deletedAircraft.model}`)

    } catch (error) {
        console.log("Error deleting Aircraft:", error)
        res.status(500).json({ error: "Failed to delete Aircraft" })
    }
    
})

module.exports = router;