const express = require('express');
const app = express();
const usersRoute = express.Router();

let Users = require('../models/usersModel.js');
let Posts = require('../models/postModel.js');
let Comments = require('../models/commentsModel.js')

//creating a user
usersRoute.route('/signUp').post((req, res, next) => {
  Users.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

//creating a post
usersRoute.route('/home/post').post((req, res, next) => {
  Posts.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

//creating a comment
usersRoute.route('/home/comment').post((req, res, next) => {
  Comments.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

//updating a user
usersRoute.route('/update/email').put((req, res, next) => {
  Users.findOneAndUpdate(req.params.email, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Get single User
usersRoute.route('/signIn').get((req, res) => {
  Users.findOne(req.params.email, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = usersRoute;