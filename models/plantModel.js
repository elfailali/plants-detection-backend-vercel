const mongoose = require("mongoose")

const plantsSchema = {
    id: String,
    nameID: String,
    name: String,
    type: String,
    description: String,
    treatement: String,
}
const Plant = mongoose.model("Plant", plantsSchema, "plants_disease");

module.exports = Plant