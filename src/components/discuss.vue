/**
 * File: f:\vue\jswei.cn\src\components\discuss.vue
 * Created Date: 2018-01-05 2:10:25
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2018-01-05 2:26:22
 * -----
 * Copyright (c) 2018 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div>
        <section class="discuss">
            <h1>评论(0)</h1>
            <hr>
            <vue-editor id="editor" ref="editor"
                useCustomImageHandler
                @imageAdded="handleImageAdded" 
                :editorToolbar="customToolbar" 
                :disabled="disabled"
                placeholder="我会虚心接受您的建议">
            </vue-editor>
            <div class="float-left pt-2 pl-3 text-danger">
                *评论字数请控制在250字符以内
            </div>
            <b-button variant="danger" class="mt-2 p-2 float-right submit"
                :disabled="!has_content"
                @click="submit">
                提交(Ctrl+Enter)
            </b-button>
            <div class="clearfix"></div>
            <hr>
            <ul class="list-unstyled">
                <b-media tag="li" class="my-4">
                    <b-img slot="aside" rounded="circle" blank blank-color="#abc" width="64" alt="placeholder" />
                    <h5 class="mt-0 mb-1">匿名用户1</h5>
                    <span>2017-12-27</span>
                    <p>
                        受教了!!!!!
                    </p>
                </b-media>
                <hr>
                <b-media tag="li" class="my-4">
                    <b-img slot="aside" rounded="circle" blank blank-color="#cba" width="64" alt="placeholder" />
                    <h5 class="mt-0 mb-1">匿名用户2</h5>
                    <span>2017-12-27</span>
                    <p>
                        胡扯巴叨,哪有你说的那样子的!!!!!
                    </p>
                </b-media>
                <hr>
                <b-media tag="li" class="my-4">
                    <b-img slot="aside" rounded="circle" blank blank-color="#bac" width="64" alt="placeholder" />
                    <h5 class="mt-0 mb-1">匿名用户3</h5>
                    <span>2017-12-27</span>
                    <p>
                        我就是不想跟你说
                    </p>
                </b-media>
                <hr>
                <b-media tag="li" class="my-4">
                    <b-img slot="aside" rounded="circle" blank blank-color="#bac" width="64" alt="placeholder" />
                    <h5 class="mt-0 mb-1">匿名用户4</h5>
                    <span>2017-12-27</span>
                    <p>
                        有人用了吗?
                    </p>
                </b-media>
            </ul>
        </section>
    </div>
</template>

<script>
    import { VueEditor } from 'vue2-editor'
    export default {
        data(){
            return {
                disabled:false,
                has_content:false,
                customToolbar: [
                    ['bold', 'italic', 'underline'],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    ['blockquote', 'code-block'],
                ],
            }
        },
        components: {
            VueEditor
        },
        methods: {
            handleImageAdded: function(file, Editor, cursorLocation) {
                var formData = new FormData();
                formData.append('image', file);
                this.axios({
                    url: 'https://fakeapi.yoursite.com/images',
                    method: 'POST',
                    data: formData
                })
                .then((result) => {
                    let url = result.data.url;
                    Editor.insertEmbed(cursorLocation, 'image', url);
                })
                .catch((err) => {
                    console.log(err);
                })
            },
            submit(){
                if(!this.has_content){
                    this.$store.commit('LOADING_SHOW');
                }
            }
        },
        mounted(){
            let quill = this.$refs.editor.quill;
            quill.keyboard.addBinding({
                key:17,
                ctrlKey: true
            }, function() {
               let jsonContent = quill.getContents(),
               htmlContent = quill.container.firstChild.innerHTML;
            });
            quill.on('text-change', () =>{
                let lenght = quill.getLength();
                  this.has_content = lenght>1?true:false;
            });
        }
    }
</script>

<style lang="scss" scoped>
    .discuss{
        margin-top:20px;
        button{
            font-size:1.5rem;
            cursor: pointer;
        }
    }     
</style>