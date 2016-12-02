<template>
  <div>
    <my-header></my-header>
    <my-sidebar></my-sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from '../components/header'
import MySidebar from '../components/sidebar'

export default {
  name: 'index',
  components: {
    MyHeader,
    MySidebar
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
