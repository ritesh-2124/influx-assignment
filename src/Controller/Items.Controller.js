const express = require("express")
const Router = express.Router()
const Items = require("../Model/Items.Model")


Router.get("" , async(req , res) =>{
    try {
        const products = await Items.find().lean().exec()
        res.send(products)
    } catch (error) {
        res.status(201).send(error)
    }
})

Router.post("" , async(req , res) =>{
    try {
        const products = await Items.create(req.body)
        res.status(200).send(products)
    } catch (error) {
        res.status(201).send(error)
    }
})


module.exports = Router