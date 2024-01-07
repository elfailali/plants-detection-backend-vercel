const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")

app.use(cors());
app.use(express.json());

// connect to mongoose
mongoose.connect("mongodb+srv://simo:0000@cluster0.st09ezz.mongodb.net/plant_disease_detection")
    .then(() => {console.log("Connected to Database")})
    .catch((e)=>{console.log("DB: "+e)});

// require route
app.use("/", require("./routes/plantRoute"))

app.listen(3001, function() {
    console.log("express server is running on -p 3001")
})
