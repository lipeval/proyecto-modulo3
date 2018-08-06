const router = require('express').Router();
const User = require('../models/User');
const passport = require('passport');
const Card = require('../models/Tour');

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
    console.log(logout)
    req.logout();
    res.send('cerrado ??? ');

});

router.get('/private', isAuthenticated, (req,res)=>{
    const admin = req.user.role === "ADMIN";
    // res.json({message:"Privado"});
    Tour.find()
    .then(tours=>res.json(tours))
    .catch(e=>next(e))
});



router.post('/login', passport.authenticate('local'),(req,res,next) =>{
    console.log('yass')
    res.json(req.user)
});



//1 crear la ruta post (recibe)
//2 necesitamos chear las contraseñas que coincidan
//3 crear al usuario en la db
// upload.single('photo')
router.post('/signup', (req,res,next)=>{
    User.register(req.body, req.body.password)
    .then(user=>{
        res.json(user)
    })
    .catch(e=>next(e));

})


module.exports = router;