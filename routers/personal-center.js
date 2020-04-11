const express = require('express');
const mongoose = require('mongoose');
const userModel = require('../mouldes/users.js');
const router = express.Router();

router.post('/completeUserInfo',async function(req, res){
    // console.log(typeof res.headers.userId, res.headers.userId);
    let user = await userModel.find({});
    console.log("user", user);
    // let userInfo = await userModel.update({name:'behippo'},
    //     {'realname':req.body.realName,'postName':req.body.postName,'education':req.body.education,'companyName':req.body.companyName} );
    // console.log(userInfo);
    
})



module.exports =  router;