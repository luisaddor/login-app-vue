<template>
  <div id="app">
    <el-header class="header">
        Logo
    </el-header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  text-align: left;
  color: white;
  background-color: #409EFF;
  font-size: 24px;
  line-height: 60px;
  margin-bottom: 50px;
}
</style>
