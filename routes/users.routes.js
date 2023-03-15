const router = require('express').Router();
const { signUp, verifyOtp,GetLogin,ParticularId} = require('../models/user.controller');

router.route('/signup')
    .post(signUp);


module.exports = router;