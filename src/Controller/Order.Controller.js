const express = require("express")
const Router = express.Router()
const Order = require("../Model/Order.Model")
const Items = require("../Model/Items.Model")


Router.get("/summarize" , async(req , res) =>{
    try {
        const products = await Order.find().lean().exec()
        res.send(products)
    } catch (error) {
        res.status(201).send(error)
    }
})

Router.post("" , async(req , res) =>{
    try {
        const products = await Items.findOne({ code: req.body.code }).lean().exec()
       
        if(products){
      const data = await Order.create({code: req.body.code, qty: req.body.qty, unitPrice: products.price,name:products.name, totalAmt: products.price * req.body.qty})
        res.status(200).send(data)
        }else{
            res.status(201).send("No Data Found")
        }
    } catch (error) {
        res.status(201).send(error)
    }
})


module.exports = Router