
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
  
  var login = function(req, res, next) {
    // first try to find the user by their email
    User.findOne({ email: req.body.email })
      .then(user => {
        // authenticate user
        passport.authenticate('local', {
          successRedirect: '/my-listings',
          failureRedirect: '/login',
          failureFlash: true
        })(req, res, next);
      })
      .catch(err => { console.log(err) });
  }
  
  // create user
  var create = function(req,res){
  
    const newUser = new User({
      name: name,
      email: email,
      password: password
    });
  
    bcrypt.genSalt(10, (err, salt) =>
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        // set password to hash
        newUser.password = hash;
        // save user
        newUser.save().catch(err => console.log(err));
    }))
  };
  
  module.exports.getAll = getAll;
  module.exports.getById = getById;
  module.exports.deleteById = deleteById;
  module.exports.updateById = updateById;
  module.exports.getByEmail = getByEmail;
  module.exports.create = create;