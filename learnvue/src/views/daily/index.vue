<template>
<div>
    <div v-for="item in stories">
      <div>名字：{{item.title}}</div>
      <div>描述：{{item.ga_prifix}}</div>
      <div>图片：<img :src="getImage(item.images)" alt="item.title"></div>
  </div>
</div>
  
</template>

<script>
    // import axios  from 'axios';
    export default {
        data(){
            return{
                stories:{

                }
            }
        },
        created(){
            this.getHttpHero()
        },
        methods:{
            getHero(){
                axios.get('/api/news/latest')
                .then(res=>{
                    // console.log(res);
                    this.stories = res.data.stories;
                    // console.log(this.hero);
                    // console.log(this.hero[0].hero_name)
                })
            },
            getHttpHero(){
                this.$http.get('/api/news/latest')
                .then(res=>{
                    // console.log(res);
                    this.stories = res.data.stories;
                    // console.log(this.hero);
                    // console.log(this.hero[0].hero_name)
                })
            },
            getImage(url){
                // 把现在的图片链接传进来，返回一个不受限制的路径
                if(url !== undefined){
                    return url[0].replace(/http\w{0,1}:\/\/p/g,'https://images.weserv.nl?url=p')
                }
            }
        }


    }
</script>


