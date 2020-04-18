const express = require('express');
const router = express.Router();
const articleModel = require('../mouldes/articles.js');


router.post('/submitContent',  async function(req, res){
    // console.log(req);
    const article = new articleModel();
    article.title = req.body.articleTitle;
    article.content = req.body.articleContent;
    article.tag = req.body.tag;
    article.description = req.body.articleDescription;
    article.createTime = new Date();
    let saveInfo = await article.save();
    // console.log('---saveInfo', saveInfo);
    // console.log()
    if(saveInfo){
        res.send({
            result:true,
            msg:'发布成功'
        })
    }else{
        res.send({
            result:false,
            msg:'发布失败'
        })
    }
    
})

router.get('/getAllArticleInfo', async function(req, res){
    // console.log('articles');
    let articles =await articleModel.find();
    // console.log("articles", articles);
    res.send({
        result: true,
        articleInfo: articles
    })

})

router.get('/getSplitArticleInfo',async function(req, res){
    // console.log(req.query);

    let article = await articleModel.find().skip((req.query.current-1)*req.query.pageSize).limit(req.query.pageSize*1);
    // console.log(article);
    res.send({
        result: true,
        articleInfo: article
    })

})

router.get('/updateArticleList', async function(req, res){
    let articles = await articleModel.find({tag:req.query.tag});
    res.send({
        result: true,
        articleInfo: articles
    })
})

module.exports = router;

