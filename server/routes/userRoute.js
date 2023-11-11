const express = require('express');
const router = express.Router();

// register
router.route('/register').post();

// login
router.route('/login').post();
