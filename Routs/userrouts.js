const express = require('express')
const router = express.Router()

const { register,userLogin, logout } = require('../controllers/authcontrollers')


router.post('/signup',register)

router.post('/login',userLogin)

router.post('/logout',logout)


module.exports =router