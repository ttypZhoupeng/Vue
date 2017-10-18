<template>
  <div id="app">
    <img src="./assets/logo.png">
    <a href="#/">首页</a>
    <a href="#/zp">周鹏</a>

    <router-link exact to="/">home主页</router-link>
    <router-link to="/zp">to周鹏</router-link>

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
</style>
