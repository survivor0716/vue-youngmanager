<template>
  <div class="index">
    <el-row type="flex" class="row-bg">
        <el-col :span="24" class="header">
          <my-header></my-header>
        </el-col>
    </el-row>
    <el-row class="row-bg main">
      <el-col :span="4" class="sidebar">
        <my-sidebar></my-sidebar>
      </el-col>
      <el-col :span="20" class="views">
        <router-view></router-view>
      </el-col>
    </el-row>
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
.index {
  height: 100%;
  overflow-y: hidden;
}

.header {
  height: 60px;
  background-color: #324057;
}

.main {
  height: 100%;
  margin-top: 60px;
  top: -60px;

}

.sidebar {
  height: 100%;
  overflow-y: auto;
  background-color: #324057;
}
</style>
