<style lang="less" scoped>
 @import './markdown-editor.less';
</style>


<template>
    <div class="editor">
        <Row class="margin-top-20">
            <Col span="4" offset='10' style="text-align:center">
                <span style="font-size:16px;font-weight:bold"><Icon @click="submitContent" type="ios-cloud-upload-outline" size='24' style="margin-right:20px"/>发布文章</span>
            </Col>
            <Col span="24" > 
                  <mavon-editor v-model = "markdownContent" @save = "getHTMLCode" :ishljs="true"  />
            </Col>
            <Col style="margin-top:20px" span="24">
                <Form ref="articleForm" :model="articleForm"  :label-width='100' :rules="articleRules" >
                    <FormItem label = "文章标题" prop="articleTitle">
                        <Input v-model="articleForm.articleTitle" style="width:200px"></Input>
                    </FormItem>
                    <FormItem label = "文章介绍" prop="articleDescription">
                        <Input  v-model= "articleForm.articleDescription" maxlength="200" show-word-limit type="textarea" placeholder="Enter something..." style="width: 300px"></Input>
                    </FormItem>
                    <FormItem label = "文章分类" prop="articleCollection">
                        <RadioGroup v-model="articleCollection" v-for = "(item, index) in tags" :key="index">
                            <Radio :label="item">
                                <span>{{item}}</span>
                            </Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="新增标签">
                        <!-- <span>新增标签</span> -->
                        <Input v-model="newTag" size='small' style="width:150px" @on-blur="clearRadio"></Input>
                    </FormItem>
                </Form>
            </Col>
            <!-- <Col span="24">
            </Col>
             -->
        </Row>
    </div>
</template>

<script>
import * as markdownEditorRequest from '@/apis/markdownEditor.js';
// import {getAllArticleInfo} from '@/apis/articleManagement.js';

export default {
    name: 'markdown-editor',
    data(){
        return{
            markdownContent:'',
            articleForm:{
                articleTitle:'',
                articleDescription:'',
                // articleCollection:''
            },
            tags:[],
            newTag:'',
            articleCollection:'',
            articleRules:{
                articleTitle:[
                    { required: true, message: '请填写文章标题', trigger: 'blur' } 
                ],
                articleDescription:[
                    { required: true, message: '请填写文章描述', trigger: 'blur' }
                ],
                // articleCollection:[
                //     { required: true,message: '请填写文章分类', trigger: 'blur'  } 
                // ],
            }
        }
    },
    methods:{
        // 暂时不用
        getHTMLCode(f, s){
            console.log(f, s);
        },

        // 清空radiogroup
        clearRadio(){
            if(this.newTag){
                this.articleCollection = '';
            }
        },

        // 发布文章
        submitContent(){
            
            if(!this.markdownContent){
                this.$Notice.warning({
                    title:'警告',
                    desc:'请填写文章内容后发布',
                    duration:3
                });
                return;
            }

            this.$refs['articleForm'].validate(valid => {
                if(valid){
                    console.log("valid", valid);
                    if(this.newTag){
                        this.articleCollection = '';
                    }
                    markdownEditorRequest.submitContent(this);
                }else{
                    this.$Notice.warning({
                        title:'警告',
                        duration:3,
                        render: h =>{
                            return h('div', [
                                h('span',{
                                    style:{
                                        color:'red'
                                    }
                                },'有关键值未填写')
                            ])
                        }
                    })
                }
            })
        }
    },
    created(){
        // 获取所有taginfo
        markdownEditorRequest.getAllTagInfo(this);
    }
};
</script>
