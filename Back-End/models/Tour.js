const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tourSchema = new Schema({
    // photos: {},
    // video: {},
    photoURL: {
        type: String,
        default: 'https://mxcity.mx/wp-content/uploads/2016/02/mexico-city-.jpg'
    },
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