const index = require('express').Router();

const sendJSONResp = (req,res) => res.json({home:true})

index.route('/')
  .get(sendJSONResp)


module.exports = index
