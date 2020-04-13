const express = require('express');
const mongoose = require('mongoose');
const userModel = require('../mouldes/users.js');
const router = express.Router();

router.post('/completeUserInfo',async function(req, res){
    // console.log(typeof res.headers.userId, res.headers.userId);
    // res.send({
    //     msg:'i got this',
    //     code:200
    // })
    console.log("res.headers", req.userId);
    let user = await userModel.findById(req.userId);
    console.log("user", user);
    let userInfo = await userModel.update({name:user.name},
        {'realname':req.body.realName,'postName':req.body.postName,'education':req.body.education,'companyName':req.body.companyName} );
    // console.log(userInfo);
    res.send({
        result:true,
        msg:'更新用户信息成功'
    })
    
})



module.exports =  router;