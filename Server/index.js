const express = require("express");
const cors = require("cors");
require('dotenv').config()
const app = express();
const Restaurant = require("./model/tables")

app.use(cors());
app.use(express.json())

//Routes


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

module.exports = app; 