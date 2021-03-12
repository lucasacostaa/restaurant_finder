const router = require("express").Router();
const Restaurant = require("../model/tables")

router.get("/", async(req, res) => {
    try {
        const allRestos = await Restaurant.findAll();

        res.send(allRestos)
    } catch (err) {
        console.error(err.message)
        return res.status(500).json("Server error")
    }
})

router.post("/", async (req, res) => {
    try {
        const {name, location, price_range} = req.body;

        const newResto = await Restaurant.create({name, location, price_range})
        res.send(newResto)
    } catch (err) {
        console.error(err.message)
        return res.status(500).json("Server error")
    }
})

router.get("/:id", async (req, res) => {
    try {
        const {id} = req.params;

        const resto = await Restaurant.findOne({where: {id}})
        res.send(resto)
    } catch (err) {
        console.error(err.message)
        return res.status(500).json("Server error")
    }
})

router.put("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {name, price_range, location} = req.body;

        const resto = await Restaurant.update({
            name, price_range, location
        }, {where: {id}})
        const updated = await Restaurant.findOne({where: {id}})
        res.send(updated)
    } catch (err) {
        console.error(err.message)
        return res.status(500).json("Server error")
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;

        const erasedResto = await Restaurant.findOne({where: {id}})
        const resto = await Restaurant.destroy({where: {id}})
        res.send(erasedResto)
    } catch (err) {
        console.error(err.message)
        return res.status(500).json("Server error")
    }
})

module.exports = router;