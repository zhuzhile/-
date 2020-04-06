const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const {loginRouter, SECRET_KEY} = require('./routers/login.js');
mongoose.connect('mongodb://localhost/personal_blog', { useUnifiedTopology: true,useNewUrlParser: true });

app.use(express.json());
app.use(cors());
// app.use(jwt());
app.use(function(req, res, next){
    console.log(loginRouter)
    let userId = jwt.verify(req.headers.authorization, SECRET_KEY);
    console.log("userId", userId);
    next()
})

app.use('/login',loginRouter);


app.listen('30000',function(){
    console.log("what the hell");
});