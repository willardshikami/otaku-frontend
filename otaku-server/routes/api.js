const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
  res.send('API');
});

//mongoose setup
const db = 'mongodb://shikami:shikami1@ds125211.mlab.com:25211/otaku-db';
mongoose.connect(db, err => {
  if(err){
    console.error('Error', err)
  }else{
    console.log('Connected to DB');
  }
});


//register user api
router.post('/register', (req, res) => {
  let userData = req.body;
  let user = new User(userData);

  user.save((error, registeredUser) => {
    if(error){
      console.log(error);
    }else{
      res.status(200).send(registeredUser);
    }
  });
});


//login user api
router.post('/login', (req, res) => {
  let userData = req.body;

  User.findOne({email: userData.email}, (error, user) => {
    if(error){
      console.log(error)
    }else
    if(!user){
      res.status(401).send('Invalid Email');
    }else
    if(user.password !== userData.password){
      res.status(401).send('Invalid Password');
    }else
      res.status(200).send(user);
  })
});

module.exports = router;