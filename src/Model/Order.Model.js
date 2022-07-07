const mongoose = require("mongoose")



const OrderSchema = new mongoose.Schema({
    code: {type: Number, required: true}, 
    qty: {type: Number, required: true}, 
    name: {type: String, required: true},
    unitPrice: {type: Number, required: true}, 
    totalAmt: {type: Number, required: true}

},
{
    versionKey: false,
    timestamps: true
})


module.exports = mongoose.model("userCart", OrderSchema)
