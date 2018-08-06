const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');



router.get('/tours', (req, res) => {
  tours = this.tours  
    Tour.find(tours)
        .then(tours => {
            return res.status(200).json(tours); //200: The request was fulfilled.                       
        })
        .catch(e => next(e))
    });


router.post('/tours', (req, res, next) => {
  Tour.create(req.body)
  .then(tour=>{
    return res.status(201).json(tour)
  })
  .catch(e=>console.log(e))
    // const newTour = new Tour ({
    //   title: req.body.title,
    //   desc: req.body.desc,
    //   photos: req.body.photos || ''
    // });
  
  //   newTour.save()
  //   .then(newTour => {
  //     res.json({
  //       message: 'New Tour created!',
  //       id: newTour._id
  //     });
  //   })
  //   .catch(error => next(error))
  });

  router.delete('/tours/:id', (req, res, next) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  

  Tour.remove({ _id: req.params.id })
  .then(message => {
    return res.json({
      message: 'Tour has been removed!'
    });
  })
  .catch(error => next(error))
});

module.exports = router;