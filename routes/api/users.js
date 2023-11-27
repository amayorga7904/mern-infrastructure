const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// All paths start with '/api/users'
// GET /api/users/check-token
router.get('/check-token', usersCtrl.checkToken);
// POST /api/users (create a user - sign up)
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);

module.exports = router;