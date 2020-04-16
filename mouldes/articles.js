const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title:{
        type:String
    },
    content:{
        type:String
    },
    description:{
        type:String
    },
    tag:{
        type:String
    },
    createTime:{
        type:Date
    }
})


const articleModel = mongoose.model('articles',articleSchema);

module.exports = articleModel;




