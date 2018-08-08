const passportLocalMongoose = require('passport-local-mongoose');
const Schema = require('mongoose').Schema;
const commentSchema = new require('mongoose').Schema({
    comments: String
})