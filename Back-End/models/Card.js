const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    photoURL: String,
    title: String,
    desc: String
})

module.exports = mongoose.model('Card', cardSchema)