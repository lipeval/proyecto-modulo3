const express = require('express');
const router = express.Router();
const Card = require('../models/Card');

router.get('/', (req, res) => {  
    Card.find()
        .then(cards => {
            return res.status(200).json(cards); //200: The request was fulfilled.                       
        })
        .catch(e => next(e))
    });


router.post('/',  (req, res) => {
    Card.create(req.body)
        .then(card => {
            return res.status(201).json(card)
        })
        .catch(err => {
            return res.status(500).json(err)
        })
                            
})


module.exports = router;