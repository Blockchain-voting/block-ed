const user = require('express').Router();
const bcrypt = require('bcryptjs');
const keys = require('../lib/keyGenerate');
const db = require('../models/user');

const sendJSONResp = (req,res) => res.json({login:true})

user.route('/login')
  // .get(sendJSONResp)
  .post(db.findByUsername, (req,res) => {
    if (bcrypt.compare(res.user.password, req.body.password)) {
      res.json(res.user);
    } else {
      res.json({password:false})
    }
  })
user.route('/signup')
  // setup lib file to create public/private_key
  // pass that to db.createUser
  .post(keys.generateKeys ,db.createUser, (req,res) => {
    res.json({keys:true})
  })


module.exports = user
