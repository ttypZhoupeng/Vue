<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div id="main-nav">
      <router-link exact to="/">home主页</router-link>
      <router-link to="/zp">to周鹏</router-link>
      <router-link to="/hero">王者荣耀</router-link>
      <router-link to="/daily">知乎日报</router-link>
      <router-link to="/increment">加减法</router-link> 
      <!-- <router-link to="/user/2/profile" tag="li">my profile</router-link>
      <router-link to="/user/3/posts" tag="li">my posts</router-link>   -->
    </div>
    
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  #main-nav{
    .router-link-active{
        color:red
    }
  }
}

</style>
