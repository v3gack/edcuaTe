const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect("mongodb+srv://admin:bigpoppa@bdprueba.8r9lx.mongodb.net/materialsdb")
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
//require roote
app.use("/",require("./src/routes/noteRoute"));

app.listen(3001, function() {
    console.log("express server is running on port 3001")
})