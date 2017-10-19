<template>
  <div id="app">
    <img src="./assets/logo.png">
    <a href="#/">首页</a>
    <a href="#/zp">周鹏</a>

    <router-link exact to="/">home主页</router-link>
    <router-link to="/zp">to周鹏</router-link>
    <router-link to="/hero">王者荣耀</router-link>
    <router-link to="/daily">知乎日报</router-link>
    <router-link to="/increment">加减法</router-link> 
    <router-link to="/user/2/profile" tag="li">my profile</router-link>
    <router-link to="/user/3/posts" tag="li">my posts</router-link>
    
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active{
    color:red
}
</style>
