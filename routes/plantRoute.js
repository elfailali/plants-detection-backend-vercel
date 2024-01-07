const express = require("express");
const router = express.Router();
const Plant = require("../models/plantModel");
const Contact = require("../models/contactModel");

router.route("/plants").get((req, res) =>{
    try {
        Plant.find({})
        .then(foundPlants => res.json(foundPlants))
    } catch (error) {
        console.log(error)
    }
})

router.route("/contact").post((req, res) =>{
    try {
        const name= req.body.name;
        const email= req.body.email;
        const message= req.body.message;
        const newContact = new Contact({
            name,
            email,
            message
        })
        console.log("contact API Called")
        console.log(newContact)
        newContact.save()
        res.status(201).json({ message: "Contact information saved successfully" });

    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
