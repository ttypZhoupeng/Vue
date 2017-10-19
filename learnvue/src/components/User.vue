<template>
  <div>
      <router-link :to="'/user/'+item.id" v-for="item in userList"></router-link>
      <div>
          <p>姓名：{{userInfo.username}}</p>
          <p>姓名：{{userInfo.hobby}}</p>
          <p>姓名：{{userInfo.sex}}</p>
      </div>
  </div>

</template>

<script>
let data = [
      {
          id:1,
          tip:'vip',
          username:'zp',
          sex:'男',
          hobby:'coding'
      },
      {
          id:2,
          tip:'vip',
          username:'ttyp',
          sex:'男',
          hobby:'女'
      },
      {
          id:3,
          tip:'common',
          username:'周鹏',
          sex:'男',
          hobby:'bug'
      },
  ]
export default {
  data(){
      return{
          userList:data,
          userInfo:''
      }
  },
  watch:{
      $route(){
          this.getData();
      }
  },
  created(){
      this.getData();
  },
  methods:{
      getData(){
          console.log(this.$route);
          let id = this.$route.params.userId;
          if(id){
              this.userInfo = this.userList.filter((item)=>{
                  return item.id == id;
              })[0]
          }
          console.log(this.userInfo)
      }
  }
}
</script>

