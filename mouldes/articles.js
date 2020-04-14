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
    }
})


const articleModel = mongoose.model('articles',articleSchema);

module.exports = articleModel;




