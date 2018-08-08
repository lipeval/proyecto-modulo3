const passportLocalMongoose = require('passport-local-mongoose');
const Schema = require('mongoose').Schema;
const userSchema = new require('mongoose').Schema({
    username: String,
    photoURL: {
        type: String,
        default: 'https://mxcity.mx/wp-content/uploads/2016/02/mexico-city-.jpg'
    },
    email: String,
    profile:{
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
    role:{
        type: String,
        enum: ['USER', 'EDITOR', 'ADMIN'],
        default: 'ADMIN'
    },
    tours:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

userSchema.plugin(passportLocalMongoose, {usernameField:'email'})

module.exports = require('mongoose').model('User', userSchema);