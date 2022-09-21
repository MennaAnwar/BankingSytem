const { default: mongoose } = require('mongoose');
const mongo = require('mongoose');
const Schema = mongo.Schema;

const customersSchema = new Schema({
    name:String,
    email:String,
    balance:Number,
    image:String,
})

const Customers = mongoose.model('Customers',customersSchema)

module.exports = Customers;