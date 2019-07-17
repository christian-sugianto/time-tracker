const mongoose = require('mongoose');
const User = mongoose.model('user');

// get all users
var getAll = function(req,res){
  User.find(function(err, users) {
    if (!err) {
      res.send(users);
    }
    else {
      res.sendStatus(404);
    }
  });
};

var getById = function(req,res) {
  var userId = req.params.id;
  User.findById(userId, function(err, user){
    if (!err) {
      res.send(user);
    }
    else {
      res.sendStatus(404);
    }
  });
};

var deleteById = function(req,res) {
  var userId = req.params.id;
  User.deletedById(userId, function(err, user) {
    if(!err) {
      res.send(userId + "is deleted");
    }
    else{
      res.sendStatus(404);
    }
  });
};

var updateById = function(req, res) {
  var userId = req.params.id;
  User.findByIdAndUpdate(userId, req.body, function(err, user) {
    if(!err) {
      res.send(userId + "is updated");
    }
    else {
      res.sendStatus(404);
    }
  });
};

var getByEmail = function(req, res) {
  var userEmail = req.params.email;
  User.find({email: userEmail}, function(err, user) {
    if(!err) {
      res.send(user);
    }
    else {
      res.sendStatus(404);
    }
  });
};

// create user
var create = function(req,res){

  // TODO: npm Validator, sanitise

  const { name, email, password, password_cfm } = req.body;
  // check required fields
  if (!name || !email || !password || !password_cfm) {
    errors.push({ msg: 'Please fill in all the fields'});
  }

  // check password match
  if (password !== password_cfm) {
    errors.push({ msg: 'Passwords do not match'});
  }

  // check password length
  if (password.length < 8) {
    errors.push({ msg: 'Password must be at least 8 characters'});
  }
  
};

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.deleteById = deleteById;
module.exports.updateById = updateById;
module.exports.getByEmail = getByEmail;
