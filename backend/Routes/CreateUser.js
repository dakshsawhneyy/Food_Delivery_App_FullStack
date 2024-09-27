const express = require("express")
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator')

const bcrypt = require("bcryptjs")
const jwt = require ("jsonwebtoken")
const jwtSecret = "MujrimHaiYehGadha"

//isko bnane ke baad index js ko btao app.use krke
router.post("/CreateUser",[                             //Using express-validator //It makes sure that the data coming into your application is valid and safe to use. This can help prevent errors and improve the security of your application.
    body('email', 'Enter a valid email').isEmail(),
    body('name', 'Enter a valid name').isLength({min: 3}),
    body('password', 'Password must be atleast 5 characters').isLength({min: 5})
] ,async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(5);       //Adding salt to password
    let secPassword = await bcrypt.hash(req.body.password, salt)       //Converting password to hash

    try {
        await User.create({             
            name:req.body.name,              // to write in thunderclient in json, use req.body.name
            email: req.body.email,
            password: secPassword,          // initially using req.body.password for debugging
            location: req.body.location
        })
        .then(res.json({success:true}))       //to get response as it is as request, use res.send(req.body) but use this format for not showing error
    } catch (error) {
        console.log(error)
        res.json({success: false})
    }
})

router.post("/LoginUser",[               //Using express-validator //It makes sure that the data coming into your application is valid and safe to use. This can help prevent errors and improve the security of your application.
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({min: 5})
] ,async (req,res) => {
    let email = req.body.email
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }
    try {
        //using fineOne to find in database email and password
        let userEmail = await User.findOne({email})
        if(!userEmail){
            return res.status(400).json({ errors: "Try Logging with correct credentials" });
        }

        const pswdCompare = await bcrypt.compare(req.body.password, userEmail.password)     //bcrypt.compare compares encrypted hash with original password
        if(!pswdCompare){
            return res.status(400).json({errors: "Incorrect Password"});        //initially use req.body.password !== userEmail.password when no bcrypt is used
        }

        const data = {
            user:{
                id: userEmail.id
            }
        }

        const authToken = jwt.sign(data, jwtSecret)

        return res.json ({success: true, authToken: authToken})        //sending authtoken 
    } catch (error) {
        console.log(error)
        res.json({success: false})
    }
})

module.exports = router;