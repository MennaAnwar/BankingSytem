const { default: mongoose } = require('mongoose');
const mongo = require('mongoose');
const Schema = mongo.Schema;

const historySchema = new Schema({
    from:String,
    cust1:String,
    to:String,
    cust2:String,
    amount:Number,
})

const History = mongoose.model('History',historySchema)

module.exports = History;