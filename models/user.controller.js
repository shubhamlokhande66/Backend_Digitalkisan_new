const bcrypt = require("bcrypt");
const _ = require("lodash");
require("dotenv").config();
const { User } = require('../models/users.model');
const { Otp } = require('../models/opt.model');






    module.exports.signUp = async (req, res) => {

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


   




