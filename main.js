const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const personalCenterRouter = require('./routers/personal-center.js');
const {loginRouter, SECRET_KEY} = require('./routers/login.js');

mongoose.connect('mongodb://localhost/personal_blog', { useUnifiedTopology: true,useNewUrlParser: true });

app.use(express.json());
app.use(cors());
// app.use(jwt());
app.use(function(req, res, next){
    let userId = '';
    // console.log(req.headers.authorization)
    // if(req.headers.authorization != "null"){
    //     userId = jwt.verify(req.headers.authorization, SECRET_KEY);
    // }
    next(userId)
})

app.use('/login',loginRouter);
app.use('/personalCenter',personalCenterRouter);

app.listen('30000',function(){
    console.log("connected successfully");
});