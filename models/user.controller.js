const bcrypt = require("bcrypt");
const _ = require("lodash");
require("dotenv").config();
const { User } = require('../models/users.model');
const { Otp } = require('../models/opt.model');






    module.exports.signUp = async (req, res) => {

        res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

        const user = await User.findOne({
            number: req.body.number
        });
        // if (user) return res.status(400).send("User already registered!");
        const OTP = Math.floor(100000 + Math.random() * 900000);
        const number = req.body.number;
       
        const otp = new Otp({ number: number, otp: OTP });
          console.log("otp",otp)
        const salt = await bcrypt.genSalt(10)
        otp.otp = await bcrypt.hash(otp.otp, salt);
        const result = await otp.save();
    
        console.log("Number", req.body.number)
    
      
    
        return res.status(200).send("Otp send successfully!" ,OTP);
    }


   




