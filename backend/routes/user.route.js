const express = require("express")
require('dotenv').config()
const router = express.Router()
const userController = require('../controllers/user.controller')
router.post('/login',userController.loginUser)
router.post('/dashboard',userController.getDashboard)
router.post('/signup',userController.registerUser);
router.post('/fund',userController.addFund)
module.exports = router;