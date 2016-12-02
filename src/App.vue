<template>
  <div id="app">
    <router-view :route-data="routeData"></router-view>
  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      routeData: {}
    }
  },
  components: {

  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:1680px;
  height: 100%;
  margin: 0 auto;
}
</style>
