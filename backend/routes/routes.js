const express = require('express');
const router = express.Router();

const userCont = require('../controllers/user-controller.js');
/* USER ROUTS */

// get all users
router.get('/user', userCont.getAll);
// get user by id
router.get('/user/id/:id', userCont.getById);
// delete user by id
router.delete('/user/id/:id', userCont.deleteById);
// update user by id
router.put('/user/id/:id', userCont.updateById);
// get user by email
router.get('/user/email/:email', userCont.getByEmail);
// create new user
router.post('/user', userCont.create);

module.exports = router;