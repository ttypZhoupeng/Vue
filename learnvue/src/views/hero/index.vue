<template>
<div>
    <div v-for="item in hero">
      <div>名字：{{item.hero_name}}</div>
      <div>描述：{{item.hero_desc}}</div>
      <div>图片：<img :src="item.img" alt="item.hero_title"></div>
  </div>
</div>
  
</template>

<script>
    import axios  from 'axios';
    export default {
        data(){
            return{
                hero:{

                }
            }
        },
        created(){
            this.getHero()
        },
        methods:{
            getHero(){
                axios.get('/v1/db.php')
                .then(res=>{
                    // console.log(res);
                    this.hero = res.data.hero;
                    // console.log(this.hero);
                    // console.log(this.hero[0].hero_name)
                })
            }
        }
    }
</script>


