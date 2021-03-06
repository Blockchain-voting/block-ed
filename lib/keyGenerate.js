// const cryptico = require('cryptico');
const keypair = require('keypair');
const bcrypt = require('bcryptjs');
const bits = 2048;
const salt = 10;

function generateKeys(req,res,next) {
  const username = req.body.username;
  const password = bcrypt.hashSync(req.body.password, salt);
  req.body.password = password;

  let keys = keypair()

  req.body.publicKey = keys.public
  req.body.privateKey = keys.private
  next();
}

module.exports = {
  generateKeys,
}
