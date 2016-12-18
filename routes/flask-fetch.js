const data = require('express').Router();
const fetch = require('node-fetch');

const flaskFetch = require('../services/flask-fetch');

data.route('/')
  .get((req,res,next) => {
    flaskFetch.getHellor()
      .then(data => {
        res.json(data)
        next()
      })
      .catch(err => next(err))
  })


module.exports = data
