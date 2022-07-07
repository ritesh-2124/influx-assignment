const express = require("express")
const App = express()
App.use(express.json())
const connect = require("./db")

const ItemController = require("./Controller/Items.Controller")
const OrderController = require("./Controller/Order.Controller")

App.use("/items" , ItemController)
App.use("/order" , OrderController)







App.listen( 8085, async()=>{
    try {
     await connect()
    console.log("server in running " , `${8085}`)   
    } catch (error) {
      console.log(error)  
    }
    
})