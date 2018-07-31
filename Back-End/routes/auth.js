const router = require('express').Router();
const User = require('../models/User');
const passport = require('passport');
const Card = require('../models/Card');

//multer config
const multer = require('multer');
const upload = multer({dest: './public/assets'});


function isAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        console.log(req.user)
        return next()
    }else{
        res.json({message:"no tienes permiso"});
    }
}

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        res.redirect('/private')
    }else{
        next();
    }
}


router.get('/logout', (req,res,next)=>{
    req.logout();
    res.send('cerrado ??? ');

});

// router.get('/private', isAuthenticated, (req,res)=>{
//     // const admin = req.user.role === "ADMIN";
//     // res.json({message:"esto es privao"});
//     Card.find()
//     .then(cards=>res.json(cards))
//     .catch(e=>next(e))
// });



router.post('/login', passport.authenticate('local'), (req,res,next)=>{
    res.json(req.user)
});


router.get('/signup', (req,res)=>{
    res.render('auth/signup');
});

//1 crear la ruta post (recibe)
//2 necesitamos chear las contraseñas que coincidan
//3 crear al usuario en la db
// upload.single('photo')
router.post('/signup', (req,res,next)=>{
    // req.body.photoURL = '/assets/' + req.file.filename;
    User.register(req.body, req.body.password)
    .then(user=>{
        res.json(user)
    })
    .catch(e=>next(e));

})


module.exports = router;