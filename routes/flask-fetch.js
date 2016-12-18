const data = require('express').Router();
const fetch = require('node-fetch');

const flaskFetch = require('../services/flask-fetch');

data.route('/elections/:id')
  .get((req,res,next) => {
    flaskFetch.getElectionData(req.params.id)
      .then(data => {
        res.json(data)
        next()
      })
      .catch(err => next(err))
  })

data.route('/elections')
  .get((req,res,next) => {
    flaskFetch.pyGetElect()
      .then(data => {
        res.json(data)
        next()
      })
      .catch(err => next(err))
  })
  .post((req,res,next) => {
    flaskFetch.pyPostElect(req.body)
      .then(election => {
        res.json(election)
        next()
      })
      .catch(err => next(err))
  })

data.route('/vote')
  .post((req,res,next) => {
    flaskFetch.pyVote(req.body)
      .then(data => {
        res.json(data)
        next()
      })
      .catch(err => next(err))
  })


module.exports = data
