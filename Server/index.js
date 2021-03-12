const express = require("express");
const cors = require("cors");
require('dotenv').config()
const app = express();

const restaurantRouter = require("./routes/restaurantsRoutes")


app.use(cors());
app.use(express.json())

//Routes

app.use("/api/v1/restaurants", restaurantRouter)

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

module.exports = app; 