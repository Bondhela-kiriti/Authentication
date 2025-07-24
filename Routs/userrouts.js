const express = require('express')
const router = express.Router()

const { register,userLogin } = require('../controllers/authcontrollers')


router.post('/signup',register)

router.post('/login',userLogin)


module.exports =router