const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tourSchema = new Schema({
    // photos: {},
    // video: {},
    title: String,
    place: String,
    date: String,
    desc: {
        type:String,
        default:"chalalala"
    }
})

const Tour = mongoose.model('Tour', tourSchema)
module.exports = Tour