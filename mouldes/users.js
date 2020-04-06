const mongoose = require('mongoose')

const schema = mongoose.Schema;

const userSchema = new schema({
    name:{
        type:String
    },
    password:{
        type:String
    }
})

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;
